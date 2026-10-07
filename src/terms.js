/* ============================================================
   TERMINOLOGIA: słowniczek, polskie etykiety, podpowiedzi
   ============================================================ */
LAT.TERMS = [
  // [skrót / termin, pełna nazwa łacińska, po polsku, pytanie / przykład, grupa]
  ['nom.', 'nominativus', 'mianownik', 'kto? co? – podmiot: Nos Boleslaus', 'Przypadki'],
  ['gen.', 'genetivus', 'dopełniacz', 'kogo? czego? – dux Poloniae (książę Polski)', 'Przypadki'],
  ['dat.', 'dativus', 'celownik', 'komu? czemu? – odbiorca: ecclesiae damus (dajemy kościołowi)', 'Przypadki'],
  ['acc.', 'accusativus', 'biernik', 'kogo? co? – dopełnienie: villam damus (dajemy wieś)', 'Przypadki'],
  ['abl.', 'ablativus', 'ablatyw (brak w polskim)', 'łączy funkcje narzędnika i miejscownika oraz „od kogo/czego”: kim? czym? gdzie? kiedy? skąd? – in Cracovia, anno Domini, iure perpetuo', 'Przypadki'],
  ['voc.', 'vocativus', 'wołacz', 'zwrot do kogoś: Generose! (Urodzony!)', 'Przypadki'],
  ['lp.', 'singularis', 'liczba pojedyncza', 'villa – wieś', 'Liczba i rodzaj'],
  ['lm.', 'pluralis', 'liczba mnoga', 'villae – wsie', 'Liczba i rodzaj'],
  ['m.', 'masculinum', 'rodzaj męski', 'dominus', 'Liczba i rodzaj'],
  ['f.', 'femininum', 'rodzaj żeński', 'villa', 'Liczba i rodzaj'],
  ['n.', 'neutrum', 'rodzaj nijaki', 'privilegium', 'Liczba i rodzaj'],
  ['dekl.', 'declinatio', 'deklinacja (wzór odmiany rzeczownika)', 'I: terra, II: dominus, III: rex, IV: census, V: res', 'Odmiana'],
  ['koniug.', 'coniugatio', 'koniugacja (wzór odmiany czasownika)', 'I: donare, II: habere, III: mittere, IV: audire', 'Odmiana'],
  ['praes.', 'praesens', 'czas teraźniejszy', 'damus – dajemy', 'Czasy'],
  ['impf.', 'imperfectum', 'czas przeszły niedokonany', 'dabamus – dawaliśmy', 'Czasy'],
  ['perf.', 'perfectum', 'czas przeszły dokonany', 'dedimus – daliśmy', 'Czasy'],
  ['pqpf.', 'plusquamperfectum', 'czas zaprzeszły', 'dederamus – (już wcześniej) daliśmy', 'Czasy'],
  ['fut. I', 'futurum I', 'czas przyszły', 'dabimus – damy', 'Czasy'],
  ['fut. II', 'futurum II (exactum)', 'czas przyszły uprzedni', 'si dederit – jeśli da (zanim coś innego nastąpi)', 'Czasy'],
  ['ind.', 'indicativus', 'tryb oznajmujący', 'stwierdzenie faktu: damus – dajemy', 'Tryby i strony'],
  ['coni.', 'coniunctivus', 'tryb łączący', 'życzenie, cel, możliwość: notum sit – niech będzie wiadome; ut possideat – aby posiadał', 'Tryby i strony'],
  ['imp.', 'imperativus', 'tryb rozkazujący', 'lege! – czytaj!', 'Tryby i strony'],
  ['act.', 'activum', 'strona czynna', 'vocat – nazywa', 'Tryby i strony'],
  ['pass.', 'passivum', 'strona bierna', 'vocatur – jest nazywany, nazywa się', 'Tryby i strony'],
  ['dep.', 'deponens', 'czasownik o formie biernej i znaczeniu czynnym', 'fatetur – zeznaje', 'Tryby i strony'],
  ['os.', 'persona', 'osoba (1 – ja/my, 2 – ty/wy, 3 – on/oni)', 'damus – 1 os. lm.', 'Tryby i strony'],
  ['inf.', 'infinitivus', 'bezokolicznik', 'dare – dawać; dedisse – dać (w przeszłości)', 'Formy nieosobowe'],
  ['PPA', 'participium praesentis activi', 'imiesłów czynny teraźniejszy („robiący”, „robiąc”)', 'veniens – przybywając', 'Formy nieosobowe'],
  ['PPP', 'participium perfecti passivi', 'imiesłów bierny („zrobiony”)', 'dictus – zwany', 'Formy nieosobowe'],
  ['part. fut. act.', 'participium futuri activi', 'imiesłów przyszły („mający zrobić”)', 'inspecturis – którzy będą oglądać', 'Formy nieosobowe'],
  ['gerundium', 'gerundium', 'rzeczownik odczasownikowy („robienie”)', 'ad habendum – do posiadania', 'Formy nieosobowe'],
  ['gerundivum', 'gerundivum', 'przymiotnik odczasownikowy („do zrobienia”, „mający być zrobionym”)', 'villam possidendam – wieś do posiadania', 'Formy nieosobowe'],
  ['AcI', 'accusativus cum infinitivo', 'biernik z bezokolicznikiem = zdanie „że…”', 'dicunt ducem dedisse – mówią, że książę dał', 'Konstrukcje'],
  ['NcI', 'nominativus cum infinitivo', 'mianownik z bezokolicznikiem przy stronie biernej = „mówi się, że…”', 'leguntur contulisse – czyta się, że nadali', 'Konstrukcje'],
  ['abl. abs.', 'ablativus absolutus', 'ablatyw „oderwany” = zdanie okolicznikowe (gdy, po tym jak, w obecności)', 'presentibus testibus – w obecności świadków', 'Konstrukcje'],
  ['praep.', 'praepositio', 'przyimek', 'in, cum, de, ad…', 'Części mowy'],
  ['adv.', 'adverbium', 'przysłówek', 'perpetuo – na wieczność', 'Części mowy']
];

