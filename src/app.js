/* ============================================================
   APLIKACJA: nawigacja, widoki, ćwiczenia
   Stan i motywacja: gamify.js (LAT.G), terminy: terms.js, ikony: icons.js
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var G = LAT.G, S = G.S, save = G.save, today = G.today, I = LAT.icon;
  if (S.settings.theme) document.documentElement.setAttribute('data-theme', S.settings.theme);
  function lab(s) { return S.settings.plLabels ? LAT.plLabel(s) : s; }
  function labHTML(s) { return S.settings.plLabels ? esc(LAT.plLabel(s)) + '<small>' + esc(s) + '</small>' : esc(s); }

  /* ---------- Dane ---------- */
  var LEX = LAT.parseLexicon(LAT.LEXICON_RAW, 'w');
  var EXTRA = [];
  LAT.PLACES.forEach(function (p, i) {
    EXTRA.push({ id: 'p' + i, head: p[0] + ', ' + p[1], parts: [p[0], p[1]], cls: p[2], g: '', pl: p[4], fields: ['top'], note: p[5] });
    var adj = p[3].split('/')[0].trim();
    if (/ensis$/.test(adj)) EXTRA.push({ id: 'pa' + i, head: adj + ', ' + adj.replace(/is$/, 'e'), parts: [adj, adj.replace(/is$/, 'e')], cls: 'a3_2', g: '', pl: 'przym. od: ' + p[4], fields: ['top'], note: '' });
  });
  LAT.NAMES.forEach(function (p, i) {
    if (p[2] === 'x' || /\//.test(p[0])) return;
    EXTRA.push({ id: 'n' + i, head: p[0] + ', ' + p[1], parts: [p[0], p[1]], cls: p[2], g: '', pl: p[3], fields: ['im'], note: p[4] });
  });
  var INDEX_SIZE = LAT.buildIndex(LEX.concat(EXTRA));
  var BYHEAD = {}; LEX.forEach(function (e) { BYHEAD[e.head] = e; });

  /* ---------- Nawigacja ---------- */
  var NAV = [
    ['Start', [['pulpit', 'Pulpit', 'home'], ['plan', 'Ścieżka nauki', 'route'], ['postep', 'Postęp i odznaki', 'trophy']]],
    ['Nauka', [['gramatyka', 'Gramatyka', 'layers'], ['slownictwo', 'Słownictwo', 'cards'], ['czytanka', 'Czytanka źródeł', 'scroll'], ['obrazy', 'Łacina w obrazie', 'landmark']]],
    ['Warsztat historyka', [['dyplomatyka', 'Dyplomatyka', 'stamp'], ['chronologia', 'Chronologia', 'calendar'], ['skroty', 'Skróty i pisownia', 'feather'], ['nazwy', 'Nazwy i miary', 'pin'], ['pulapki', 'Pułapki tłumacza', 'alert'], ['analizator', 'Analizator form', 'search']]],
    ['', [['slowniczek', 'Słowniczek terminów', 'help'], ['ustawienia', 'Ustawienia', 'sliders']]]
  ];
  var BOTTOM = [['pulpit', 'Start', 'home'], ['plan', 'Ścieżka', 'route'], ['czytanka', 'Teksty', 'scroll'], ['slownictwo', 'Słówka', 'cards']];
  function dueCount() { var t = today(), n = 0; Object.keys(S.srs).forEach(function (k) { if (S.srs[k].due <= t) n++; }); return n; }
  function renderNav(cur) {
    var due = dueCount(), h = '';
    NAV.forEach(function (g) {
      if (g[0]) h += '<div class="nav-group">' + g[0] + '</div>';
      g[1].forEach(function (it) {
        h += '<a href="#/' + it[0] + '" class="' + (cur === it[0] ? 'on' : '') + '"' + (cur === it[0] ? ' aria-current="page"' : '') + '>' + I(it[2], 20) + '<span>' + it[1] + '</span>' + (it[0] === 'slownictwo' && due ? '<span class="n">' + due + '</span>' : '') + '</a>';
      });
    });
    $('#nav').innerHTML = h;
    $('#bnav').innerHTML = BOTTOM.map(function (b) {
      return '<a href="#/' + b[0] + '" class="' + (cur === b[0] ? 'on' : '') + '">' + I(b[2], 22) + b[1] + (b[0] === 'slownictwo' && due ? '<span class="n">' + due + '</span>' : '') + '</a>';
    }).join('') + '<button id="moreBtn" aria-label="Więcej modułów">' + I('menu', 22) + 'Więcej</button>';
    $('#moreBtn').onclick = function (e) { e.stopPropagation(); openSide(true); };
  }
  function openSide(on) { $('.side').classList.toggle('open', on); $('#scrim').classList.toggle('on', on); }

  var VIEWS = {};
  function route() {
    var parts = (location.hash.replace(/^#\/?/, '') || 'pulpit').split('/');
    var v = parts[0];
    if (!VIEWS[v]) v = 'pulpit';
    renderNav(v); closePop(); openSide(false); closeGlossary();
    G.resetCombo();
    var main = $('#main');
    main.innerHTML = '';
    VIEWS[v](main, parts.slice(1).map(decodeURIComponent));
    main.insertAdjacentHTML('beforeend', '<div class="foot">Łacina · postęp zapisywany w tej przeglądarce · analizator: ' + INDEX_SIZE.toLocaleString('pl') + ' form</div>');
    G.updateStatus();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- Słowniczek i podpowiedzi terminów ---------- */
  var TP = null;
  function closeTermPop() { if (TP) { TP.remove(); TP = null; } }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('abbr.term');
    closeTermPop();
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    var t = LAT.termInfo(a.dataset.k); if (!t) return;
    TP = document.createElement('div'); TP.className = 'termpop'; TP.setAttribute('role', 'tooltip');
    TP.innerHTML = '<b>' + esc(t[1]) + '</b> (' + esc(t[0]) + ')<br>' + esc(t[2]) + '<div style="opacity:.8;margin-top:4px">' + esc(t[3]) + '</div>';
    document.body.appendChild(TP);
    var r = a.getBoundingClientRect();
    TP.style.left = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - TP.offsetWidth - 10)) + 'px';
    TP.style.top = (window.scrollY + r.bottom + 6) + 'px';
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.matches && e.target.matches('abbr.term')) e.target.click(); });
  function glossaryHTML(q) {
    q = (q || '').toLowerCase();
    var groups = {};
    LAT.TERMS.forEach(function (t) { if (q && t.join(' ').toLowerCase().indexOf(q) < 0) return; (groups[t[4]] = groups[t[4]] || []).push(t); });
    return Object.keys(groups).map(function (g) {
      return '<h3>' + g + '</h3>' + groups[g].map(function (t) { return '<div class="gl-item"><b class="ab">' + esc(t[0]) + '</b> <i>' + esc(t[1]) + '</i> – <b>' + esc(t[2]) + '</b><div class="small muted">' + esc(t[3]) + '</div></div>'; }).join('');
    }).join('') || '<p class="muted">Brak wyników.</p>';
  }
  LAT.openGlossary = function () {
    var d = $('#drawer');
    d.innerHTML = '<header><h2>Słowniczek terminów</h2><button class="btn sm" id="dclose" aria-label="Zamknij">' + I('x', 18) + '</button></header><div class="body"><input type="text" id="dq" placeholder="Szukaj: abl., biernik, gerundivum…" style="width:100%;margin:12px 0"><div id="dl">' + glossaryHTML() + '</div></div>';
    d.classList.add('open'); $('#scrim').classList.add('on');
    $('#dclose').onclick = closeGlossary; $('#dq').oninput = function () { $('#dl').innerHTML = glossaryHTML(this.value); }; $('#dq').focus();
  };
  function closeGlossary() { var d = $('#drawer'); if (d && d.classList.contains('open')) { d.classList.remove('open'); if (!$('.side').classList.contains('open')) $('#scrim').classList.remove('on'); } }

  /* ---------- Komponenty ćwiczeń ---------- */
  function quiz(el, qs, onDone, opts) {
    opts = opts || {};
    var score = 0, answered = 0, xpGot = 0;
    el.innerHTML = (qs.length > 1 ? '<div class="qprog" aria-hidden="true"><i style="width:0"></i></div>' : '') + qs.map(function (q, i) {
      var order = opts.noShuffle ? q.o.map(function (_, j) { return j; }) : shuffle(q.o.map(function (_, j) { return j; }));
      return '<div class="q" data-i="' + i + '"><div class="qq">' + (qs.length > 1 ? (i + 1) + '. ' : '') + q.q + '</div><div class="opts">' +
        order.map(function (j) { return '<button class="opt" data-j="' + j + '">' + q.o[j] + '</button>'; }).join('') + '</div><div class="expl hidden" aria-live="polite"></div></div>';
    }).join('') + '<div class="score hidden"></div>';
    LAT.glossify(el);
    $$('.q', el).forEach(function (qd) {
      var q = qs[+qd.dataset.i];
      $$('.opt', qd).forEach(function (b) {
        b.onclick = function () {
          var j = +b.dataset.j, good = j === q.a;
          $$('.opt', qd).forEach(function (x) { x.disabled = true; if (+x.dataset.j === q.a) x.classList.add('right'); });
          if (!good) { b.classList.add('wrong'); G.wrong(b); } else { score++; xpGot += 1; G.correct(b, 1); }
          var ex = $('.expl', qd); ex.className = 'expl ' + (good ? 'good' : 'badx');
          ex.innerHTML = (good ? '<b class="ok">' + I('check', 16) + ' Dobrze.</b> ' : '<b class="bad">' + I('x', 16) + ' Nie tym razem.</b> ') + (q.e || '');
          LAT.glossify(ex);
          answered++;
          if ($('.qprog i', el)) $('.qprog i', el).style.width = (100 * answered / qs.length) + '%';
          if (answered === qs.length) {
            var sc = $('.score', el); sc.innerHTML = 'Wynik: <b>' + score + ' / ' + qs.length + '</b>'; sc.classList.remove('hidden');
            if (onDone) onDone(score, qs.length, xpGot);
          }
        };
      });
    });
  }

  function findEx(el, ex, onDone) {
    var toks = [], re = /(\[\[[^\]]+\]\]|[A-Za-zÀ-ž]+)/g, html = '', last = 0, m, n = 0;
    while ((m = re.exec(ex.s))) {
      html += esc(ex.s.slice(last, m.index));
      var t = m[1], target = /^\[\[/.test(t), word = t.replace(/\[|\]/g, '');
      toks.push(target);
      html += '<span class="tok" role="button" tabindex="0" data-n="' + n++ + '">' + esc(word) + '</span>';
      last = re.lastIndex;
    }
    html += esc(ex.s.slice(last));
    el.innerHTML = '<div class="qq">' + ex.q + '</div><div class="find-s la">' + html + '</div><div class="row" style="margin-top:8px"><button class="btn pri sm chk">' + I('check', 16) + ' Sprawdź</button></div><div class="expl hidden"></div>';
    LAT.glossify($('.qq', el));
    var done = false;
    $$('.tok', el).forEach(function (t) {
      t.onclick = function () { if (!done) t.classList.toggle('sel'); };
      t.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t.click(); } };
    });
    $('.chk', el).onclick = function () {
      if (done) return; done = true; this.disabled = true;
      var ok = true;
      $$('.tok', el).forEach(function (t) {
        var n = +t.dataset.n, sel = t.classList.contains('sel');
        t.classList.remove('sel');
        if (toks[n] && sel) t.classList.add('hit');
        else if (toks[n] && !sel) { t.classList.add('miss'); ok = false; }
        else if (!toks[n] && sel) { t.classList.add('false'); ok = false; }
      });
      if (ok) G.correct($('.find-s', el), 1); else G.wrong($('.find-s', el));
      var e = $('.expl', el); e.className = 'expl ' + (ok ? 'good' : 'badx');
      e.innerHTML = (ok ? '<b class="ok">Bezbłędnie.</b> ' : '<b class="bad">Nie całkiem.</b> Zielone – trafione, przerywane – pominięte, przekreślone – zbędne. ') + (ex.e || '');
      LAT.glossify(e);
      if (onDone) onDone(ok ? 1 : 0, 1, ok ? 6 : 0);
    };
  }

  /* ---------- Trening rozpoznawania form ---------- */
  var FILTERS = {
    noun: function (x) { return x.k === 'noun'; },
    adj: function (x) { return x.k === 'adj' || x.k === 'pron'; },
    presAct: function (x) { return x.k === 'verb' && (x.v === 'act.' || x.v === '') && x.m === 'ind.' && ['praes.', 'impf.', 'fut. I'].indexOf(x.t) >= 0; },
    perfPass: function (x) { return x.k === 'verb' && ((x.m === 'ind.' && ['perf.', 'pqpf.', 'fut. II'].indexOf(x.t) >= 0) || x.v === 'pass.'); },
    coni: function (x) { return x.k === 'verb' && x.m === 'coni.'; },
    part: function (x) { return x.k === 'part' || x.k === 'ger' || x.k === 'inf'; },
    any: function () { return true; }
  };
  function drill(el, cfg) {
    var pool = LEX.filter(function (e) { return cfg.classes.indexOf(e.cls) >= 0 && (e.fields.indexOf('rd') >= 0 || e.fields.indexOf('dok') >= 0 || e.fields.indexOf('pr') >= 0 || e.fields.indexOf('ma') >= 0 || e.fields.indexOf('ko') >= 0 || cfg.classes.length < 8); });
    var flt = FILTERS[cfg.filter] || FILTERS.any;
    var structured = false, N = 10, i = 0, ok = 0;
    var canStruct = cfg.filter === 'noun' || cfg.filter === 'presAct' || cfg.filter === 'coni' || cfg.filter === 'perfPass';
    function header() {
      return '<div class="row sp"><div><b>' + esc(cfg.label) + '</b> <span class="muted small">· ' + (i + 1) + ' / ' + N + ' · ' + I('check', 14) + ' ' + ok + '</span></div>' +
        (canStruct ? '<div class="levels" role="group" aria-label="Tryb"><button data-m="0" class="' + (structured ? '' : 'on') + '">wybór</button><button data-m="1" class="' + (structured ? 'on' : '') + '">analiza</button></div>' : '') + '</div>' +
        '<div class="qprog"><i style="width:' + (100 * i / N) + '%"></i></div>';
    }
    function next() {
      if (i >= N) {
        S.drills.ok += ok; S.drills.all += N; save();
        if (ok >= 8) G.celebrate({ icon: 'zap', kicker: ok === N ? 'Perfecte!' : 'Optime!', title: 'Trening: ' + ok + ' / ' + N, sub: 'Rozpoznawanie form wchodzi w krew.', stats: [[ok * 3, 'XP'], [Math.round(100 * ok / N) + '%', 'trafność']] });
        el.innerHTML = '<div class="score">Wynik: <b>' + ok + ' / ' + N + '</b></div><p class="muted">Łącznie w treningach: ' + S.drills.ok + ' / ' + S.drills.all + ' poprawnych.</p><button class="btn pri again">' + I('rotate', 18) + ' Jeszcze raz</button>';
        $('.again', el).onclick = function () { i = 0; ok = 0; next(); };
        return;
      }
      var e, fs, tries = 0;
      do { e = pick(pool); fs = LAT.forms(e).filter(flt); tries++; } while (!fs.length && tries < 50);
      // w dokumentach dominuje 3. osoba i pluralis maiestatis (1 os. lm.) – losuj je częściej
      var common = fs.filter(function (x) { return x.k !== 'verb' || x.p === 2 || x.p === 3 || x.p === 5; });
      var item = pick(common.length && Math.random() < 0.8 ? common : fs);
      var all = LAT.analysesOf(e, item.f).filter(flt);
      var goodLabels = all.map(function (x) { return x.an; });
      var html = header() + '<div class="card" style="text-align:center;margin-top:0"><div class="muted small">' + esc(e.head) + ' – ' + esc(e.pl) + '</div><div class="drill-form la">' + esc(item.f) + '</div><div class="muted small">Jaka to forma?</div></div>';
      if (!structured) {
        var others = shuffle(LAT.mergeLabels(fs.filter(function (x) { return goodLabels.indexOf(x.an) < 0 && LAT.norm(x.f) !== LAT.norm(item.f); }).map(function (x) { return x.an; })));
        var right = LAT.mergeLabels(goodLabels);
        var opts = shuffle([pick(right)].concat(others.slice(0, 3)));
        html += '<div class="opts">' + opts.map(function (o) { return '<button class="opt" data-v="' + esc(o) + '">' + labHTML(o) + '</button>'; }).join('') + '</div><div class="expl hidden"></div>';
        el.innerHTML = html;
        $$('.opt', el).forEach(function (b) {
          b.onclick = function () {
            var good = right.indexOf(b.dataset.v) >= 0;
            $$('.opt', el).forEach(function (x) { x.disabled = true; if (right.indexOf(x.dataset.v) >= 0) x.classList.add('right'); });
            if (!good) { b.classList.add('wrong'); G.wrong(b); } else { ok++; G.correct(b, 1); }
            fin(good, right);
          };
        });
      } else {
        var isNoun = item.k === 'noun';
        var sel = function (name, arr) { return '<label class="small muted">' + name + '<br><select data-k="' + name + '">' + arr.map(function (a) { return '<option value="' + a[0] + '">' + a[1] + '</option>'; }).join('') + '</select></label>'; };
        html += '<div class="row" style="justify-content:center;gap:14px">' + (isNoun
          ? sel('przypadek', [['nom.', 'mianownik (nom.)'], ['gen.', 'dopełniacz (gen.)'], ['dat.', 'celownik (dat.)'], ['acc.', 'biernik (acc.)'], ['abl.', 'ablatyw (abl.)']]) + sel('liczba', [['lp.', 'pojedyncza (lp.)'], ['lm.', 'mnoga (lm.)']])
          : sel('czas', [['praes.', 'teraźniejszy'], ['impf.', 'przeszły niedokonany'], ['fut. I', 'przyszły'], ['perf.', 'przeszły dokonany'], ['pqpf.', 'zaprzeszły'], ['fut. II', 'przyszły uprzedni']]) + sel('tryb', [['ind.', 'oznajmujący'], ['coni.', 'łączący']]) + sel('strona', [['act.', 'czynna'], ['pass.', 'bierna']]) + sel('osoba', [['1', '1.'], ['2', '2.'], ['3', '3.']]) + sel('liczba', [['lp.', 'pojedyncza'], ['lm.', 'mnoga']])) +
          '</div><div class="row" style="justify-content:center;margin-top:14px"><button class="btn pri chk">' + I('check', 18) + ' Sprawdź</button></div><div class="expl hidden"></div>';
        el.innerHTML = html;
        $('.chk', el).onclick = function () {
          var v = {}; $$('select', el).forEach(function (s) { v[s.dataset.k] = s.value; });
          var good = all.some(function (x) {
            if (isNoun) return LAT.CASES[x.cs] === v['przypadek'] && (x.nm === 's' ? 'lp.' : 'lm.') === v['liczba'];
            var p = (+v['osoba'] - 1) + (v['liczba'] === 'lm.' ? 3 : 0);
            if (x.v === 'dep.' && v['strona'] !== 'pass.') return false;
            return x.t === v['czas'] && x.m === v['tryb'] && (x.v === '' || x.v === 'dep.' || x.v === v['strona']) && x.p === p;
          });
          if (good) { ok++; G.correct(this, 1); } else G.wrong(this);
          this.disabled = true;
          fin(good, LAT.mergeLabels(goodLabels));
        };
      }
      $$('.levels button', el).forEach(function (b) { b.onclick = function () { structured = b.dataset.m === '1'; next(); }; });
    }
    function fin(good, right) {
      var ex = $('.expl', el); ex.className = 'expl ' + (good ? 'good' : 'badx');
      ex.innerHTML = (good ? '<b class="ok">Dobrze.</b> ' : '<b class="bad">Nie.</b> ') + 'Możliwe analizy: ' + right.map(function (r) { return '<b>' + esc(lab(r)) + '</b>' + (S.settings.plLabels ? ' <span class="muted small">(' + esc(r) + ')</span>' : ''); }).join('; ') +
        '<div class="row" style="margin-top:10px"><button class="btn pri nx">Dalej ' + I('right', 18) + '</button></div>';
      $('.nx', el).onclick = function () { i++; next(); };
      $('.nx', el).focus();
    }
    next();
  }

  /* ---------- Okienko z glosą ---------- */
  var POP = null;
  function closePop() { if (POP) { POP.remove(); POP = null; } }
  document.addEventListener('click', function (e) { if (POP && !POP.contains(e.target) && !e.target.classList.contains('w')) closePop(); });
  function showPop(anchor, html) {
    closePop();
    POP = document.createElement('div'); POP.className = 'wpop'; POP.innerHTML = html;
    document.body.appendChild(POP);
    var r = anchor.getBoundingClientRect(), pw = POP.offsetWidth;
    POP.style.left = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - pw - 12)) + 'px';
    POP.style.top = (window.scrollY + r.bottom + 6) + 'px';
  }
  function autoAnalysis(word) {
    var res = LAT.analyze(word);
    if (!res.length) return '<span class="muted">Brak w słowniku aplikacji.</span>';
    return res.slice(0, 4).map(function (r) { return '<div><b class="la">' + esc(r.e.parts[0]) + '</b> – ' + esc(r.e.pl) + '<br><span class="small">' + r.labels.slice(0, 4).map(function (l) { return esc(lab(l)); }).join('; ') + (r.enclitic ? ' + ' + r.enclitic : '') + '</span></div>'; }).join('');
  }

  /* ============================================================
     ŚCIEŻKA NAUKI
     ============================================================ */
  var UNITS = [
    ['Prima via', 'Pierwsze kroki', 'var(--primary)', [['l0', 'lesson'], ['l1', 'lesson'], ['t9', 'text'], ['l2', 'lesson'], ['vocab', 'vocab']]],
    ['Litterae', 'Dokument i jego słowa', 'var(--lapis)', [['l3', 'lesson'], ['t1', 'text'], ['l4', 'lesson'], ['t7', 'text'], ['l5', 'lesson'], ['diplo', 'diplo']]],
    ['Tempora', 'Czas i opowieść', 'var(--ok)', [['l6', 'lesson'], ['t2', 'text'], ['i1', 'img'], ['l7', 'lesson'], ['l8', 'lesson'], ['t3', 'text']]],
    ['Officina', 'Warsztat badacza', 'var(--gold)', [['chrono', 'chrono'], ['l9', 'lesson'], ['t8', 'text'], ['i17', 'img'], ['l10', 'lesson'], ['t4', 'text'], ['i22', 'img']]],
    ['Ars', 'Konstrukcje mistrzowskie', '#6b3fa0', [['l11', 'lesson'], ['t5', 'text'], ['l12', 'lesson'], ['t10', 'text'], ['l13', 'lesson'], ['traps', 'traps']]],
    ['Ad fontes', 'Do źródeł', 'var(--primary-d)', [['l14', 'lesson'], ['t6', 'text'], ['i11', 'img'], ['i18', 'img'], ['i23', 'img']]]
  ];
  var PLAN = []; UNITS.forEach(function (u) { u[3].forEach(function (p) { PLAN.push(p); }); });
  function planItem(p) {
    var id = p[0], t = p[1];
    if (t === 'lesson') { var L = LAT.LESSONS.find(function (x) { return x.id === id; }); return { kind: 'Gramatyka', icon: 'layers', label: L.title, href: '#/gramatyka/' + id, done: !!(S.lessons[id] && S.lessons[id].done) }; }
    if (t === 'text') { var T = LAT.TEXTS.find(function (x) { return x.id === id; }); return { kind: 'Czytanka', icon: 'scroll', label: T.title, href: '#/czytanka/' + id, done: !!(S.texts[id] && S.texts[id].done) }; }
    if (t === 'img') { var IM = LAT.IMAGES.find(function (x) { return x.id === id; }); return { kind: 'Łacina w obrazie', icon: 'landmark', label: IM.title, href: '#/obrazy/' + id, done: !!S.imgs[id] }; }
    if (t === 'vocab') return { kind: 'Słownictwo', icon: 'cards', label: 'Pierwsze 10 słów w powtórkach', href: '#/slownictwo', done: Object.keys(S.srs).length >= 10 };
    if (t === 'diplo') return { kind: 'Dyplomatyka', icon: 'stamp', label: 'Quiz formuł dokumentu', href: '#/dyplomatyka/quiz', done: !!(S.lessons.diplo && S.lessons.diplo.done) };
    if (t === 'chrono') return { kind: 'Chronologia', icon: 'calendar', label: '5 dat ustalonych według świąt', href: '#/chronologia/cw', done: S.chrono.all >= 5 };
    if (t === 'traps') return { kind: 'Krytyka przekładu', icon: 'alert', label: '10 pułapek tłumacza', href: '#/pulapki', done: Object.keys(S.traps).length >= 10 };
  }
  function nextStep() { for (var i = 0; i < PLAN.length; i++) { var it = planItem(PLAN[i]); if (!it.done) return it; } return null; }

  VIEWS.plan = function (el) {
    var all = PLAN.map(planItem), n = all.filter(function (x) { return x.done; }).length, cur = nextStep(), zig = 0;
    var h = '<h1>Ścieżka nauki</h1><p class="lead">Gramatyka przeplata się z tekstami od pierwszego dnia: każda konstrukcja pojawia się w lekcji tuż przed tekstem, w którym jest potrzebna. Kroki możesz przechodzić w dowolnej kolejności, ale ta jest sprawdzona.</p>' +
      '<div class="card"><div class="row sp"><b>' + n + ' z ' + all.length + ' kroków</b><span class="muted small">' + Math.round(100 * n / all.length) + '%</span></div><div class="qprog" style="margin-bottom:0"><i style="width:' + (100 * n / all.length) + '%"></i></div></div><div class="path">';
    UNITS.forEach(function (u, ui) {
      var items = u[3].map(planItem), ud = items.filter(function (x) { return x.done; }).length;
      h += '<div class="unit" style="background:' + u[2] + '"><b>' + (ui + 1) + '. ' + u[0] + ' – ' + u[1] + '</b><small>' + ud + ' / ' + items.length + ' ukończone</small></div>';
      items.forEach(function (it) {
        var isCur = cur && it.href === cur.href, z = ['', ' z1', ' z2', ' z3'][zig++ % 4];
        h += '<a class="node' + z + (it.done ? ' done' : '') + (isCur ? ' cur' : '') + '" href="' + it.href + '">' + (isCur ? '<span class="startbtn">Tu jesteś</span>' : '') +
          '<span class="dot">' + I(it.done ? 'check' : it.icon, 28) + '</span><span class="lbl"><small>' + it.kind + '</small><span>' + esc(it.label) + '</span></span></a>';
      });
    });
    el.innerHTML = h + '<div class="unit" style="background:linear-gradient(135deg,var(--gold),var(--gold-l));color:#2a1d05"><b>' + I('crown', 20) + ' Finis coronat opus</b><small>Koniec ścieżki – dalej czytaj źródła na najwyższym poziomie pomocy</small></div></div>';
  };

  /* ============================================================
     PULPIT
     ============================================================ */
  function stat(icon, color, v, l) { return '<div class="stat"><div class="si" style="background:' + color + '22;color:' + color + '">' + I(icon, 22) + '</div><div><div class="v">' + v + '</div><div class="l">' + l + '</div></div></div>'; }
  function tile(h, icon, color, k, t, d) { return '<a class="card tile" href="' + h + '"><span class="ti" style="background:' + color + '">' + I(icon, 24) + '</span><div class="k">' + k + '</div><div class="t">' + t + '</div><div class="d">' + d + '</div></a>'; }
  function weekDots() {
    var t = today(), names = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'], h = '';
    for (var i = 6; i >= 0; i--) {
      var d = t - i, wd = new Date(d * 86400000).getUTCDay(), on = S.days.indexOf(d) >= 0 && (S.xpLog[d] || i === 0 && G.xpToday());
      h += '<span><i class="' + (S.days.indexOf(d) >= 0 && (S.xpLog[d] || 0) > 0 ? 'on' : '') + (i === 0 ? ' today' : '') + '">' + ((S.xpLog[d] || 0) > 0 ? I('flame', 14) : '') + '</i>' + names[wd] + '</span>';
    }
    return '<div class="week">' + h + '</div>';
  }
  VIEWS.pulpit = function (el) {
    var L = G.level(), nx = nextStep(), due = dueCount(), g = G.xpToday(), goal = S.settings.goal, st = G.streak();
    var learned = Object.keys(S.srs).filter(function (k) { return S.srs[k].reps > 0; }).length;
    var lessonsDone = LAT.LESSONS.filter(function (l) { return S.lessons[l.id] && S.lessons[l.id].done; }).length;
    var textsDone = LAT.TEXTS.filter(function (t) { return S.texts[t.id] && S.texts[t.id].done; }).length;
    var greet = ['Salve', 'Ave', 'Salve iterum', 'Bene venisti'][S.days.length % 4];
    el.innerHTML =
      '<div class="card hero"><div class="emblem">' + G.ring(L.pct, 132, 10, 'gold') + '<div class="core"><div><small>poziom</small><b>' + L.n + '</b></div></div></div>' +
      '<div><div class="muted small" style="font-weight:700;letter-spacing:.06em;text-transform:uppercase">' + greet + '!</div><h1>' + L.name + ' <span class="muted" style="font-size:.55em;font-weight:400">· ' + L.pl + '</span></h1>' +
      G.levelBar() + (L.next ? '<div class="small muted" style="margin-top:4px">Do poziomu <b>' + L.next[1] + '</b> brakuje ' + (L.to - S.xp) + ' XP</div>' : '') +
      '<div class="row" style="margin-top:14px">' + (nx ? '<a class="btn pri big" href="' + nx.href + '">' + I('right', 20) + ' ' + (S.xp ? 'Kontynuuj' : 'Zacznij naukę') + '</a>' : '') + (due ? '<a class="btn big" href="#/slownictwo/sesja">' + I('cards', 20) + ' Powtórki (' + due + ')</a>' : '') + '</div>' +
      (nx ? '<div class="small muted" style="margin-top:8px">Następny krok: <b>' + esc(nx.kind) + ' – ' + esc(nx.label) + '</b></div>' : '') + '</div></div>' +
      '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">' +
      '<div class="card" style="display:flex;gap:16px;align-items:center"><div class="emblem" style="width:96px;height:96px">' + G.ring(Math.min(1, g / goal), 96, 9, g >= goal ? 'full' : '') + '<div style="position:relative;text-align:center"><b style="font-family:var(--serif);font-size:1.5rem">' + g + '</b><div class="small muted">/ ' + goal + ' XP</div></div></div><div><h3 style="margin:0">Pensum diurnum</h3><div class="muted small">' + (g >= goal ? 'Cel dzienny osiągnięty. Optime!' : 'Cel dzienny: jeszcze ' + (goal - g) + ' XP') + '</div></div></div>' +
      '<div class="card"><div class="row sp"><h3 style="margin:0">' + I('flame', 22, '') + ' Seria: ' + st + ' ' + (st === 1 ? 'dzień' : 'dni') + '</h3></div>' + weekDots() + '</div></div>' +
      '<div class="stats" style="margin-top:16px">' + stat('cards', '#2e5aac', learned, 'słów w powtórkach') + stat('layers', '#a1301f', lessonsDone + '/' + LAT.LESSONS.length, 'lekcji') + stat('scroll', '#2f7d47', textsDone + '/' + LAT.TEXTS.length, 'źródeł') + stat('award', '#a87914', Object.keys(S.badges).length + '/' + G.BADGES.length, 'odznak') + '</div>' +
      '<h2>Moduły</h2><div class="grid">' +
      tile('#/gramatyka', 'layers', '#a1301f', 'Rdzeń', 'Gramatyka', LAT.LESSONS.length + ' lekcji – zaczynamy łagodnie, od słów, które znasz') +
      tile('#/slownictwo', 'cards', '#2e5aac', 'Rdzeń', 'Słownictwo', LEX.length + ' haseł z powtórkami w odstępach czasu') +
      tile('#/czytanka', 'scroll', '#2f7d47', 'Serce aplikacji', 'Czytanka źródeł', LAT.TEXTS.length + ' tekstów z glosami i trzema poziomami pomocy') +
      tile('#/obrazy', 'landmark', '#a87914', 'Inskrypcje i rękopisy', 'Łacina w obrazie', LAT.IMAGES.length + ' zdjęć: budowle, epitafia, obrazy, rękopisy, druki') +
      tile('#/dyplomatyka', 'stamp', '#6b3fa0', 'Warsztat', 'Dyplomatyka', 'Części dokumentu, formuły, wyszukiwarka formuł') +
      tile('#/chronologia', 'calendar', '#1e3f7d', 'Warsztat', 'Chronologia', 'Daty według świąt, kalendarz rzymski, liczby rzymskie') +
      tile('#/skroty', 'feather', '#74200f', 'Warsztat', 'Skróty i pisownia', 'Wyszukiwarka i ćwiczenia skrótów, pisownia średniowieczna') +
      tile('#/pulapki', 'alert', '#b3361f', 'Krytyka', 'Pułapki tłumacza', 'Znajdź błąd w przekładzie maszynowym') +
      '</div>' +
      (!S.seenIntro ? '<div class="card tip" style="margin-top:22px"><b>' + I('help', 18) + ' Jak to działa.</b> Każda poprawna odpowiedź daje punkty doświadczenia (XP), a punkty – kolejne stopnie łacińskiego <i>cursus honorum</i>, od <i>Tiro</i> do <i>Doctor</i>. Codzienny cel to ' + goal + ' XP (ok. 10 minut). Terminy podkreślone kropkami (np. abl.) możesz dotknąć, a pełny słowniczek otwiera znak zapytania na górze. <button class="btn sm" id="introOk" style="margin-top:8px">Rozumiem</button></div>' : '');
    LAT.glossify(el);
    if ($('#introOk')) $('#introOk').onclick = function () { S.seenIntro = true; save(); this.closest('.card').remove(); };
  };

  /* ============================================================
     POSTĘP I ODZNAKI
     ============================================================ */
  VIEWS.postep = function (el) {
    var L = G.level(), t = today();
    var bars = '', mx = S.settings.goal;
    for (var i = 13; i >= 0; i--) mx = Math.max(mx, S.xpLog[t - i] || 0);
    for (var j = 13; j >= 0; j--) {
      var d = t - j, v = S.xpLog[d] || 0, dt = new Date(d * 86400000);
      bars += '<div title="' + v + ' XP"><span>' + (v || '') + '</span><b class="' + (v >= S.settings.goal ? 'goal' : '') + '" style="height:' + (100 * v / mx) + '%"></b>' + dt.getUTCDate() + '.' + (dt.getUTCMonth() + 1) + '</div>';
    }
    var heat = '', start = t - 7 * 15 - ((new Date(t * 86400000).getUTCDay() + 6) % 7);
    for (var k = start; k <= t; k++) { var x = S.xpLog[k] || 0, c = x === 0 ? '' : x < 20 ? 'h1' : x < 50 ? 'h2' : x < 100 ? 'h3' : 'h4'; heat += '<i class="' + c + '" title="' + x + ' XP"></i>'; }
    var mods = [
      ['Gramatyka', '#/gramatyka', 'layers', 'prim', LAT.LESSONS.filter(function (l) { return S.lessons[l.id] && S.lessons[l.id].done; }).length, LAT.LESSONS.length],
      ['Czytanka', '#/czytanka', 'scroll', 'full', LAT.TEXTS.filter(function (x) { return S.texts[x.id] && S.texts[x.id].done; }).length, LAT.TEXTS.length],
      ['Obrazy', '#/obrazy', 'landmark', 'gold', Object.keys(S.imgs).length, LAT.IMAGES.length],
      ['Słownictwo', '#/slownictwo', 'cards', 'lapis', Object.keys(S.srs).filter(function (k) { return S.srs[k].reps > 0; }).length, LEX.length],
      ['Pułapki', '#/pulapki', 'alert', 'prim', Object.keys(S.traps).filter(function (k) { return S.traps[k]; }).length, LAT.TRAPS.length],
      ['Daty', '#/chronologia/cw', 'calendar', 'lapis', Math.min(S.chrono.ok, 20), 20]
    ];
    el.innerHTML = '<h1>Postęp i odznaki</h1>' +
      '<div class="card hero"><div class="emblem">' + G.ring(L.pct, 132, 10, 'gold') + '<div class="core"><div><small>poziom</small><b>' + L.n + '</b></div></div></div><div><h2 style="margin:0">' + L.name + ' <span class="muted" style="font-size:.6em;font-weight:400">· ' + L.pl + '</span></h2>' + G.levelBar() +
      '<div class="small muted" style="margin-top:8px">Cursus honorum: ' + G.LEVELS.map(function (lv, i) { return '<span style="' + (i === L.i ? 'color:var(--primary);font-weight:700' : i < L.i ? 'color:var(--gold)' : '') + '">' + lv[1] + '</span>'; }).join(' · ') + '</div></div></div>' +
      '<div class="stats">' + stat('star', '#a87914', S.xp, 'XP łącznie') + stat('flame', '#e0612a', G.streak(), 'dni serii') + stat('target', '#2f7d47', S.goalDays.length, 'dni z celem') + stat('zap', '#2e5aac', S.bestCombo, 'najdłuższa seria odpowiedzi') + '</div>' +
      '<h2>Ostatnie 14 dni</h2><div class="card"><div class="bars">' + bars + '</div><div class="small muted">Zielone słupki – dzień z osiągniętym celem (' + S.settings.goal + ' XP).</div></div>' +
      '<h2>Moduły</h2><div class="modrings">' + mods.map(function (m) { var p = m[5] ? m[4] / m[5] : 0; return '<a class="card modring" href="' + m[1] + '"><span class="rw">' + G.ring(p, 74, 8, m[3]) + I(m[2], 26) + '</span><b>' + m[0] + '</b><span class="small muted">' + m[4] + ' / ' + m[5] + '</span></a>'; }).join('') + '</div>' +
      '<h2>Odznaki <span class="muted" style="font-size:.7em">' + Object.keys(S.badges).length + ' / ' + G.BADGES.length + '</span></h2><div class="badges">' + G.BADGES.map(function (b) { var got = S.badges[b[0]]; return '<div class="badge' + (got ? '' : ' locked') + '"><div class="md">' + I(got ? b[3] : 'lock', 28) + '</div><b>' + b[1] + '</b><small>' + b[2] + '</small></div>'; }).join('') + '</div>' +
      '<h2>Kalendarz aktywności</h2><div class="card"><div class="heat">' + heat + '</div><div class="small muted">Ostatnie 15 tygodni. Im ciemniejszy kwadrat, tym więcej XP danego dnia.</div></div>';
  };

  /* ============================================================
     GRAMATYKA
     ============================================================ */
  VIEWS.gramatyka = function (el, args) {
    if (args[0]) return lessonView(el, args[0]);
    el.innerHTML = '<h1>Gramatyka recepcyjna</h1><p class="lead">Uczysz się <b>rozpoznawać</b> formy i konstrukcje, a nie je tworzyć. Zaczynamy łagodnie, od słów, które znasz z polszczyzny. Każdy skrót (np. abl., lm.) możesz dotknąć, żeby zobaczyć polskie wyjaśnienie.</p>' +
      '<div class="grid">' + LAT.LESSONS.map(function (l, i) {
        var st = S.lessons[l.id];
        return '<a class="card tile" href="#/gramatyka/' + l.id + '"><div class="k">Lekcja ' + i + (st && st.done ? ' · <span class="done-mark">' + I('check', 14) + ' ' + st.score + '/' + st.total + '</span>' : '') + (l.gentle ? ' · <span class="tag real">na start</span>' : '') + '</div><div class="t">' + l.title + '</div><div class="d">' + l.short + '</div></a>';
      }).join('') + '</div>';
    LAT.glossify(el);
  };
  function lessonView(el, id) {
    var idx = LAT.LESSONS.findIndex(function (l) { return l.id === id; }), L = LAT.LESSONS[idx];
    if (!L) { location.hash = '#/gramatyka'; return; }
    var prev = LAT.LESSONS[idx - 1], next = LAT.LESSONS[idx + 1], wasDone = S.lessons[id] && S.lessons[id].done;
    el.innerHTML = '<p class="small"><a href="#/gramatyka">' + I('left', 16) + ' Gramatyka</a></p><h1>' + L.title + '</h1>' +
      '<div class="lsteps"><span class="on">' + I('book', 16) + ' 1. Teoria</span><span id="st2">' + I('target', 16) + ' 2. Ćwiczenia</span>' + (L.drill ? '<span id="st3">' + I('zap', 16) + ' 3. Trening form</span>' : '') + '</div>' +
      '<div class="lesson-body card">' + L.body + '</div>' +
      '<div class="row" style="justify-content:center"><a class="btn pri big" href="#exs" id="goEx">' + I('target', 20) + ' Przejdź do ćwiczeń</a></div>' +
      '<h2 id="exs">Ćwiczenia <span class="muted" style="font-size:.6em">' + L.ex.length + ' zadań</span></h2><div class="qprog"><i id="lprog" style="width:0"></i></div><div id="exlist"></div>' +
      (L.drill ? '<h2>Trening rozpoznawania form</h2><p class="muted small">Losowe formy ze słownika aplikacji. Zacznij od wyboru, potem przełącz na samodzielną analizę.</p><div class="card" id="drill"></div>' : '') +
      '<div class="row sp" style="margin-top:24px">' + (prev ? '<a class="btn" href="#/gramatyka/' + prev.id + '">' + I('left', 18) + ' ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/gramatyka/' + next.id + '">' + esc(next.title) + ' ' + I('right', 18) + '</a>' : '') + '</div>';
    LAT.glossify($('.lesson-body', el));
    $('#goEx').onclick = function (e) { e.preventDefault(); $('#exs').scrollIntoView({ behavior: G.RM ? 'auto' : 'smooth' }); $('#st2').classList.add('on'); };
    var box = $('#exlist'), total = L.ex.length, got = 0, done = 0, xp = 0;
    L.ex.forEach(function (ex) {
      var d = document.createElement('div'); d.className = 'card'; box.appendChild(d);
      var cb = function (s, t, x) {
        got += s; done++; xp += x || 0;
        $('#lprog').style.width = (100 * done / total) + '%';
        if (done === total) {
          var perfect = got === total, bonus = 0;
          S.lessons[id] = { done: true, score: Math.max(got, (S.lessons[id] && S.lessons[id].score) || 0), total: total };
          if (perfect && !wasDone) S.perfectLessons++;
          save(); G.addXP(bonus, null); renderNav('gramatyka');
          $('#st2').classList.remove('on'); $('#st2').classList.add('done');
          var nx = nextStep();
          G.celebrate({ icon: perfect ? 'star' : 'cap', kicker: perfect ? 'Sine errore!' : (got >= total * .7 ? 'Bene factum!' : 'Lectio peracta'), title: 'Lekcja ukończona', sub: perfect ? 'Wszystko bezbłędnie. Egregie!' : 'Wynik ' + got + ' z ' + total + '. Błędy to część nauki – wróć do lekcji, kiedy zechcesz.',
            stats: [[got + '/' + total, 'wynik'], ['+' + (xp + bonus), 'XP'], [G.streak(), 'dni serii']], btn: L.drill ? 'Do treningu form' : 'Dalej',
            secondary: nx ? ['Następny krok', nx.href] : null,
            onClose: function () { if (L.drill) { $('#st3') && $('#st3').classList.add('on'); $('#drill').scrollIntoView({ behavior: G.RM ? 'auto' : 'smooth' }); } }, big: perfect });
        }
      };
      if (ex.t === 'mcq') quiz(d, [ex], cb, {}); else findEx(d, ex, cb);
    });
    if (L.drill) drill($('#drill'), L.drill);
  }

  /* ============================================================
     SŁOWNICTWO
     ============================================================ */
  function srsGrade(id, g) {
    var c = S.srs[id] || { ef: 2.5, iv: 0, due: today(), reps: 0, lapses: 0 }, t = today();
    if (g === 0) { c.reps = 0; c.lapses++; c.iv = 0; c.ef = Math.max(1.3, c.ef - 0.2); c.due = t; }
    else {
      c.reps++;
      if (c.reps === 1) c.iv = g === 3 ? 3 : 1;
      else if (c.reps === 2) c.iv = g === 1 ? 3 : g === 3 ? 7 : 6;
      else c.iv = Math.max(c.iv + 1, Math.round(c.iv * c.ef * (g === 1 ? 0.6 : g === 3 ? 1.3 : 1)));
      c.ef = Math.max(1.3, c.ef + (g === 1 ? -0.15 : g === 3 ? 0.1 : 0));
      c.due = t + c.iv;
    }
    S.srs[id] = c; save();
  }
  var vocabFields = null;
  VIEWS.slownictwo = function (el, args) {
    if (!vocabFields) { try { vocabFields = JSON.parse(localStorage.getItem('lacina_fields')) || ['rd', 'dok']; } catch (e) { vocabFields = ['rd', 'dok']; } }
    if (args[0] === 'sesja') return vocabSession(el);
    if (args[0] === 'lista') return vocabList(el);
    var t = today();
    var due = Object.keys(S.srs).filter(function (k) { return S.srs[k].due <= t; }).length;
    var deck = LEX.filter(function (e) { return e.fields.some(function (f) { return vocabFields.indexOf(f) >= 0; }); });
    var fresh = deck.filter(function (e) { return !S.srs[e.head]; }).length;
    if (S.newDay.d !== t) S.newDay = { d: t, n: 0 };
    var newLeft = Math.max(0, S.settings.newPerDay - S.newDay.n);
    el.innerHTML = '<h1>Słownictwo</h1><p class="lead">Fiszki z powtórkami w odstępach czasu: słowo wraca wtedy, gdy zaczynasz je zapominać. Kierunek: łacina → polski, bo celem jest rozumienie. Słowa o znaczeniu zależnym od epoki mają oznaczenie <span class="tag ep">epoka</span>.</p>' +
      '<div class="stats">' + stat('rotate', '#a1301f', due, 'do powtórki dziś') + stat('sparkles', '#2e5aac', Math.min(newLeft, fresh), 'nowych dziś (limit ' + S.settings.newPerDay + ')') + stat('cards', '#2f7d47', Object.keys(S.srs).length, 'poznanych łącznie') + '</div>' +
      '<div class="row" style="margin:18px 0"><a class="btn pri big" href="#/slownictwo/sesja">' + I('cards', 20) + ' Rozpocznij sesję</a><a class="btn big" href="#/slownictwo/lista">' + I('search', 20) + ' Przeglądaj słownik</a></div>' +
      '<div class="card"><h3>Talie (pola tematyczne)</h3><div class="row" id="flds">' + Object.keys(LAT.FIELDS).map(function (f) {
        var n = LEX.filter(function (e) { return e.fields.indexOf(f) >= 0; }).length;
        return '<span class="chip ' + (vocabFields.indexOf(f) >= 0 ? 'on' : '') + '" role="button" tabindex="0" aria-pressed="' + (vocabFields.indexOf(f) >= 0) + '" data-f="' + f + '">' + LAT.FIELDS[f] + ' <span class="muted">' + n + '</span></span>';
      }).join('') + '</div><p class="small muted" style="margin-bottom:0">Nowe słowa są wybierane z zaznaczonych talii. Na początek polecamy „Rdzeń” i „Dokumenty”.</p></div>';
    $$('#flds .chip').forEach(function (c) {
      c.onclick = function () {
        var f = c.dataset.f, i = vocabFields.indexOf(f);
        if (i >= 0) vocabFields.splice(i, 1); else vocabFields.push(f);
        try { localStorage.setItem('lacina_fields', JSON.stringify(vocabFields)); } catch (e) { }
        VIEWS.slownictwo(el, []);
      };
      c.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); } };
    });
  };
  function formsSummary(e) {
    var fs = LAT.forms(e);
    if (/^n\d/.test(e.cls)) {
      var t = [[], []]; fs.forEach(function (x) { var r = x.nm === 's' ? 0 : 1; t[r][x.cs] = (t[r][x.cs] ? t[r][x.cs] + '/' : '') + x.f; });
      var pl = ['mianownik', 'dopełniacz', 'celownik', 'biernik', 'ablatyw'];
      return '<table class="tbl par"><tr><th></th><th>l. poj.</th><th>l. mn.</th></tr>' + LAT.CASES.map(function (c, i) { return '<tr><td>' + c + ' <span class="small">' + pl[i] + '</span></td><td class="la">' + esc(t[0][i] || '–') + '</td><td class="la">' + esc(t[1][i] || '') + '</td></tr>'; }).join('') + '</table>';
    }
    if (e.cls !== 'x' && /^v|sum|possum|volo|nolo|fio|eo|fer/.test(e.cls)) {
      var want = [['praes.', 'ind.'], ['impf.', 'ind.'], ['fut. I', 'ind.'], ['perf.', 'ind.'], ['praes.', 'coni.']];
      var vo = fs.some(function (x) { return x.v === 'act.'; }) ? 'act.' : (fs.some(function (x) { return x.v === 'dep.'; }) ? 'dep.' : '');
      var rows = want.map(function (w) {
        var cells = []; fs.forEach(function (x) { if (x.k === 'verb' && x.t === w[0] && x.m === w[1] && (x.v === vo || x.v === '')) cells[x.p] = cells[x.p] || x.f; });
        return cells.length ? '<tr><td class="small">' + esc(lab(w[0] + ' ' + w[1])) + '</td><td class="la">' + cells.map(esc).join(', ') + '</td></tr>' : '';
      }).join('');
      return '<table class="tbl par">' + rows + '</table>';
    }
    return '';
  }
  function vocabSession(el) {
    var t = today();
    if (S.newDay.d !== t) S.newDay = { d: t, n: 0 };
    var dueIds = Object.keys(S.srs).filter(function (k) { return S.srs[k].due <= t && BYHEAD[k]; });
    var newLeft = Math.max(0, S.settings.newPerDay - S.newDay.n);
    var fresh = LEX.filter(function (e) { return !S.srs[e.head] && e.fields.some(function (f) { return vocabFields.indexOf(f) >= 0; }); }).slice(0, newLeft).map(function (e) { return e.head; });
    var queue = shuffle(dueIds).concat(fresh), done = 0, total = queue.length, xp = 0, good = 0;
    function show() {
      document.onkeydown = null;
      if (!queue.length) {
        el.innerHTML = '<h1>Sesja zakończona</h1><p class="lead">' + (done ? 'Przerobione karty: ' + done + '.' : 'Na dziś nie ma nic do powtórki – wróć jutro albo zaznacz więcej talii.') + '</p><div class="row"><a class="btn pri" href="#/pulpit">' + I('home', 18) + ' Pulpit</a> <a class="btn" href="#/czytanka">' + I('scroll', 18) + ' Do czytanki</a></div>';
        if (done >= 5) { G.celebrate({ icon: 'cards', kicker: 'Memoria bona!', title: 'Sesja powtórek ukończona', stats: [[done, 'kart'], [Math.round(100 * good / done) + '%', 'pamiętane'], ['+' + xp, 'XP']] }); }
        renderNav('slownictwo'); return;
      }
      var id = queue[0], e = BYHEAD[id], isNew = !S.srs[id];
      el.innerHTML = '<p class="small"><a href="#/slownictwo">' + I('left', 16) + ' Słownictwo</a> · pozostało: ' + queue.length + (isNew ? ' · <span class="tag model">nowe słowo</span>' : '') + '</p>' +
        '<div class="qprog"><i style="width:' + (total ? 100 * done / (done + queue.length) : 0) + '%"></i></div>' +
        '<div class="card flash"><div class="la">' + esc(e.head) + '</div><div class="cls">' + esc(LAT.CLS_LABEL[e.cls] || '') + (e.g ? ' · ' + esc(e.g) : '') + (e.fields.indexOf('ep') >= 0 ? ' <span class="tag ep">epoka</span>' : '') + '</div>' +
        '<div class="ans hidden"><b>' + esc(e.pl) + '</b>' + (e.note ? '<div class="small muted" style="margin-top:6px">' + esc(e.note) + '</div>' : '') + '<div style="display:flex;justify-content:center;margin-top:10px" class="small">' + formsSummary(e) + '</div></div>' +
        '<div class="row" style="justify-content:center;margin-top:18px"><button class="btn pri big flip">' + I('eye', 20) + ' Pokaż znaczenie</button></div>' +
        '<div class="grades hidden">' + [['Nie pamiętam', 'wróci za chwilę'], ['Trudne', ''], ['Dobrze', ''], ['Łatwe', '']].map(function (g, i) { return '<button class="btn g' + i + '" data-g="' + i + '">' + g[0] + '<small>' + (g[1] || 'klawisz ' + (i + 1)) + '</small></button>'; }).join('') + '</div></div>';
      var flip = function () { $('.ans', el).classList.remove('hidden'); $('.grades', el).classList.remove('hidden'); $('.flip', el).parentNode.classList.add('hidden'); };
      $('.flip', el).onclick = flip;
      $$('.grades .btn', el).forEach(function (b) {
        b.onclick = function () {
          var g = +b.dataset.g;
          if (isNew) S.newDay.n++;
          srsGrade(id, g); done++;
          if (g >= 2) { good++; var add = 1; xp += add; G.correct(b, add); } else if (g === 1) { good++; xp += 1; G.addXP(1, b); } else G.wrong(b);
          queue.shift();
          if (g === 0) queue.splice(Math.min(queue.length, 3), 0, id);
          setTimeout(show, G.RM ? 0 : 160);
        };
      });
      document.onkeydown = function (ev) {
        if (!$('.flash', el)) { document.onkeydown = null; return; }
        if (ev.key === ' ' && $('.ans', el).classList.contains('hidden')) { ev.preventDefault(); flip(); }
        else if (/^[1-4]$/.test(ev.key) && !$('.grades', el).classList.contains('hidden')) $$('.grades .btn', el)[+ev.key - 1].click();
      };
    }
    show();
  }
  function vocabList(el) {
    el.innerHTML = '<p class="small"><a href="#/slownictwo">' + I('left', 16) + ' Słownictwo</a></p><h1>Słownik aplikacji</h1><div class="row"><input type="text" id="q" placeholder="Szukaj (łac. lub pol.)…" style="flex:1;min-width:200px" aria-label="Szukaj"><select id="fl" aria-label="Pole tematyczne"><option value="">wszystkie pola</option>' + Object.keys(LAT.FIELDS).map(function (f) { return '<option value="' + f + '">' + LAT.FIELDS[f] + '</option>'; }).join('') + '</select></div><div id="lst" class="tblwrap"></div>';
    function draw() {
      var q = $('#q').value.trim().toLowerCase(), fl = $('#fl').value, nq = LAT.norm(q);
      var rows = LEX.filter(function (e) { return (!fl || e.fields.indexOf(fl) >= 0) && (!q || LAT.norm(e.head).indexOf(nq) >= 0 || e.pl.toLowerCase().indexOf(q) >= 0); });
      $('#lst').innerHTML = '<p class="muted small">' + rows.length + ' haseł. Kliknij hasło, aby zobaczyć odmianę.</p><table class="tbl"><tr><th>hasło</th><th>znaczenie</th><th>uwagi</th></tr>' + rows.slice(0, 400).map(function (e) {
        var st = S.srs[e.head];
        return '<tr><td><a href="#" class="la" data-h="' + esc(e.head) + '">' + esc(e.head) + '</a><div class="small muted">' + esc(LAT.CLS_LABEL[e.cls] || '') + '</div></td><td>' + esc(e.pl) + (e.fields.indexOf('ep') >= 0 ? ' <span class="tag ep">epoka</span>' : '') + '</td><td class="small">' + esc(e.note) + (st ? '<div class="muted">powtórka za ' + Math.max(0, st.due - today()) + ' dni</div>' : '') + '</td></tr><tr class="hidden" data-p="' + esc(e.head) + '"><td colspan="3"></td></tr>';
      }).join('') + '</table>';
      $$('#lst a[data-h]').forEach(function (a) {
        a.onclick = function (ev) {
          ev.preventDefault(); var tr = $('#lst tr[data-p="' + CSS.escape(a.dataset.h) + '"]');
          tr.classList.toggle('hidden'); if (!tr.dataset.f) { tr.firstChild.innerHTML = formsSummary(BYHEAD[a.dataset.h]) || '<span class="muted">Słowo nieodmienne.</span>'; tr.dataset.f = 1; }
        };
      });
    }
    $('#q').oninput = draw; $('#fl').onchange = draw; draw();
  }

  /* ============================================================
     CZYTANKA
     ============================================================ */
  VIEWS.czytanka = function (el, args) {
    if (args[0]) return readerView(el, args[0]);
    el.innerHTML = '<h1>Czytanka źródeł</h1><p class="lead">Każde słowo ma glosę: lemat, formę i znaczenie <b>w kontekście</b>. Pomoc wyłączasz stopniowo. Pytania sprawdzają rozumienie (kto, komu, co, kiedy), a nie przekład słowo w słowo.</p>' +
      '<p class="small"><span class="tag real">źródło</span> fragment autentyczny · <span class="tag model">model</span> tekst dydaktyczny na wzór źródeł</p>' +
      '<div class="grid">' + LAT.TEXTS.slice().sort(function (a, b) { return a.level - b.level; }).map(function (t) {
        var st = S.texts[t.id];
        return '<a class="card tile" href="#/czytanka/' + t.id + '"><div class="k">' + [1, 2, 3].map(function (n) { return '<span style="color:' + (n <= t.level ? 'var(--gold)' : 'var(--line2)') + '">' + I('star', 14) + '</span>'; }).join('') + ' ' + esc(t.period) + ' <span class="tag ' + t.kind + '">' + (t.kind === 'real' ? 'źródło' : 'model') + '</span></div><div class="t">' + esc(t.title) + '</div><div class="d">' + (st && st.done ? '<span class="done-mark">' + I('check', 14) + ' ' + st.score + '/' + st.total + '</span> · poziom pomocy ' + st.level + (st.lookups != null ? ', sprawdzeń: ' + st.lookups : '') : esc(t.intro.slice(0, 110)) + '…') + '</div></a>';
      }).join('') + '</div>';
  };
  function readerView(el, id) {
    var T = LAT.TEXTS.find(function (x) { return x.id === id; });
    if (!T) { location.hash = '#/czytanka'; return; }
    var level = (S.texts[id] && S.texts[id].prefLevel) || 1, lookups = 0, showParts = false, wasDone = S.texts[id] && S.texts[id].done;
    var hard = {}; T.hard.forEach(function (h) { hard[h] = 1; });
    function tokens(str) {
      return str.replace(/([A-Za-zÀ-ž]+)(#\d+)?([.,;:!?]*)/g, function (m, w, suf, pun) {
        var key = (w + (suf || '')).toLowerCase(), g = T.gl[key] || T.gl[w.toLowerCase()];
        var gl = g ? g.split('|') : null;
        var isHard = hard[key] || hard[w.toLowerCase()];
        return '<span class="wb' + (isHard ? ' hasg' : '') + '"><span><span class="w" role="button" tabindex="0" data-k="' + esc(key) + '" data-w="' + esc(w) + '">' + esc(w) + '</span>' + esc(pun) + '</span>' + (gl ? '<span class="g">' + esc(gl[2]) + '</span>' : '') + '</span>';
      });
    }
    var COLORS = ['#c0392b', '#8e44ad', '#2c7fb8', '#16a085', '#d35400', '#7f8c8d', '#27ae60', '#b03a2e', '#2e86c1', '#a04000', '#5d6d7e', '#1e8449', '#6c3483'];
    function textHtml() {
      if (T.parts && showParts) return T.parts.map(function (p, i) { return '<span class="seg" style="box-shadow: inset 0 -3px 0 ' + COLORS[i % COLORS.length] + '"><span class="part-chip" style="background:' + COLORS[i % COLORS.length] + '">' + p[0] + '</span>' + tokens(p[1]) + '</span> '; }).join('');
      return tokens(T.text);
    }
    el.innerHTML = '<p class="small"><a href="#/czytanka">' + I('left', 16) + ' Czytanka</a></p><h1>' + esc(T.title) + '</h1>' +
      '<p class="muted small">' + esc(T.period) + ' · <span class="tag ' + T.kind + '">' + (T.kind === 'real' ? 'źródło' : 'model') + '</span> · ' + esc(T.source) + '</p><p>' + esc(T.intro) + '</p>' +
      '<div class="row sp"><div class="levels" id="lv" role="group" aria-label="Poziom pomocy"><button data-l="1">1 · pełne glosy</button><button data-l="2">2 · trudne słowa</button><button data-l="3">3 · bez pomocy</button></div>' +
      (T.parts ? '<button class="btn sm" id="parts">' + I('stamp', 16) + ' Części dokumentu</button>' : '') + '<span class="small muted" id="lk"></span></div>' +
      '<div class="card"><div class="reader" id="rd"></div></div>' +
      '<p class="small muted">Dotknij słowa, aby zobaczyć glosę i analizę. Na poziomie 3 sprawdzenia są liczone, a za pełny wynik bez pomocy jest odznaka.</p>' +
      '<h2>Pytania do tekstu</h2><div class="card" id="qs"></div>' +
      '<h2>Przekład</h2><div class="row"><button class="btn" id="trb">' + I('eye', 18) + ' Pokaż przekład</button></div><div class="tr hidden" id="tr" style="margin-top:12px">' + esc(T.tr) + '</div>';
    function draw() {
      var rd = $('#rd'); rd.className = 'reader la l' + level; rd.innerHTML = textHtml();
      $$('#lv button').forEach(function (b) { b.classList.toggle('on', +b.dataset.l === level); });
      $('#lk').textContent = level === 3 ? 'sprawdzenia: ' + lookups : '';
      $$('.w', rd).forEach(function (w) {
        w.onclick = function (ev) {
          ev.stopPropagation();
          var g = T.gl[w.dataset.k] || T.gl[w.dataset.w.toLowerCase()];
          if (level === 3 && !w.classList.contains('looked')) { lookups++; w.classList.add('looked'); $('#lk').textContent = 'sprawdzenia: ' + lookups; }
          var gl = g ? g.split('|') : null;
          showPop(w, (gl ? '<div class="lem">' + esc(gl[0]) + '</div><div class="fm">' + esc(lab(gl[1])) + '</div><div class="mn">→ <b>' + esc(gl[2]) + '</b></div>' : '<div class="lem">' + esc(w.dataset.w) + '</div>') +
            '<div class="auto">Analizator: ' + autoAnalysis(w.dataset.w) + '</div>');
        };
        w.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); w.click(); } };
      });
    }
    $$('#lv button').forEach(function (b) { b.onclick = function () { level = +b.dataset.l; S.texts[id] = S.texts[id] || {}; S.texts[id].prefLevel = level; save(); draw(); }; });
    if ($('#parts')) $('#parts').onclick = function () { showParts = !showParts; this.lastChild.textContent = showParts ? ' Ukryj części' : ' Części dokumentu'; draw(); };
    $('#trb').onclick = function () { $('#tr').classList.toggle('hidden'); };
    draw();
    quiz($('#qs'), T.q, function (sc, tot, xp) {
      var prev = S.texts[id] || {};
      S.texts[id] = { done: true, score: sc, total: tot, level: level, lookups: level === 3 ? lookups : null, prefLevel: prev.prefLevel || level };
      var bonus = 0;
      save(); G.addXP(bonus, null);
      var nx = nextStep();
      G.celebrate({ icon: 'scroll', kicker: sc === tot ? 'Lector egregius!' : 'Lectio peracta!', title: esc(T.title) + ' – przeczytane', sub: level < 3 ? 'Następnym razem spróbuj wyższego poziomu: mniej pomocy to więcej XP.' : 'Czytasz źródło bez pomocy. Tak pracuje historyk.',
        stats: [[sc + '/' + tot, 'wynik'], ['+' + (xp + bonus), 'XP'], ['poz. ' + level, 'pomocy']], secondary: nx ? ['Następny krok', nx.href] : null, big: sc === tot && level === 3 });
      renderNav('czytanka');
    });
  }

  /* ============================================================
     ŁACINA W OBRAZIE
     ============================================================ */
  var CAT_ICON = { arch: 'landmark', pomnik: 'award', obraz: 'image', rekopis: 'feather', druk: 'book' };
  VIEWS.obrazy = function (el, args) {
    if (args[0] === 'epigrafika') return epigraphyView(el);
    if (args[0]) return imageView(el, args[0]);
    el.innerHTML = '<h1>Łacina w obrazie</h1><p class="lead">Łacina na budowlach, nagrobkach, obrazach, w rękopisach i drukach. Najpierw spróbuj odczytać napis ze zdjęcia, potem odsłoń transkrypcję, rozwinięcie skrótów i przekład.</p>' +
      '<p class="small muted">' + I('wifi', 16) + ' Zdjęcia pochodzą z Wikimedia Commons i ładują się z sieci. Dotknięcie zdjęcia otwiera oryginał w pełnej rozdzielczości. W Ustawieniach możesz zapisać zdjęcia do użytku bez internetu.</p>' +
      '<div class="tabs" id="cats"><button class="on" data-c="">wszystkie (' + LAT.IMAGES.length + ')</button>' + Object.keys(LAT.IMG_CATS).map(function (c) { return '<button data-c="' + c + '">' + LAT.IMG_CATS[c] + ' (' + LAT.IMAGES.filter(function (x) { return x.cat === c; }).length + ')</button>'; }).join('') + '</div>' +
      '<div class="row" style="margin-bottom:14px"><span class="small muted">Przerobione: <b>' + Object.keys(S.imgs).length + ' / ' + LAT.IMAGES.length + '</b></span><a class="btn sm" href="#/obrazy/epigrafika">' + I('key', 16) + ' Skróty epigraficzne</a></div>' +
      '<div class="grid" id="ig"></div>';
    function draw(c) {
      $('#ig').innerHTML = LAT.IMAGES.filter(function (x) { return !c || x.cat === c; }).map(function (x) {
        return '<a class="card tile imgcard" href="#/obrazy/' + x.id + '"><div class="ph"><img loading="lazy" alt="' + esc(x.title) + '" src="' + esc(x.img.replace('/1280px-', '/500px-')) + '" onerror="this.parentNode.textContent=\'zdjęcie niedostępne offline\'"></div><div class="tx"><div class="k">' + I(CAT_ICON[x.cat], 14) + ' ' + LAT.IMG_CATS[x.cat] + ' · ' + esc(x.date) + (S.imgs[x.id] ? ' · <span class="done-mark">' + I('check', 14) + '</span>' : '') + '</div><div class="t" style="font-size:1.08rem">' + esc(x.title) + '</div></div></a>';
      }).join('');
    }
    $$('#cats button').forEach(function (ch) { ch.onclick = function () { $$('#cats button').forEach(function (x) { x.classList.remove('on'); }); ch.classList.add('on'); draw(ch.dataset.c); }; });
    draw('');
  };
  function imageView(el, id) {
    var IM = LAT.IMAGES.find(function (x) { return x.id === id; }); if (!IM) { location.hash = '#/obrazy'; return; }
    var idx = LAT.IMAGES.indexOf(IM), next = LAT.IMAGES[idx + 1], wasDone = S.imgs[id];
    el.innerHTML = '<p class="small"><a href="#/obrazy">' + I('left', 16) + ' Łacina w obrazie</a></p><h1>' + esc(IM.title) + '</h1><p class="muted small">' + I(CAT_ICON[IM.cat], 16) + ' ' + LAT.IMG_CATS[IM.cat] + ' · ' + esc(IM.place) + ' · ' + esc(IM.date) + '</p>' +
      '<div class="figure"><a href="' + esc(IM.page) + '" target="_blank" rel="noopener"><img src="' + esc(IM.img) + '" alt="' + esc(IM.title) + '" onerror="this.parentNode.innerHTML=\'<div class=offline>Zdjęcie niedostępne (brak połączenia?). Otwórz na Wikimedia Commons.</div>\'"></a><div class="cap">Fot. ' + esc(IM.credit) + ' · Wikimedia Commons · dotknij, aby otworzyć oryginał</div></div>' +
      '<h2>' + I('feather', 22) + ' Spróbuj odczytać</h2><textarea id="try" placeholder="Przepisz napis tak, jak go widzisz…" aria-label="Twoje odczytanie"></textarea>' +
      '<div class="row" style="margin-top:10px"><button class="btn" data-s="r">' + I('eye', 18) + ' Transkrypcja</button><button class="btn" data-s="e">' + I('key', 18) + ' Rozwinięcie skrótów</button><button class="btn" data-s="t">' + I('bookopen', 18) + ' Przekład</button><button class="btn" data-s="n">' + I('help', 18) + ' Komentarz</button></div>' +
      '<div id="sr" class="hidden fade-in" style="margin-top:12px"><div class="muted small">Transkrypcja</div><div class="inscr">' + esc(IM.read) + '</div></div>' +
      '<div id="se" class="hidden fade-in" style="margin-top:12px"><div class="muted small">Z rozwiniętymi skrótami</div><div class="inscr la">' + esc(IM.exp) + '</div></div>' +
      '<div id="st" class="hidden tr fade-in" style="margin-top:12px">' + esc(IM.tr) + '</div>' +
      '<div id="sn" class="hidden card fade-in" style="margin-top:12px">' + esc(IM.notes) + '</div>' +
      '<h2>Pytania</h2><div class="card" id="qs"></div>' +
      (next ? '<div class="row" style="margin-top:20px"><a class="btn" href="#/obrazy/' + next.id + '">Następny: ' + esc(next.title) + ' ' + I('right', 18) + '</a></div>' : '');
    $$('[data-s]', el).forEach(function (b) { b.onclick = function () { $('#s' + b.dataset.s).classList.toggle('hidden'); LAT.glossify($('#sn')); }; });
    quiz($('#qs'), IM.q, function (sc, tot, xp) {
      S.imgs[id] = 1; save();
      if (!wasDone) { G.toast(I('landmark', 22) + '<div><b>Napis odczytany!</b><br><small>+' + xp + ' XP · ' + Object.keys(S.imgs).length + ' z ' + LAT.IMAGES.length + ' zdjęć</small></div>', 'badge', 2600); G.sound('done'); G.confetti(60); }
    });
  }
  function epigraphyView(el) {
    el.innerHTML = '<p class="small"><a href="#/obrazy">' + I('left', 16) + ' Łacina w obrazie</a></p><h1>Skróty epigraficzne</h1><p class="lead">Inskrypcje skracają słowa przez zawieszenie: zostaje pierwsza litera albo kilka pierwszych liter. Na tablicach i epitafiach w Polsce od XVI w. najczęściej spotkasz <b>D·O·M</b>, <b>A·D</b>, <b>OB(IIT)</b>, <b>AET(ATIS)</b> i chronogramy.</p>' +
      '<div class="tblwrap"><table class="tbl"><tr><th>skrót</th><th>rozwinięcie</th><th>znaczenie</th></tr>' + LAT.EPIGRAPHY.map(function (r) { return '<tr><td class="la"><b>' + esc(r[0]) + '</b></td><td class="la">' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</table></div>' +
      '<h2>Ćwiczenie</h2><div class="card" id="ep"></div><p class="small">Chronogram (data ukryta w większych literach napisu) policzysz w module <a href="#/chronologia/rzymskie">Chronologia → Liczby rzymskie</a>.</p>';
    var qs = shuffle(LAT.EPIGRAPHY.filter(function (r) { return !/^M/.test(r[0]); })).slice(0, 6).map(function (r) {
      var others = shuffle(LAT.EPIGRAPHY.filter(function (x) { return x !== r; })).slice(0, 3).map(function (x) { return x[2]; });
      return { q: 'Co znaczy <b class="la">' + esc(r[0]) + '</b>?', o: [r[2]].concat(others), a: 0, e: esc(r[1]) };
    });
    quiz($('#ep'), qs);
  }

  /* ============================================================
     DYPLOMATYKA
     ============================================================ */
  function tabs(base, cur, list) {
    return '<div class="tabs" role="tablist">' + list.map(function (t) { return '<button role="tab" aria-selected="' + (cur === t[0]) + '" data-t="' + t[0] + '" class="' + (cur === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>';
  }
  function bindTabs(el, base) { $$('.tabs button', el).forEach(function (b) { b.onclick = function () { location.hash = '#/' + base + '/' + b.dataset.t; }; }); }
  VIEWS.dyplomatyka = function (el, args) {
    var tab = args[0] || 'czesci';
    el.innerHTML = '<h1>Dyplomatyka</h1><p class="lead">Kto rozpozna formułę, rozumie zdanie bez analizy słowo po słowie. To jedna z najbardziej praktycznych umiejętności przy pracy z dokumentami.</p>' +
      tabs('dyplomatyka', tab, [['czesci', 'Części dokumentu'], ['formuly', 'Formuły'], ['szukaj', 'Wyszukiwarka'], ['podzial', 'Podział dokumentu'], ['quiz', 'Quiz formuł']]) + '<div id="tb"></div>';
    bindTabs(el, 'dyplomatyka');
    var tb = $('#tb');
    if (tab === 'czesci') {
      tb.innerHTML = '<p>Klasyczny dokument średniowieczny dzieli się na <b>protokół</b> (początek), <b>kontekst</b> (treść) i <b>eschatokół</b> (zakończenie). Nie każdy dokument ma wszystkie części, a ich kolejność bywa różna (np. świadkowie przed datą).</p><div class="tblwrap"><table class="tbl"><tr><th>część</th><th></th><th>funkcja</th><th>przykład</th></tr>' +
        LAT.DIPLO_PARTS.map(function (p) { return '<tr><td><b>' + p[0] + '</b></td><td class="muted small">' + p[1] + '</td><td>' + esc(p[2]) + '</td><td class="la"><i>' + esc(p[3]) + '</i></td></tr>'; }).join('') + '</table></div>' +
        '<p class="tip">Zobacz pełny dokument z zaznaczonymi częściami: <a href="#/czytanka/t5">Czytanka → Pełny dokument książęcy</a>. Ten sam układ ma Magna Carta: <a href="#/obrazy/i23">Łacina w obrazie</a>.</p>';
    } else if (tab === 'formuly') {
      tb.innerHTML = '<input type="text" id="fq" placeholder="Filtruj…" style="width:100%;max-width:360px" aria-label="Filtruj formuły"><div id="fl"></div>';
      var drawF = function () {
        var q = LAT.norm($('#fq').value);
        $('#fl').innerHTML = LAT.DIPLO_PARTS.map(function (p) {
          var fs = LAT.FORMULAS.filter(function (f) { return f[0] === p[0] && (!q || LAT.norm(f[1] + f[2]).indexOf(q) >= 0); });
          return fs.length ? '<h3>' + p[0] + '</h3>' + fs.map(function (f) { return '<div class="res"><div class="la"><i>' + esc(f[1]) + '</i></div><div class="small">' + esc(f[2]) + '</div></div>'; }).join('') : '';
        }).join('');
      };
      $('#fq').oninput = drawF; drawF();
    } else if (tab === 'szukaj') {
      tb.innerHTML = '<p>Wklej tekst dokumentu (pisownia dowolna, klasyczna lub średniowieczna). Aplikacja zaznaczy rozpoznane formuły i przypisze je do części dokumentu.</p><textarea id="ft" aria-label="Tekst dokumentu">' + esc(LAT.TEXTS[0].text) + '</textarea><div class="row" style="margin-top:8px"><button class="btn pri" id="fgo">' + I('search', 18) + ' Szukaj formuł</button></div><div id="fres"></div>';
      $('#fgo').onclick = function () { formulaFinder($('#ft').value, $('#fres')); };
      formulaFinder($('#ft').value, $('#fres'));
    } else if (tab === 'podzial') partitionExercise(tb);
    else if (tab === 'quiz') {
      var qs = shuffle(LAT.FORMULAS).slice(0, 8).map(function (f) {
        var labels = LAT.DIPLO_PARTS.map(function (p) { return p[0]; });
        var others = shuffle(labels.filter(function (l) { return l !== f[0]; })).slice(0, 3);
        return { q: 'Do jakiej części dokumentu należy formuła <i class="la">' + esc(f[1]) + '</i>?', o: [f[0]].concat(others), a: 0, e: esc(f[2]) };
      });
      tb.innerHTML = '<div class="card" id="fqz"></div>';
      quiz($('#fqz'), qs, function (s, t) { var first = !(S.lessons.diplo && S.lessons.diplo.done); S.lessons.diplo = { done: true, score: s, total: t }; save(); if (first) { G.celebrate({ icon: 'stamp', kicker: 'Bene!', title: 'Quiz formuł ukończony', stats: [[s + '/' + t, 'wynik']] }); } });
    }
  };
  function formulaFinder(text, out) {
    var words = [], re = /[A-Za-zÀ-ž]+/g, m;
    while ((m = re.exec(text))) words.push({ w: m[0], i: m.index, n: LAT.norm(m[0]) });
    var marks = new Array(words.length), found = [];
    LAT.FORMULAS.forEach(function (f, fi) {
      f[3].split('|').forEach(function (ph) {
        var pw = ph.trim().split(/\s+/).map(LAT.norm);
        for (var i = 0; i + pw.length <= words.length; i++) {
          var ok = true; for (var j = 0; j < pw.length; j++) if (words[i + j].n !== pw[j]) { ok = false; break; }
          if (ok) { for (var k = 0; k < pw.length; k++) marks[i + k] = f[0]; if (!found.some(function (x) { return x.fi === fi; })) found.push({ fi: fi, at: i }); }
        }
      });
    });
    var html = '', last = 0;
    words.forEach(function (w, i) { html += esc(text.slice(last, w.i)); html += marks[i] ? '<mark title="' + marks[i] + '">' + esc(w.w) + '</mark>' : esc(w.w); last = w.i + w.w.length; });
    html += esc(text.slice(last));
    found.sort(function (a, b) { return a.at - b.at; });
    out.innerHTML = '<div class="card la" style="font-size:1.12rem;line-height:1.8">' + html + '</div>' + (found.length ? '<h3>Rozpoznane formuły (' + found.length + ')</h3>' + found.map(function (x) { var f = LAT.FORMULAS[x.fi]; return '<div class="res"><span class="tag">' + f[0] + '</span> <i class="la">' + esc(f[1]) + '</i><div class="small">' + esc(f[2]) + '</div></div>'; }).join('') : '<p class="muted">Nie rozpoznano żadnej formuły z biblioteki.</p>');
  }
  function partitionExercise(tb) {
    var T = LAT.TEXTS.find(function (t) { return t.parts; });
    var labels = LAT.DIPLO_PARTS.map(function (p) { return p[0]; });
    tb.innerHTML = '<p>Przypisz każdemu fragmentowi dokumentu odpowiednią część. Tekst: <a href="#/czytanka/' + T.id + '">' + esc(T.title) + '</a>. Ściąga: zakładka „Części dokumentu”.</p>' +
      T.parts.map(function (p, i) { return '<div class="card" style="margin:10px 0;padding:14px 16px"><div class="la" style="font-size:1.12rem">' + esc(p[1].replace(/#\d+/g, '')) + '</div><div class="row" style="margin-top:8px"><select data-i="' + i + '" aria-label="Część dokumentu"><option value="">— wybierz część —</option>' + labels.map(function (l) { return '<option>' + l + '</option>'; }).join('') + '</select><span class="small fb"></span></div></div>'; }).join('') +
      '<div class="row"><button class="btn pri big" id="pchk">' + I('check', 20) + ' Sprawdź</button> <span id="psc" class="score"></span></div>';
    $('#pchk').onclick = function () {
      var ok = 0;
      $$('select[data-i]', tb).forEach(function (s) {
        var good = T.parts[+s.dataset.i][0], fb = s.parentNode.querySelector('.fb');
        if (s.value === good) { ok++; fb.innerHTML = '<span class="ok">' + I('check', 18) + '</span>'; } else fb.innerHTML = '<span class="bad">' + I('x', 18) + ' ' + good + '</span>';
      });
      $('#psc').textContent = ok + ' / ' + T.parts.length;
      G.addXP(ok, this);
      if (ok === T.parts.length) { S.partPerfect++; save(); G.celebrate({ icon: 'stamp', kicker: 'Notarius!', title: 'Bezbłędny podział dokumentu', sub: 'Rozpoznajesz wszystkie 13 części – jak średniowieczny kancelista.', stats: [['13/13', 'części'], ['+' + (ok * 2 + 25), 'XP']], big: true }); }
    };
  }

  /* ============================================================
     CHRONOLOGIA
     ============================================================ */
  function feastOptions(sel) {
    return '<optgroup label="Święta stałe">' + LAT.FEASTS.map(function (f) { return '<option value="' + f[0] + '"' + (f[0] === sel ? ' selected' : '') + '>' + esc(f[2]) + ' (' + f[4] + '.' + String(f[3]).padStart(2, '0') + ')</option>'; }).join('') + '</optgroup>' +
      '<optgroup label="Święta ruchome">' + LAT.MOVABLE.map(function (f) { return '<option value="' + f[0] + '"' + (f[0] === sel ? ' selected' : '') + '>' + esc(f[2]) + '</option>'; }).join('') +
      ['adv1', 'adv2', 'adv3', 'adv4'].map(function (k, i) { return '<option value="' + k + '">' + (i + 1) + '. niedziela Adwentu</option>'; }).join('') + '</optgroup>';
  }
  function calSelect(id) { var c = S.settings.cal; return '<select id="' + id + '"><option value="auto"' + (c === 'auto' ? ' selected' : '') + '>auto (juliański do 4 X 1582)</option><option value="J"' + (c === 'J' ? ' selected' : '') + '>juliański</option><option value="G"' + (c === 'G' ? ' selected' : '') + '>gregoriański</option></select>'; }
  var RELS = [['in', 'w dniu święta (in festo)'], ['vig', 'w wigilię (in vigilia)'], ['cras', 'nazajutrz (in crastino)'], ['oct', 'w oktawę (in octava)'], ['post', 'dnia … po (… post festum)'], ['ante', 'dnia … przed (… ante festum)']];
  var WD = [[1, 'feria secunda – poniedziałek'], [2, 'feria tertia – wtorek'], [3, 'feria quarta – środa'], [4, 'feria quinta – czwartek'], [5, 'feria sexta – piątek'], [6, 'sabbato – sobota'], [0, 'dominica – niedziela']];
  VIEWS.chronologia = function (el, args) {
    var tab = args[0] || 'swieta', CH = LAT.CH;
    el.innerHTML = '<h1>Chronologia</h1><p class="lead">Datowanie według świąt to jedna z najbardziej praktycznych umiejętności przy dokumentach. Kalkulator działa jak tablice Grotefenda: uwzględnia Wielkanoc, kalendarz juliański i gregoriański oraz dni tygodnia.</p>' +
      tabs('chronologia', tab, [['swieta', 'Kalkulator świąt'], ['cw', 'Ćwiczenia'], ['odwrotnie', 'Data → formuła'], ['rzymski', 'Kalendarz rzymski'], ['rok', 'Tablica roku'], ['rzymskie', 'Liczby rzymskie'], ['info', 'Style roku']]) + '<div id="tb"></div>';
    bindTabs(el, 'chronologia');
    var tb = $('#tb');
    if (tab === 'swieta') {
      tb.innerHTML = '<div class="card"><div class="row"><label>Rok<br><input type="number" inputmode="numeric" id="y" value="1410" style="width:110px"></label><label>Święto<br><select id="fe" style="max-width:320px">' + feastOptions('mich') + '</select></label></div>' +
        '<div class="row" style="margin-top:10px"><label>Relacja<br><select id="rel">' + RELS.map(function (r) { return '<option value="' + r[0] + '">' + r[1] + '</option>'; }).join('') + '</select></label><label id="wdl" class="hidden">Dzień tygodnia<br><select id="wd">' + WD.map(function (w) { return '<option value="' + w[0] + '">' + w[1] + '</option>'; }).join('') + '</select></label><label>Kalendarz<br>' + calSelect('cal') + '</label></div></div><div id="out"></div>';
      var calc = function () {
        var y = +$('#y').value, k = $('#fe').value, rel = $('#rel').value, wd = +$('#wd').value, cal = $('#cal').value;
        $('#wdl').classList.toggle('hidden', rel !== 'post' && rel !== 'ante');
        if (!y) return;
        var fj = CH.feastJD(k, y, cal), nm = CH.feastName(k), r = CH.applyRel(fj, rel, wd), F = CH.fmt(fj, cal), R = CH.fmt(r, cal);
        $('#out').innerHTML = '<div class="card"><div class="muted small">Formuła</div><div class="la" style="font-size:1.35rem"><i>' + esc(CH.relLatin(rel, wd, nm.la)) + '</i>, anno Domini ' + y + '</div>' +
          '<h3 style="margin-top:12px">' + I('calendar', 22) + ' ' + esc(R.txt) + '</h3><div class="small muted">Samo święto (' + esc(nm.pl) + '): ' + esc(F.txt) + (nm.note ? ' · ' + esc(nm.note) : '') + '</div>' +
          (y >= 1582 && y <= 1700 ? '<p class="small warn">Kalendarz gregoriański przyjęto w Koronie w 1582 r., ale np. w Prusach Książęcych w 1610 r., a na Śląsku w 1584 r. Prawosławni i część protestantów używali dalej juliańskiego.</p>' : '') + '</div>';
      };
      $$('#tb input, #tb select').forEach(function (x) { x.oninput = calc; x.onchange = calc; }); calc();
    } else if (tab === 'odwrotnie') {
      tb.innerHTML = '<div class="card"><div class="row"><label>Dzień<br><input type="number" inputmode="numeric" id="d" value="15" min="1" max="31" style="width:80px"></label><label>Miesiąc<br><input type="number" inputmode="numeric" id="m" value="7" min="1" max="12" style="width:80px"></label><label>Rok<br><input type="number" inputmode="numeric" id="y" value="1410" style="width:110px"></label><label>Kalendarz<br>' + calSelect('cal') + '</label></div></div><div id="out"></div>';
      var go = function () {
        var d = +$('#d').value, m = +$('#m').value, y = +$('#y').value, cal = $('#cal').value; if (!d || !m || !y) return;
        var jd = CH.toJD(y, m, d, cal), F = CH.fmt(jd, cal), list = CH.describe(jd, cal).slice(0, 14);
        $('#out').innerHTML = '<div class="card"><h3>' + esc(F.txt) + ' – <i class="la">' + F.feria + '</i></h3><p class="small muted">Możliwe formuły datacyjne (najbliższe święta):</p>' + list.map(function (x) { return '<div class="res"><i class="la">' + esc(x.la) + '</i><div class="small">' + esc(x.pl) + '</div></div>'; }).join('') + '</div>';
      };
      $$('#tb input, #tb select').forEach(function (x) { x.oninput = go; x.onchange = go; }); go();
    } else if (tab === 'rzymski') {
      tb.innerHTML = '<div class="card"><h3>Data → kalendarz rzymski</h3><div class="row"><label>Dzień<br><input type="number" inputmode="numeric" id="d" value="15" style="width:80px"></label><label>Miesiąc<br><input type="number" inputmode="numeric" id="m" value="3" style="width:80px"></label><label class="row" style="gap:6px"><input type="checkbox" id="lp"> rok przestępny</label></div><div id="o1" style="margin-top:10px"></div></div>' +
        '<div class="card"><h3>Kalendarz rzymski → data</h3><input type="text" id="rt" value="III Nonas Iunii" style="width:100%;max-width:380px" aria-label="Zapis rzymski"><p class="small muted">Np. <i>pridie Kalendas Martii</i>, <i>XIV Kalendas Octobris</i>, <i>Idibus Martiis</i>, <i>a.d. VIII Id. Ian.</i></p><label class="row" style="gap:6px"><input type="checkbox" id="lp2"> rok przestępny</label><div id="o2" style="margin-top:10px"></div></div>' +
        '<div class="card small"><b>Zasada.</b> Każdy miesiąc ma trzy punkty: <i>Kalendae</i> (1. dzień), <i>Nonae</i> (5., a w marcu, maju, lipcu i październiku 7.) i <i>Idus</i> (13., odpowiednio 15.). Dni liczy się <b>wstecz</b> do najbliższego punktu, wliczając oba końce: dzień przed to <i>pridie</i>, dwa dni przed to <i>ante diem III</i>. Po Idach liczy się do Kalend <b>następnego</b> miesiąca. W roku przestępnym 24 lutego liczono podwójnie (<i>bis sextum</i>).</div>';
      var g1 = function () { var d = +$('#d').value, m = +$('#m').value; if (!d || !m || m > 12) return; var r = CH.toRomanCal(d, m, $('#lp').checked); $('#o1').innerHTML = '<div class="la" style="font-size:1.25rem"><i>' + esc(r.cls) + '</i></div><div class="small muted">skrót: ' + esc(r.abbr) + ' · forma średniowieczna: <i>' + esc(r.med) + '</i></div>'; };
      var g2 = function () { var p = CH.parseRomanCal($('#rt').value); if (!p) { $('#o2').innerHTML = '<span class="bad">Nie rozpoznano zapisu.</span>'; return; } var r = CH.fromRomanCal(p.cnt, p.ref, p.month, $('#lp2').checked, p.bis); $('#o2').innerHTML = '<h3 style="margin:0">' + r.d + ' ' + CH.MIES[r.m - 1] + '</h3>'; };
      ['d', 'm', 'lp'].forEach(function (i) { $('#' + i).oninput = g1; $('#' + i).onchange = g1; }); ['rt', 'lp2'].forEach(function (i) { $('#' + i).oninput = g2; $('#' + i).onchange = g2; }); g1(); g2();
    } else if (tab === 'rok') {
      tb.innerHTML = '<div class="card"><div class="row"><label>Rok<br><input type="number" inputmode="numeric" id="y" value="1466" style="width:110px"></label><label>Kalendarz<br>' + calSelect('cal') + '</label></div></div><div id="out"></div>';
      var gy = function () {
        var y = +$('#y').value, cal = $('#cal').value; if (!y) return; var info = CH.yearInfo(y, cal);
        var mv = LAT.MOVABLE.map(function (f) { return '<tr><td>' + esc(f[2]) + '</td><td class="la"><i>' + esc(f[1]) + '</i></td><td>' + esc(CH.fmt(CH.feastJD(f[0], y, cal), cal).txt.replace(/ \(kal.*$/, '')) + '</td></tr>'; }).join('');
        $('#out').innerHTML = '<div class="card"><dl class="kv"><dt>Wielkanoc</dt><dd><b>' + esc(info.easter.txt) + '</b></dd><dt>Rok przestępny</dt><dd>' + (info.leap ? 'tak' : 'nie') + '</dd><dt>Litera niedzielna</dt><dd>' + info.dominical + '</dd><dt>Złota liczba</dt><dd>' + info.golden + '</dd><dt>Indykcja</dt><dd>' + info.indiction + '</dd></dl></div>' +
          '<div class="card tblwrap"><h3>Święta ruchome ' + y + '</h3><table class="tbl">' + mv + '</table></div>';
      };
      $('#y').oninput = gy; $('#cal').onchange = gy; gy();
    } else if (tab === 'rzymskie') {
      tb.innerHTML = '<div class="card"><h3>Liczby rzymskie</h3><div class="row"><input type="text" id="rn" value="M°CC°LXV" style="width:200px" aria-label="Liczba"><span id="ro"></span></div><p class="small muted">Rozpoznaje też zapisy średniowieczne: <i>iiij</i>, <i>M°CCC°</i>, końcowe <i>j</i>. Liczbę arabską zamienia na rzymską.</p></div>' +
        '<div class="card"><h3>Chronogram</h3><p class="small">W chronogramie wyróżnione (większe) litery napisu, które są cyframi rzymskimi, sumują się do roku. Spotkasz je na barokowych tablicach, epitafiach i w drukach okolicznościowych.</p><textarea id="cg" aria-label="Tekst chronogramu">SANCTVS StanIsLaVs</textarea><label class="row" style="gap:6px"><input type="checkbox" id="up" checked> tylko wielkie litery</label><div id="co" style="margin-top:8px"></div></div>';
      var gr = function () {
        var v = $('#rn').value.trim(), out;
        if (/^\d+$/.test(v)) out = '<b>' + CH.toRoman(+v) + '</b> · średniowiecznie: <i>' + CH.toRomanMedieval(+v) + '</i>';
        else { var n = CH.fromRoman(v); out = n ? '= <b>' + n + '</b>' : '<span class="bad">nie rozpoznano</span>'; }
        $('#ro').innerHTML = out;
      };
      var gc = function () { var r = CH.chronogram($('#cg').value, $('#up').checked); $('#co').innerHTML = 'Litery: <b class="la">' + esc(r.letters.split('').join(' + ')) + '</b> = <b>' + r.total + '</b>'; };
      $('#rn').oninput = gr; $('#cg').oninput = gc; $('#up').onchange = gc; gr(); gc();
    } else if (tab === 'cw') chronoExercise(tb);
    else if (tab === 'info') {
      tb.innerHTML = '<div class="card lesson-body"><h3>Style początku roku</h3><table class="tbl"><tr><th>styl</th><th>początek roku</th><th>uwagi</th></tr>' +
        '<tr><td>a nativitate (bożonarodzeniowy)</td><td>25 XII</td><td>częsty w średniowieczu, także w Polsce; daty z 25–31 XII należą już do „następnego” roku</td></tr>' +
        '<tr><td>a circumcisione (styl obrzezania)</td><td>1 I</td><td>dzisiejszy; w Polsce dominuje od XV–XVI w.</td></tr>' +
        '<tr><td>ab incarnatione (zwiastowania)</td><td>25 III</td><td>florencki (opóźnia się) i pizański (wyprzedza o rok)</td></tr>' +
        '<tr><td>a resurrectione (wielkanocny)</td><td>Wielkanoc</td><td>Francja; rok ma różną długość</td></tr></table>' +
        '<p class="warn">Dokument datowany w stylu bożonarodzeniowym „28 XII 1300” to według dzisiejszej rachuby 28 XII 1299. Ustalaj styl kancelarii przed przeliczeniem.</p>' +
        '<h3>Indykcja</h3><p>15-letni cykl liczony od 312 r. W dokumencie: <i class="la">indictione tertia</i>. W aplikacji: indykcja = (rok + 2) mod 15 + 1. Kancelarie zaczynały rok indykcyjny różnie: <b>grecka</b> 1 IX, <b>cesarska (Bedy)</b> 24 IX, <b>rzymska / papieska</b> 25 XII lub 1 I. Indykcja pomaga wykryć błędy kopistów w roku.</p>' +
        '<h3>Lata panowania i pontyfikatu</h3><p>Formuły <i class="la">regni nostri anno…</i>, <i class="la">pontificatus nostri anno…</i> liczą lata od elekcji, koronacji lub konsekracji, nie od 1 stycznia.</p>' +
        '<h3>Godziny</h3><p>Godziny kanoniczne: <i class="la">ad matutinas, prima, tertia, sexta, nona, vesperae, completorium</i>. Nie przeliczaj ich na zegarowe zbyt dokładnie.</p></div>';
    }
  };
  function chronoExercise(tb) {
    var CH = LAT.CH, COMMON = ['mich', 'martini', 'iohbapt', 'petpaul', 'assump', 'nativmar', 'adalb', 'stanmai', 'andr', 'nicol', 'omnsan', 'purif', 'epiph', 'pascha', 'pent', 'laet', 'invoc', 'corp', 'barth', 'iacobi', 'laur', 'georg', 'hedw', 'cathar', 'simiud'];
    var streakC = 0;
    function gen() {
      var k = pick(COMMON), y = 1250 + Math.floor(Math.random() * 500), rel = pick(['post', 'post', 'post', 'ante', 'vig', 'cras', 'oct', 'in']), wd = pick([0, 1, 2, 3, 4, 5, 6]);
      var nm = CH.feastName(k), fj = CH.feastJD(k, y, 'auto'), r = CH.applyRel(fj, rel, wd);
      var F = CH.fmt(fj, 'auto'), R = CH.fmt(r, 'auto');
      tb.innerHTML = '<div class="card"><div class="muted small">Ustal datę dzienną (kalendarz obowiązujący w Koronie w danym roku). Podpowiedź: <a href="#/chronologia/rok" target="_blank">tablica roku</a>.</div>' +
        '<div class="la" style="font-size:1.4rem;margin:12px 0"><i>' + esc(CH.relLatin(rel, wd, nm.la)) + ', anno Domini ' + y + '</i></div>' +
        '<div class="small muted" style="margin-bottom:10px">' + esc(nm.pl) + (/^festum|^in festo/.test(CH.relLatin(rel, wd, nm.la)) ? '' : '') + '</div>' +
        '<div class="row"><label>Dzień<br><input type="number" inputmode="numeric" id="ad" min="1" max="31" style="width:80px"></label><label>Miesiąc<br><select id="am">' + CH.MIES.map(function (m, i) { return '<option value="' + (i + 1) + '">' + (i + 1) + ' – ' + m + '</option>'; }).join('') + '</select></label><button class="btn pri" id="ac">' + I('check', 18) + ' Sprawdź</button><button class="btn" id="an">Pomiń</button></div>' +
        '<div class="expl hidden" id="ae"></div><p class="small muted" style="margin-top:12px">Wynik w ćwiczeniach dat: ' + S.chrono.ok + ' / ' + S.chrono.all + (streakC > 1 ? ' · seria: ' + streakC : '') + '</p></div>';
      $('#am').value = String(F.m);
      $('#ac').onclick = function () {
        var good = +$('#ad').value === R.d && +$('#am').value === R.m;
        S.chrono.all++; if (good) { S.chrono.ok++; streakC++; G.correct(this, 1); } else { streakC = 0; G.wrong(this); } save();
        var e = $('#ae'); e.className = 'expl ' + (good ? 'good' : 'badx');
        e.innerHTML = (good ? '<b class="ok">Dobrze!</b> ' : '<b class="bad">Nie.</b> ') + 'Rozwiązanie: <b>' + esc(R.txt) + '</b>.<br>Krok po kroku: ' + esc(nm.pl) + ' w ' + y + ' r. wypadło: ' + esc(F.txt) + '. ' +
          ({ post: 'Szukamy pierwszego dnia „' + CH.DNI[wd] + '” po święcie.', ante: 'Szukamy ostatniego dnia „' + CH.DNI[wd] + '” przed świętem.', vig: 'Wigilia to dzień przed świętem.', cras: 'In crastino to następny dzień.', oct: 'Oktawa to 7 dni po święcie (ósmy dzień, licząc samo święto).', in: 'Data samego święta.' })[rel] +
          '<div class="row" style="margin-top:8px"><button class="btn pri" id="anx">Następne ' + I('right', 18) + '</button></div>';
        $('#anx').onclick = gen; $('#ac').disabled = true;
      };
      $('#an').onclick = gen;
    }
    gen();
  }

  /* ============================================================
     SKRÓTY I PISOWNIA
     ============================================================ */
  VIEWS.skroty = function (el, args) {
    var tab = args[0] || 'szukaj';
    el.innerHTML = '<h1>Skróty i pisownia</h1><p class="lead">Skryptorzy skracali niemal każde często używane słowo. Trzy podstawowe typy: <b>suspensja</b> (zostaje początek: <i>fer.</i> = feria), <b>kontrakcja</b> (zostaje początek i koniec, nad wyrazem kreska: <span class="ms">dn̄s</span> = dominus) i <b>znaki specjalne</b> (<span class="ms">ꝑ ꝓ ⁊ ꝯ ꝰ</span>).</p>' +
      tabs('skroty', tab, [['szukaj', 'Wyszukiwarka'], ['cw', 'Ćwiczenie: rozwiń skrót'], ['pisownia', 'Normalizator pisowni']]) + '<div id="tb"></div>';
    bindTabs(el, 'skroty');
    var tb = $('#tb'), TY = { s: 'suspensja', k: 'kontrakcja', z: 'znak specjalny', t: 'tytulatura (nowożytna)' };
    if (tab === 'szukaj') {
      tb.innerHTML = '<div class="row"><input type="text" id="aq" placeholder="Wpisz skrót lub słowo, np. dns, per, episcopus…" style="flex:1;min-width:220px" aria-label="Szukaj skrótu"><select id="at" aria-label="Typ"><option value="">wszystkie typy</option>' + Object.keys(TY).map(function (k) { return '<option value="' + k + '">' + TY[k] + '</option>'; }).join('') + '</select></div><p class="small muted">Wyszukiwanie ignoruje znaki skrótu: wpisz same litery (np. <i>dns</i>, <i>oia</i>, <i>p</i>).</p><div id="al" class="tblwrap"></div>' +
        '<p class="small muted">Znaki specjalne wymagają czcionki ze standardem MUFI (np. Junicode, Segoe UI Historic). Pełny słownik skrótów: A. Cappelli, <i>Lexicon abbreviaturarum</i>.</p>';
      var strip = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[ꝑꝓ]/g, 'p').replace(/[ꝗꝙ]/g, 'q').replace(/⁊/g, 'et').replace(/ꝯ/g, 'con').replace(/ꝰ/g, 'us').replace(/ꝝ/g, 'rum').toLowerCase(); };
      var da = function () {
        var q = strip($('#aq').value.trim()), ty = $('#at').value;
        var rows = LAT.ABBR.filter(function (a) { return (!ty || a[2] === ty) && (!q || strip(a[0]).replace(/[^a-z]/g, '').indexOf(q.replace(/[^a-z]/g, '')) >= 0 || a[1].toLowerCase().indexOf(q) >= 0); });
        $('#al').innerHTML = '<table class="tbl"><tr><th>zapis</th><th>rozwinięcie</th><th>typ</th><th>uwagi</th></tr>' + rows.map(function (a) { return '<tr><td class="ms"><b>' + esc(a[0]) + '</b></td><td class="la">' + esc(a[1]) + '</td><td class="small">' + TY[a[2]] + '</td><td class="small">' + esc(a[3]) + '</td></tr>'; }).join('') + '</table>';
      };
      $('#aq').oninput = da; $('#at').onchange = da; da();
    } else if (tab === 'cw') {
      var pool, i, ok;
      var start = function () { pool = shuffle(LAT.ABBR.filter(function (a) { return a[2] !== 't'; })).slice(0, 10); i = 0; ok = 0; nx(); };
      var nx = function () {
        if (i >= pool.length) {
          if (ok >= 7) G.celebrate({ icon: 'feather', kicker: 'Abbreviator!', title: 'Seria skrótów: ' + ok + ' / ' + pool.length, stats: [[ok, 'rozwiniętych'], ['+' + ok * 4, 'XP']] });
          tb.innerHTML = '<div class="card"><div class="score">Wynik: ' + ok + ' / ' + pool.length + '</div><button class="btn pri" id="again">' + I('rotate', 18) + ' Nowa seria</button></div>'; $('#again').onclick = start; return;
        }
        var a = pool[i];
        tb.innerHTML = '<div class="qprog"><i style="width:' + (100 * i / pool.length) + '%"></i></div><div class="card" style="text-align:center"><div class="muted small">Skrót ' + (i + 1) + ' / ' + pool.length + '</div><div class="ms drill-form">' + esc(a[0]) + '</div><input type="text" id="ain" placeholder="rozwinięcie…" style="text-align:center" autocapitalize="off" autocomplete="off" aria-label="Rozwinięcie"><div class="row" style="justify-content:center;margin-top:12px"><button class="btn pri" id="aok">' + I('check', 18) + ' Sprawdź</button></div><div class="expl hidden" id="aex"></div></div>';
        $('#ain').focus();
        var chk = function () {
          if ($('#aok').disabled) return; $('#aok').disabled = true;
          var v = LAT.norm($('#ain').value), good = a[1].split(/[\/(),=]/).some(function (x) { var n = LAT.norm(x); return n && (n === v || n.replace(/^-/, '') === v); });
          if (good) { ok++; S.abbrOk++; G.correct($('.drill-form', tb), 1); } else G.wrong($('.drill-form', tb));
          $('#aex').className = 'expl ' + (good ? 'good' : 'badx'); $('#aex').innerHTML = (good ? '<b class="ok">Dobrze.</b> ' : '<b class="bad">Nie.</b> ') + '<b class="la">' + esc(a[1]) + '</b> – ' + esc(a[3] || ({ s: 'suspensja', k: 'kontrakcja', z: 'znak specjalny' })[a[2]]) + '<div class="row" style="justify-content:center;margin-top:8px"><button class="btn pri" id="anx">Dalej ' + I('right', 18) + '</button></div>';
          $('#anx').onclick = function () { i++; nx(); }; $('#anx').focus();
        };
        $('#aok').onclick = chk; $('#ain').onkeydown = function (e) { if (e.key === 'Enter') chk(); };
      };
      start();
    } else {
      tb.innerHTML = '<p>Wpisz słowo w pisowni źródła. Dostaniesz prawdopodobną pisownię klasyczną (do szukania w słowniku), opis zmian i analizę formy.</p><input type="text" id="sq" value="presencium" style="width:100%;max-width:360px" aria-label="Słowo"><div id="so"></div>' +
        '<div class="card small"><b>Najczęstsze odpowiedniki:</b> e ↔ ae/oe · ci ↔ ti · michi, nichil ↔ mihi, nihil · y ↔ i · mpn ↔ mn · j ↔ i · u/v · pojedyncze ↔ podwójne spółgłoski · h dodane/opuszczone (habundare, ortus).</div>';
      var gs = function () {
        var w = $('#sq').value.trim(); if (!w) { $('#so').innerHTML = ''; return; }
        var ex = LAT.explainSpelling(w), cl = classicize(w);
        $('#so').innerHTML = '<div class="card"><div class="muted small">Prawdopodobna pisownia klasyczna</div><div class="la" style="font-size:1.45rem"><i>' + esc(cl) + '</i></div>' + (ex.notes.length ? '<ul class="small">' + ex.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' : '') + '<div class="muted small">Analizator:</div>' + autoAnalysis(w) + '</div>';
      };
      $('#sq').oninput = gs; gs();
    }
  };
  function classicize(w) {
    var res = LAT.analyze(w);
    if (res.length) { var key = LAT.norm(w), fm = LAT.forms(res[0].e).find(function (x) { return LAT.norm(x.f) === key; }); if (fm) return fm.f; }
    return LAT.explainSpelling(w).guess;
  }

  /* ============================================================
     NAZWY I MIARY
     ============================================================ */
  VIEWS.nazwy = function (el, args) {
    var tab = args[0] || 'miejsca';
    el.innerHTML = '<h1>Nazwy i miary</h1><p class="lead">Nazwy miejscowe i imiona występują w tekście w różnych przypadkach (<i class="la">in Cracovia, de Gnesna, Wratislaviensis</i>). Rozpoznanie ich oszczędza czas, a znajomość miar i monet pozwala zrozumieć wartość nadania.</p>' +
      tabs('nazwy', tab, [['miejsca', 'Miejscowości'], ['imiona', 'Imiona'], ['miary', 'Miary i monety'], ['quiz', 'Quiz']]) + '<div id="tb"></div>';
    bindTabs(el, 'nazwy');
    var tb = $('#tb');
    if (tab === 'miejsca' || tab === 'imiona') {
      var data = tab === 'miejsca' ? LAT.PLACES : LAT.NAMES;
      tb.innerHTML = '<input type="text" id="nq" placeholder="Szukaj…" style="width:100%;max-width:360px" aria-label="Szukaj"><div id="nl" class="tblwrap"></div>';
      var dn = function () {
        var q = LAT.norm($('#nq').value);
        var rows = data.filter(function (r) { return !q || LAT.norm(r.join(' ')).indexOf(q) >= 0; });
        $('#nl').innerHTML = '<table class="tbl"><tr><th>łacina</th>' + (tab === 'miejsca' ? '<th>przymiotnik</th>' : '') + '<th>polski</th><th>uwagi</th></tr>' + rows.map(function (r) {
          var i = data.indexOf(r);
          return '<tr><td><a href="#" class="la" data-i="' + i + '">' + esc(r[0]) + ', ' + esc(r[1]) + '</a></td>' + (tab === 'miejsca' ? '<td class="la">' + esc(r[3]) + '</td><td>' + esc(r[4]) + '</td><td class="small">' + esc(r[5]) + '</td>' : '<td>' + esc(r[3]) + '</td><td class="small">' + esc(r[4]) + '</td>') + '</tr><tr class="hidden" data-p="' + i + '"><td colspan="4"></td></tr>';
        }).join('') + '</table>';
        $$('#nl a[data-i]').forEach(function (a) {
          a.onclick = function (e) {
            e.preventDefault(); var r = data[+a.dataset.i], tr = $('#nl tr[data-p="' + a.dataset.i + '"]'); tr.classList.toggle('hidden');
            tr.firstChild.innerHTML = (r[2] !== 'x' && !/\//.test(r[0])) ? formsSummary({ parts: [r[0], r[1]], cls: r[2] }) : '<span class="muted">Forma nieodmienna lub zapisy wariantowe.</span>';
          };
        });
      };
      $('#nq').oninput = dn; dn();
    } else if (tab === 'miary') {
      tb.innerHTML = '<div class="tblwrap"><table class="tbl"><tr><th>łacina</th><th>polski</th><th>wartość</th><th>rodzaj</th></tr>' + LAT.MEASURES.map(function (m) { return '<tr><td class="la"><b>' + esc(m[0]) + '</b></td><td>' + esc(m[1]) + '</td><td class="small">' + esc(m[2]) + '</td><td class="small muted">' + esc(m[3]) + '</td></tr>'; }).join('') + '</table></div>' +
        '<p class="warn small">Wartości miar są przybliżone i zmieniały się w zależności od regionu i epoki.</p>' +
        '<div class="card"><h3>' + I('coins', 22) + ' Przelicznik monetarny (Kraków, XV–XVI w.)</h3><div class="row"><input type="number" inputmode="decimal" id="mv" value="1" style="width:110px" aria-label="Ilość"><select id="mu" aria-label="Jednostka"><option value="48">grzywna</option><option value="12">wiardunek</option><option value="2">skojec</option><option value="1">grosz</option><option value="30">złoty (floren obrachunkowy)</option><option value="60">kopa</option></select><span id="mo"></span></div></div>';
      var mc = function () { var g = (+$('#mv').value || 0) * +$('#mu').value; $('#mo').innerHTML = '= <b>' + g + '</b> groszy = ' + (g / 48).toFixed(2) + ' grzywny = ' + (g / 30).toFixed(2) + ' złotego'; };
      $('#mv').oninput = mc; $('#mu').onchange = mc; mc();
    } else {
      var qs = shuffle(LAT.PLACES.filter(function (p) { return /ensis/.test(p[3]); })).slice(0, 5).map(function (p) {
        var o = shuffle(LAT.PLACES.filter(function (x) { return x !== p; })).slice(0, 3).map(function (x) { return x[4]; });
        return { q: 'Co oznacza przymiotnik <i class="la">' + esc(p[3].split('/')[0]) + '</i>?', o: [p[4]].concat(o), a: 0, e: esc(p[0]) + ' – ' + esc(p[4]) };
      }).concat(shuffle(LAT.NAMES).slice(0, 5).map(function (n) {
        var o = shuffle(LAT.NAMES.filter(function (x) { return x !== n && x[3] !== n[3]; })).slice(0, 3).map(function (x) { return x[3]; });
        return { q: 'Polska forma imienia <i class="la">' + esc(n[0]) + '</i>?', o: [n[3]].concat(o), a: 0, e: esc(n[4]) };
      }));
      tb.innerHTML = '<div class="card" id="nqz"></div>'; quiz($('#nqz'), qs);
    }
  };

  /* ============================================================
     PUŁAPKI TŁUMACZA
     ============================================================ */
  VIEWS.pulapki = function (el) {
    var solved = Object.keys(S.traps).filter(function (k) { return S.traps[k]; }).length;
    el.innerHTML = '<h1>Pułapki tłumacza</h1><p class="lead">Poniżej są przekłady „maszynowe”: poprawne gramatycznie, ale błędne merytorycznie. Narzędzia AI radzą sobie z łaciną klasyczną przyzwoicie, ale w tekstach średniowiecznych potrafią z pewnością w głosie wymyślać sens. <b>Dotknij fragmentów przekładu, które są błędne</b>, i sprawdź.</p>' +
      '<div class="card"><div class="row sp"><b>Rozbrojone pułapki: <span id="tcount">' + solved + '</span> / ' + LAT.TRAPS.length + '</b></div><div class="qprog" style="margin-bottom:0"><i id="tprog" style="width:' + (100 * solved / LAT.TRAPS.length) + '%"></i></div></div><div id="tl"></div>';
    var box = $('#tl');
    shuffle(LAT.TRAPS).forEach(function (t) {
      var d = document.createElement('div'); d.className = 'card'; box.appendChild(d);
      var key = t.la;
      d.innerHTML = '<div class="la" style="font-size:1.25rem"><i>' + esc(t.la) + '</i></div><div class="muted small" style="margin-top:6px">Przekład maszynowy:</div><div style="font-size:1.1rem;margin:6px 0 10px">' + t.mt.map(function (s, i) { return '<span class="tok" role="button" tabindex="0" data-i="' + i + '">' + esc(s) + '</span>'; }).join(' ') + '</div><button class="btn sm pri chk">' + I('check', 16) + ' Sprawdź</button>' + (S.traps[key] ? ' <span class="done-mark small">' + I('check', 14) + ' rozbrojona wcześniej</span>' : '') + '<div class="expl hidden"></div>';
      var done = false;
      $$('.tok', d).forEach(function (s) { s.onclick = function () { if (!done) s.classList.toggle('sel'); }; s.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); s.click(); } }; });
      $('.chk', d).onclick = function () {
        if (done) return; done = true; this.disabled = true; var ok = true;
        $$('.tok', d).forEach(function (s) {
          var i = +s.dataset.i, bad = t.bad.indexOf(i) >= 0, sel = s.classList.contains('sel'); s.classList.remove('sel');
          if (bad && sel) s.classList.add('hit'); else if (bad) { s.classList.add('miss'); ok = false; } else if (sel) { s.classList.add('false'); ok = false; }
        });
        var wasSolved = S.traps[key]; S.traps[key] = ok ? 1 : (S.traps[key] || 0); save();
        if (ok) G.correct(d, 1); else G.wrong(d);
        var n = Object.keys(S.traps).filter(function (k) { return S.traps[k]; }).length; $('#tcount').textContent = n; $('#tprog').style.width = (100 * n / LAT.TRAPS.length) + '%';
        var e = $('.expl', d); e.className = 'expl ' + (ok ? 'good' : 'badx'); e.innerHTML = (ok ? '<b class="ok">Trafnie.</b> ' : '<b class="bad">Nie całkiem.</b> ') + 'Poprawnie: <b>' + esc(t.ok) + '</b><br>' + t.e;
      };
    });
  };

  /* ============================================================
     ANALIZATOR
     ============================================================ */
  VIEWS.analizator = function (el, args) {
    el.innerHTML = '<h1>Analizator form</h1><p class="lead">Wpisz formę (np. <i>dederunt</i>, <i>ecclesie</i>, <i>possidendam</i>) albo wklej całe zdanie. Analizator zna ' + (LEX.length + EXTRA.length) + ' haseł i rozpoznaje pisownię średniowieczną. Analizę wybierasz z kontekstu: aplikacja pokazuje wszystkie możliwości.</p>' +
      '<textarea id="az" placeholder="np. Nos Boleslaus notum facimus universis presentes litteras inspecturis" aria-label="Tekst do analizy">' + esc(args[0] || 'Datum in Cracovia presentibus hiis testibus') + '</textarea><div id="ao"></div>' +
      '<p class="small muted">Słów spoza słownika aplikacji szukaj w: <a href="https://logeion.uchicago.edu/" target="_blank" rel="noopener">Logeion</a>, <a href="https://www.perseus.tufts.edu/hopper/morph" target="_blank" rel="noopener">Perseus</a>; łacina średniowieczna: Du Cange, <i>Słownik łaciny średniowiecznej w Polsce</i>.</p>';
    var go = function () {
      var words = ($('#az').value.match(/[A-Za-zÀ-ž]+/g) || []).slice(0, 60);
      $('#ao').innerHTML = words.map(function (w) {
        var r = LAT.analyze(w);
        return '<div class="res"><span class="lem">' + esc(w) + '</span>' + (r.length ? r.map(function (x) { return '<div><b class="la">' + esc(x.e.head) + '</b> <span class="muted small">' + esc(LAT.CLS_LABEL[x.e.cls] || '') + '</span> – ' + esc(x.e.pl) + '<div class="small">' + x.labels.map(function (l) { return esc(lab(l)); }).join(' · ') + (x.enclitic ? ' · + ' + x.enclitic : '') + '</div></div>'; }).join('') : '<div class="small muted">nie znaleziono w słowniku aplikacji</div>') + '</div>';
      }).join('');
    };
    $('#az').oninput = go; go();
  };

  /* ============================================================
     SŁOWNICZEK (strona)
     ============================================================ */
  VIEWS.slowniczek = function (el) {
    el.innerHTML = '<h1>Słowniczek terminów</h1><p class="lead">Wszystkie skróty i nazwy gramatyczne używane w aplikacji, z polskim odpowiednikiem i przykładem. W lekcjach każdy termin jest podkreślony kropkami – dotknij go, a zobaczysz to samo wyjaśnienie.</p><input type="text" id="gq" placeholder="Szukaj…" style="width:100%;max-width:380px" aria-label="Szukaj terminu"><div class="card" id="gl"></div>';
    $('#gl').innerHTML = glossaryHTML(); $('#gq').oninput = function () { $('#gl').innerHTML = glossaryHTML(this.value); };
  };

  /* ============================================================
     USTAWIENIA
     ============================================================ */
  VIEWS.ustawienia = function (el) {
    var sw = function (id, label, desc, on) { return '<div class="switch"><div><b>' + label + '</b><div class="small muted">' + desc + '</div></div><label class="row" style="gap:6px"><input type="checkbox" id="' + id + '"' + (on ? ' checked' : '') + ' style="width:22px;height:22px"> ' + (on ? 'wł.' : 'wył.') + '</label></div>'; };
    el.innerHTML = '<h1>Ustawienia</h1>' +
      '<div class="card"><h3>Nauka</h3>' +
      sw('pll', 'Etykiety form po polsku', 'Np. „ablatyw, l. mn.” zamiast „abl. lm.” (łaciński skrót zostaje drobnym drukiem).', S.settings.plLabels) +
      sw('snd', 'Dźwięki nagród', 'Krótkie tony po poprawnej odpowiedzi i ukończeniu lekcji.', S.settings.sound) +
      '<div class="switch"><div><b>Cel dzienny</b><div class="small muted">Ile XP chcesz zdobywać dziennie (1 dobra odpowiedź = 1 XP).</div></div><select id="goal"><option value="15">15 XP – lekko</option><option value="30">30 XP – regularnie</option><option value="50">50 XP – intensywnie</option><option value="100">100 XP – maraton</option></select></div>' +
      '<div class="switch"><div><b>Nowe słowa dziennie</b><div class="small muted">Limit nowych fiszek na dzień.</div></div><input type="number" inputmode="numeric" id="npd" value="' + S.settings.newPerDay + '" min="0" max="100" style="width:90px"></div>' +
      '<div class="switch"><div><b>Kalendarz domyślny</b><div class="small muted">Dla kalkulatora dat.</div></div>' + calSelect('dcal') + '</div>' +
      '<div class="switch"><div><b>Motyw</b><div class="small muted">Jasny, ciemny lub zgodny z systemem.</div></div><select id="thm"><option value="">systemowy</option><option value="light">jasny</option><option value="dark">ciemny</option></select></div></div>' +
      '<div class="card"><h3>' + I('download', 22) + ' Tryb offline</h3><p class="small">Aplikacja działa bez internetu po pierwszym otwarciu. Zdjęcia z modułu „Łacina w obrazie” można zapisać w pamięci telefonu (ok. 15–25 MB).</p><button class="btn" id="offImg">' + I('download', 18) + ' Zapisz zdjęcia do użytku offline</button> <span id="offMsg" class="small muted"></span></div>' +
      '<div class="card"><h3>Kopia zapasowa</h3><p class="small">Postęp jest zapisany tylko w tej przeglądarce. Aby przenieść go na inne urządzenie, zapisz plik kopii i wczytaj go tam.</p><div class="row"><button class="btn" id="exp">' + I('download', 18) + ' Zapisz kopię</button><label class="btn">Wczytaj kopię<input type="file" id="imp" accept=".json" class="hidden"></label><button class="btn" id="rst">Wyzeruj postęp</button></div></div>' +
      '<div class="card small"><h3>O materiałach</h3><p>Teksty oznaczone jako <b>model</b> są dydaktyczne: ułożone na wzór formularzy źródłowych, z umownymi osobami i miejscami. Teksty oznaczone jako <b>źródło</b> to fragmenty autentyczne w tradycyjnym brzmieniu – przed cytowaniem w pracy naukowej sprawdź je w edycji krytycznej. Zdjęcia pochodzą z Wikimedia Commons (autor i licencja przy każdym zdjęciu). Czcionki: Crimson Pro i Atkinson Hyperlegible (Google Fonts, licencja OFL).</p></div>';
    $('#thm').value = S.settings.theme || ''; $('#goal').value = String(S.settings.goal);
    $('#pll').onchange = function () { S.settings.plLabels = this.checked; save(); VIEWS.ustawienia(el); };
    $('#snd').onchange = function () { S.settings.sound = this.checked; save(); G.updateStatus(); VIEWS.ustawienia(el); if (this.checked) G.sound('ok'); };
    $('#goal').onchange = function () { S.settings.goal = +this.value; save(); G.updateStatus(); };
    $('#npd').onchange = function () { S.settings.newPerDay = Math.max(0, +this.value || 0); save(); };
    $('#dcal').onchange = function () { S.settings.cal = this.value; save(); };
    $('#thm').onchange = function () { S.settings.theme = this.value; save(); if (this.value) document.documentElement.setAttribute('data-theme', this.value); else document.documentElement.removeAttribute('data-theme'); };
    $('#offImg').onclick = function () {
      var btn = this; if (!('caches' in window)) { $('#offMsg').textContent = 'Ta przeglądarka nie obsługuje zapisu offline.'; return; }
      btn.disabled = true; var urls = []; LAT.IMAGES.forEach(function (x) { urls.push(x.img); if (/\/1280px-/.test(x.img)) urls.push(x.img.replace('/1280px-', '/500px-')); });
      var n = 0;
      caches.open('lacina-img-v1').then(function (c) {
        return urls.reduce(function (p, u) { return p.then(function () { return fetch(u, { mode: 'no-cors' }).then(function (r) { return c.put(u, r); }).catch(function () { }).then(function () { n++; $('#offMsg').textContent = 'Zapisano ' + n + ' / ' + urls.length; }); }); }, Promise.resolve());
      }).then(function () { $('#offMsg').textContent = 'Gotowe: zdjęcia dostępne offline.'; btn.disabled = false; G.toast(I('download', 20) + ' Zdjęcia zapisane w pamięci urządzenia', 'goal', 2400); });
    };
    $('#exp').onclick = function () { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' })); a.download = 'lacina-postep-' + new Date().toISOString().slice(0, 10) + '.json'; a.click(); };
    $('#imp').onchange = function () {
      var f = this.files[0]; if (!f) return; var r = new FileReader();
      r.onload = function () { try { var o = JSON.parse(r.result); if (!o.srs || !o.settings) throw 0; Object.keys(o).forEach(function (k) { S[k] = o[k]; }); save(); alert('Wczytano kopię.'); route(); } catch (e) { alert('To nie jest poprawny plik kopii.'); } };
      r.readAsText(f);
    };
    $('#rst').onclick = function () { if (confirm('Na pewno wyzerować cały postęp? Tego nie da się cofnąć (chyba że masz kopię).')) { localStorage.removeItem('lacina_historyka_v1'); location.reload(); } };
  };

  /* ---------- Start ---------- */
  function boot() {
    $('#burger') && ($('#burger').onclick = function (e) { e.stopPropagation(); openSide(true); });
    $('#scrim').onclick = function () { openSide(false); closeGlossary(); };
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { openSide(false); closeGlossary(); closeTermPop(); } });
    route();
    G.checkBadges();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
