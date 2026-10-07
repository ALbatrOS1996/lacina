/* ============================================================
   MORFOLOGIA: normalizacja pisowni, generator paradygmatów,
   indeks form i analizator
   ============================================================ */
'use strict';
var LAT = window.LAT = window.LAT || {};

(function () {
  var CASES = ['nom.', 'gen.', 'dat.', 'acc.', 'abl.'];
  var PERS = ['1 os. lp.', '2 os. lp.', '3 os. lp.', '1 os. lm.', '2 os. lm.', '3 os. lm.'];
  var PA = ['m', 's', 't', 'mus', 'tis', 'nt'];
  var PP = ['r', 'ris', 'tur', 'mur', 'mini', 'ntur'];

  /* ---------- Normalizacja pisowni (klucz wyszukiwania) ----------
     Sprowadza warianty średniowieczne i klasyczne do wspólnego klucza:
     ae/oe→e, j→i, v→u, y→i, ti+samogłoska→ci, ch→h, h znika,
     podwojone spółgłoski→pojedyncze, mpn→mn. */
  function norm(w) {
    w = String(w || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    w = w.replace(/æ/g, 'ae').replace(/œ/g, 'oe');
    w = w.replace(/j/g, 'i').replace(/v/g, 'u').replace(/y/g, 'i');
    w = w.replace(/ae/g, 'e').replace(/oe/g, 'e');
    w = w.replace(/mpn/g, 'mn');
    w = w.replace(/ti(?=[aeiou])/g, 'ci');
    w = w.replace(/ch/g, 'h').replace(/h/g, '');
    w = w.replace(/([bcdfglmnprstx])\1/g, '$1');
    return w.replace(/[^a-z]/g, '');
  }
  LAT.norm = norm;

  /* Opis zmian pisowni (do narzędzia „normalizator”) */
  LAT.explainSpelling = function (w) {
    var notes = [];
    var s = w.toLowerCase();
    var cls = s;
    if (/e/.test(s)) notes.push('e może odpowiadać klasycznemu ae lub oe (ecclesie = ecclesiae, pena = poena)');
    if (/ci[aeiou]/.test(s)) { notes.push('ci + samogłoska często = klasyczne ti (gracia = gratia, donacio = donatio)'); cls = cls.replace(/ci(?=[aeiou])/g, 'ti'); }
    if (/ch/.test(s)) { notes.push('ch bywa zapisem h (michi = mihi, nichil = nihil)'); cls = cls.replace(/michi/g, 'mihi').replace(/nichil/g, 'nihil'); }
    if (/y/.test(s)) { notes.push('y = i (ymago = imago, sylva = silva)'); cls = cls.replace(/y/g, 'i'); }
    if (/mpn/.test(s)) { notes.push('mpn = mn (dampnum = damnum, sollempnis = sollemnis)'); cls = cls.replace(/mpn/g, 'mn'); }
    if (/j/.test(s)) { notes.push('j = i (Johannes = Iohannes)'); }
    if (/^h/.test(s)) notes.push('h na początku bywa dodawane lub opuszczane (hortus/ortus, habundantia = abundantia)');
    if (/([bcdfglmnprst])\1/.test(s)) notes.push('podwojenia spółgłosek bywają dowolne (litera/littera, quatuor/quattuor)');
    if (/[^aeiou]e(?=[^aeiou]|$)/.test(s) && !/ae/.test(s)) {
      notes.push('przy szukaniu w słowniku klasycznym spróbuj e → ae w końcówkach (-e → -ae, -arum zostaje)');
    }
    return { notes: notes, guess: cls };
  };

  function push(out, f, an, meta) {
    String(f).split('/').forEach(function (x) {
      if (x) out.push(Object.assign({ f: x, an: an }, meta || {}));
    });
  }

  function decline(out, sg, pl, label, gd, kind) {
    for (var i = 0; i < 5; i++) {
      if (sg) push(out, sg[i], (label || '') + CASES[i] + ' lp.' + (gd ? ' ' + gd : ''), { k: kind, cs: i, nm: 's', gd: gd || '' });
    }
    for (var j = 0; j < 5; j++) {
      if (pl) push(out, pl[j], (label || '') + CASES[j] + ' lm.' + (gd ? ' ' + gd : ''), { k: kind, cs: j, nm: 'p', gd: gd || '' });
    }
  }

  /* ---------- Rzeczowniki ---------- */
  function nounTables(cls, nom, gen) {
    var st;
    switch (cls) {
      case 'n1': st = gen.slice(0, -2);
        return [[nom, st + 'ae', st + 'ae', st + 'am', st + 'a'], [st + 'ae', st + 'arum', st + 'is', st + 'as', st + 'is']];
      case 'n2': case 'n2r': st = gen.slice(0, -1);
        return [[nom, st + 'i', st + 'o', st + 'um', st + 'o'], [st + 'i', st + 'orum', st + 'is', st + 'os', st + 'is']];
      case 'n2n': st = gen.slice(0, -1);
        return [[nom, st + 'i', st + 'o', nom, st + 'o'], [st + 'a', st + 'orum', st + 'is', st + 'a', st + 'is']];
      case 'n3': st = gen.slice(0, -2);
        return [[nom, gen, st + 'i', st + 'em', st + 'e'], [st + 'es', st + 'um', st + 'ibus', st + 'es', st + 'ibus']];
      case 'n3i': st = gen.slice(0, -2);
        return [[nom, gen, st + 'i', st + 'em', st + 'e'], [st + 'es', st + 'ium', st + 'ibus', st + 'es', st + 'ibus']];
      case 'n3n': st = gen.slice(0, -2);
        return [[nom, gen, st + 'i', nom, st + 'e'], [st + 'a', st + 'um', st + 'ibus', st + 'a', st + 'ibus']];
      case 'n3ni': st = gen.slice(0, -2);
        return [[nom, gen, st + 'i', nom, st + 'i'], [st + 'ia', st + 'ium', st + 'ibus', st + 'ia', st + 'ibus']];
      case 'n4': st = gen.slice(0, -2);
        return [[nom, gen, st + 'ui', st + 'um', st + 'u'], [st + 'us', st + 'uum', st + 'ibus', st + 'us', st + 'ibus']];
      case 'n5': st = gen.slice(0, -2);
        return [[nom, gen, st + 'ei', st + 'em', st + 'e'], [st + 'es', st + 'erum', st + 'ebus', st + 'es', st + 'ebus']];
    }
    return null;
  }

  /* ---------- Przymiotniki ---------- */
  function adjA12(m, f, n, pron) {
    var st = f.slice(0, -1);
    var T = {
      'm.': [[m, st + 'i', st + 'o', st + 'um', st + 'o'], [st + 'i', st + 'orum', st + 'is', st + 'os', st + 'is']],
      'f.': [[st + 'a', st + 'ae', st + 'ae', st + 'am', st + 'a'], [st + 'ae', st + 'arum', st + 'is', st + 'as', st + 'is']],
      'n.': [[n || st + 'um', st + 'i', st + 'o', n || st + 'um', st + 'o'], [st + 'a', st + 'orum', st + 'is', st + 'a', st + 'is']]
    };
    if (pron) { ['m.', 'f.', 'n.'].forEach(function (g) { T[g][0][1] = st + 'ius'; T[g][0][2] = st + 'i'; }); }
    return T;
  }
  function adjI(st, m, f, n, ablBoth) {
    var abl = ablBoth ? st + 'e/' + st + 'i' : st + 'i';
    return {
      'm.': [[m, st + 'is', st + 'i', st + 'em', abl], [st + 'es', st + 'ium', st + 'ibus', st + 'es', st + 'ibus']],
      'f.': [[f, st + 'is', st + 'i', st + 'em', abl], [st + 'es', st + 'ium', st + 'ibus', st + 'es', st + 'ibus']],
      'n.': [[n, st + 'is', st + 'i', n, abl], [st + 'ia', st + 'ium', st + 'ibus', st + 'ia', st + 'ibus']]
    };
  }
  function adjComp(st, mf, n) {
    return {
      'm.': [[mf, st + 'is', st + 'i', st + 'em', st + 'e'], [st + 'es', st + 'um', st + 'ibus', st + 'es', st + 'ibus']],
      'f.': [[mf, st + 'is', st + 'i', st + 'em', st + 'e'], [st + 'es', st + 'um', st + 'ibus', st + 'es', st + 'ibus']],
      'n.': [[n, st + 'is', st + 'i', n, st + 'e'], [st + 'a', st + 'um', st + 'ibus', st + 'a', st + 'ibus']]
    };
  }
  function emitAdj(out, T, label, kind) {
    ['m.', 'f.', 'n.'].forEach(function (g) { decline(out, T[g][0], T[g][1], label, g, kind || 'adj'); });
  }

  /* ---------- Zaimki (tabele jawne) ---------- */
  var PRON = {
    'is': 'm:is,eius,ei,eum,eo,ei/ii,eorum,eis/iis,eos,eis/iis;f:ea,eius,ei,eam,ea,eae,earum,eis/iis,eas,eis/iis;n:id,eius,ei,id,eo,ea,eorum,eis/iis,ea,eis/iis',
    'hic': 'm:hic,huius,huic,hunc,hoc,hi,horum,his,hos,his;f:haec,huius,huic,hanc,hac,hae,harum,his,has,his;n:hoc,huius,huic,hoc,hoc,haec,horum,his,haec,his',
    'ille': 'm:ille,illius,illi,illum,illo,illi,illorum,illis,illos,illis;f:illa,illius,illi,illam,illa,illae,illarum,illis,illas,illis;n:illud,illius,illi,illud,illo,illa,illorum,illis,illa,illis',
    'iste': 'm:iste,istius,isti,istum,isto,isti,istorum,istis,istos,istis;f:ista,istius,isti,istam,ista,istae,istarum,istis,istas,istis;n:istud,istius,isti,istud,isto,ista,istorum,istis,ista,istis',
    'ipse': 'm:ipse,ipsius,ipsi,ipsum,ipso,ipsi,ipsorum,ipsis,ipsos,ipsis;f:ipsa,ipsius,ipsi,ipsam,ipsa,ipsae,ipsarum,ipsis,ipsas,ipsis;n:ipsum,ipsius,ipsi,ipsum,ipso,ipsa,ipsorum,ipsis,ipsa,ipsis',
    'idem': 'm:idem,eiusdem,eidem,eundem,eodem,eidem/iidem,eorundem,eisdem/iisdem,eosdem,eisdem/iisdem;f:eadem,eiusdem,eidem,eandem,eadem,eaedem,earundem,eisdem/iisdem,easdem,eisdem/iisdem;n:idem,eiusdem,eidem,idem,eodem,eadem,eorundem,eisdem/iisdem,eadem,eisdem/iisdem',
    'qui': 'm:qui,cuius,cui,quem,quo,qui,quorum,quibus,quos,quibus;f:quae,cuius,cui,quam,qua,quae,quarum,quibus,quas,quibus;n:quod,cuius,cui,quod,quo,quae,quorum,quibus,quae,quibus',
    'quilibet': 'm:quilibet,cuiuslibet,cuilibet,quemlibet,quolibet,quilibet,quorumlibet,quibuslibet,quoslibet,quibuslibet;f:quaelibet,cuiuslibet,cuilibet,quamlibet,qualibet,quaelibet,quarumlibet,quibuslibet,quaslibet,quibuslibet;n:quodlibet,cuiuslibet,cuilibet,quodlibet,quolibet,quaelibet,quorumlibet,quibuslibet,quaelibet,quibuslibet',
    'quis': 'm:quis,cuius,cui,quem,quo,qui,quorum,quibus,quos,quibus;n:quid,cuius,cui,quid,quo,quae,quorum,quibus,quae,quibus',
    'ego': 'x:ego,mei,mihi/michi,me,me,nos,nostri/nostrum,nobis,nos,nobis',
    'tu': 'x:tu,tui,tibi,te,te,vos,vestri/vestrum,vobis,vos,vobis',
    'sui': 'x:,sui,sibi,se/sese,se/sese,,sui,sibi,se/sese,se/sese'
  };
  function emitPron(out, key) {
    PRON[key].split(';').forEach(function (part) {
      var g = part.slice(0, 1), arr = part.slice(2).split(',');
      var gd = g === 'x' ? '' : g + '.';
      decline(out, arr.slice(0, 5), arr.slice(5, 10), '', gd, 'pron');
    });
  }

  /* ---------- Czasowniki ---------- */
  var VC = {
    '1': { pi: ['o', 'as', 'at', 'amus', 'atis', 'ant'], pp: ['or', 'aris', 'atur', 'amur', 'amini', 'antur'], iv: 'a', fut: 'ab', inf: 'are', infp: 'ari', sj: 'e', imp: ['a', 'ate'], ppa: 'ant', ger: 'and' },
    '2': { pi: ['eo', 'es', 'et', 'emus', 'etis', 'ent'], pp: ['eor', 'eris', 'etur', 'emur', 'emini', 'entur'], iv: 'e', fut: 'eb', inf: 'ere', infp: 'eri', sj: 'ea', imp: ['e', 'ete'], ppa: 'ent', ger: 'end' },
    '3': { pi: ['o', 'is', 'it', 'imus', 'itis', 'unt'], pp: ['or', 'eris', 'itur', 'imur', 'imini', 'untur'], iv: 'e', fut: '', inf: 'ere', infp: 'i', sj: 'a', imp: ['e', 'ite'], ppa: 'ent', ger: 'end' },
    '3i': { pi: ['io', 'is', 'it', 'imus', 'itis', 'iunt'], pp: ['ior', 'eris', 'itur', 'imur', 'imini', 'iuntur'], iv: 'ie', fut: 'i', inf: 'ere', infp: 'i', sj: 'ia', imp: ['e', 'ite'], ppa: 'ient', ger: 'iend' },
    '4': { pi: ['io', 'is', 'it', 'imus', 'itis', 'iunt'], pp: ['ior', 'iris', 'itur', 'imur', 'imini', 'iuntur'], iv: 'ie', fut: 'i', inf: 'ire', infp: 'iri', sj: 'ia', imp: ['i', 'ite'], ppa: 'ient', ger: 'iend' }
  };

  function fin(out, f, t, m, v, p) {
    push(out, f, t + ' ' + m + (v ? ' ' + v : '') + ', ' + PERS[p], { k: 'verb', t: t, m: m, v: v, p: p });
  }
  function list6(out, pre, arr, t, m, v) { arr.forEach(function (e, i) { fin(out, pre + e, t, m, v, i); }); }

  function presentSystem(out, st, c, voice, vlab) {
    var V = VC[c], act = voice === 'a';
    var P = act ? PA : PP;
    list6(out, st, act ? V.pi : V.pp, 'praes.', 'ind.', vlab);
    list6(out, st + V.iv + 'ba', P, 'impf.', 'ind.', vlab);
    if (c === '1' || c === '2') list6(out, st + V.fut, act ? ['o', 'is', 'it', 'imus', 'itis', 'unt'] : ['or', 'eris', 'itur', 'imur', 'imini', 'untur'], 'fut. I', 'ind.', vlab);
    else list6(out, st + (c === '3' ? '' : 'i'), act ? ['am', 'es', 'et', 'emus', 'etis', 'ent'] : ['ar', 'eris', 'etur', 'emur', 'emini', 'entur'], 'fut. I', 'ind.', vlab);
    list6(out, st + V.sj, P, 'praes.', 'coni.', vlab);
    list6(out, st + V.inf, P, 'impf.', 'coni.', vlab);
    push(out, st + (act ? V.inf : V.infp), 'inf. praes. ' + vlab, { k: 'inf' });
    if (act) {
      push(out, st + V.imp[0], 'imp. praes. ' + vlab + ', 2 os. lp.', { k: 'imp' });
      push(out, st + V.imp[1], 'imp. praes. ' + vlab + ', 2 os. lm.', { k: 'imp' });
    }
  }
  function perfectSystem(out, ps) {
    list6(out, ps, ['i', 'isti', 'it', 'imus', 'istis', 'erunt/ere'], 'perf.', 'ind.', 'act.');
    list6(out, ps, ['eram', 'eras', 'erat', 'eramus', 'eratis', 'erant'], 'pqpf.', 'ind.', 'act.');
    list6(out, ps, ['ero', 'eris', 'erit', 'erimus', 'eritis', 'erint'], 'fut. II', 'ind.', 'act.');
    list6(out, ps, ['erim', 'eris', 'erit', 'erimus', 'eritis', 'erint'], 'perf.', 'coni.', 'act.');
    list6(out, ps, ['issem', 'isses', 'isset', 'issemus', 'issetis', 'issent'], 'pqpf.', 'coni.', 'act.');
    push(out, ps + 'isse', 'inf. perf. act.', { k: 'inf' });
  }
  function participles(out, st, c, s2, ppLabel) {
    var V = VC[c];
    var ppaNom = st + V.ppa.replace(/t$/, 's');
    emitAdj(out, adjI(st + V.ppa, ppaNom, ppaNom, ppaNom, true), 'PPA (part. praes. act.), ', 'part');
    ['gen.', 'dat.', 'acc.', 'abl.'].forEach(function (cs, i) {
      push(out, st + V.ger + ['i', 'o', 'um', 'o'][i], 'gerundium, ' + cs, { k: 'ger' });
    });
    emitAdj(out, adjA12(st + V.ger + 'us', st + V.ger + 'a', st + V.ger + 'um'), 'gerundivum, ', 'part');
    if (s2) {
      emitAdj(out, adjA12(s2 + 'us', s2 + 'a', s2 + 'um'), ppLabel, 'part');
      emitAdj(out, adjA12(s2 + 'urus', s2 + 'ura', s2 + 'urum'), 'part. fut. act., ', 'part');
    }
  }

  function sumForms(out, pre, ps) {
    list6(out, pre, ['sum', 'es', 'est', 'sumus', 'estis', 'sunt'], 'praes.', 'ind.', '');
    list6(out, pre, ['eram', 'eras', 'erat', 'eramus', 'eratis', 'erant'], 'impf.', 'ind.', '');
    list6(out, pre, ['ero', 'eris', 'erit', 'erimus', 'eritis', 'erunt'], 'fut. I', 'ind.', '');
    list6(out, pre, ['sim', 'sis', 'sit', 'simus', 'sitis', 'sint'], 'praes.', 'coni.', '');
    list6(out, pre, ['essem/forem', 'esses/fores', 'esset/foret', 'essemus/foremus', 'essetis/foretis', 'essent/forent'], 'impf.', 'coni.', '');
    push(out, pre + 'esse', 'inf. praes.', { k: 'inf' });
    push(out, pre + 'fore', 'inf. fut. (= futurum esse)', { k: 'inf' });
    push(out, pre + 'esto', 'imp. fut., 2/3 os. lp. („niech będzie”)', { k: 'imp' });
    push(out, pre + 'estote', 'imp. fut., 2 os. lm.', { k: 'imp' });
    push(out, pre + 'sunto', 'imp. fut., 3 os. lm.', { k: 'imp' });
    push(out, pre + 'es', 'imp. praes., 2 os. lp.', { k: 'imp' });
    push(out, pre + 'este', 'imp. praes., 2 os. lm.', { k: 'imp' });
    if (ps) {
      list6(out, ps, ['i', 'isti', 'it', 'imus', 'istis', 'erunt/ere'], 'perf.', 'ind.', '');
      list6(out, ps, ['eram', 'eras', 'erat', 'eramus', 'eratis', 'erant'], 'pqpf.', 'ind.', '');
      list6(out, ps, ['ero', 'eris', 'erit', 'erimus', 'eritis', 'erint'], 'fut. II', 'ind.', '');
      list6(out, ps, ['erim', 'eris', 'erit', 'erimus', 'eritis', 'erint'], 'perf.', 'coni.', '');
      list6(out, ps, ['issem', 'isses', 'isset', 'issemus', 'issetis', 'issent'], 'pqpf.', 'coni.', '');
      push(out, ps + 'isse', 'inf. perf.', { k: 'inf' });
    }
    if (!pre) emitAdj(out, adjA12('futurus', 'futura', 'futurum'), 'part. fut., ', 'part');
  }

  function verbForms(e) {
    var out = [], p = e.parts, cls = e.cls;
    var lemma = p[0];
    if (cls === 'sum') { sumForms(out, lemma.slice(0, -3), p[2] ? p[2].slice(0, -1) : 'fu'); return out; }
    if (cls === 'possum') {
      list6(out, '', ['possum', 'potes', 'potest', 'possumus', 'potestis', 'possunt'], 'praes.', 'ind.', '');
      list6(out, 'pot', ['eram', 'eras', 'erat', 'eramus', 'eratis', 'erant'], 'impf.', 'ind.', '');
      list6(out, 'pot', ['ero', 'eris', 'erit', 'erimus', 'eritis', 'erunt'], 'fut. I', 'ind.', '');
      list6(out, 'poss', ['im', 'is', 'it', 'imus', 'itis', 'int'], 'praes.', 'coni.', '');
      list6(out, 'poss', ['em', 'es', 'et', 'emus', 'etis', 'ent'], 'impf.', 'coni.', '');
      push(out, 'posse', 'inf. praes.', { k: 'inf' });
      perfectSystem(out, 'potu');
      emitAdj(out, adjI('potent', 'potens', 'potens', 'potens', true), 'PPA / przym. „potężny”, ', 'part');
      return out;
    }
    if (cls === 'volo') {
      list6(out, '', ['volo', 'vis', 'vult/volt', 'volumus', 'vultis', 'volunt'], 'praes.', 'ind.', 'act.');
      list6(out, 'voleba', PA, 'impf.', 'ind.', 'act.');
      list6(out, 'vol', ['am', 'es', 'et', 'emus', 'etis', 'ent'], 'fut. I', 'ind.', 'act.');
      list6(out, 'vel', ['im', 'is', 'it', 'imus', 'itis', 'int'], 'praes.', 'coni.', 'act.');
      list6(out, 'velle', PA, 'impf.', 'coni.', 'act.');
      push(out, 'velle', 'inf. praes. act.', { k: 'inf' });
      perfectSystem(out, 'volu');
      emitAdj(out, adjI('volent', 'volens', 'volens', 'volens', true), 'PPA (part. praes. act.), ', 'part');
      return out;
    }
    if (cls === 'nolo') {
      list6(out, '', ['nolo', 'nonvis', 'nonvult', 'nolumus', 'nonvultis', 'nolunt'], 'praes.', 'ind.', 'act.');
      list6(out, 'noleba', PA, 'impf.', 'ind.', 'act.');
      list6(out, 'nol', ['am', 'es', 'et', 'emus', 'etis', 'ent'], 'fut. I', 'ind.', 'act.');
      list6(out, 'nol', ['im', 'is', 'it', 'imus', 'itis', 'int'], 'praes.', 'coni.', 'act.');
      list6(out, 'nolle', PA, 'impf.', 'coni.', 'act.');
      push(out, 'nolle', 'inf. praes. act.', { k: 'inf' });
      push(out, 'noli', 'imp. praes., 2 os. lp. (+ inf. = „nie …”)', { k: 'imp' });
      push(out, 'nolite', 'imp. praes., 2 os. lm. (+ inf. = „nie …”)', { k: 'imp' });
      perfectSystem(out, 'nolu');
      return out;
    }
    if (cls === 'fio') {
      list6(out, '', ['fio', 'fis', 'fit', 'fimus', 'fitis', 'fiunt'], 'praes.', 'ind.', '');
      list6(out, 'fieba', PA, 'impf.', 'ind.', '');
      list6(out, 'fi', ['am', 'es', 'et', 'emus', 'etis', 'ent'], 'fut. I', 'ind.', '');
      list6(out, 'fia', PA, 'praes.', 'coni.', '');
      list6(out, 'fiere', PA, 'impf.', 'coni.', '');
      push(out, 'fieri', 'inf. praes.', { k: 'inf' });
      return out;
    }
    if (cls === 'eo') {
      var pre = lemma.slice(0, -2);
      list6(out, pre, ['eo', 'is', 'it', 'imus', 'itis', 'eunt'], 'praes.', 'ind.', 'act.');
      list6(out, pre + 'iba', PA, 'impf.', 'ind.', 'act.');
      list6(out, pre + 'ib', ['o', 'is', 'it', 'imus', 'itis', 'unt'], 'fut. I', 'ind.', 'act.');
      list6(out, pre + 'ea', PA, 'praes.', 'coni.', 'act.');
      list6(out, pre + 'ire', PA, 'impf.', 'coni.', 'act.');
      push(out, pre + 'ire', 'inf. praes. act.', { k: 'inf' });
      push(out, pre + 'i', 'imp. praes., 2 os. lp.', { k: 'imp' });
      push(out, pre + 'ite', 'imp. praes., 2 os. lm.', { k: 'imp' });
      if (p[2]) perfectSystem(out, p[2].slice(0, -1));
      emitAdj(out, adjI(pre + 'eunt', pre + 'iens', pre + 'iens', pre + 'iens', true), 'PPA (part. praes. act.), ', 'part');
      ['gen.', 'dat.', 'acc.', 'abl.'].forEach(function (cs, i) { push(out, pre + 'eund' + ['i', 'o', 'um', 'o'][i], 'gerundium, ' + cs, { k: 'ger' }); });
      emitAdj(out, adjA12(pre + 'iturus', pre + 'itura', pre + 'iturum'), 'part. fut. act., ', 'part');
      return out;
    }
    if (cls === 'fer') {
      var fp = lemma.slice(0, -4);
      var f = fp + 'fer';
      list6(out, '', [f + 'o', f + 's', f + 't', f + 'imus', f + 'tis', f + 'unt'], 'praes.', 'ind.', 'act.');
      list6(out, f + 'eba', PA, 'impf.', 'ind.', 'act.');
      list6(out, f, ['am', 'es', 'et', 'emus', 'etis', 'ent'], 'fut. I', 'ind.', 'act.');
      list6(out, f + 'a', PA, 'praes.', 'coni.', 'act.');
      list6(out, f + 're', PA, 'impf.', 'coni.', 'act.');
      list6(out, '', [f + 'or', f + 'ris', f + 'tur', f + 'imur', f + 'imini', f + 'untur'], 'praes.', 'ind.', 'pass.');
      list6(out, f + 'eba', PP, 'impf.', 'ind.', 'pass.');
      list6(out, f, ['ar', 'eris', 'etur', 'emur', 'emini', 'entur'], 'fut. I', 'ind.', 'pass.');
      list6(out, f + 'a', PP, 'praes.', 'coni.', 'pass.');
      list6(out, f + 're', PP, 'impf.', 'coni.', 'pass.');
      push(out, f + 're', 'inf. praes. act.', { k: 'inf' });
      push(out, f + 'ri', 'inf. praes. pass.', { k: 'inf' });
      push(out, f, 'imp. praes. act., 2 os. lp.', { k: 'imp' });
      push(out, f + 'te', 'imp. praes. act., 2 os. lm.', { k: 'imp' });
      if (p[2]) perfectSystem(out, p[2].slice(0, -1));
      participles(out, f, '3', p[3] ? p[3].slice(0, -2) : null, 'PPP (part. perf. pass.), ');
      return out;
    }
    // regularne: v1 v2 v3 v3i v4, deponentia v1d…v4d, semideponentia v2sd
    var dep = /d$/.test(cls) && !/sd$/.test(cls);
    var semi = /sd$/.test(cls);
    var c = cls.replace(/^v/, '').replace(/sd$/, '').replace(/d$/, '');
    var V = VC[c];
    if (!V) return out;
    var inf = p[1];
    if (dep) {
      var st = inf.slice(0, inf.length - V.infp.length);
      presentSystem(out, st, c, 'p', 'dep.');
      var pp = p[2] ? p[2].replace(/ sum$/, '') : null;
      participles(out, st, c, pp ? pp.slice(0, -2) : null, 'part. perf. (deponens, znacz. czynne), ');
      return out;
    }
    var st2 = inf.slice(0, inf.length - V.inf.length);
    presentSystem(out, st2, c, 'a', 'act.');
    if (semi) {
      var spp = p[2].replace(/ sum$/, '');
      participles(out, st2, c, spp.slice(0, -2), 'part. perf. (semideponens), ');
      return out;
    }
    presentSystem(out, st2, c, 'p', 'pass.');
    if (p[2] && p[2] !== '-') perfectSystem(out, p[2].slice(0, -1));
    participles(out, st2, c, p[3] && p[3] !== '-' ? p[3].slice(0, -2) : null, 'PPP (part. perf. pass.), ');
    return out;
  }

  /* ---------- Formy dowolnego hasła ---------- */
  function forms(e) {
    if (e._forms) return e._forms;
    var out = [], p = e.parts, cls = e.cls;
    if (/^n\d/.test(cls)) {
      var T = nounTables(cls, p[0], p[1]);
      if (T) decline(out, e.plOnly ? null : T[0], T[1], '', '', 'noun');
    } else if (cls === 'a12' || cls === 'a12p') {
      emitAdj(out, adjA12(p[0], p[1], p[2], cls === 'a12p'));
    } else if (cls === 'a3_3') {
      emitAdj(out, adjI(p[1].slice(0, -2), p[0], p[1], p[2], false));
    } else if (cls === 'a3_2') {
      emitAdj(out, adjI(p[0].slice(0, -2), p[0], p[0], p[1], false));
    } else if (cls === 'a3_1') {
      emitAdj(out, adjI(p[1].slice(0, -2), p[0], p[0], p[0], true));
    } else if (cls === 'a3c') {
      emitAdj(out, adjComp(p[0], p[0], p[1]));
    } else if (cls === 'pron') {
      emitPron(out, e.pron);
    } else if (/^v|^sum$|^possum$|^volo$|^nolo$|^fio$|^eo$|^fer$/.test(cls)) {
      out = verbForms(e);
    } else {
      push(out, p[0], e.g || 'nieodm.', { k: 'x' });
    }
    e._forms = out;
    return out;
  }
  LAT.forms = forms;

  /* ---------- Indeks i analizator ---------- */
  var INDEX = null, ENTRIES = [];
  LAT.buildIndex = function (entries) {
    ENTRIES = entries;
    INDEX = new Map();
    entries.forEach(function (e) {
      forms(e).forEach(function (fm) {
        var key = norm(fm.f);
        if (!key) return;
        var arr = INDEX.get(key);
        if (!arr) { arr = []; INDEX.set(key, arr); }
        arr.push({ e: e, an: fm.an, f: fm.f });
      });
    });
    return INDEX.size;
  };

  function mergeLabels(labels) {
    // łączy „abl. lm. m.”, „abl. lm. f.”, „abl. lm. n.” → „abl. lm. m./f./n.”
    var groups = [], map = {};
    labels.forEach(function (l) {
      var m = l.match(/^(.*?)( (m|f|n)\.)$/);
      var base = m ? m[1] : l, g = m ? m[3] + '.' : '';
      if (!map[base]) { map[base] = { base: base, g: [] }; groups.push(map[base]); }
      if (g && map[base].g.indexOf(g) < 0) map[base].g.push(g);
    });
    return groups.map(function (x) { return x.base + (x.g.length ? ' ' + x.g.join('/') : ''); });
  }
  LAT.mergeLabels = mergeLabels;

  function lookup(key) {
    var hits = INDEX.get(key) || [];
    var by = new Map();
    hits.forEach(function (h) {
      if (!by.has(h.e)) by.set(h.e, []);
      var a = by.get(h.e);
      if (a.indexOf(h.an) < 0) a.push(h.an);
    });
    var res = [];
    by.forEach(function (labels, e) { res.push({ e: e, labels: mergeLabels(labels) }); });
    return res;
  }

  LAT.analyze = function (word) {
    if (!INDEX) return [];
    var key = norm(word);
    var res = lookup(key);
    if (!res.length) {
      [['que', '-que („i”)'], ['ue', '-ve („lub”)'], ['ne', '-ne (pytajne)']].forEach(function (enc) {
        if (!res.length && key.length > enc[0].length + 1 && key.slice(-enc[0].length) === enc[0]) {
          res = lookup(key.slice(0, -enc[0].length)).map(function (r) { r.enclitic = enc[1]; return r; });
        }
      });
    }
    return res;
  };

  /* Wszystkie analizy danej formy w obrębie jednego hasła (do ćwiczeń) */
  LAT.analysesOf = function (e, form) {
    var k = norm(form);
    return forms(e).filter(function (x) { return norm(x.f) === k; });
  };

  LAT.CASES = CASES;
  LAT.PERS = PERS;
})();