/* Zamiana skrótowych etykiet analizy na polskie słowa */
LAT.plLabel = function (s) {
  if (!s) return s;
  var r = ' ' + s + ' ';
  var R = [
    [/PPA \(part\. praes\. act\.\), /g, 'imiesłów czynny (PPA), '],
    [/PPP \(part\. perf\. pass\.\), /g, 'imiesłów bierny (PPP), '],
    [/part\. perf\. \(deponens, znacz\. czynne\), /g, 'imiesłów uprzedni deponensu, '],
    [/part\. perf\. \(semideponens\), /g, 'imiesłów uprzedni, '],
    [/part\. fut\. act\., /g, 'imiesłów przyszły, '],
    [/part\. fut\., /g, 'imiesłów przyszły, '],
    [/gerundivum, /g, 'gerundivum („do zrobienia”), '],
    [/gerundium, /g, 'gerundium („robienie”), '],
    [/inf\. praes\./g, 'bezokolicznik teraźniejszy'], [/inf\. perf\./g, 'bezokolicznik przeszły'], [/inf\. fut\./g, 'bezokolicznik przyszły'],
    [/imp\. praes\./g, 'rozkaźnik'], [/imp\. fut\./g, 'rozkaźnik przyszły'],
    [/fut\. II/g, 'cz. przyszły uprzedni'], [/fut\. I/g, 'cz. przyszły'], [/\bpraes\./g, 'cz. teraźniejszy'], [/\bimpf\./g, 'cz. przeszły niedokonany'],
    [/\bpqpf\./g, 'cz. zaprzeszły'], [/\bperf\./g, 'cz. przeszły dokonany'],
    [/ ind\./g, ', tryb oznajmujący'], [/ coni\./g, ', tryb łączący'],
    [/ act\./g, ', strona czynna'], [/ pass\./g, ', strona bierna'], [/ dep\./g, ', deponens'],
    [/(\d) os\. lp\./g, '$1. osoba l. poj.'], [/(\d) os\. lm\./g, '$1. osoba l. mn.'], [/2\/3 os\. lp\./g, '2./3. osoba l. poj.'],
    [/\bnom\./g, 'mianownik'], [/\bgen\./g, 'dopełniacz'], [/\bdat\./g, 'celownik'], [/\bacc\./g, 'biernik'], [/\babl\./g, 'ablatyw'], [/\bvoc\./g, 'wołacz'],
    [/ lp\./g, ' l. poj.'], [/ lm\./g, ' l. mn.']
  ];
  R.forEach(function (x) { r = r.replace(x[0], x[1]); });
  r = r.replace(/ ((?:[mfn]\.\/?)+) $/, function (m, g) {
    return ' · rodz. ' + g.split('/').map(function (x) { return { 'm.': 'm', 'f.': 'ż', 'n.': 'n' }[x]; }).join('/') + ' ';
  });
  return r.trim().replace(/, ,/g, ',').replace(/^, /, '');
};

/* Podpowiedzi: owija terminy w tekście w <abbr class="term"> */
(function () {
  var map = {}, keys = [];
  LAT.TERMS.forEach(function (t) {
    if (['m.', 'f.', 'n.', 'os.', 'adv.', 'praep.'].indexOf(t[0]) >= 0) return;
    map[t[0].toLowerCase()] = t; keys.push(t[0]);
    if (t[1] !== t[0] && !/ /.test(t[1]) || /cum|absolutus|futurum/.test(t[1])) { map[t[1].toLowerCase()] = t; keys.push(t[1]); }
  });
  keys.sort(function (a, b) { return b.length - a.length; });
  var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  var re = new RegExp('(^|[^A-Za-zÀ-ž])(' + keys.map(esc).join('|') + ')(?![A-Za-zÀ-ž])', 'gi');
  LAT.termInfo = function (k) { return map[String(k).toLowerCase()]; };
  LAT.glossify = function (root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode; if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('abbr,button,select,option,textarea,input,.drill-form,.la-text,.no-gloss,a')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var txt = n.nodeValue; re.lastIndex = 0; if (!re.test(txt)) return; re.lastIndex = 0;
      var frag = document.createDocumentFragment(), last = 0, m;
      while ((m = re.exec(txt))) {
        var start = m.index + m[1].length;
        frag.appendChild(document.createTextNode(txt.slice(last, start)));
        var a = document.createElement('abbr'); a.className = 'term'; a.tabIndex = 0; a.textContent = m[2];
        var info = map[m[2].toLowerCase()]; a.setAttribute('data-k', info[0]); a.title = info[1] + ' – ' + info[2];
        frag.appendChild(a); last = start + m[2].length;
      }
      frag.appendChild(document.createTextNode(txt.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
  };
})();
