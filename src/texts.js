/* ============================================================
   CZYTANKA ŹRÓDEŁ
   gl: klucz = słowo małymi literami (wariant: słowo#n w tekście)
       wartość = "lemat|forma|znaczenie w kontekście"
   hard: słowa pokazywane na poziomie pomocy 2
   kind: 'model' – tekst dydaktyczny ułożony na wzór źródeł;
         'real'  – fragment autentycznego źródła
   ============================================================ */
LAT.TEXTS = [
{
  id: 't1', title: 'Nadanie wsi kościołowi', period: 'XIII w.', kind: 'model', level: 1,
  source: 'Tekst modelowy ułożony na wzór krótkich dokumentów książęcych XIII w. Osoby i nadanie są umowne.',
  intro: 'Najprostszy typ dokumentu: wystawca, promulgacja, nadanie, korroboracja i data. Prawie każde zdanie to stała formuła, którą spotkasz w setkach dokumentów.',
  text: 'In nomine Domini amen. Nos Boleslaus, Dei gracia dux Polonie, notum facimus universis presentes litteras inspecturis, quod villam nostram dictam Dambrowa cum omnibus pertinenciis suis ecclesie sancti Adalberti in Gnesna damus et conferimus iure perpetuo possidendam. In cuius rei testimonium presentes litteras sigilli nostri munimine fecimus roborari. Datum in Cracovia anno Domini millesimo ducentesimo septuagesimo, in festo sancti Michaelis.',
  gl: {
    'in': 'in|praep. + abl.|w', 'nomine': 'nomen, -inis n.|abl. lp.|imię (in nomine – w imię)', 'domini': 'dominus, -i m.|gen. lp.|Pana', 'amen': 'amen|wykrz.|amen',
    'nos': 'ego, lm. nos|nom. lm.|my (pluralis maiestatis)', 'boleslaus': 'Boleslaus, -i m.|nom. lp.|Bolesław', 'dei': 'deus, -i m.|gen. lp.|Bożej (dosł. Boga)',
    'gracia': 'gratia, -ae f. (śr. gracia)|abl. lp.|z łaski', 'dux': 'dux, ducis m.|nom. lp.|książę', 'polonie': 'Polonia, -ae f. (śr. -e = -ae)|gen. lp.|Polski',
    'notum': 'notus, -a, -um|acc. lp. n.|wiadome', 'facimus': 'facio, facere, feci, factum|praes. ind. act., 1 os. lm.|czynimy (notum facimus – podajemy do wiadomości)',
    'universis': 'universus, -a, -um|dat. lm.|wszystkim', 'presentes': 'praesens, -ntis (śr. presens)|acc. lm. f.|niniejszy', 'litteras': 'littera, -ae f.; lm. litterae|acc. lm.|dokument (dosł. litery)',
    'inspecturis': 'inspicio, -ere, inspexi, inspectum|part. fut. act., dat. lm.|którzy będą oglądać', 'quod': 'quod|spójnik|że',
    'villam': 'villa, -ae f.|acc. lp.|wieś', 'nostram': 'noster, -tra, -trum|acc. lp. f.|naszą', 'dictam': 'dico, dicere, dixi, dictum|PPP, acc. lp. f.|zwaną', 'dambrowa': 'Dambrowa|nazwa miejscowa (nieodm.)|Dąbrowa',
    'cum': 'cum|praep. + abl.|z', 'omnibus': 'omnis, omne|abl. lm.|wszystkimi', 'pertinenciis': 'pertinentia, -ae f. (śr. -cia)|abl. lm.|przynależnościami', 'suis': 'suus, -a, -um|abl. lm.|jej (dosł. swoimi)',
    'ecclesie': 'ecclesia, -ae f. (śr. -e = -ae)|dat. lp.|kościołowi', 'sancti': 'sanctus, -a, -um|gen. lp. m.|świętego', 'adalberti': 'Adalbertus, -i m.|gen. lp.|Wojciecha', 'gnesna': 'Gnesna, -ae f.|abl. lp.|Gnieźnie',
    'damus': 'do, dare, dedi, datum|praes. ind. act., 1 os. lm.|dajemy', 'et': 'et|spójnik|i', 'conferimus': 'confero, conferre, contuli, collatum|praes. ind. act., 1 os. lm.|nadajemy',
    'iure': 'ius, iuris n.|abl. lp.|prawem', 'perpetuo': 'perpetuus, -a, -um|abl. lp. n.|wieczystym', 'possidendam': 'possideo, -ere, possedi, possessum|gerundivum, acc. lp. f.|do posiadania',
    'cuius': 'qui, quae, quod|gen. lp. f.|której (zaimek względny łączący: „tej”)', 'rei': 'res, rei f.|gen. lp.|rzeczy', 'testimonium': 'testimonium, -ii n.|acc. lp.|świadectwo (in … testimonium – na świadectwo)',
    'sigilli': 'sigillum, -i n.|gen. lp.|pieczęci', 'nostri': 'noster|gen. lp. n.|naszej', 'munimine': 'munimen, -inis n.|abl. lp.|umocnieniem', 'fecimus': 'facio|perf. ind. act., 1 os. lm.|kazaliśmy (dosł. uczyniliśmy)',
    'roborari': 'roboro, -are|inf. praes. pass.|umocnić (dosł. być umocnionym)', 'datum': 'do, dare, dedi, datum|PPP, nom. lp. n.|dano (dosł. dane [jest])', 'cracovia': 'Cracovia, -ae f.|abl. lp.|Krakowie',
    'anno': 'annus, -i m.|abl. lp. (czasu)|roku', 'millesimo': 'millesimus, -a, -um|abl. lp. m.|tysięcznym', 'ducentesimo': 'ducentesimus|abl. lp. m.|dwusetnym', 'septuagesimo': 'septuagesimus|abl. lp. m.|siedemdziesiątym',
    'festo': 'festum, -i n.|abl. lp.|święto (in festo – w dniu święta)', 'michaelis': 'Michael, -elis m.|gen. lp.|Michała'
  },
  hard: ['inspecturis', 'possidendam', 'cuius', 'munimine', 'roborari', 'fecimus', 'pertinenciis', 'datum', 'gracia', 'notum', 'facimus'],
  q: [
    { q: 'Kto jest wystawcą dokumentu?', o: ['kościół św. Wojciecha', 'książę Bolesław', 'mieszkańcy Dąbrowy', 'biskup gnieźnieński'], a: 1, e: '<i>Nos Boleslaus, Dei gracia dux Polonie</i> – intitulatio.' },
    { q: 'Co jest przedmiotem nadania?', o: ['kościół w Gnieźnie', 'pieczęć książęca', 'wieś Dąbrowa z przynależnościami', 'prawo niemieckie'], a: 2, e: '<i>villam nostram dictam Dambrowa cum omnibus pertinenciis suis</i>.' },
    { q: 'Kto otrzymuje nadanie?', o: ['kościół św. Wojciecha w Gnieźnie', 'mieszczanie krakowscy', 'sam książę', 'kościół św. Michała'], a: 0, e: '<i>ecclesie</i> – celownik: komu dajemy.' },
    { q: 'Na jak długo?', o: ['dożywotnio', 'wieczyście', 'do święta św. Michała', 'na 70 lat'], a: 1, e: '<i>iure perpetuo</i> – prawem wieczystym.' },
    { q: 'Kiedy wystawiono dokument?', o: ['29 IX 1270', '8 V 1270', '1 I 1200', '29 VI 1270'], a: 0, e: 'Święto św. Michała przypada 29 IX; <i>millesimo ducentesimo septuagesimo</i> = 1270.' },
    { q: 'Zdanie <i>In cuius rei testimonium… fecimus roborari</i> to w dyplomatyce:', o: ['arenga', 'corroboratio', 'sanctio', 'narratio'], a: 1, e: 'Corroboratio zapowiada środki uwierzytelnienia (pieczęć, świadkowie).' }
  ],
  tr: 'W imię Pańskie, amen. My, Bolesław, z łaski Bożej książę Polski, podajemy do wiadomości wszystkim, którzy będą oglądać niniejszy dokument, że naszą wieś zwaną Dąbrowa ze wszystkimi jej przynależnościami dajemy i nadajemy kościołowi św. Wojciecha w Gnieźnie do posiadania wieczystym prawem. Na świadectwo tego kazaliśmy umocnić niniejszy dokument naszą pieczęcią. Dano w Krakowie roku Pańskiego tysiąc dwieście siedemdziesiątego, w święto św. Michała.'
},
{
  id: 't2', title: 'Dagome iudex', period: 'ok. 991 (regest z ok. 1087)', kind: 'real', level: 2,
  source: 'Regest zaginionego dokumentu zachowany w zbiorze kanonów kardynała Deusdedita (ok. 1087). Tekst według tradycyjnego brzmienia edycji; przed cytowaniem w pracy naukowej sprawdź w edycji krytycznej.',
  intro: 'Najstarszy tekst opisujący granice państwa Mieszka I. Jest to streszczenie (regest) sporządzone sto lat później przez kopistę, który nie rozumiał słowiańskich nazw. Dlatego tekst zawiera błędy gramatyczne i zniekształcone nazwy. To dobry trening czytania „niedoskonałej” łaciny.',
  text: 'Item in alio tomo sub Iohanne XV papa Dagome iudex et Ote senatrix et filii eorum Misica et Lambertus leguntur beato Petro contulisse unam civitatem in integro, que vocatur Schinesghe, cum omnibus suis pertinentiis infra hos affines, sicuti incipit a primo latere longum mare, fine Pruzze usque in locum, qui dicitur Russe, et fines Russe extendente usque in Craccoa et ab ipsa Craccoa usque ad flumen Oddere recte in locum, qui dicitur Alemure, et ab ipsa Alemura usque in terram Milze, et a fine Milze recte intra Oddere et exinde ducente iuxta flumen Oddera usque in predictam civitatem Schinesghe.',
  gl: {
    'item': 'item|adv.|także, również (otwiera kolejny regest)', 'in': 'in|praep. + abl./acc.|w; do (z acc.)', 'alio': 'alius, -a, -ud|abl. lp. m.|innym', 'tomo': 'tomus, -i m.|abl. lp.|tomie, zwoju',
    'sub': 'sub|praep. + abl.|za (czasów)', 'iohanne': 'Iohannes, -is m.|abl. lp.|Janie', 'papa': 'papa, -ae m.|abl. lp.|papieżu (sub Iohanne papa – za papieża Jana)',
    'dagome': 'Dagome (forma zniekształcona)|nom.|Dagome – zapewne Mieszko I', 'iudex': 'iudex, -icis m.|nom. lp.|sędzia (tu raczej tytuł władcy; interpretacje sporne)',
    'et': 'et|spójnik|i', 'ote': 'Ote (Oda)|nom.|Oda (żona Mieszka)', 'senatrix': 'senatrix, -icis f.|nom. lp.|„senatorka”, tu: pani, władczyni',
    'filii': 'filius, -ii m.|nom. lm.|synowie', 'eorum': 'is, ea, id|gen. lm.|ich', 'misica': 'Misica|nom.|Mieszko (syn)', 'lambertus': 'Lambertus, -i m.|nom. lp.|Lambert',
    'leguntur': 'lego, legere, legi, lectum|praes. ind. pass., 3 os. lm.|czyta się (o nich), że… (NcI)', 'beato': 'beatus, -a, -um|dat. lp. m.|świętemu (dosł. błogosławionemu)', 'petro': 'Petrus, -i m.|dat. lp.|Piotrowi',
    'contulisse': 'confero, conferre, contuli, collatum|inf. perf. act.|nadali (dosł. nadać [w przeszłości])', 'unam': 'unus, -a, -um|acc. lp. f.|jedno', 'civitatem': 'civitas, -atis f.|acc. lp.|państwo, terytorium (dosł. gród)',
    'integro': 'integer, -gra, -grum|abl. lp. n.|całości (in integro – w całości)', 'que': 'qui, quae, quod (śr. que = quae)|nom. lp. f.|które', 'vocatur': 'voco, -are|praes. ind. pass., 3 os. lp.|nazywa się',
    'schinesghe': 'Schinesghe (nazwa zniekształcona)|nom./acc.|Schinesghe – najpewniej Gniezno (civitas Gnesnensis)', 'cum': 'cum|praep. + abl.|z',
    'omnibus': 'omnis, omne|abl. lm.|wszystkimi', 'suis': 'suus, -a, -um|abl. lm.|swoimi', 'pertinentiis': 'pertinentia, -ae f.|abl. lm.|przynależnościami',
    'infra': 'infra|praep. + acc.|w obrębie (klas. „poniżej”!)', 'hos': 'hic, haec, hoc|acc. lm. m.|tych', 'affines': 'affinis, -is m.|acc. lm.|granic (właśc. „sąsiedztw”)',
    'sicuti': 'sicuti|spójnik|tak jak', 'incipit': 'incipio, -ere|praes. ind. act., 3 os. lp.|zaczyna się', 'a': 'a, ab|praep. + abl.|od',
    'primo': 'primus, -a, -um|abl. lp. n.|pierwszego', 'latere': 'latus, -eris n.|abl. lp.|boku', 'longum': 'longus, -a, -um|nom. lp. n.|długie', 'mare': 'mare, -is n.|nom. lp.|morze (Bałtyk)',
    'fine': 'finis, -is m.|abl. lp.|granicą (błędnie abl. zamiast acc.: wzdłuż granicy)', 'pruzze': 'Pruzze|gen.|Prus', 'usque': 'usque|adv.|aż',
    'locum': 'locus, -i m.|acc. lp.|miejsca', 'qui': 'qui, quae, quod|nom. lp. m.|które', 'dicitur': 'dico, dicere|praes. ind. pass., 3 os. lp.|nazywa się (dosł. jest mówione)',
    'russe': 'Russe|acc./gen.|Ruś / Rusi', 'fines': 'finis, -is m.|acc. lm.|granice', 'extendente': 'extendo, -ere|PPA, abl. lp.|rozciągając się (konstrukcja zepsuta: acc. + abl.)',
    'craccoa': 'Craccoa|acc./abl.|Kraków / Krakowa', 'ab': 'ab|praep. + abl.|od', 'ipsa': 'ipse, -a, -um|abl. lp. f.|tegoż', 'ad': 'ad|praep. + acc.|do',
    'flumen': 'flumen, -inis n.|acc. lp.|rzeki', 'oddere': 'Oddera|acc./gen.|Odry', 'recte': 'recte|adv.|prosto', 'alemure': 'Alemure|acc.|Alemure (niezidentyfikowane; może Ołomuniec)',
    'alemura': 'Alemura|abl.|Alemure', 'terram': 'terra, -ae f.|acc. lp.|kraju, ziemi', 'milze': 'Milze|gen.|Milska (kraj Milczan, Łużyce Górne)', 'intra': 'intra|praep. + acc.|wewnątrz, w obrębie',
    'exinde': 'exinde|adv.|stamtąd', 'ducente': 'duco, -ere|PPA, abl. lp.|prowadząc (granicę)', 'iuxta': 'iuxta|praep. + acc.|wzdłuż', 'oddera': 'Oddera|acc.|Odry',
    'predictam': 'praedictus, -a, -um (śr. pre-)|acc. lp. f.|wspomnianego'
  },
  hard: ['leguntur', 'contulisse', 'infra', 'affines', 'fine', 'extendente', 'ducente', 'integro', 'senatrix', 'schinesghe', 'predictam'],
  q: [
    { q: 'Kto dokonuje nadania?', o: ['papież Jan XV', 'Dagome, Ote i ich synowie', 'św. Piotr', 'mieszkańcy Krakowa'], a: 1, e: 'Podmiot NcI: <i>Dagome iudex et Ote senatrix et filii eorum Misica et Lambertus</i>.' },
    { q: 'Komu przekazano terytorium?', o: ['cesarzowi', 'św. Piotrowi (Stolicy Apostolskiej)', 'Prusom', 'Rusi'], a: 1, e: '<i>beato Petro</i> – celownik.' },
    { q: 'Od czego zaczyna się opis granic?', o: ['od Odry', 'od Krakowa', 'od „długiego morza” (Bałtyku)', 'od Rusi'], a: 2, e: '<i>sicuti incipit a primo latere longum mare</i>.' },
    { q: 'Konstrukcja <i>leguntur … contulisse</i> to:', o: ['ablativus absolutus', 'nominativus cum infinitivo', 'gerundivum', 'cum historicum'], a: 1, e: '„Czyta się [o nich], że nadali”.' },
    { q: 'Jak rozumieć <i>infra hos affines</i>?', o: ['poniżej tych sąsiadów', 'w obrębie tych granic', 'przed tymi granicami', 'poza granicami'], a: 1, e: 'W łacinie średniowiecznej <i>infra</i> często = <i>intra</i>.' }
  ],
  tr: 'Także w innym tomie, za papieża Jana XV, czyta się, że sędzia Dagome i pani Ote oraz ich synowie Mieszko i Lambert nadali świętemu Piotrowi w całości jedno państwo, które nazywa się Schinesghe, ze wszystkimi jego przynależnościami w obrębie tych granic: jak zaczyna się od pierwszego boku długie morze, granicą Prus aż do miejsca, które nazywa się Ruś, a granica Rusi ciągnie się aż do Krakowa, i od tegoż Krakowa aż do rzeki Odry prosto do miejsca, które nazywa się Alemure, i od tegoż Alemure aż do ziemi Milczan, a od granicy Milczan prosto do Odry i stamtąd, biegnąc wzdłuż rzeki Odry, aż do wspomnianego państwa Schinesghe.'
},
{
  id: 't3', title: 'Lokacja wsi na prawie niemieckim', period: 'XIV w.', kind: 'model', level: 2,
  source: 'Tekst modelowy ułożony na wzór przywilejów lokacyjnych z XIV w. Osoby i miejsca są umowne.',
  intro: 'Przywilej lokacyjny: właściciel powierza zasadźcy (sołtysowi) osadzenie wsi, określa jego uposażenie, okres wolnizny, czynsz i podział kompetencji sądowych. To podstawowy typ źródła do dziejów wsi.',
  text: 'Nos Nicolaus, heres de#1 Wola, notum facimus tenore presencium universis, quod considerantes utilitatem nostram villam nostram Wola iure Theutonico locandam damus discreto viro Petro sculteto et eius legitimis successoribus. Damus etiam eidem Petro tres mansos liberos ad scultetiam et tabernam et molendinum. Item kmetonibus in dicta villa residentibus quindecim annos libertatis concedimus. Quibus elapsis quilibet kmeto de#2 quolibet manso unam marcam census in festo sancti Martini solvere tenebitur. Causas vero maiores, videlicet de#3 capite et membris, nobis reservamus; minores scultetus iudicabit et de#4 iudicio tertium denarium habebit.',
  gl: {
    'nos': 'ego, lm. nos|nom. lm.|my', 'nicolaus': 'Nicolaus, -i m.|nom. lp.|Mikołaj', 'heres': 'heres, -edis m.|nom. lp.|dziedzic (= właściciel)', 'de#1': 'de|praep. + abl.|z; tu zamiast dopełniacza: „dziedzic Woli”',
    'wola': 'Wola|nazwa miejscowa|Wola', 'notum': 'notus|acc. lp. n.|wiadome', 'facimus': 'facio|praes. ind. act., 1 os. lm.|czynimy (podajemy do wiadomości)',
    'tenore': 'tenor, -oris m.|abl. lp.|treścią', 'presencium': 'praesens (śr. presencium = praesentium)|gen. lm.|niniejszego (pisma)', 'universis': 'universus|dat. lm.|wszystkim', 'quod': 'quod|spójnik|że',
    'considerantes': 'considero, -are|PPA, nom. lm. m.|zważając na', 'utilitatem': 'utilitas, -atis f.|acc. lp.|pożytek, korzyść', 'villam': 'villa|acc. lp.|wieś', 'nostram': 'noster|acc. lp. f.|naszą', 'iure': 'ius, iuris n.|abl. lp.|prawem',
    'theutonico': 'Theutonicus, -a, -um|abl. lp. n.|niemieckim', 'locandam': 'loco, -are|gerundivum, acc. lp. f.|do lokowania (osadzenia)', 'damus': 'do, dare|praes. ind. act., 1 os. lm.|dajemy',
    'discreto': 'discretus, -a, -um|dat. lp. m.|roztropnemu (tytuł)', 'viro': 'vir, viri m.|dat. lp.|mężowi', 'petro': 'Petrus|dat. lp.|Piotrowi', 'sculteto': 'scultetus, -i m.|dat. lp.|sołtysowi (zasadźcy)',
    'et': 'et|spójnik|i', 'eius': 'is, ea, id|gen. lp.|jego', 'legitimis': 'legitimus|dat. lm.|prawowitym', 'successoribus': 'successor, -oris m.|dat. lm.|następcom',
    'etiam': 'etiam|adv.|także', 'eidem': 'idem, eadem, idem|dat. lp. m.|temuż', 'tres': 'tres, tria|acc. lm. m.|trzy', 'mansos': 'mansus, -i m.|acc. lm.|łany', 'liberos': 'liber, -era, -erum|acc. lm. m.|wolne (od czynszu)',
    'ad': 'ad|praep. + acc.|do, na (= jako uposażenie)', 'scultetiam': 'scultetia, -ae f.|acc. lp.|sołectwo', 'tabernam': 'taberna, -ae f.|acc. lp.|karczmę', 'molendinum': 'molendinum, -i n.|acc. lp.|młyn',
    'item': 'item|adv.|także, dalej (formuła wyliczenia)', 'kmetonibus': 'kmeto, -onis m.|dat. lm.|kmieciom', 'in': 'in|praep. + abl.|w', 'dicta': 'dico|PPP, abl. lp. f.|wspomnianej (dosł. powiedzianej)', 'villa': 'villa|abl. lp.|wsi',
    'residentibus': 'resideo, -ere|PPA, dat. lm.|osiadłym', 'quindecim': 'quindecim|liczebnik nieodm.|piętnaście', 'annos': 'annus|acc. lm.|lat', 'libertatis': 'libertas, -atis f.|gen. lp.|wolnizny (zwolnienia od czynszu i danin)',
    'concedimus': 'concedo, -ere|praes. ind. act., 1 os. lm.|przyznajemy', 'quibus': 'qui|abl. lm.|tych (lat) – podmiot abl. abs.', 'elapsis': 'elabor, elabi, elapsus sum|part. perf., abl. lm.|upłynąwszy → „po upływie”',
    'quilibet': 'quilibet|nom. lp. m.|każdy', 'kmeto': 'kmeto, -onis m.|nom. lp.|kmieć', 'de#2': 'de|praep. + abl.|od, z', 'quolibet': 'quilibet|abl. lp. m.|każdego', 'manso': 'mansus|abl. lp.|łanu',
    'unam': 'unus|acc. lp. f.|jedną', 'marcam': 'marca, -ae f.|acc. lp.|grzywnę', 'census': 'census, -us m.|gen. lp.|czynszu', 'festo': 'festum|abl. lp.|święto', 'sancti': 'sanctus|gen. lp. m.|świętego', 'martini': 'Martinus|gen. lp.|Marcina (11 XI)',
    'solvere': 'solvo, -ere|inf. praes. act.|płacić', 'tenebitur': 'teneo, -ere|fut. I ind. pass., 3 os. lp.|będzie zobowiązany', 'causas': 'causa|acc. lm.|sprawy (sądowe)', 'vero': 'vero|adv.|zaś',
    'maiores': 'maior, maius|acc. lm. f.|większe (karne)', 'videlicet': 'videlicet|adv.|mianowicie', 'de#3': 'de|praep. + abl.|o', 'capite': 'caput, -itis n.|abl. lp.|głowę (sprawy gardłowe)', 'membris': 'membrum|abl. lm.|członki (okaleczenia)',
    'nobis': 'ego, lm. nos|dat. lm.|sobie (dosł. nam)', 'reservamus': 'reservo, -are|praes. ind. act., 1 os. lm.|zastrzegamy', 'minores': 'minor, minus|acc. lm. f.|mniejsze', 'scultetus': 'scultetus|nom. lp.|sołtys',
    'iudicabit': 'iudico, -are|fut. I ind. act., 3 os. lp.|będzie sądził', 'de#4': 'de|praep. + abl.|z', 'iudicio': 'iudicium|abl. lp.|sądu (z kar sądowych)', 'tertium': 'tertius|acc. lp. m.|trzeci',
    'denarium': 'denarius|acc. lp.|denar (tertius denarius – trzecia część kar)', 'habebit': 'habeo|fut. I ind. act., 3 os. lp.|będzie miał'
  },
  hard: ['heres', 'tenore', 'presencium', 'considerantes', 'locandam', 'discreto', 'libertatis', 'quibus', 'elapsis', 'census', 'tenebitur', 'capite', 'membris', 'tertium', 'denarium', 'kmetonibus'],
  q: [
    { q: 'Kto lokuje wieś?', o: ['książę', 'Mikołaj, dziedzic Woli', 'sołtys Piotr', 'kmiecie'], a: 1, e: '<i>Nos Nicolaus, heres de Wola</i>.' },
    { q: 'Ile wolnych łanów otrzymuje sołtys?', o: ['jeden', 'trzy', 'piętnaście', 'żadnego'], a: 1, e: '<i>tres mansos liberos</i>.' },
    { q: 'Co oznacza <i>quindecim annos libertatis</i>?', o: ['15 lat wolności osobistej', '15 lat wolnizny, czyli zwolnienia od czynszu i danin', '15 lat służby', '15 lat dzierżawy'], a: 1, e: 'Wolnizna pozwalała osadnikom zagospodarować grunt.' },
    { q: 'Ile i kiedy zapłaci kmieć po wolniźnie?', o: ['1 grzywnę z łanu na św. Marcina (11 XI)', '1 grzywnę z całej wsi na Wielkanoc', '3 grzywny na św. Michała', '1 denar rocznie'], a: 0, e: '<i>de quolibet manso unam marcam census in festo sancti Martini</i>.' },
    { q: 'Jaki udział w karach sądowych ma sołtys?', o: ['całość', 'połowę', 'trzecią część (tertius denarius)', 'nic'], a: 2, e: 'Typowe rozwiązanie prawa niemieckiego: dwie trzecie dla pana, jedna trzecia dla sołtysa.' },
    { q: 'Konstrukcja <i>Quibus elapsis</i> to:', o: ['AcI', 'ablativus absolutus', 'gerundivum', 'cum historicum'], a: 1, e: '„Po upływie tych (lat)”.' }
  ],
  tr: 'My, Mikołaj, dziedzic Woli, treścią niniejszego pisma podajemy do wiadomości wszystkim, że zważając na nasz pożytek dajemy naszą wieś Wolę do lokowania na prawie niemieckim roztropnemu mężowi Piotrowi, sołtysowi, i jego prawowitym następcom. Dajemy także temuż Piotrowi trzy wolne łany na sołectwo oraz karczmę i młyn. Dalej: kmieciom osiadłym we wspomnianej wsi przyznajemy piętnaście lat wolnizny. Po ich upływie każdy kmieć będzie zobowiązany płacić z każdego łanu jedną grzywnę czynszu w święto św. Marcina. Sprawy większe, mianowicie o głowę i członki, zastrzegamy sobie; mniejsze będzie sądził sołtys i z sądu będzie miał trzeci denar.'
},
{
  id: 't4', title: 'Gall Anonim: uczta u Popiela', period: 'ok. 1113–1116', kind: 'real', level: 3,
  source: 'Gall Anonim, Gesta principum Polonorum I,1 (fragment, nieznacznie skrócony). Pisownia według tradycji edycji. Przed cytowaniem porównaj z wydaniem K. Maleczyńskiego (MPH n.s. II).',
  intro: 'Początek opowieści o Piaście. Proza Galla jest rytmizowana i literacka: imiesłowy, zdania względne, AcI. Zwróć uwagę na to, jak autor buduje okresy zdaniowe.',
  text: 'Erat namque in civitate Gneznensi, que nidus Sclavonice interpretatur, dux nomine Popel, duos filios habens, qui#1 more gentilitatis eorum ad tonsuram eorum convivium grande preparavit, in quo plures suorum procerum et amicorum invitavit. Contigit autem secreto Dei consilio duos ibi hospites advenisse, qui#2 non solum ad convivium non invitati, verum etiam ab introitu civitatis cum iniuria sunt repulsi.',
  gl: {
    'erat': 'sum, esse, fui|impf. ind., 3 os. lp.|był', 'namque': 'namque|coni.|otóż, bowiem', 'in': 'in|praep. + abl.|w, na', 'civitate': 'civitas, -atis f.|abl. lp.|grodzie', 'gneznensi': 'Gneznensis, -e|abl. lp. f.|gnieźnieńskim',
    'que': 'qui (śr. que = quae)|nom. lp. f.|który (gród)', 'nidus': 'nidus, -i m.|nom. lp.|gniazdo', 'sclavonice': 'Sclavonice|adv.|po słowiańsku', 'interpretatur': 'interpretor (dep.)|praes. ind., 3 os. lp. (znacz. bierne)|tłumaczy się (jako)',
    'dux': 'dux, ducis m.|nom. lp.|książę', 'nomine': 'nomen, -inis n.|abl. lp.|imieniem', 'popel': 'Popel|nom.|Popiel', 'duos': 'duo, duae, duo|acc. lm. m.|dwóch', 'filios': 'filius|acc. lm.|synów',
    'habens': 'habeo|PPA, nom. lp. m.|mający', 'qui#1': 'qui|nom. lp. m.|który (= Popiel)', 'more': 'mos, moris m.|abl. lp.|według obyczaju', 'gentilitatis': 'gentilitas, -atis f.|gen. lp.|pogańskiego (dosł. pogaństwa)',
    'eorum': 'is, ea, id|gen. lm.|ich', 'ad': 'ad|praep. + acc.|na, z okazji; do', 'tonsuram': 'tonsura, -ae f.|acc. lp.|postrzyżyny', 'convivium': 'convivium, -ii n.|acc. lp.|ucztę', 'grande': 'grandis, -e|acc. lp. n.|wielką',
    'preparavit': 'praeparo (śr. pre-)|perf. ind. act., 3 os. lp.|przygotował', 'quo': 'qui|abl. lp. n.|której (na którą)', 'plures': 'plures, plura|acc. lm. m.|wielu', 'suorum': 'suus|gen. lm. m.|swoich',
    'procerum': 'proceres, -um m.|gen. lm.|możnych', 'et': 'et|spójnik|i', 'amicorum': 'amicus|gen. lm.|przyjaciół', 'invitavit': 'invito, -are|perf. ind. act., 3 os. lp.|zaprosił',
    'contigit': 'contingo, -ere|perf. ind. act., 3 os. lp.|zdarzyło się', 'autem': 'autem|coni.|zaś', 'secreto': 'secretus|abl. lp. n.|tajemnym', 'dei': 'deus|gen. lp.|Bożym (dosł. Boga)', 'consilio': 'consilium|abl. lp.|zamysłem',
    'ibi': 'ibi|adv.|tam', 'hospites': 'hospes, -itis m.|acc. lm.|goście (podmiot AcI)', 'advenisse': 'advenio|inf. perf. act.|przybyli (AcI)', 'qui#2': 'qui|nom. lm. m.|którzy (= goście)',
    'non': 'non|adv.|nie', 'solum': 'solum|adv.|tylko', 'invitati': 'invito|PPP, nom. lm. m.|zaproszeni', 'verum': 'verum|coni.|lecz', 'etiam': 'etiam|adv.|także',
    'ab': 'ab|praep. + abl.|od', 'introitu': 'introitus, -us m.|abl. lp.|wejścia', 'civitatis': 'civitas|gen. lp.|grodu', 'cum': 'cum|praep. + abl.|z', 'iniuria': 'iniuria|abl. lp.|zniewagą',
    'sunt': 'sum|praes. ind., 3 os. lm.|zostali (sunt repulsi)', 'repulsi': 'repello, -ere, reppuli, repulsum|PPP, nom. lm. m.|odpędzeni'
  },
  hard: ['interpretatur', 'gentilitatis', 'tonsuram', 'procerum', 'contigit', 'advenisse', 'repulsi', 'habens', 'invitati', 'more'],
  q: [
    { q: 'Gdzie toczy się akcja według Galla?', o: ['w Krakowie', 'w Gnieźnie', 'w Poznaniu', 'w Kruszwicy'], a: 1, e: '<i>in civitate Gneznensi</i>. Kruszwicę z Popielem wiąże dopiero późniejsza tradycja (Kadłubek, Długosz).' },
    { q: 'Co znaczy nazwa grodu według Galla?', o: ['gniazdo', 'gród', 'orzeł', 'pole'], a: 0, e: '<i>que nidus Sclavonice interpretatur</i>.' },
    { q: 'Z jakiej okazji Popiel wyprawia ucztę?', o: ['ślubu', 'postrzyżyn synów', 'zwycięstwa', 'chrztu'], a: 1, e: '<i>ad tonsuram eorum</i> – postrzyżyny, pogański obrzęd przejścia.' },
    { q: 'Jak potraktowano przybyszów?', o: ['zaproszono ich na ucztę', 'nie zaproszono ich i ze zniewagą odpędzono od wejścia do grodu', 'uwięziono ich', 'zabito ich'], a: 1, e: '<i>non solum… non invitati, verum etiam… cum iniuria sunt repulsi</i>.' },
    { q: '<i>duos ibi hospites advenisse</i> zależy od <i>contigit</i>. To:', o: ['ablativus absolutus', 'AcI', 'NcI', 'gerundivum'], a: 1, e: '„Zdarzyło się, że przybyło tam dwóch gości”.' }
  ],
  tr: 'Był bowiem w grodzie gnieźnieńskim, którego nazwa po słowiańsku znaczy „gniazdo”, książę imieniem Popiel, mający dwóch synów. Według pogańskiego obyczaju przygotował on z okazji ich postrzyżyn wielką ucztę, na którą zaprosił wielu swoich możnych i przyjaciół. Zdarzyło się zaś z tajemnego zamysłu Bożego, że przybyło tam dwóch gości, których nie tylko nie zaproszono na ucztę, lecz nawet ze zniewagą odpędzono od wejścia do grodu.'
},
{
  id: 't5', title: 'Pełny dokument książęcy', period: 'XIII w.', kind: 'model', level: 3,
  source: 'Tekst modelowy z kompletem części dyplomatycznych, ułożony na wzór dokumentów małopolskich XIII w. Osoby i nadanie są umowne. Ten sam tekst służy do ćwiczenia w module „Dyplomatyka”.',
  intro: 'Dokument z pełną strukturą: od inwokacji po aprekację. Przeczytaj go, a potem podziel na części w module Dyplomatyka. Datę ustal w kalkulatorze (Chronologia).',
  parts: [
    ['invocatio', 'In nomine sancte et individue Trinitatis amen.'],
    ['intitulatio', 'Nos Boleslaus, Dei gracia dux Cracovie et Sandomirie,'],
    ['inscriptio', 'universis Christi fidelibus'],
    ['salutatio', 'salutem in Domino.'],
    ['arenga', 'Quoniam ea, que#1 geruntur in tempore, ne simul labantur cum tempore, solent poni in lingua testium et scripture memoria perhennari,'],
    ['promulgatio', 'ad noticiam universorum tam presencium quam futurorum volumus pervenire,'],
    ['narratio', 'quod attendentes fidelia servicia, que#2 nobis dilectus miles noster Iohannes dictus Grifa multis temporibus exhibuit,'],
    ['dispositio', 'villam nostram Lubcza cum agris, pratis, silvis, aquis et omnibus utilitatibus eidem Iohanni et suis legitimis successoribus damus, donamus et conferimus iure hereditario perpetuo possidendam, eximentes eandem villam ab omnibus solucionibus et exaccionibus iuris Polonici.'],
    ['sanctio', 'Si quis autem hanc nostram donacionem infringere presumpserit, indignacionem omnipotentis Dei se noverit incursurum.'],
    ['corroboratio', 'In cuius rei testimonium presentem paginam sigilli nostri munimine fecimus communiri.'],
    ['datatio', 'Actum et datum in Cracovia anno Domini millesimo ducentesimo sexagesimo quinto, feria secunda post festum sancti Michaelis,'],
    ['testes', 'presentibus hiis testibus: domino#2 Nicolao castellano Cracoviensi, domino#2 Petro palatino Sandomiriensi et Stephano notario nostro, qui presentem litteram conscripsit.'],
    ['apprecatio', 'Feliciter amen.']
  ],
  gl: {
    'in': 'in|praep. + abl. / + acc.|w; (in testimonium) na', 'nomine': 'nomen|abl. lp.|imię', 'sancte': 'sanctus (śr. -e = -ae)|gen. lp. f.|świętej', 'et': 'et|spójnik|i',
    'individue': 'individuus, -a, -um (śr. -e)|gen. lp. f.|niepodzielnej', 'trinitatis': 'trinitas, -atis f.|gen. lp.|Trójcy', 'amen': 'amen|wykrz.|amen',
    'nos': 'nos|nom. lm.|my', 'boleslaus': 'Boleslaus|nom. lp.|Bolesław', 'dei': 'deus|gen. lp.|Bożej (Boga)', 'gracia': 'gratia (śr. gracia)|abl. lp.|z łaski', 'dux': 'dux|nom. lp.|książę',
    'cracovie': 'Cracovia|gen. lp.|krakowski (dosł. Krakowa)', 'sandomirie': 'Sandomiria|gen. lp.|sandomierski (dosł. Sandomierza)',
    'universis': 'universus|dat. lm.|wszystkim', 'christi': 'Christus|gen. lp.|Chrystusa', 'fidelibus': 'fidelis, -e|dat. lm.|wiernym', 'salutem': 'salus, -utis f.|acc. lp.|pozdrowienie (dosł. zbawienie)', 'domino': 'dominus|abl. lp.|Panu',
    'quoniam': 'quoniam|coni.|ponieważ', 'ea': 'is, ea, id|nom. lm. n.|te (sprawy)', 'que#1': 'qui (śr. que = quae)|nom. lm. n.|które', 'geruntur': 'gero, -ere|praes. ind. pass., 3 os. lm.|dzieją się',
    'tempore': 'tempus, -oris n.|abl. lp.|czasie', 'ne': 'ne|coni. + coni.|aby nie', 'simul': 'simul|adv.|razem', 'labantur': 'labor, labi, lapsus sum (dep.)|praes. coni., 3 os. lm.|przeminęły (dosł. ześlizgnęły się)', 'cum': 'cum|praep. + abl.|z',
    'solent': 'soleo, -ere|praes. ind. act., 3 os. lm.|zwykły (być)', 'poni': 'pono, -ere|inf. praes. pass.|być umieszczane', 'lingua': 'lingua, -ae f.|abl. lp.|języku, ustach', 'testium': 'testis|gen. lm.|świadków',
    'scripture': 'scriptura (śr. -e)|gen. lp.|pisma', 'memoria': 'memoria|abl. lp.|pamięcią', 'perhennari': 'perenno, -are (śr. perhenno)|inf. praes. pass.|być utrwalane',
    'ad': 'ad|praep. + acc.|do', 'noticiam': 'notitia (śr. -cia)|acc. lp.|wiadomości', 'universorum': 'universus|gen. lm.|wszystkich', 'tam': 'tam|adv.|tak (tam… quam – zarówno… jak i)',
    'presencium': 'praesens (śr. -cium)|gen. lm.|obecnych', 'quam': 'quam|adv.|jak', 'futurorum': 'futurus|gen. lm.|przyszłych', 'volumus': 'volo, velle|praes. ind., 1 os. lm.|chcemy', 'pervenire': 'pervenio, -ire|inf. praes. act.|dojść',
    'quod': 'quod|spójnik|że', 'attendentes': 'attendo, -ere|PPA, nom. lm. m.|zważając na', 'fidelia': 'fidelis, -e|acc. lm. n.|wierne', 'servicia': 'servitium (śr. -cium)|acc. lm.|usługi', 'que#2': 'qui (śr. que = quae)|acc. lm. n.|które',
    'nobis': 'nos|dat. lm.|nam', 'dilectus': 'dilectus|nom. lp. m.|umiłowany, miły', 'miles': 'miles, -itis m.|nom. lp.|rycerz', 'noster': 'noster|nom. lp. m.|nasz', 'iohannes': 'Iohannes|nom. lp.|Jan',
    'dictus': 'dico|PPP, nom. lp. m.|zwany', 'grifa': 'Grifa|nom.|Gryfa (przydomek)', 'multis': 'multus|abl. lm.|wiele (przez wiele)', 'temporibus': 'tempus|abl. lm.|czasów (lat)', 'exhibuit': 'exhibeo, -ere|perf. ind. act., 3 os. lp.|okazywał, świadczył',
    'villam': 'villa|acc. lp.|wieś', 'nostram': 'noster|acc. lp. f.|naszą', 'lubcza': 'Lubcza|nazwa miejscowa|Lubcza', 'agris': 'ager, agri m.|abl. lm.|polami', 'pratis': 'pratum, -i n.|abl. lm.|łąkami',
    'silvis': 'silva|abl. lm.|lasami', 'aquis': 'aqua|abl. lm.|wodami', 'omnibus': 'omnis|abl. lm.|wszystkimi', 'utilitatibus': 'utilitas|abl. lm.|pożytkami', 'eidem': 'idem|dat. lp. m.|temuż',
    'iohanni': 'Iohannes|dat. lp.|Janowi', 'suis': 'suus|dat. lm.|jego (dosł. swoim)', 'legitimis': 'legitimus|dat. lm.|prawowitym', 'successoribus': 'successor|dat. lm.|następcom',
    'damus': 'do|praes. ind. act., 1 os. lm.|dajemy', 'donamus': 'dono|praes. ind. act., 1 os. lm.|darujemy', 'conferimus': 'confero|praes. ind. act., 1 os. lm.|nadajemy',
    'iure': 'ius|abl. lp.|prawem', 'hereditario': 'hereditarius, -a, -um|abl. lp. n.|dziedzicznym', 'perpetuo': 'perpetuo|adv.|na wieczność', 'possidendam': 'possideo|gerundivum, acc. lp. f.|do posiadania',
    'eximentes': 'eximo, -ere|PPA, nom. lm. m.|wyjmując (spod), zwalniając', 'eandem': 'idem|acc. lp. f.|tęż', 'ab': 'ab|praep. + abl.|od', 'solucionibus': 'solutio (śr. -cio)|abl. lm.|świadczeń',
    'exaccionibus': 'exactio (śr. -cio)|abl. lm.|poborów, danin', 'iuris': 'ius|gen. lp.|prawa', 'polonici': 'Polonicus|gen. lp. n.|polskiego',
    'si': 'si|coni.|jeśli', 'quis': 'quis|nom. lp. m.|ktoś', 'autem': 'autem|coni.|zaś', 'hanc': 'hic, haec, hoc|acc. lp. f.|tę', 'donacionem': 'donatio (śr. -cio)|acc. lp.|darowiznę, nadanie',
    'infringere': 'infringo, -ere|inf. praes. act.|naruszyć', 'presumpserit': 'praesumo (śr. pre-)|fut. II ind. act., 3 os. lp.|odważy się', 'indignacionem': 'indignatio (śr. -cio)|acc. lp.|gniew',
    'omnipotentis': 'omnipotens, -ntis|gen. lp.|wszechmogącego', 'se': 'sui|acc.|że on (podmiot AcI)', 'noverit': 'nosco, novi|perf. coni. act., 3 os. lp.|niech wie', 'incursurum': 'incurro|part. fut. act., acc. lp. m.|że ściągnie na siebie (AcI z esse opuszczonym)',
    'cuius': 'qui|gen. lp. f.|tej (relativum coniunctivum)', 'rei': 'res|gen. lp.|rzeczy', 'testimonium': 'testimonium|acc. lp.|świadectwo', 'presentem': 'praesens|acc. lp. f.|niniejszą', 'paginam': 'pagina, -ae f.|acc. lp.|kartę (= dokument)',
    'sigilli': 'sigillum|gen. lp.|pieczęci', 'nostri': 'noster|gen. lp. n.|naszej', 'munimine': 'munimen|abl. lp.|umocnieniem', 'fecimus': 'facio|perf. ind. act., 1 os. lm.|kazaliśmy', 'communiri': 'communio, -ire|inf. praes. pass.|zabezpieczyć (dosł. być zabezpieczoną)',
    'actum': 'ago, agere, egi, actum|PPP, nom. lp. n.|zdziałano', 'datum': 'do|PPP, nom. lp. n.|dano', 'cracovia': 'Cracovia|abl. lp.|Krakowie', 'anno': 'annus|abl. lp.|roku', 'domini': 'dominus|gen. lp.|Pańskiego',
    'millesimo': 'millesimus|abl. lp.|tysięcznym', 'ducentesimo': 'ducentesimus|abl. lp.|dwusetnym', 'sexagesimo': 'sexagesimus|abl. lp.|sześćdziesiątym', 'quinto': 'quintus|abl. lp.|piątym',
    'feria': 'feria|abl. lp.|dnia (tygodnia)', 'secunda': 'secundus|abl. lp. f.|drugiego (feria secunda – poniedziałek)', 'post': 'post|praep. + acc.|po', 'festum': 'festum|acc. lp.|święcie', 'sancti': 'sanctus|gen. lp.|świętego', 'michaelis': 'Michael|gen. lp.|Michała',
    'presentibus': 'praesens|abl. lm.|obecnym (abl. abs.: w obecności)', 'hiis': 'hic (śr. hiis = his)|abl. lm.|tych', 'testibus': 'testis|abl. lm.|świadków',
    'domino#2': 'dominus|abl. lp.|panu (tytuł)', 'nicolao': 'Nicolaus|abl. lp.|Mikołaju', 'castellano': 'castellanus|abl. lp.|kasztelanie', 'cracoviensi': 'Cracoviensis|abl. lp.|krakowskim',
    'petro': 'Petrus|abl. lp.|Piotrze', 'palatino': 'palatinus|abl. lp.|wojewodzie', 'sandomiriensi': 'Sandomiriensis|abl. lp.|sandomierskim', 'stephano': 'Stephanus|abl. lp.|Stefanie', 'notario': 'notarius|abl. lp.|pisarzu (notariuszu kancelarii)',
    'qui': 'qui|nom. lp. m.|który', 'litteram': 'littera|acc. lp.|dokument', 'conscripsit': 'conscribo|perf. ind. act., 3 os. lp.|spisał', 'feliciter': 'feliciter|adv.|szczęśliwie'
  },
  hard: ['individue', 'quoniam', 'geruntur', 'labantur', 'solent', 'poni', 'perhennari', 'noticiam', 'attendentes', 'exhibuit', 'possidendam', 'eximentes', 'solucionibus', 'exaccionibus', 'presumpserit', 'noverit', 'incursurum', 'communiri', 'actum', 'presentibus', 'hiis', 'palatino'],
  q: [
    { q: 'Za co rycerz Jan otrzymuje wieś?', o: ['za zakup', 'za wierne usługi', 'za zasługi w lokacji', 'w zamian za inną wieś'], a: 1, e: 'Narratio: <i>attendentes fidelia servicia</i>.' },
    { q: 'Od czego zostaje zwolniona wieś?', o: ['od dziesięciny', 'od wszystkich świadczeń i poborów prawa polskiego', 'od sądów kościelnych', 'od czynszu na 15 lat'], a: 1, e: 'Immunitet: <i>eximentes… ab omnibus solucionibus et exaccionibus iuris Polonici</i>.' },
    { q: 'Co grozi naruszycielowi według sankcji?', o: ['grzywna 10 grzywien', 'gniew Boga wszechmogącego', 'utrata wsi', 'ekskomunika papieska'], a: 1, e: 'Sankcja duchowna: <i>indignacionem omnipotentis Dei</i>.' },
    { q: '<i>feria secunda post festum sancti Michaelis</i> 1265 to:', o: ['wtorek 29 IX 1265', 'poniedziałek 5 X 1265', 'niedziela 4 X 1265', 'poniedziałek 28 IX 1265'], a: 1, e: 'Św. Michał (29 IX 1265) wypadł we wtorek; najbliższy poniedziałek po święcie to 5 X. Sprawdź w kalkulatorze dat.' },
    { q: 'Jak przetłumaczyć <i>presentibus hiis testibus</i>?', o: ['niniejszym świadkom', 'w obecności tych świadków', 'ci świadkowie są obecni', 'dla obecnych świadków'], a: 1, e: 'Ablativus absolutus.' }
  ],
  tr: 'W imię świętej i niepodzielnej Trójcy, amen. My, Bolesław, z łaski Bożej książę krakowski i sandomierski, wszystkim wiernym Chrystusowym pozdrowienie w Panu. Ponieważ sprawy, które dzieją się w czasie, zwykło się – aby nie przeminęły wraz z czasem – umieszczać w ustach świadków i utrwalać pamięcią pisma, chcemy, aby do wiadomości wszystkich, tak obecnych, jak przyszłych, doszło, że zważając na wierne usługi, które nasz miły rycerz Jan zwany Gryfą przez długi czas nam świadczył, naszą wieś Lubczę z polami, łąkami, lasami, wodami i wszystkimi pożytkami temuż Janowi i jego prawowitym następcom dajemy, darujemy i nadajemy do posiadania prawem dziedzicznym na wieczność, zwalniając tęż wieś od wszystkich świadczeń i danin prawa polskiego. Jeśliby zaś ktoś odważył się naruszyć tę naszą darowiznę, niech wie, że ściągnie na siebie gniew Boga wszechmogącego. Na świadectwo tego kazaliśmy zabezpieczyć niniejszy dokument umocnieniem naszej pieczęci. Działo się i dano w Krakowie roku Pańskiego tysiąc dwieście sześćdziesiątego piątego, w poniedziałek po święcie św. Michała, w obecności tych świadków: pana Mikołaja, kasztelana krakowskiego, pana Piotra, wojewody sandomierskiego, i Stefana, naszego pisarza, który spisał niniejszy dokument. Szczęśliwie, amen.'
},
{
  id: 't6', title: 'Konstytucja Nihil novi (1505)', period: '1505', kind: 'real', level: 3,
  source: 'Konstytucja sejmu radomskiego 1505 r. (fragment). Tekst według tradycyjnego brzmienia, w pisowni humanistycznej. Przed cytowaniem sprawdź w wydaniu (Volumina Legum / Commune incliti Poloniae Regni privilegium).',
  intro: 'Fundament ustroju sejmowego Rzeczypospolitej. Zwróć uwagę na pisownię: humaniści przywracają klasyczne ae (praelatis, publicae). Zdanie jest długie, ale zbudowane symetrycznie.',
  text: 'Quoniam iura communia et constitutiones publicae#1 non unum, sed communem populum afficiunt, itaque in#1 hac generali conventione Radomiensi cum universis regni nostri praelatis, consiliariis, baronibus et nuntiis terrestribus aequum et rationabile censuimus ac etiam statuimus, ut deinceps futuris temporibus perpetuis nihil novi constitui debeat per nos et successores nostros sine communi consiliariorum et nuntiorum terrestrium consensu, quod fieret in#2 praeiudicium gravamenque reipublicae et damnum atque incommodum cuiuslibet privatum, ac ad innovationem iuris communis et publicae#2 libertatis.',
  gl: {
    'quoniam': 'quoniam|coni.|ponieważ', 'iura': 'ius, iuris n.|nom. lm.|prawa', 'communia': 'communis, -e|nom. lm. n.|wspólne, powszechne', 'et': 'et|spójnik|i',
    'constitutiones': 'constitutio, -onis f.|nom. lm.|ustawy (konstytucje)', 'publicae#1': 'publicus|nom. lm. f.|publiczne', 'non': 'non|adv.|nie', 'unum': 'unus|acc. lp. m.|jednego (człowieka)', 'sed': 'sed|coni.|lecz',
    'communem': 'communis|acc. lp. m.|cały, wspólny', 'populum': 'populus|acc. lp.|lud', 'afficiunt': 'afficio, -ere|praes. ind. act., 3 os. lm.|dotyczą', 'itaque': 'itaque|coni.|przeto',
    'in#1': 'in|praep. + abl.|na, w', 'hac': 'hic, haec, hoc|abl. lp. f.|tym', 'generali': 'generalis, -e|abl. lp. f.|walnym', 'conventione': 'conventio, -onis f.|abl. lp.|zjeździe (sejmie)', 'radomiensi': 'Radomiensis, -e|abl. lp. f.|radomskim',
    'cum': 'cum|praep. + abl.|z', 'universis': 'universus|abl. lm.|wszystkimi', 'regni': 'regnum|gen. lp.|królestwa', 'nostri': 'noster|gen. lp. n.|naszego', 'praelatis': 'praelatus|abl. lm.|prałatami',
    'consiliariis': 'consiliarius|abl. lm.|radami (senatorami)', 'baronibus': 'baro, -onis m.|abl. lm.|baronami (możnymi)', 'nuntiis': 'nuntius|abl. lm.|posłami', 'terrestribus': 'terrestris, -e|abl. lm.|ziemskimi',
    'aequum': 'aequus|acc. lp. n.|słuszne', 'rationabile': 'rationabilis, -e|acc. lp. n.|rozsądne', 'censuimus': 'censeo, -ere, censui|perf. ind. act., 1 os. lm.|uznaliśmy', 'ac': 'ac|coni.|i', 'etiam': 'etiam|adv.|także',
    'statuimus': 'statuo, -ere|perf. ind. act., 1 os. lm.|postanowiliśmy (forma identyczna z praes.)', 'ut': 'ut|coni. + coni.|że, aby', 'deinceps': 'deinceps|adv.|odtąd', 'futuris': 'futurus|abl. lm.|przyszłych',
    'temporibus': 'tempus|abl. lm.|czasach', 'perpetuis': 'perpetuus|abl. lm.|wiecznych', 'nihil': 'nihil|zaimek nieodm.|nic', 'novi': 'novus|gen. lp. n. (gen. partitivus)|nowego',
    'constitui': 'constituo, -ere|inf. praes. pass.|być ustanowione', 'debeat': 'debeo|praes. coni. act., 3 os. lp.|powinno', 'per': 'per|praep. + acc.|przez', 'nos': 'nos|acc. lm.|nas',
    'successores': 'successor|acc. lm.|następców', 'nostros': 'noster|acc. lm. m.|naszych', 'sine': 'sine|praep. + abl.|bez', 'communi': 'communis|abl. lp. m.|wspólnej', 'consiliariorum': 'consiliarius|gen. lm.|senatorów',
    'nuntiorum': 'nuntius|gen. lm.|posłów', 'terrestrium': 'terrestris|gen. lm.|ziemskich', 'consensu': 'consensus, -us m.|abl. lp.|zgody', 'quod': 'qui, quae, quod|nom. lp. n.|co (zaimek względny)',
    'fieret': 'fio, fieri|impf. coni., 3 os. lp.|byłoby (działoby się)', 'in#2': 'in|praep. + acc.|na, ku', 'praeiudicium': 'praeiudicium|acc. lp.|szkodę, uszczerbek', 'gravamenque': 'gravamen, -inis n. + -que|acc. lp.|i obciążenie',
    'reipublicae': 'res publica|gen. lp.|Rzeczypospolitej', 'damnum': 'damnum|acc. lp.|szkodę', 'atque': 'atque|coni.|i', 'incommodum': 'incommodum|acc. lp.|niekorzyść', 'cuiuslibet': 'quilibet|gen. lp.|kogokolwiek',
    'privatum': 'privatus, -a, -um|acc. lp. n.|prywatną (osoby prywatnej)', 'ad': 'ad|praep. + acc.|ku', 'innovationem': 'innovatio, -onis f.|acc. lp.|zmianie', 'iuris': 'ius|gen. lp.|prawa',
    'communis': 'communis|gen. lp. n.|wspólnego', 'publicae#2': 'publicus|gen. lp. f.|publicznej', 'libertatis': 'libertas|gen. lp.|wolności'
  },
  hard: ['afficiunt', 'itaque', 'conventione', 'consiliariis', 'nuntiis', 'terrestribus', 'censuimus', 'novi', 'constitui', 'debeat', 'fieret', 'praeiudicium', 'gravamenque', 'innovationem'],
  q: [
    { q: 'Gdzie uchwalono konstytucję?', o: ['w Piotrkowie', 'w Radomiu', 'w Krakowie', 'w Lublinie'], a: 1, e: '<i>in hac generali conventione Radomiensi</i>.' },
    { q: 'Czyja zgoda jest odtąd wymagana do ustanowienia czegoś nowego?', o: ['tylko króla', 'senatorów i posłów ziemskich', 'papieża', 'sejmików i miast'], a: 1, e: '<i>sine communi consiliariorum et nuntiorum terrestrium consensu</i>.' },
    { q: 'Jakie uzasadnienie podaje wstęp (<i>Quoniam…</i>)?', o: ['wola Boża', 'prawa wspólne dotyczą całego ludu, nie jednej osoby', 'tradycja przodków', 'zagrożenie wojenne'], a: 1, e: 'Echo rzymskiej zasady <i>quod omnes tangit</i>.' },
    { q: 'Dlaczego <i>debeat</i> stoi w coniunctivie?', o: ['to tryb rozkazujący', 'zdanie dopełnieniowe po <i>statuimus, ut</i>', 'cum historicum', 'błąd kopisty'], a: 1, e: 'Po czasownikach postanawiania + <i>ut</i> stoi coniunctivus.' },
    { q: '<i>nihil novi</i> – <i>novi</i> to:', o: ['nom. lm.: nowi', 'gen. partitivus: „nic (z) nowego”', 'perf. od nosco: „poznałem”', 'dat. lp.'], a: 1, e: 'Uwaga na homonimię z <i>novi</i> „wiem”.' }
  ],
  tr: 'Ponieważ prawa wspólne i ustawy publiczne dotyczą nie jednego człowieka, lecz całego ludu, przeto na tym walnym sejmie radomskim wraz ze wszystkimi prałatami, radami, baronami i posłami ziemskimi naszego królestwa uznaliśmy za słuszne i rozsądne, a także postanowiliśmy, że odtąd na wieczne przyszłe czasy nic nowego nie powinno być ustanawiane przez nas i naszych następców bez wspólnej zgody rad i posłów ziemskich, co byłoby ze szkodą i ku obciążeniu Rzeczypospolitej oraz ze szkodą i niekorzyścią kogokolwiek prywatnie, a także ku zmianie prawa wspólnego i wolności publicznej.'
},
{
  id: 't7', title: 'Metryka chrztu', period: 'XVII w.', kind: 'model', level: 1,
  source: 'Tekst modelowy ułożony według formularza metryk chrztu z XVII w. (Rituale Romanum, 1614). Osoby są umowne.',
  intro: 'Metryki to codzienny materiał genealogów i historyków społecznych. Formularz jest prosty, ale najważniejsze informacje kryją się w tytułach grzecznościowych i w łacińskich formach imion.',
  text: 'Anno Domini 1689, die 16 mensis Ianuarii. Ego Ioannes Nowicki, parochus Bochnensis, baptizavi infantem nomine Albertum, filium legitimum laboriosi Mathiae Kowal et Agnetis coniugum de villa Łapczyca. Levantes fuerunt honestus Iacobus Mazur et honesta Sophia, consors famati Martini Szewc, civis Bochnensis.',
  gl: {
    'anno': 'annus|abl. lp.|roku', 'domini': 'dominus|gen. lp.|Pańskiego', 'die': 'dies, diei m.|abl. lp.|dnia', 'mensis': 'mensis, -is m.|gen. lp.|miesiąca', 'ianuarii': 'Ianuarius, -ii m.|gen. lp.|stycznia',
    'ego': 'ego|nom. lp.|ja', 'ioannes': 'Ioannes, -is m.|nom. lp.|Jan', 'nowicki': 'Nowicki|nazwisko|Nowicki', 'parochus': 'parochus, -i m.|nom. lp.|proboszcz', 'bochnensis': 'Bochnensis, -e|nom. lp. m.|bocheński',
    'baptizavi': 'baptizo, -are|perf. ind. act., 1 os. lp.|ochrzciłem', 'infantem': 'infans, -ntis m./f.|acc. lp.|dziecię, niemowlę', 'nomine': 'nomen|abl. lp.|imieniem',
    'albertum': 'Albertus, -i m.|acc. lp.|Wojciecha (!) – w polskich metrykach Albertus = Wojciech', 'filium': 'filius|acc. lp.|syna', 'legitimum': 'legitimus|acc. lp. m.|z prawego łoża (ślubnego)',
    'laboriosi': 'laboriosus|gen. lp. m.|pracowitego – tytuł chłopski', 'mathiae': 'Mathias, -ae m.|gen. lp.|Macieja', 'kowal': 'Kowal|nazwisko|Kowala', 'et': 'et|spójnik|i',
    'agnetis': 'Agnes, -etis f.|gen. lp.|Agnieszki', 'coniugum': 'coniux, -iugis m./f.|gen. lm.|małżonków', 'de': 'de|praep. + abl.|z', 'villa': 'villa|abl. lp.|wsi', 'łapczyca': 'Łapczyca|nazwa miejscowa|Łapczyca',
    'levantes': 'levo, -are|PPA, nom. lm.|trzymający (do chrztu) = rodzice chrzestni', 'fuerunt': 'sum|perf. ind., 3 os. lm.|byli', 'honestus': 'honestus|nom. lp. m.|uczciwy – tytuł chłopski/mieszczański',
    'iacobus': 'Iacobus|nom. lp.|Jakub', 'mazur': 'Mazur|nazwisko|Mazur', 'honesta': 'honestus|nom. lp. f.|uczciwa (tytuł)', 'sophia': 'Sophia|nom. lp.|Zofia',
    'consors': 'consors, -rtis f.|nom. lp.|małżonka', 'famati': 'famatus|gen. lp. m.|sławetnego – tytuł mieszczański', 'martini': 'Martinus|gen. lp.|Marcina', 'szewc': 'Szewc|nazwisko|Szewca',
    'civis': 'civis, -is m.|nom. lp. (apozycja do Martini, właśc. gen. civis)|mieszczanina'
  },
  hard: ['albertum', 'laboriosi', 'levantes', 'consors', 'famati', 'honestus', 'coniugum', 'legitimum'],
  q: [
    { q: 'Jakie imię otrzymało dziecko po polsku?', o: ['Albert', 'Wojciech', 'Adalbert', 'Wawrzyniec'], a: 1, e: 'W polskich źródłach <i>Albertus</i> (i <i>Adalbertus</i>) to najczęściej Wojciech.' },
    { q: 'Do jakiego stanu należeli rodzice?', o: ['szlachty', 'chłopów', 'mieszczan', 'duchowieństwa'], a: 1, e: 'Tytuł <i>laboriosus</i> i pochodzenie ze wsi wskazują na chłopów.' },
    { q: 'Kim jest Zofia?', o: ['matką dziecka', 'matką chrzestną, żoną mieszczanina Marcina Szewca', 'siostrą proboszcza', 'akuszerką'], a: 1, e: '<i>Levantes fuerunt… honesta Sophia, consors famati Martini Szewc</i>.' },
    { q: '<i>Levantes fuerunt</i> oznacza:', o: ['świadkami ślubu byli', 'rodzicami chrzestnymi byli', 'podnieśli się', 'zmarli'], a: 1, e: '<i>levare de sacro fonte</i> – trzymać do chrztu.' },
    { q: '<i>filium legitimum</i> to:', o: ['syna z prawego łoża', 'syna prawnika', 'syna adoptowanego', 'syna pierworodnego'], a: 0, e: 'Dzieci nieślubne zapisywano jako <i>illegitimus</i>.' }
  ],
  tr: 'Roku Pańskiego 1689, dnia 16 miesiąca stycznia. Ja, Jan Nowicki, proboszcz bocheński, ochrzciłem dziecię imieniem Wojciech, syna z prawego łoża pracowitego Macieja Kowala i Agnieszki, małżonków ze wsi Łapczyca. Rodzicami chrzestnymi byli uczciwy Jakub Mazur i uczciwa Zofia, małżonka sławetnego Marcina Szewca, mieszczanina bocheńskiego.'
},
{
  id: 't8', title: 'Zeznanie w aktach grodzkich', period: 'XVII w.', kind: 'model', level: 2,
  source: 'Tekst modelowy ułożony według formularza wpisów do ksiąg grodzkich krakowskich (XVII w.). Osoby są umowne.',
  intro: 'Księgi grodzkie to największy zasób źródeł do dziejów szlachty. Wpisy mają stały formularz: data i miejsce, osobiste stawiennictwo, oświadczenie (recognitio), kwit.',
  text: 'Actum in castro Cracoviensi, feria tertia post festum sancti Michaelis Archangeli proxima, anno Domini millesimo sexcentesimo quinquagesimo. Ad officium et acta praesentia castrensia capitanealia Cracoviensia personaliter veniens generosus Stanislaus Lipski, sanus mente et corpore existens, recognovit, quod a generoso Ioanne Morski summam trecentorum florenorum Polonicalium plenarie recepit; de qua summa eundem Ioannem Morski quietat et liberum pronuntiat per praesentes.',
  gl: {
    'actum': 'ago, agere, egi, actum|PPP, nom. lp. n.|działo się (dosł. zdziałano)', 'in': 'in|praep. + abl.|w', 'castro': 'castrum, -i n.|abl. lp.|grodzie (urzędzie grodzkim)', 'cracoviensi': 'Cracoviensis, -e|abl. lp. n.|krakowskim',
    'feria': 'feria|abl. lp.|dnia', 'tertia': 'tertius|abl. lp. f.|trzeciego (feria tertia – wtorek)', 'post': 'post|praep. + acc.|po', 'festum': 'festum|acc. lp.|święcie', 'sancti': 'sanctus|gen. lp.|świętego',
    'michaelis': 'Michael|gen. lp.|Michała', 'archangeli': 'archangelus|gen. lp.|Archanioła', 'proxima': 'proximus|abl. lp. f.|najbliższy', 'anno': 'annus|abl. lp.|roku', 'domini': 'dominus|gen. lp.|Pańskiego',
    'millesimo': 'millesimus|abl. lp.|tysięcznym', 'sexcentesimo': 'sexcentesimus|abl. lp.|sześćsetnym', 'quinquagesimo': 'quinquagesimus|abl. lp.|pięćdziesiątym',
    'ad': 'ad|praep. + acc.|do, przed', 'officium': 'officium|acc. lp.|urząd', 'et': 'et|spójnik|i', 'acta': 'actum, -i n.; lm. acta|acc. lm.|akta (księgi)', 'praesentia': 'praesens|acc. lm. n.|niniejsze',
    'castrensia': 'castrensis, -e|acc. lm. n.|grodzkie', 'capitanealia': 'capitanealis, -e|acc. lm. n.|starościńskie', 'cracoviensia': 'Cracoviensis|acc. lm. n.|krakowskie', 'personaliter': 'personaliter|adv.|osobiście',
    'veniens': 'venio|PPA, nom. lp. m.|przybywszy (dosł. przybywający)', 'generosus': 'generosus|nom. lp. m.|urodzony – tytuł szlachecki', 'stanislaus': 'Stanislaus|nom. lp.|Stanisław', 'lipski': 'Lipski|nazwisko|Lipski',
    'sanus': 'sanus, -a, -um|nom. lp. m.|zdrowy', 'mente': 'mens, mentis f.|abl. lp.|na umyśle', 'corpore': 'corpus|abl. lp.|na ciele', 'existens': 'existo|PPA, nom. lp. m.|będąc',
    'recognovit': 'recognosco|perf. ind. act., 3 os. lp.|zeznał, przyznał', 'quod': 'quod|spójnik|że', 'a': 'a, ab|praep. + abl.|od', 'generoso': 'generosus|abl. lp. m.|urodzonego', 'ioanne': 'Ioannes|abl. lp.|Jana',
    'morski': 'Morski|nazwisko|Morskiego', 'summam': 'summa|acc. lp.|sumę', 'trecentorum': 'trecenti, -ae, -a|gen. lm.|trzystu', 'florenorum': 'florenus|gen. lm.|złotych (florenów)', 'polonicalium': 'Polonicalis, -e|gen. lm.|polskich',
    'plenarie': 'plenarie|adv.|w całości', 'recepit': 'recipio|perf. ind. act., 3 os. lp.|otrzymał', 'de': 'de|praep. + abl.|z, w sprawie', 'qua': 'qui|abl. lp. f.|której (tej)', 'summa': 'summa|abl. lp.|sumy',
    'eundem': 'idem|acc. lp. m.|tegoż', 'ioannem': 'Ioannes|acc. lp.|Jana', 'quietat': 'quieto, -are|praes. ind. act., 3 os. lp.|kwituje', 'liberum': 'liber, -era, -erum|acc. lp. m.|wolnym',
    'pronuntiat': 'pronuntio, -are|praes. ind. act., 3 os. lp.|ogłasza', 'per': 'per|praep. + acc.|przez', 'praesentes': 'praesens|acc. lm.|niniejsze (pismo) – per praesentes: niniejszym'
  },
  hard: ['actum', 'castro', 'castrensia', 'capitanealia', 'veniens', 'generosus', 'existens', 'recognovit', 'polonicalium', 'plenarie', 'quietat', 'pronuntiat', 'praesentes'],
  q: [
    { q: 'Przed jakim urzędem złożono zeznanie?', o: ['przed sądem ziemskim', 'przed urzędem grodzkim (starościńskim) krakowskim', 'przed radą miejską', 'przed konsystorzem'], a: 1, e: '<i>Ad officium et acta praesentia castrensia capitanealia Cracoviensia</i>.' },
    { q: 'Co zeznał Stanisław Lipski?', o: ['że pożyczył 300 zł Morskiemu', 'że otrzymał w całości od Jana Morskiego 300 złotych polskich', 'że sprzedał wieś', 'że jest chory'], a: 1, e: '<i>recognovit, quod… summam trecentorum florenorum… plenarie recepit</i>.' },
    { q: '<i>quietat et liberum pronuntiat</i> oznacza:', o: ['oskarża i więzi', 'kwituje i ogłasza wolnym (od zobowiązania)', 'uspokaja i uwalnia z więzienia', 'zwalnia ze służby'], a: 1, e: 'Klasyczna formuła kwitu.' },
    { q: 'Tytuł <i>generosus</i> wskazuje, że Lipski był:', o: ['hojny', 'szlachcicem', 'mieszczaninem', 'duchownym'], a: 1, e: 'W XVI–XVIII w. <i>generosus</i> („urodzony”) to tytuł szlachecki.' },
    { q: 'Michał 1650 (29 IX, kalendarz gregoriański) wypadł w czwartek. Kiedy był <i>feria tertia post festum… proxima</i>?', o: ['wtorek 27 IX', 'wtorek 4 X', 'środa 5 X', 'wtorek 11 X'], a: 1, e: 'Najbliższy wtorek po czwartku 29 IX to 4 X 1650.' }
  ],
  tr: 'Działo się w grodzie krakowskim, w najbliższy wtorek po święcie św. Michała Archanioła, roku Pańskiego tysiąc sześćset pięćdziesiątego. Przybywszy osobiście przed urząd i do niniejszych akt grodzkich starościńskich krakowskich, urodzony Stanisław Lipski, będąc zdrowy na umyśle i ciele, zeznał, że od urodzonego Jana Morskiego otrzymał w całości sumę trzystu złotych polskich; z tej sumy tegoż Jana Morskiego kwituje i niniejszym ogłasza wolnym.'
},
{
  id: 't9', title: 'Zapiska sądowa', period: 'XV w.', kind: 'model', level: 1,
  source: 'Tekst modelowy ułożony na wzór zapisek ksiąg sądowych ziemskich z XV w. Osoby i miejscowości są umowne.',
  intro: 'Krótkie, rzeczowe zapiski sądowe są doskonałe na początek: proste zdania, przewidywalne słownictwo. Zwróć uwagę na quod + indicativus zamiast AcI.',
  text: 'Nicolaus de Bidzini citavit Petrum de Gora pro#1 decem marcis, quas sibi tenetur pro#2 equo empto. Petrus respondit, quod non tenetur. Iudicium decrevit, quod Petrus debet iurare cum duobus testibus feria quarta proxima. Et si iuraverit, erit liber; si non iuraverit, solvet decem marcas et penam iudicii.',
  gl: {
    'nicolaus': 'Nicolaus|nom. lp.|Mikołaj', 'de': 'de|praep. + abl.|z', 'bidzini': 'Bidziny|nazwa miejscowa|Bidzin', 'citavit': 'cito, -are|perf. ind. act., 3 os. lp.|pozwał', 'petrum': 'Petrus|acc. lp.|Piotra',
    'gora': 'Góra|nazwa miejscowa|Góry', 'pro#1': 'pro|praep. + abl.|o (w sprawie)', 'decem': 'decem|liczebnik nieodm.|dziesięć', 'marcis': 'marca|abl. lm.|grzywien', 'quas': 'qui|acc. lm. f.|które',
    'sibi': 'sui|dat.|jemu (powodowi; łac. śr.)', 'tenetur': 'teneo|praes. ind. pass., 3 os. lp.|jest winien (zobowiązany)', 'pro#2': 'pro|praep. + abl.|za', 'equo': 'equus, -i m.|abl. lp.|konia',
    'empto': 'emo, emere, emi, emptum|PPP, abl. lp. m.|kupionego', 'petrus': 'Petrus|nom. lp.|Piotr', 'respondit': 'respondeo|perf. ind. act., 3 os. lp.|odpowiedział', 'quod': 'quod|spójnik|że', 'non': 'non|adv.|nie',
    'iudicium': 'iudicium|nom. lp.|sąd', 'decrevit': 'decerno, -ere, decrevi|perf. ind. act., 3 os. lp.|orzekł', 'debet': 'debeo|praes. ind. act., 3 os. lp.|powinien', 'iurare': 'iuro|inf. praes. act.|przysiąc',
    'cum': 'cum|praep. + abl.|z', 'duobus': 'duo|abl. lm.|dwoma', 'testibus': 'testis|abl. lm.|świadkami (tu: współprzysiężnikami)', 'feria': 'feria|abl. lp.|dnia', 'quarta': 'quartus|abl. lp. f.|czwartego (feria quarta – środa)',
    'proxima': 'proximus|abl. lp. f.|najbliższą', 'et': 'et|spójnik|i', 'si': 'si|coni.|jeśli', 'iuraverit': 'iuro|fut. II ind. act., 3 os. lp.|przysięgnie', 'erit': 'sum|fut. I, 3 os. lp.|będzie',
    'liber': 'liber, -era, -erum|nom. lp. m.|wolny (od roszczenia)', 'solvet': 'solvo|fut. I ind. act., 3 os. lp.|zapłaci', 'marcas': 'marca|acc. lm.|grzywien', 'penam': 'poena (śr. pena)|acc. lp.|karę', 'iudicii': 'iudicium|gen. lp.|sądową (dosł. sądu)'
  },
  hard: ['citavit', 'tenetur', 'empto', 'decrevit', 'iuraverit', 'penam', 'sibi'],
  q: [
    { q: 'Kto kogo pozwał?', o: ['Piotr z Góry Mikołaja z Bidzin', 'Mikołaj z Bidzin Piotra z Góry', 'sąd obu stron', 'świadkowie Piotra'], a: 1, e: '<i>Nicolaus… citavit Petrum</i> – Nicolaus w mianowniku, Petrum w bierniku.' },
    { q: 'O co toczy się sprawa?', o: ['o granice', 'o 10 grzywien za kupionego konia', 'o kradzież konia', 'o dziesięcinę'], a: 1, e: '<i>pro decem marcis, quas sibi tenetur pro equo empto</i>.' },
    { q: 'Co ma zrobić pozwany?', o: ['zapłacić od razu', 'przysiąc z dwoma współprzysiężnikami w najbliższą środę', 'stawić świadków w piątek', 'odwołać się do króla'], a: 1, e: 'Dowód przysięgi, typowy dla średniowiecznego procesu.' },
    { q: 'Forma <i>iuraverit</i> to:', o: ['perf. ind.', 'fut. II', 'pqpf.', 'praes. coni.'], a: 1, e: 'W zdaniu warunkowym o przyszłości: „jeśli przysięgnie”.' }
  ],
  tr: 'Mikołaj z Bidzin pozwał Piotra z Góry o dziesięć grzywien, które jest mu winien za kupionego konia. Piotr odpowiedział, że nie jest winien. Sąd orzekł, że Piotr powinien przysiąc z dwoma świadkami w najbliższą środę. I jeśli przysięgnie, będzie wolny; jeśli nie przysięgnie, zapłaci dziesięć grzywien i karę sądową.'
},
{
  id: 't10', title: 'Mandat królewski', period: 'XVI w.', kind: 'model', level: 2,
  source: 'Tekst modelowy ułożony na wzór mandatów kancelarii Zygmunta I (1535). Adresat i sprawa są umowni; intytulacja i formuły odpowiadają praktyce kancelarii.',
  intro: 'Mandat to krótki list z poleceniem królewskim. Zwróć uwagę na wołacz w zwrocie do adresata, coniunctivus po ut i formułę końcową z imiesłowem przyszłym.',
  text: 'Sigismundus Dei gratia rex Poloniae, magnus dux Lithuaniae, Russiae, Prussiae, Masoviae etc. dominus et haeres. Generose, fidelis nobis dilecte. Expositum est nobis nomine civium nostrorum Sandecensium, quod subditi tui in bonis eorum gravia damna eis inferunt. Cum autem nolimus cives nostros iniuriis affici, mandamus fidelitati tuae, ut eos in iuribus et libertatibus eorum conserves neque eis ullam molestiam inferri permittas. Secus pro gratia nostra non facturus. Datum Cracoviae, feria sexta in vigilia sancti Stanislai, anno Domini millesimo quingentesimo trigesimo quinto, regni nostri anno vigesimo nono.',
  gl: {
    'sigismundus': 'Sigismundus|nom. lp.|Zygmunt', 'dei': 'deus|gen. lp.|Bożej', 'gratia': 'gratia|abl. lp.|z łaski', 'rex': 'rex, regis m.|nom. lp.|król', 'poloniae': 'Polonia|gen. lp.|Polski',
    'magnus': 'magnus|nom. lp. m.|wielki', 'dux': 'dux|nom. lp.|książę', 'lithuaniae': 'Lithuania|gen. lp.|litewski (dosł. Litwy)', 'russiae': 'Russia|gen. lp.|Rusi', 'prussiae': 'Prussia|gen. lp.|Prus', 'masoviae': 'Masovia|gen. lp.|Mazowsza',
    'etc': 'et cetera|skrót|itd.', 'dominus': 'dominus|nom. lp.|pan', 'et': 'et|spójnik|i', 'haeres': 'heres (pis. hum. haeres)|nom. lp.|dziedzic',
    'generose': 'generosus|voc. lp. m.|Urodzony (zwrot do szlachcica)', 'fidelis': 'fidelis|voc. lp. m.|wierny', 'nobis': 'nos|dat. lm.|nam', 'dilecte': 'dilectus|voc. lp. m.|miły',
    'expositum': 'expono|PPP, nom. lp. n.|przedstawiono (expositum est)', 'est': 'sum|praes. ind., 3 os. lp.|jest (z PPP: zostało)', 'nomine': 'nomen|abl. lp.|w imieniu', 'civium': 'civis|gen. lm.|mieszczan',
    'nostrorum': 'noster|gen. lm. m.|naszych', 'sandecensium': 'Sandecensis, -e|gen. lm.|sądeckich', 'quod': 'quod|spójnik|że', 'subditi': 'subditus|nom. lm. m.|poddani', 'tui': 'tuus|nom. lm. m.|twoi',
    'in': 'in|praep. + abl.|w', 'bonis': 'bonum (lm. bona)|abl. lm.|dobrach (majątkach)', 'eorum': 'is|gen. lm.|ich', 'gravia': 'gravis, -e|acc. lm. n.|ciężkie', 'damna': 'damnum|acc. lm.|szkody',
    'eis': 'is|dat. lm.|im', 'inferunt': 'infero|praes. ind. act., 3 os. lm.|wyrządzają', 'cum': 'cum|coni. + coni.|ponieważ', 'autem': 'autem|coni.|zaś', 'nolimus': 'nolo|praes. coni., 1 os. lm.|nie chcemy',
    'cives': 'civis|acc. lm.|mieszczan', 'nostros': 'noster|acc. lm. m.|naszych', 'iniuriis': 'iniuria|abl. lm.|krzywdami', 'affici': 'afficio|inf. praes. pass.|być dotykanym (iniuriis affici – doznawać krzywd)',
    'mandamus': 'mando|praes. ind. act., 1 os. lm.|polecamy', 'fidelitati': 'fidelitas|dat. lp.|wierności', 'tuae': 'tuus|dat. lp. f.|twojej', 'ut': 'ut|coni. + coni.|aby', 'eos': 'is|acc. lm. m.|ich',
    'iuribus': 'ius|abl. lm.|prawach', 'libertatibus': 'libertas|abl. lm.|wolnościach', 'conserves': 'conservo|praes. coni. act., 2 os. lp.|zachował', 'neque': 'neque|coni.|i nie', 'ullam': 'ullus|acc. lp. f.|żadnej (dosł. jakiejkolwiek)',
    'molestiam': 'molestia|acc. lp.|przykrości', 'inferri': 'infero|inf. praes. pass.|być wyrządzaną', 'permittas': 'permitto|praes. coni. act., 2 os. lp.|pozwalał', 'secus': 'secus|adv.|inaczej',
    'pro': 'pro|praep. + abl.|za (= pod utratą)', 'nostra': 'noster|abl. lp. f.|naszą', 'non': 'non|adv.|nie', 'facturus': 'facio|part. fut. act., nom. lp. m.|mający uczynić (= nie uczynisz)',
    'datum': 'do|PPP, nom. lp. n.|dano', 'cracoviae': 'Cracovia|locativus|w Krakowie', 'feria': 'feria|abl. lp.|dnia', 'sexta': 'sextus|abl. lp. f.|szóstego (feria sexta – piątek)', 'vigilia': 'vigilia|abl. lp.|wigilię',
    'sancti': 'sanctus|gen. lp.|świętego', 'stanislai': 'Stanislaus|gen. lp.|Stanisława', 'anno': 'annus|abl. lp.|roku', 'domini': 'dominus|gen. lp.|Pańskiego', 'millesimo': 'millesimus|abl. lp.|tysięcznym',
    'quingentesimo': 'quingentesimus|abl. lp.|pięćsetnym', 'trigesimo': 'tricesimus (pis. trigesimus)|abl. lp.|trzydziestym', 'quinto': 'quintus|abl. lp.|piątym', 'regni': 'regnum|gen. lp.|panowania (dosł. królestwa)',
    'nostri': 'noster|gen. lp. n.|naszego', 'vigesimo': 'vicesimus (pis. vigesimus)|abl. lp.|dwudziestym', 'nono': 'nonus|abl. lp.|dziewiątym'
  },
  hard: ['generose', 'dilecte', 'expositum', 'subditi', 'inferunt', 'nolimus', 'affici', 'fidelitati', 'conserves', 'permittas', 'secus', 'facturus', 'cracoviae', 'vigilia'],
  q: [
    { q: 'Kto wystawia mandat?', o: ['Zygmunt (I Stary), król Polski', 'starosta sądecki', 'mieszczanie sądeccy', 'biskup krakowski'], a: 0, e: 'Intytulacja: <i>Sigismundus Dei gratia rex Poloniae…</i>.' },
    { q: 'Na co skarżą się mieszczanie sądeccy?', o: ['na wysokie podatki królewskie', 'na szkody wyrządzane im w ich dobrach przez poddanych adresata', 'na brak sądu', 'na najazd tatarski'], a: 1, e: '<i>subditi tui in bonis eorum gravia damna eis inferunt</i>.' },
    { q: 'Jak przełożyć <i>Secus pro gratia nostra non facturus</i>?', o: ['Inaczej nie zrobisz dla naszej łaski', 'Nie czyniąc inaczej pod utratą naszej łaski', 'Łaska nasza nic nie zrobi', 'Zrób inaczej dla łaski'], a: 1, e: 'Stała formuła końcowa mandatów.' },
    { q: 'Wigilia św. Stanisława (8 V) w 1535 r. to:', o: ['7 maja, piątek', '8 maja, sobota', '9 maja, niedziela', '6 maja, czwartek'], a: 0, e: 'Wigilia = dzień przed świętem; 7 V 1535 (kal. juliański) wypadł w piątek, stąd <i>feria sexta</i>.' },
    { q: 'Forma <i>Generose</i> to:', o: ['przysłówek „hojnie”', 'wołacz: „Urodzony!”', 'abl. lp.', 'nom. lm. f.'], a: 1, e: 'Wołacz od <i>generosus</i> – zwrot do adresata-szlachcica.' }
  ],
  tr: 'Zygmunt, z łaski Bożej król Polski, wielki książę litewski, ruski, pruski, mazowiecki itd., pan i dziedzic. Urodzony, wierny nam miły! Przedstawiono nam w imieniu naszych mieszczan sądeckich, że twoi poddani wyrządzają im ciężkie szkody w ich dobrach. Ponieważ zaś nie chcemy, by nasi mieszczanie doznawali krzywd, polecamy twojej wierności, abyś zachował ich przy ich prawach i wolnościach i nie pozwalał wyrządzać im żadnej przykrości. Nie uczynisz inaczej pod utratą naszej łaski. Dano w Krakowie w piątek, w wigilię św. Stanisława, roku Pańskiego tysiąc pięćset trzydziestego piątego, panowania naszego roku dwudziestego dziewiątego.'
}
];

/* Tekst dokumentu z częściami: złóż pełny tekst */
LAT.TEXTS.forEach(function (t) {
  if (t.parts && !t.text) t.text = t.parts.map(function (p) { return p[1]; }).join(' ');
});
