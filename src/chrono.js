/* ============================================================
   CHRONOLOGIA: kalendarz juliański/gregoriański, Wielkanoc,
   święta, kalendarz rzymski, liczby rzymskie, chronogramy
   ============================================================ */
LAT.CH = (function () {
  var GREG_START = 2299161; // 15 X 1582 (gregoriański) – w Koronie przyjęty w 1582
  var FERIA = ['dominica', 'feria secunda', 'feria tertia', 'feria quarta', 'feria quinta', 'feria sexta', 'sabbato'];
  var FERIA_ABL = ['dominica', 'feria secunda', 'feria tertia', 'feria quarta', 'feria quinta', 'feria sexta', 'sabbato'];
  var DNI = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
  var MIES = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

  function f(x) { return Math.floor(x); }
  function jdJ(y, m, d) { var a = f((14 - m) / 12), Y = y + 4800 - a, M = m + 12 * a - 3; return d + f((153 * M + 2) / 5) + 365 * Y + f(Y / 4) - 32083; }
  function jdG(y, m, d) { var a = f((14 - m) / 12), Y = y + 4800 - a, M = m + 12 * a - 3; return d + f((153 * M + 2) / 5) + 365 * Y + f(Y / 4) - f(Y / 100) + f(Y / 400) - 32045; }
  function fromJ(jd) { var c = jd + 32082, d = f((4 * c + 3) / 1461), e = c - f(1461 * d / 4), m = f((5 * e + 2) / 153);
    return { d: e - f((153 * m + 2) / 5) + 1, m: m + 3 - 12 * f(m / 10), y: d - 4800 + f(m / 10) }; }
  function fromG(jd) { var a = jd + 32044, b = f((4 * a + 3) / 146097), c = a - f(146097 * b / 4), d = f((4 * c + 3) / 1461), e = c - f(1461 * d / 4), m = f((5 * e + 2) / 153);
    return { d: e - f((153 * m + 2) / 5) + 1, m: m + 3 - 12 * f(m / 10), y: 100 * b + d - 4800 + f(m / 10) }; }

  /* cal: 'J', 'G' albo 'auto' (juliański do 4 X 1582, potem gregoriański – praktyka Korony) */
  function calFor(y, m, d, cal) {
    if (cal === 'J' || cal === 'G') return cal;
    return (y < 1582 || (y === 1582 && (m < 10 || (m === 10 && d < 15)))) ? 'J' : 'G';
  }
  function toJD(y, m, d, cal) { return calFor(y, m, d, cal) === 'J' ? jdJ(y, m, d) : jdG(y, m, d); }
  function fromJD(jd, cal) {
    var c = cal === 'J' || cal === 'G' ? cal : (jd < GREG_START ? 'J' : 'G');
    var r = c === 'J' ? fromJ(jd) : fromG(jd); r.cal = c; return r;
  }
  function weekday(jd) { return (jd + 1) % 7; }

  function easterJ(y) { var a = y % 4, b = y % 7, c = y % 19, d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7, x = d + e + 114; return { m: f(x / 31), d: (x % 31) + 1 }; }
  function easterG(y) {
    var a = y % 19, b = f(y / 100), c = y % 100, d = f(b / 4), e = b % 4, ff = f((b + 8) / 25), g = f((b - ff + 1) / 3),
      h = (19 * a + b - d - g + 15) % 30, i = f(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = f((a + 11 * h + 22 * l) / 451), x = h + l - 7 * m + 114;
    return { m: f(x / 31), d: (x % 31) + 1 };
  }
  function easterJD(y, cal) {
    var c = cal === 'J' || cal === 'G' ? cal : (y <= 1582 ? 'J' : 'G');
    var e = c === 'J' ? easterJ(y) : easterG(y);
    return c === 'J' ? jdJ(y, e.m, e.d) : jdG(y, e.m, e.d);
  }
  function isLeap(y, c) { return c === 'J' ? y % 4 === 0 : (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)); }

  function fmt(jd, cal) {
    var r = fromJD(jd, cal), w = weekday(jd);
    return { y: r.y, m: r.m, d: r.d, cal: r.cal, w: w, dzien: DNI[w], feria: FERIA[w],
      txt: DNI[w] + ', ' + r.d + ' ' + MIES[r.m - 1] + ' ' + r.y + (r.cal === 'J' ? ' (kal. juliański)' : ' (kal. gregoriański)') };
  }

  /* Data święta w danym roku (JD) */
  function feastJD(key, y, cal) {
    var fx = LAT.FEASTS.find(function (x) { return x[0] === key; });
    if (fx) {
      var m = fx[3], d = fx[4];
      var c = calFor(y, m, d, cal);
      if (key === 'mathiae' && isLeap(y, c)) d = 25;
      return c === 'J' ? jdJ(y, m, d) : jdG(y, m, d);
    }
    var mv = LAT.MOVABLE.find(function (x) { return x[0] === key; });
    if (mv) return easterJD(y, cal) + mv[3];
    var adv = /^adv(\d)$/.exec(key);
    if (adv) {
      var xm = toJD(y, 12, 25, cal), w = weekday(xm);
      var a4 = xm - (w === 0 ? 7 : w);
      return a4 - 7 * (4 - Number(adv[1]));
    }
    return null;
  }
  function feastName(key) {
    var fx = LAT.FEASTS.find(function (x) { return x[0] === key; }); if (fx) return { la: 'festum ' + fx[1], pl: fx[2], date: fx[4] + '.' + String(fx[3]).padStart(2, '0'), note: fx[5] };
    var mv = LAT.MOVABLE.find(function (x) { return x[0] === key; }); if (mv) return { la: mv[1], pl: mv[2], date: 'ruchome (' + (mv[3] >= 0 ? '+' : '') + mv[3] + ' dni od Wielkanocy)', note: '' };
    var adv = /^adv(\d)$/.exec(key); if (adv) return { la: 'dominica ' + ['prima', 'secunda', 'tertia', 'quarta'][adv[1] - 1] + ' Adventus', pl: adv[1] + '. niedziela Adwentu', date: 'ruchome', note: '' };
    return null;
  }

  /* Relacje: in, vig, cras, oct, post (z dniem tygodnia), ante (z dniem tygodnia) */
  function applyRel(jd, rel, wd) {
    switch (rel) {
      case 'in': return jd;
      case 'vig': return jd - 1;
      case 'cras': return jd + 1;
      case 'oct': return jd + 7;
      case 'post': for (var i = 1; i <= 7; i++) if (weekday(jd + i) === wd) return jd + i; break;
      case 'ante': for (var j = 1; j <= 7; j++) if (weekday(jd - j) === wd) return jd - j; break;
    }
    return jd;
  }
  function relLatin(rel, wd, feastLa) {
    var base = feastLa;
    switch (rel) {
      case 'in': return 'in ' + base.replace(/^festum /, 'festo ') + ' (ipso die)';
      case 'vig': return 'in vigilia ' + base.replace(/^festum /, 'festi ');
      case 'cras': return 'in crastino ' + base.replace(/^festum /, 'festi ');
      case 'oct': return 'in octava ' + base.replace(/^festum /, 'festi ');
      case 'post': return FERIA_ABL[wd] + ' (proxima) post ' + base;
      case 'ante': return FERIA_ABL[wd] + ' (proxima) ante ' + base;
    }
  }

  /* Odwrotnie: data → możliwe formuły */
  function describe(jd, cal) {
    var y = fromJD(jd, cal).y, out = [];
    var keys = LAT.FEASTS.map(function (x) { return x[0]; }).concat(LAT.MOVABLE.map(function (x) { return x[0]; }), ['adv1', 'adv2', 'adv3', 'adv4']);
    [y - 1, y, y + 1].forEach(function (yy) {
      keys.forEach(function (k) {
        var fj = feastJD(k, yy, cal); if (fj === null) return;
        var diff = jd - fj, nm = feastName(k), w = weekday(jd);
        if (diff === 0) out.push({ d: 0, la: (/^dominica|^feria|^Pascha|^Parasceve|^dies|^Ascensio|^Pentecoste/.test(nm.la) ? nm.la : 'in ' + nm.la.replace(/^festum /, 'festo ')), pl: nm.pl });
        else if (diff === -1) out.push({ d: 1, la: 'in vigilia ' + nm.la.replace(/^festum /, 'festi '), pl: 'wigilia: ' + nm.pl });
        else if (diff === 1) out.push({ d: 1, la: 'in crastino ' + nm.la.replace(/^festum /, 'festi ') + ' (' + FERIA[w] + ')', pl: 'nazajutrz po: ' + nm.pl });
        else if (diff === 7) out.push({ d: 2, la: 'in octava ' + nm.la.replace(/^festum /, 'festi '), pl: 'oktawa: ' + nm.pl });
        if (diff > 0 && diff <= 7) out.push({ d: 3 + diff / 10, la: FERIA[w] + ' (proxima) post ' + (/^festum|^dominica|^Pascha|^Pentecoste|^Ascensio/.test(nm.la) ? nm.la : 'festum ' + nm.la), pl: DNI[w] + ' po: ' + nm.pl });
        if (diff < 0 && diff >= -7) out.push({ d: 3.5 - diff / 10, la: FERIA[w] + ' (proxima) ante ' + (/^festum|^dominica|^Pascha|^Pentecoste|^Ascensio/.test(nm.la) ? nm.la : 'festum ' + nm.la), pl: DNI[w] + ' przed: ' + nm.pl });
      });
    });
    out.sort(function (a, b) { return a.d - b.d; });
    var seen = {};
    return out.filter(function (o) { if (seen[o.la]) return false; seen[o.la] = 1; return true; });
  }

  /* ---------- Kalendarz rzymski ---------- */
  var MON_ACC = ['Ianuarias', 'Februarias', 'Martias', 'Apriles', 'Maias', 'Iunias', 'Iulias', 'Augustas', 'Septembres', 'Octobres', 'Novembres', 'Decembres'];
  var MON_ABL = ['Ianuariis', 'Februariis', 'Martiis', 'Aprilibus', 'Maiis', 'Iuniis', 'Iuliis', 'Augustis', 'Septembribus', 'Octobribus', 'Novembribus', 'Decembribus'];
  var MON_GEN = ['Ianuarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Iunii', 'Iulii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
  var DIM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function nonesOf(m) { return [3, 5, 7, 10].indexOf(m) >= 0 ? 7 : 5; }

  function toRomanCal(d, m, leap) {
    var N = nonesOf(m), I = N + 8, ref, cnt, rm = m, bis = false;
    if (d === 1) { ref = 'K'; cnt = 1; }
    else if (d < N) { ref = 'N'; cnt = N - d + 1; }
    else if (d === N) { ref = 'N'; cnt = 1; }
    else if (d < I) { ref = 'I'; cnt = I - d + 1; }
    else if (d === I) { ref = 'I'; cnt = 1; }
    else {
      ref = 'K'; rm = m === 12 ? 1 : m + 1;
      var dim = DIM[m - 1];
      if (m === 2 && leap) { if (d === 24) { cnt = 6; bis = true; } else dim = d > 24 ? 29 : 28; }
      if (!bis) cnt = dim - d + 2;
    }
    var refAcc = { K: 'Kalendas', N: 'Nonas', I: 'Idus' }[ref], refAbl = { K: 'Kalendis', N: 'Nonis', I: 'Idibus' }[ref];
    var mi = rm - 1, cls, med, abbr;
    if (cnt === 1) { cls = refAbl + ' ' + MON_ABL[mi]; med = refAbl + ' ' + MON_GEN[mi]; abbr = refAbl.slice(0, 3) + '. ' + MON_ACC[mi].slice(0, 3) + '.'; }
    else if (cnt === 2) { cls = 'pridie ' + refAcc + ' ' + MON_ACC[mi]; med = 'pridie ' + refAcc + ' ' + MON_GEN[mi]; abbr = 'prid. ' + refAcc.slice(0, 3) + '. ' + MON_ACC[mi].slice(0, 3) + '.'; }
    else {
      var r = (bis ? 'bis ' : '') + toRoman(cnt);
      cls = 'ante diem ' + r + ' ' + refAcc + ' ' + MON_ACC[mi]; med = r + ' ' + refAcc + ' ' + MON_GEN[mi];
      abbr = 'a.d. ' + r + ' ' + refAcc.slice(0, 3) + '. ' + MON_ACC[mi].slice(0, 3) + '.';
    }
    return { cls: cls, med: med, abbr: abbr, cnt: cnt, ref: ref, month: rm, bis: bis };
  }
  function fromRomanCal(cnt, ref, month, leap, bis) {
    // zwraca {d, m}
    if (ref === 'N') return { d: nonesOf(month) - cnt + 1, m: month };
    if (ref === 'I') return { d: nonesOf(month) + 8 - cnt + 1, m: month };
    if (cnt === 1) return { d: 1, m: month };
    var pm = month === 1 ? 12 : month - 1, dim = DIM[pm - 1];
    if (pm === 2 && leap) {
      if (bis) return { d: 24, m: 2 };
      dim = cnt <= 6 ? 29 : 28;
    }
    return { d: dim - cnt + 2, m: pm };
  }
  function parseRomanCal(s) {
    var t = s.toLowerCase().replace(/[.,]/g, ' ').replace(/\s+/g, ' ').trim();
    var bis = /\bbis\b/.test(t);
    var ref = /\bkal/.test(t) ? 'K' : /\bnon/.test(t) ? 'N' : /\bid/.test(t) ? 'I' : null;
    if (!ref) return null;
    var mm = ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var words = t.split(' '), month = 0;
    for (var i = words.length - 1; i >= 0 && !month; i--) {
      var w = words[i].replace(/j/g, 'i');
      for (var k = 0; k < 12; k++) if (w.indexOf(mm[k]) === 0) { month = k + 1; break; }
    }
    if (!month) return null;
    var cnt = 1;
    if (/pridie|prid/.test(t)) cnt = 2;
    else {
      var rn = t.replace(/\b(kal\w*|non\w*|id\w*|ante|diem|a|d|bis)\b/g, ' ').match(/\b[ivxlcj]+\b/);
      if (rn) { var v = fromRoman(rn[0]); if (v) cnt = v; }
    }
    return { cnt: cnt, ref: ref, month: month, bis: bis };
  }

  /* ---------- Liczby rzymskie ---------- */
  function toRoman(n) {
    var v = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], s = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'], r = '';
    for (var i = 0; i < v.length; i++) while (n >= v[i]) { r += s[i]; n -= v[i]; }
    return r;
  }
  function toRomanMedieval(n) {
    var v = [1000, 500, 100, 50, 10, 5, 1], s = ['m', 'd', 'c', 'l', 'x', 'v', 'i'], r = '';
    for (var i = 0; i < v.length; i++) while (n >= v[i]) { r += s[i]; n -= v[i]; }
    return r.replace(/i$/, 'j');
  }
  function fromRoman(s) {
    s = String(s).toLowerCase().replace(/[°º.\s]/g, '').replace(/j/g, 'i').replace(/u/g, 'v');
    if (!/^[ivxlcdm]+$/.test(s)) return null;
    var map = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 }, tot = 0;
    for (var i = 0; i < s.length; i++) { var a = map[s[i]], b = map[s[i + 1]] || 0; tot += a < b ? -a : a; }
    return tot;
  }
  function chronogram(text, upperOnly) {
    var map = { I: 1, V: 5, U: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, J: 1, W: 10 }, tot = 0, used = [];
    for (var i = 0; i < text.length; i++) {
      var ch = text[i], up = ch.toUpperCase();
      if (upperOnly && ch !== up) continue;
      if (map[up] && /[A-Za-z]/.test(ch)) { tot += map[up]; used.push(up); }
    }
    return { total: tot, letters: used.join('') };
  }

  function yearInfo(y, cal) {
    var c = cal === 'J' || cal === 'G' ? cal : (y <= 1582 ? 'J' : 'G');
    var e = easterJD(y, cal), jan1 = c === 'J' ? jdJ(y, 1, 1) : jdG(y, 1, 1), w = weekday(jan1);
    var k = (7 - w) % 7 + 1, L = 'ABCDEFG'[k - 1], letters = L;
    if (isLeap(y, c)) letters = L + 'ABCDEFG'['ABCDEFG'.indexOf(L) === 0 ? 6 : 'ABCDEFG'.indexOf(L) - 1];
    return { easter: fmt(e, cal), leap: isLeap(y, c), dominical: letters, golden: (y % 19) + 1, indiction: ((y + 2) % 15) + 1, cal: c };
  }

  return {
    FERIA: FERIA, DNI: DNI, MIES: MIES, toJD: toJD, fromJD: fromJD, weekday: weekday, fmt: fmt, easterJD: easterJD, isLeap: isLeap,
    feastJD: feastJD, feastName: feastName, applyRel: applyRel, relLatin: relLatin, describe: describe,
    toRomanCal: toRomanCal, fromRomanCal: fromRomanCal, parseRomanCal: parseRomanCal,
    toRoman: toRoman, toRomanMedieval: toRomanMedieval, fromRoman: fromRoman, chronogram: chronogram, yearInfo: yearInfo, calFor: calFor
  };
})();
