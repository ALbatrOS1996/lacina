/* ============================================================
   STAN I MOTYWACJA: XP, poziomy (cursus honorum), seria dni,
   cel dzienny, odznaki, pochwały, konfetti, dźwięk
   ============================================================ */
LAT.G = (function () {
  'use strict';
  var KEY = 'lacina_historyka_v1';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }

  /* ---------- Stan ---------- */
  var S = {
    lessons: {}, texts: {}, srs: {}, newDay: { d: 0, n: 0 }, imgs: {}, traps: {}, drills: { ok: 0, all: 0 }, chrono: { ok: 0, all: 0 },
    settings: { newPerDay: 12, cal: 'auto', theme: '', sound: true, plLabels: true, goal: 50 },
    days: [], xp: 0, xpLog: {}, badges: {}, goalDays: [], abbrOk: 0, partPerfect: 0, perfectLessons: 0, bestCombo: 0, seenIntro: false
  };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) { var o = JSON.parse(raw); Object.keys(o).forEach(function (k) { if (k === 'settings') Object.keys(o.settings).forEach(function (s) { S.settings[s] = o.settings[s]; }); else S[k] = o[k]; }); }
  } catch (e) { }
  function save() {
    var t = today(); if (S.days.indexOf(t) < 0) { S.days.push(t); S.days = S.days.slice(-500); }
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { }
  }
  function streak() { var t = today(), n = 0; if (S.days.indexOf(t) < 0) t--; while (S.days.indexOf(t - n) >= 0) n++; return n; }
  function xpToday() { return S.xpLog[today()] || 0; }

  /* ---------- Poziomy ---------- */
  var LEVELS = [
    [0, 'Tiro', 'nowicjusz'], [100, 'Discipulus', 'uczeń'], [300, 'Scholaris', 'żak'], [600, 'Baccalaureus', 'bakałarz'],
    [1000, 'Scriptor', 'skryba'], [1600, 'Notarius', 'notariusz'], [2400, 'Cancellarius', 'kanclerz'], [3500, 'Magister', 'mistrz'],
    [5000, 'Doctor', 'doktor'], [7500, 'Doctor egregius', 'znakomity doktor']
  ];
  function level(xp) {
    if (xp == null) xp = S.xp;
    var i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
    var from = LEVELS[i][0], to = LEVELS[i + 1] ? LEVELS[i + 1][0] : from + 3000;
    return { i: i, n: i + 1, name: LEVELS[i][1], pl: LEVELS[i][2], from: from, to: to, pct: Math.min(1, (xp - from) / (to - from)), next: LEVELS[i + 1] };
  }

  /* ---------- Odznaki ---------- */
  function cnt(o, f) { return Object.keys(o).filter(function (k) { return f ? f(o[k], k) : true; }).length; }
  var BADGES = [
    ['prima', 'Prima lectio', 'Pierwsza ukończona lekcja', 'cap', function () { return cnt(S.lessons, function (v, k) { return /^l/.test(k) && v.done; }) >= 1; }],
    ['lector', 'Lector', 'Pierwszy przeczytany tekst źródłowy', 'scroll', function () { return cnt(S.texts, function (v) { return v.done; }) >= 1; }],
    ['triduum', 'Triduum', '3 dni nauki z rzędu', 'flame', function () { return streak() >= 3; }],
    ['hebdomas', 'Hebdomas', '7 dni nauki z rzędu', 'flame', function () { return streak() >= 7; }],
    ['mensis', 'Mensis', '30 dni nauki z rzędu', 'crown', function () { return streak() >= 30; }],
    ['verba50', 'Verba L', '50 słów w powtórkach', 'cards', function () { return cnt(S.srs, function (v) { return v.reps > 0; }) >= 50; }],
    ['verba150', 'Verba CL', '150 słów w powtórkach', 'cards', function () { return cnt(S.srs, function (v) { return v.reps > 0; }) >= 150; }],
    ['perfectus', 'Sine errore', 'Lekcja bez jednego błędu', 'star', function () { return S.perfectLessons >= 1; }],
    ['computista', 'Computista', '10 poprawnie ustalonych dat', 'calendar', function () { return S.chrono.ok >= 10; }],
    ['notarius', 'Notarius', 'Bezbłędny podział dokumentu', 'stamp', function () { return S.partPerfect >= 1; }],
    ['epigraphicus', 'Epigraphicus', '8 zdjęć z napisami przerobionych', 'landmark', function () { return cnt(S.imgs) >= 8; }],
    ['criticus', 'Criticus', '10 pułapek tłumacza rozbrojonych', 'alert', function () { return cnt(S.traps, function (v) { return v; }) >= 10; }],
    ['abbreviator', 'Abbreviator', '15 skrótów rozwiniętych poprawnie', 'feather', function () { return S.abbrOk >= 15; }],
    ['series', 'Series X', '10 poprawnych odpowiedzi z rzędu', 'zap', function () { return S.bestCombo >= 10; }],
    ['diligens', 'Diligens', 'Cel dzienny osiągnięty 5 razy', 'target', function () { return S.goalDays.length >= 5; }],
    ['sine', 'Sine auxilio', 'Tekst na 3. poziomie pomocy z pełnym wynikiem', 'eye', function () { return Object.keys(S.texts).some(function (k) { var t = S.texts[k]; return t.done && t.level === 3 && t.score === t.total; }); }],
    ['grammaticus', 'Grammaticus', 'Wszystkie lekcje gramatyki', 'trophy', function () { return LAT.LESSONS && LAT.LESSONS.every(function (l) { return S.lessons[l.id] && S.lessons[l.id].done; }); }],
    ['doctor', 'Doctor', 'Poziom Magister lub wyższy', 'medal', function () { return S.xp >= 3500; }]
  ];
  function checkBadges() {
    var fresh = [];
    BADGES.forEach(function (b) { if (!S.badges[b[0]] && b[4]()) { S.badges[b[0]] = today(); fresh.push(b); } });
    if (fresh.length) {
      save();
      fresh.forEach(function (b, i) { setTimeout(function () { toast(LAT.icon(b[3], 22) + '<div><b>Nowa odznaka: ' + b[1] + '</b><br><small>' + b[2] + '</small></div>', 'badge', 3800); sound('badge'); }, 600 + i * 900); });
    }
    return fresh;
  }

  /* ---------- Dźwięk (Web Audio, krótkie tony) ---------- */
  var AC = null;
  function sound(kind) {
    if (!S.settings.sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      var notes = { ok: [659, 880], bad: [196], done: [523, 659, 784, 1047], badge: [784, 988, 1175], level: [523, 659, 784, 1047, 1319], goal: [698, 880, 1047] }[kind] || [660];
      notes.forEach(function (f, i) {
        var o = AC.createOscillator(), g = AC.createGain(), t0 = AC.currentTime + i * (kind === 'ok' ? 0.07 : 0.11);
        o.type = kind === 'bad' ? 'triangle' : 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(kind === 'bad' ? 0.05 : 0.07, t0 + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
        o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + 0.25);
      });
    } catch (e) { }
  }

  /* ---------- Toasty i pływające +XP ---------- */
  function toastBox() { var b = document.getElementById('toasts'); if (!b) { b = document.createElement('div'); b.id = 'toasts'; b.setAttribute('aria-live', 'polite'); document.body.appendChild(b); } return b; }
  function toast(html, kind, ms) {
    var t = document.createElement('div'); t.className = 'toast ' + (kind || ''); t.innerHTML = html;
    toastBox().appendChild(t);
    requestAnimationFrame(function () { t.classList.add('in'); });
    setTimeout(function () { t.classList.remove('in'); setTimeout(function () { t.remove(); }, 300); }, ms || 1600);
  }
  function floatXP(el, n) {
    if (!el || !el.getBoundingClientRect) return;
    var r = el.getBoundingClientRect(), f = document.createElement('div');
    f.className = 'xpfloat'; f.textContent = '+' + n + ' XP';
    f.style.left = (r.left + r.width / 2) + 'px'; f.style.top = (r.top + window.scrollY - 6) + 'px';
    document.body.appendChild(f); setTimeout(function () { f.remove(); }, 1100);
  }

  /* ---------- Konfetti ---------- */
  function confetti(power) {
    if (RM) return;
    var c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
    var W = c.width = innerWidth * devicePixelRatio, H = c.height = innerHeight * devicePixelRatio, x = c.getContext('2d');
    var cols = ['#c9932b', '#e8c063', '#a1301f', '#2e5aac', '#2f8f4e', '#f3e7cf'], P = [], n = power || 120;
    for (var i = 0; i < n; i++) P.push({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .45, vx: (Math.random() - .5) * 18 * devicePixelRatio, vy: (-Math.random() * 16 - 6) * devicePixelRatio, s: (5 + Math.random() * 6) * devicePixelRatio, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[i % cols.length], sh: Math.random() < .5 });
    var t0 = performance.now();
    (function frame(t) {
      var dt = t - t0; x.clearRect(0, 0, W, H);
      P.forEach(function (p) { p.vy += .45 * devicePixelRatio; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - dt / 2600);
        if (p.sh) x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); else { x.beginPath(); x.arc(0, 0, p.s / 2.4, 0, 7); x.fill(); } x.restore(); });
      if (dt < 2600) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }

  /* ---------- XP ---------- */
  var combo = 0, pendingLevel = null;
  var PRAISE = [['Optime!', 'Świetnie!'], ['Bene!', 'Dobrze!'], ['Recte!', 'Słusznie!'], ['Euge!', 'Brawo!'], ['Egregie!', 'Znakomicie!'], ['Laudabiliter!', 'Godne pochwały!'], ['Macte virtute!', 'Tak trzymaj!'], ['Perbene!', 'Bardzo dobrze!']];
  function addXP(n, el) {
    if (!n) return;
    var before = level(), t = today(), hadGoal = xpToday() >= S.settings.goal;
    S.xp += n; S.xpLog[t] = (S.xpLog[t] || 0) + n;
    floatXP(el, n);
    var after = level();
    if (after.i > before.i) pendingLevel = after;
    if (!hadGoal && xpToday() >= S.settings.goal) {
      if (S.goalDays.indexOf(t) < 0) S.goalDays.push(t);
      setTimeout(function () { toast(LAT.icon('target', 22) + '<div><b>Pensum diurnum!</b><br><small>Cel dzienny osiągnięty: ' + S.settings.goal + ' XP</small></div>', 'goal', 3000); sound('goal'); confetti(70); }, 500);
    }
    save(); updateStatus(); checkBadges();
    if (pendingLevel && !document.querySelector('.modal-wrap')) showLevelUp();
  }
  function showLevelUp() {
    var L = pendingLevel; pendingLevel = null; if (!L) return;
    setTimeout(function () {
      modal({ icon: 'crown', kicker: 'Ascendisti!', title: 'Nowy poziom: ' + L.name, sub: 'W cursus honorum łacinnika awansujesz na stopień „' + L.pl + '”. Poziom ' + L.n + ' z ' + LEVELS.length + '.', kind: 'level' });
      sound('level'); confetti(160);
    }, 400);
  }
  function correct(el, xp) {
    combo++; if (combo > S.bestCombo) S.bestCombo = combo;
    if (el) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    sound('ok');
    var p = PRAISE[Math.floor(Math.random() * PRAISE.length)];
    toast('<span class="praise">' + p[0] + '</span><small>' + p[1] + (combo >= 3 ? ' · ' + LAT.icon('zap', 14) + ' seria ' + combo : '') + '</small>', 'ok', 1100);
    if (combo === 5 || combo === 10 || combo === 20) setTimeout(function () { toast(LAT.icon('zap', 22) + '<div><b>Series ' + toRoman(combo) + '!</b><br><small>' + combo + ' poprawnych z rzędu – premia +' + combo + ' XP</small></div>', 'combo', 2200); addXP(combo, null); }, 300);
    addXP(xp || 5, el);
  }
  function wrong(el) {
    combo = 0; sound('bad');
    if (el && !RM) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
  }
  function toRoman(n) { var v = [10, 9, 5, 4, 1], s = ['X', 'IX', 'V', 'IV', 'I'], r = ''; for (var i = 0; i < 5; i++) while (n >= v[i]) { r += s[i]; n -= v[i]; } return r; }

  /* ---------- Okno gratulacji ---------- */
  function modal(o) {
    var w = document.createElement('div'); w.className = 'modal-wrap' + (o.kind ? ' ' + o.kind : '');
    w.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mt"><div class="medallion">' + LAT.icon(o.icon || 'trophy', 40) + '</div>' +
      (o.kicker ? '<div class="kicker">' + o.kicker + '</div>' : '') + '<h2 id="mt">' + o.title + '</h2>' + (o.sub ? '<p class="muted">' + o.sub + '</p>' : '') +
      (o.stats ? '<div class="mstats">' + o.stats.map(function (s) { return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('') + '</div>' : '') +
      '<div class="lvlmini">' + levelBar() + '</div>' +
      '<div class="row" style="justify-content:center;margin-top:16px">' + (o.secondary ? '<a class="btn" href="' + o.secondary[1] + '">' + o.secondary[0] + '</a>' : '') + '<button class="btn pri" id="mclose">' + (o.btn || 'Dalej') + '</button></div></div>';
    document.body.appendChild(w);
    requestAnimationFrame(function () { w.classList.add('in'); });
    var close = function () { w.classList.remove('in'); setTimeout(function () { w.remove(); if (pendingLevel) showLevelUp(); }, 200); if (o.onClose) o.onClose(); };
    w.querySelector('#mclose').onclick = close; w.querySelector('#mclose').focus();
    if (o.secondary) w.querySelector('a').onclick = function () { w.remove(); };
    w.addEventListener('click', function (e) { if (e.target === w) close(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  }
  function celebrate(o) { sound('done'); confetti(o.big ? 200 : 130); modal(o); }

  /* ---------- Paski i pierścienie ---------- */
  function ring(pct, size, stroke, cls, inner) {
    var r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(1, pct)));
    return '<svg class="ring ' + (cls || '') + '" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true"><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '" class="ring-bg"/><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '" class="ring-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>' + (inner || '') + '</svg>';
  }
  function levelBar() {
    var L = level();
    return '<div class="lvlbar"><span class="lvlname">' + L.name + '</span><div class="xpbar"><i style="width:' + (L.pct * 100).toFixed(1) + '%"></i></div><span class="small muted">' + S.xp + (L.next ? ' / ' + L.to : '') + ' XP</span></div>';
  }
  function updateStatus() {
    var el = document.getElementById('status'); if (!el) return;
    var L = level(), g = Math.min(1, xpToday() / S.settings.goal), st = streak();
    el.innerHTML =
      '<a href="#/postep" class="st-item" title="Seria dni nauki"><span class="flame' + (S.days.indexOf(today()) >= 0 ? ' lit' : '') + '">' + LAT.icon('flame', 20) + '</span><b>' + st + '</b></a>' +
      '<a href="#/postep" class="st-item" title="Cel dzienny: ' + xpToday() + ' / ' + S.settings.goal + ' XP">' + ring(g, 26, 4, g >= 1 ? 'full' : '') + '<b>' + xpToday() + '</b><span class="muted small">/' + S.settings.goal + '</span></a>' +
      '<a href="#/postep" class="st-item lvl" title="Poziom: ' + L.name + ' (' + L.pl + ')">' + ring(L.pct, 26, 4, 'gold') + '<b>' + L.name + '</b></a>' +
      '<button class="st-item icon-btn" id="glossBtn" aria-label="Słowniczek terminów" title="Słowniczek terminów">' + LAT.icon('help', 20) + '</button>' +
      '<button class="st-item icon-btn" id="sndBtn" aria-label="' + (S.settings.sound ? 'Wyłącz dźwięk' : 'Włącz dźwięk') + '" title="Dźwięk">' + LAT.icon(S.settings.sound ? 'volume' : 'mute', 20) + '</button>';
    document.getElementById('sndBtn').onclick = function () { S.settings.sound = !S.settings.sound; save(); updateStatus(); };
    document.getElementById('glossBtn').onclick = function () { if (LAT.openGlossary) LAT.openGlossary(); };
  }

  return {
    S: S, save: save, today: today, streak: streak, xpToday: xpToday, level: level, LEVELS: LEVELS, BADGES: BADGES, checkBadges: checkBadges,
    addXP: addXP, correct: correct, wrong: wrong, celebrate: celebrate, modal: modal, toast: toast, confetti: confetti, sound: sound,
    ring: ring, levelBar: levelBar, updateStatus: updateStatus, resetCombo: function () { combo = 0; }, RM: RM
  };
})();
