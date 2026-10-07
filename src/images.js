/* ============================================================
   ŁACINA W PRZESTRZENI I OBRAZIE
   Inskrypcje na budowlach i pomnikach, napisy na obrazach,
   druki i dokumenty. Zdjęcia: Wikimedia Commons (ładowane z sieci).
   ============================================================ */
LAT.IMAGES = [
{
  id: 'i1', cat: 'arch', title: 'Panteon w Rzymie – inskrypcja na fryzie', place: 'Rzym', date: 'ok. 125 n.e. (tekst z 27 p.n.e.)',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pantheon_%28Rome%29_front_2.jpg/1280px-Pantheon_%28Rome%29_front_2.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Pantheon_(Rome)_front_2.jpg', credit: 'Wknight94, CC BY-SA 3.0',
  read: 'M·AGRIPPA·L·F·COS·TERTIVM·FECIT',
  exp: 'M(arcus) Agrippa L(ucii) f(ilius) co(n)s(ul) tertium fecit',
  tr: 'Marek Agrypa, syn Lucjusza, konsul po raz trzeci, wzniósł (tę budowlę).',
  notes: 'Klasyczny wzór inskrypcji budowlanej: imię fundatora, filiacja (imię ojca w dopełniaczu + F), urząd, czasownik. Litera V oznacza zarówno u, jak i v. Kropki (interpunkcja) oddzielają słowa. Uwaga historyczna: obecną budowlę wzniósł Hadrian, który zachował na fryzie inskrypcję pierwotnego fundatora. Napis nie jest więc dowodem datowania budynku.',
  q: [
    { q: 'Co znaczy <b>L·F</b>?', o: ['Lucius fecit', 'Lucii filius – syn Lucjusza', 'libens fecit', 'locus funeris'], a: 1, e: 'Filiacja: praenomen ojca w dopełniaczu + F(ilius).' },
    { q: '<b>COS·TERTIVM</b> to:', o: ['trzeci konsul', 'konsul po raz trzeci', 'trzy kohorty', 'trzeci rok'], a: 1, e: '<i>tertium</i> – przysłówek liczebnikowy: „po raz trzeci”.' },
    { q: 'Czy napis dowodzi, że obecny Panteon zbudował Agrypa?', o: ['tak', 'nie – Hadrian odbudował gmach i powtórzył dawną inskrypcję'], a: 1, e: 'Klasyczna pułapka: inskrypcja fundacyjna może być starsza od budowli albo przeniesiona.' }
  ]
},
{
  id: 'i2', cat: 'arch', title: 'Łuk Tytusa – tablica dedykacyjna', place: 'Rzym, Forum Romanum', date: 'po 81 n.e.',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ArcoTitoIscrizione.jpg/1280px-ArcoTitoIscrizione.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:ArcoTitoIscrizione.jpg', credit: 'MM, CC BY-SA 4.0',
  read: 'SENATVS\nPOPVLVSQVEROMANVS\nDIVOTITODIVIVESPASIANIF\nVESPASIANOAVGVSTO',
  exp: 'Senatus populusque Romanus divo Tito divi Vespasiani f(ilio) Vespasiano Augusto',
  tr: 'Senat i lud rzymski boskiemu Tytusowi Wespazjanowi Augustowi, synowi boskiego Wespazjana.',
  notes: 'Słowa nie są tu oddzielone (scriptio continua), a F na końcu trzeciego wiersza jest mniejsze i wciśnięte. Podział na słowa to pierwszy krok odczytu. Typowa dedykacja: dedykujący w mianowniku, adresat w celowniku (DIVO TITO… AVGVSTO), czasownik (dedicavit, posuit) opuszczony. DIVVS („boski”, ubóstwiony) oznacza, że cesarz już nie żył. Łuk wzniesiono więc po śmierci Tytusa (81 r.), za Domicjana.',
  q: [
    { q: 'W jakim przypadku jest <b>DIVO TITO</b>?', o: ['nom.', 'gen.', 'dat. – adresat dedykacji', 'abl.'], a: 2, e: 'W dedykacjach osoba uczczona stoi w celowniku.' },
    { q: 'Co mówi o dacie słowo <b>DIVO</b>?', o: ['nic', 'Tytus już nie żył (został ubóstwiony)', 'łuk zbudowano za życia Tytusa', 'Tytus był kapłanem'], a: 1, e: 'Tytuł <i>divus</i> nadawano po apoteozie zmarłego cesarza.' },
    { q: '<b>POPVLVSQVE</b> =', o: ['populus + -que: „i lud”', 'ludowy', 'lud pyta', 'każdy lud'], a: 0, e: 'Enklityka <i>-que</i> („i”) dołączona do drugiego członu. Stąd skrót S·P·Q·R.' }
  ]
},
{
  id: 'i3', cat: 'arch', title: 'Bazylika św. Piotra – fasada', place: 'Watykan', date: '1612',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/St_Peter%27s_Basilica_fa%C3%A7ade.jpg/1280px-St_Peter%27s_Basilica_fa%C3%A7ade.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:St_Peter%27s_Basilica_fa%C3%A7ade.jpg', credit: 'Modussiccandi, CC BY-SA 4.0',
  read: 'IN HONOREM PRINCIPIS APOST PAVLVS V BVRGHESIVS ROMANVS PONT MAX AN MDCXII PONT VII',
  exp: 'In honorem principis apost(olorum) Paulus V Burghesius Romanus pont(ifex) max(imus) an(no) MDCXII pont(ificatus) VII',
  tr: 'Ku czci księcia apostołów Paweł V Borghese, Rzymianin, najwyższy kapłan (papież), w roku 1612, siódmym roku pontyfikatu.',
  notes: 'Inskrypcja nowożytna w stylu antycznym: kapitała, skróty przez zawieszenie (APOST, PONT, MAX, AN). Data podwójna: rok od narodzenia Chrystusa i rok pontyfikatu. Tak samo datuje się dokumenty kancelarii papieskiej i królewskiej (por. „regni nostri anno…”).',
  q: [
    { q: 'Kim jest <b>princeps apostolorum</b>?', o: ['św. Paweł', 'św. Piotr', 'papież Paweł V', 'Chrystus'], a: 1, e: 'Tytuł św. Piotra; bazylika stoi nad jego grobem.' },
    { q: '<b>PONT VII</b> oznacza:', o: ['siedem mostów', 'siódmy rok pontyfikatu', 'siódmy papież', 'siedmiu kapłanów'], a: 1, e: '<i>pontificatus</i> (gen.) – rok panowania papieża.' },
    { q: 'Jaki rok zapisano jako <b>MDCXII</b>?', o: ['1412', '1612', '1712', '1662'], a: 1, e: 'M 1000 + D 500 + C 100 + X 10 + II 2.' }
  ]
},
{
  id: 'i4', cat: 'arch', title: 'Brama Wyżynna w Gdańsku', place: 'Gdańsk', date: '1588 (dekoracja)',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Highland_Gate%2C_Gdansk%2C_Poland.jpg/1280px-Highland_Gate%2C_Gdansk%2C_Poland.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Highland_Gate,_Gdansk,_Poland.jpg', credit: 'Thomas Dahlstrøm Nielsen, CC BY 4.0',
  read: 'IUSTITIA ET PIETAS DUO SUNT REGNORUM OMNIUM FUNDAMENTA',
  exp: 'Iustitia et pietas duo sunt regnorum omnium fundamenta',
  tr: 'Sprawiedliwość i pobożność to dwa fundamenty wszystkich królestw.',
  notes: 'Jedna z trzech sentencji na fasadzie zachodniej bramy, obok herbów Prus Królewskich, Polski i Gdańska. Humanistyczna maksyma polityczna, typowa dla programów ideowych miast Rzeczypospolitej. Na zdjęciu napis może być widoczny tylko częściowo; powiększ oryginał na Commons.',
  q: [
    { q: 'Jaki to przypadek: <b>regnorum</b>?', o: ['nom. lm.', 'gen. lm.', 'dat. lm.', 'acc. lp.'], a: 1, e: '<i>regnum, -i</i> (II dekl. n.), gen. lm. <i>-orum</i>: „królestw”.' },
    { q: 'Co jest podmiotem zdania?', o: ['fundamenta', 'iustitia et pietas', 'regnorum omnium', 'duo'], a: 1, e: '„Sprawiedliwość i pobożność są dwoma fundamentami”. <i>fundamenta</i> to orzecznik.' }
  ]
},
{
  id: 'i5', cat: 'pomnik', title: 'Pomnik Kopernika w Warszawie', place: 'Warszawa, Krakowskie Przedmieście', date: '1830',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nicolao_Copernico_Grata_Patria.jpg/1280px-Nicolao_Copernico_Grata_Patria.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Nicolao_Copernico_Grata_Patria.jpg', credit: 'Szczebrzeszynski, domena publiczna',
  read: 'NICOLAO COPERNICO GRATA PATRIA',
  exp: 'Nicolao Copernico grata patria',
  tr: 'Mikołajowi Kopernikowi wdzięczna ojczyzna.',
  notes: 'Najkrótsza możliwa dedykacja: adresat w celowniku, fundator w mianowniku, czasownik pominięty. Ten sam układ co na łuku Tytusa. Na cokole jest też napis polski: „Mikołajowi Kopernikowi rodacy”.',
  q: [
    { q: 'W jakim przypadku jest <b>NICOLAO COPERNICO</b>?', o: ['nom.', 'gen.', 'dat.', 'abl.'], a: 2, e: 'Komu? – Mikołajowi Kopernikowi.' },
    { q: '<b>GRATA PATRIA</b> to:', o: ['wdzięczna ojczyzna (podmiot)', 'za darmo ojczyźnie', 'ojczyźnie wdzięcznej', 'łaska ojczyzny'], a: 0, e: 'nom. lp. f. – to ojczyzna funduje pomnik.' }
  ]
},
{
  id: 'i6', cat: 'pomnik', title: 'Pomnik Kopernika w Toruniu', place: 'Toruń, Rynek Staromiejski', date: '1853',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Torun_pomnik_Kopernika_caly.jpg/1280px-Torun_pomnik_Kopernika_caly.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Torun_pomnik_Kopernika_caly.jpg', credit: 'Pko, CC BY-SA 3.0',
  read: 'NICOLAUS COPERNICUS THORUNENSIS\nTERRAE MOTOR SOLIS CAELIQUE STATOR',
  exp: 'Nicolaus Copernicus Thorunensis, terrae motor, solis caelique stator',
  tr: 'Mikołaj Kopernik, torunianin, ten, który poruszył Ziemię, a zatrzymał Słońce i niebo.',
  notes: 'Gra słów oparta na rzeczownikach wykonawcy czynności na -tor (motor od movere, stator od stare/sistere). Napis jest na tablicy cokołu; powiększ zdjęcie na Commons. Przymiotnik od nazwy miasta na -ensis (Thorunensis) to standardowy sposób określania pochodzenia, por. Cracoviensis, Gneznensis.',
  q: [
    { q: '<b>Thorunensis</b> znaczy:', o: ['z Torunia, torunianin', 'Toruń (nom.)', 'do Torunia', 'Torunianie'], a: 0, e: 'Przymiotnik na <i>-ensis</i> od nazwy miejscowej.' },
    { q: '<b>motor</b> pochodzi od:', o: ['mos, moris', 'moveo – ten, który porusza', 'morior', 'mons'], a: 1, e: 'Sufiks <i>-tor</i> tworzy nazwy wykonawców: motor, stator, venditor, procurator.' }
  ]
},
{
  id: 'i7', cat: 'obraz', title: 'Jan van Eyck, Portret Arnolfinich', place: 'Londyn, National Gallery', date: '1434',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/1280px-Van_Eyck_-_Arnolfini_Portrait.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg', credit: 'domena publiczna',
  read: 'Johannes de eyck fuit hic. 1434.',
  exp: 'Iohannes de Eyck fuit hic. 1434.',
  tr: 'Jan van Eyck był tutaj. 1434.',
  notes: 'Napis gotycką minuskułą kancelaryjną na ścianie nad lustrem. Zamiast zwykłej sygnatury „me fecit” („uczynił mnie”) malarz pisze „fuit hic”, jakby był świadkiem sceny. Interpretacja (świadectwo zaślubin? żart? deklaracja obecności) jest przedmiotem sporu. Zwróć uwagę na „de” przed nazwą pochodzenia, tak jak w polskich źródłach (Nicolaus de Wola).',
  q: [
    { q: '<b>fuit</b> to:', o: ['praes. od sum', 'perf. od sum: „był”', 'fut. od sum', 'od fugio'], a: 1, e: 'perf. ind., 3 os. lp.' },
    { q: 'Gdzie na obrazie szukać napisu?', o: ['na ramie', 'na ścianie nad okrągłym lustrem', 'na sukni', 'na podłodze'], a: 1, e: 'Powiększ oryginał na Commons: napis jest nad lustrem.' }
  ]
},
{
  id: 'i8', cat: 'obraz', title: 'Jan van Eyck, Portret mężczyzny w turbanie', place: 'Londyn, National Gallery', date: '1433',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Portrait_of_a_Man_in_a_Turban_%28Jan_van_Eyck%29_with_frame.jpg/1280px-Portrait_of_a_Man_in_a_Turban_%28Jan_van_Eyck%29_with_frame.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Portrait_of_a_Man_in_a_Turban_(Jan_van_Eyck)_with_frame.jpg', credit: 'domena publiczna',
  read: '(góra ramy) ALS IXH XAN\n(dół ramy) JOH̄ES DE EYCK ME FECIT AN̄O MCCCC.33. 21. OCTOBRIS',
  exp: 'Ioh(ann)es de Eyck me fecit an(n)o MCCCC33, 21 Octobris',
  tr: '(góra, po niderlandzku) „Jak potrafię najlepiej”. (dół) Jan van Eyck uczynił mnie roku 1433, 21 października.',
  notes: 'Na ramie widać kreski skrótu nad literami: JOH̄ES = Iohannes (kontrakcja), AN̄O = anno (kreska zastępuje drugie n). To te same znaki co w rękopisach i dokumentach. Rok zapisano mieszanie: MCCCC + 33. Formuła „me fecit” oznacza, że to dzieło mówi o sobie.',
  q: [
    { q: 'Co oznacza kreska nad <b>JOH̄ES</b>?', o: ['akcent', 'opuszczone litery: Ioh(ann)es', 'długą samogłoskę', 'nic'], a: 1, e: 'Kreska poziomo nad wyrazem sygnalizuje kontrakcję.' },
    { q: 'Kto „mówi” w formule <b>me fecit</b>?', o: ['malarz', 'portretowany', 'sam obraz („uczynił mnie”)', 'zleceniodawca'], a: 2, e: 'Inskrypcje „mówiące” (me fecit, me posuit) są częste na dziełach sztuki, dzwonach i chrzcielnicach.' },
    { q: 'Data obrazu to:', o: ['21 X 1433', '1 X 1433', '21 XII 1433', '33 X 1421'], a: 0, e: 'MCCCC.33 = 1433, dzień 21 października.' }
  ]
},
{
  id: 'i9', cat: 'obraz', title: 'Albrecht Dürer, Autoportret', place: 'Monachium, Alte Pinakothek', date: '1500',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg/1280px-Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_1500_self-portrait_(High_resolution_and_detail).jpg', credit: 'domena publiczna',
  read: 'Albertus Durerus Noricus\nipsum me propriis sic effin-\ngebam coloribus aetatis\nanno XXVIII.',
  exp: 'Albertus Durerus Noricus ipsum me propriis sic effingebam coloribus aetatis anno XXVIII.',
  tr: 'Ja, Albrecht Dürer z Norymbergi, tak namalowałem samego siebie własnymi farbami w 28. roku życia.',
  notes: 'Humanistyczna łacina i humanistyczna antykwa. Nazwisko zlatynizowano (Durerus), a pochodzenie oddano przymiotnikiem (Noricus, „noryk”, tu: norymberczyk). Imię Albrecht oddano jako Albertus; w polskich źródłach to samo Albertus oznacza zwykle Wojciecha! Imperfectum „effingebam” to tzw. imperfectum epistolarne: autor pisze z perspektywy przyszłego widza.',
  q: [
    { q: '<b>aetatis anno XXVIII</b> to:', o: ['w roku 28 ery', 'w 28. roku życia', '28 lat temu', 'w wieku 28 wieków'], a: 1, e: '<i>aetas</i> – wiek, lata życia. Ta sama formuła w epitafiach: <i>aetatis suae anno…</i>' },
    { q: 'Jak w polskich metrykach należy zwykle rozumieć imię <b>Albertus</b>?', o: ['Albert', 'Wojciech', 'Olbracht wyłącznie', 'Adam'], a: 1, e: 'Por. tekst „Metryka chrztu” w Czytance.' },
    { q: '<b>ipsum me</b> to:', o: ['mnie samego', 'jego samego', 'samemu sobie', 'ja sam (nom.)'], a: 0, e: 'acc. lp.: dopełnienie do <i>effingebam</i>.' }
  ]
},
{
  id: 'i10', cat: 'druk', title: 'Kopernik, De revolutionibus – karta tytułowa', place: 'Norymberga, J. Petreius', date: '1543',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/De_revolutionibus_orbium_coelestium_%28Nuremberg_Johann_Petreius_1543%29_title_page.jpg/1280px-De_revolutionibus_orbium_coelestium_%28Nuremberg_Johann_Petreius_1543%29_title_page.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:De_revolutionibus_orbium_coelestium_(Nuremberg_Johann_Petreius_1543)_title_page.jpg', credit: 'domena publiczna',
  read: 'NICOLAI CO-\nPERNICI TORINENSIS\nDE REVOLVTIONIBVS ORBI-\num cœlestium,\nLibri VI.\n… Igitur eme, lege, fruere. …\nNorimbergæ apud Ioh. Petreium,\nAnno M.D.XLIII.',
  exp: 'Nicolai Copernici Torinensis De revolutionibus orbium coelestium libri VI. … Igitur eme, lege, fruere. … Norimbergae apud Ioh(annem) Petreium, anno 1543.',
  tr: 'Mikołaja Kopernika z Torunia o obrotach sfer niebieskich ksiąg sześć. … Kupuj więc, czytaj, korzystaj. … W Norymberdze u Jana Petreiusa, roku 1543.',
  notes: 'Typografia XVI w.: ligatury æ i œ, u zamiast v w środku wyrazu, & zamiast et, akcenty (quàm) i skróty imion (Ioh.). Tytuł w dopełniaczu (Nicolai Copernici… libri – „księgi Mikołaja Kopernika”). Zdanie „Igitur eme, lege, fruere” to reklama wydawcy: trzy rozkaźniki. Uwaga na pisownię Torinensis (nie Thorunensis).',
  q: [
    { q: 'Dlaczego <b>Nicolai Copernici</b> stoi w dopełniaczu?', o: ['to błąd drukarza', 'zależy od „libri” – księgi Mikołaja Kopernika', 'to wołacz', 'to dedykacja'], a: 1, e: 'Standardowa konstrukcja tytułów: autor w gen. + tytuł + liczba ksiąg.' },
    { q: '<b>eme, lege, fruere</b> to:', o: ['trzy rozkaźniki: kupuj, czytaj, korzystaj', 'trzy bezokoliczniki', 'trzy imiesłowy', 'trzy rzeczowniki'], a: 0, e: '<i>emo</i>, <i>lego</i> (imp. 2 os. lp. -e) i deponens <i>fruor</i> (imp. <i>fruere</i>).' },
    { q: '<b>apud Ioh. Petreium</b> =', o: ['przeciw Janowi Petreiusowi', 'u (w oficynie) Jana Petreiusa', 'dla Jana Petreiusa', 'po Janie Petreiusie'], a: 1, e: '<i>apud</i> + acc. w impresum = „w oficynie, u”.' }
  ]
},
{
  id: 'i11', cat: 'rekopis', title: 'Bulla gnieźnieńska (1136)', place: 'Archiwum Archidiecezjalne w Gnieźnie', date: '7 VII 1136',
  img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Bulla_gnie%C5%BAnie%C5%84ska_%281136%29.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Bulla_gnie%C5%BAnie%C5%84ska_(1136).jpg', credit: 'Kargul1965, CC BY 3.0',
  read: '(pierwszy wiersz, litterae elongatae) INNOCENTIUS EPISCOPUS SERVUS SERVORUM DEI …',
  exp: 'Innocentius episcopus servus servorum Dei …',
  tr: 'Innocenty, biskup, sługa sług Bożych…',
  notes: 'Uroczysty przywilej papieski (privilegium sollemne) Innocentego II dla arcybiskupa gnieźnieńskiego Jakuba. Zawiera ok. 410 polskich nazw osobowych i miejscowych. Dlatego nazywa się go „złotą bullą języka polskiego”. Rozpoznaj elementy przywileju uroczystego: 1) pierwszy wiersz pismem wydłużonym (litterae elongatae) z intytulacją papieża; 2) u dołu rota (koło z krzyżem i dewizą papieża) i monogram Bene Valete; 3) podpisy papieża i kardynałów. Zdjęcie ma niską rozdzielczość, więc ćwiczenie dotyczy budowy dokumentu, nie odczytu tekstu.',
  q: [
    { q: 'Jak brzmi intytulacja papieża w pierwszym wierszu?', o: ['Nos Innocentius Dei gratia papa', 'Innocentius episcopus servus servorum Dei', 'Innocentius rex Romanorum', 'In nomine Domini Innocentius'], a: 1, e: 'Tytuł „sługa sług Bożych” od Grzegorza Wielkiego; stała formuła kancelarii papieskiej.' },
    { q: 'Jak nazywa się koło z krzyżem u dołu przywileju uroczystego?', o: ['bulla', 'rota', 'monogram', 'chrismon'], a: 1, e: 'Rota zawiera imię papieża i jego dewizę. Obok jest monogram BENE VALETE.' },
    { q: 'Dlaczego bulla ma tak duże znaczenie dla polonisty i historyka?', o: ['to najstarszy dokument polski', 'zawiera ok. 410 polskich nazw', 'jest pisana po polsku', 'ustanawia arcybiskupstwo'], a: 1, e: 'To najstarszy tak bogaty zbiór polskich nazw w zapisie łacińskim.' }
  ]
},
{
  id: 'i12', cat: 'rekopis', title: 'Grzegorz IX potwierdza dobra klasztoru w Sulejowie (1234)', place: 'AGAD, Warszawa', date: '3 VI 1234',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Grzegorz_IX_potwierdza_opatowi_w_Sulejowie_posiadane_dobra.jpg/1280px-Grzegorz_IX_potwierdza_opatowi_w_Sulejowie_posiadane_dobra.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Grzegorz_IX_potwierdza_opatowi_w_Sulejowie_posiadane_dobra.jpg', credit: 'domena publiczna (AGAD)',
  read: '(początek) GREGORIUS EPISCOPUS SERVUS SERVORUM DEI …',
  exp: 'Gregorius episcopus servus servorum Dei …',
  tr: 'Grzegorz, biskup, sługa sług Bożych…',
  notes: 'Dokument papieski dla cystersów sulejowskich. Otwórz oryginał na Commons (pełna rozdzielczość, ok. 7700 px) i poćwicz paleografię. Spróbuj znaleźć: 1) intytulację „Gregorius episcopus servus servorum Dei” na początku; 2) kreski skrótów nad wyrazami (np. ep̄s = episcopus, dñi = Domini, sc̄i = sancti); 3) charakterystyczne dla kancelarii papieskiej ligatury st i ct z łukiem; 4) końcową datę z „Dat.” (Datum) i rokiem pontyfikatu. Do rozwijania skrótów użyj modułu „Skróty”.',
  q: [
    { q: 'Jak zwykle zaczyna się dokument papieski?', o: ['od inwokacji „In nomine Domini”', 'od imienia papieża i tytułu „episcopus servus servorum Dei”', 'od daty', 'od listy świadków'], a: 1, e: 'Dokumenty papieskie nie mają inwokacji słownej; zaczynają się od intytulacji.' },
    { q: 'Jak zwykle datuje się dokument papieski?', o: ['tylko rokiem od narodzenia Chrystusa', 'miejscem, datą dzienną (kalendarz rzymski) i rokiem pontyfikatu', 'tylko świętem', 'indykcją bez roku'], a: 1, e: 'Np. „Dat. Reate III Nonas Iunii pontificatus nostri anno octavo”. Ćwicz w Chronologii → kalendarz rzymski.' }
  ]
},
{
  id: 'i13', cat: 'arch', title: 'Kolumna Trajana – tablica u podstawy', place: 'Rzym, Forum Trajana', date: '113 n.e.',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Inscription%2C_Trajan%27s_Column.jpg/1280px-Inscription%2C_Trajan%27s_Column.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Inscription,_Trajan%27s_Column.jpg', credit: 'MumblerJamie, CC BY-SA 2.0',
  read: 'SENATVSPOPVLVSQVEROMANVS\nIMPCAESARIDIVINERVAEFNERVAE\nTRAIANOAVGGERMDACICOPONTIF\nMAXIMOTRIBPOTXVIIIMPVICOSVIPP\nADDECLARANDVMQVANTAEALTITVDINIS\nMONSETLOCVSTANT[…]IBVSSITEGESTVS',
  exp: 'Senatus populusque Romanus imp(eratori) Caesari divi Nervae f(ilio) Nervae Traiano Aug(usto) Germ(anico) Dacico pontif(ici) maximo trib(unicia) pot(estate) XVII imp(eratori) VI co(n)s(uli) VI p(atri) p(atriae), ad declarandum quantae altitudinis mons et locus tant[is oper]ibus sit egestus.',
  tr: 'Senat i lud rzymski cesarzowi Cezarowi Nerwie Trajanowi Augustowi, synowi boskiego Nerwy, Germańskiemu, Dackiemu, najwyższemu kapłanowi, piastującemu władzę trybuńską po raz 17., ogłoszonemu imperatorem po raz 6., konsulowi po raz 6., ojcu ojczyzny – aby ukazać, jak wysoka góra i jak wielki teren zostały usunięte pod tak wielkie budowle.',
  notes: 'Wzorcowa kapitała rzymska: z tych liter typografowie renesansu wyprowadzili antykwę. Napis to „łańcuch tytułów” cesarza w celowniku, każdy skrócony przez zawieszenie (AVG, GERM, PONTIF, TRIB POT, COS, P P). Liczby przy TRIB POT i COS pozwalają datować napis na 113 r. Druga część to zdanie celowe z gerundium (ad declarandum) i pytaniem zależnym w coniunctivie (sit egestus). Litery w nawiasie kwadratowym są zniszczone i uzupełnione przez wydawców.',
  q: [
    { q: 'W jakim przypadku stoją tytuły cesarza (CAESARI… TRAIANO… MAXIMO)?', o: ['mianownik', 'celownik – adresat dedykacji', 'dopełniacz', 'ablatyw'], a: 1, e: 'Jak na łuku Tytusa: dedykujący (SPQR) w mianowniku, uczczony w celowniku.' },
    { q: '<b>TRIB POT XVII</b> pozwala:', o: ['policzyć legiony', 'datować napis (17. rok władzy trybuńskiej)', 'ustalić wiek cesarza', 'nic'], a: 1, e: 'Władzę trybuńską odnawiano co roku – to cesarski „rok panowania”.' },
    { q: '<b>ad declarandum</b> to:', o: ['gerundium: „aby ukazać”', 'imiesłów bierny', 'czas przyszły', 'nazwa miejsca'], a: 0, e: '<i>ad</i> + gerundium w bierniku = cel.' }
  ]
},
{
  id: 'i14', cat: 'arch', title: 'Łuk Konstantyna – inskrypcja na attyce', place: 'Rzym', date: '315 n.e.',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Arco_di_Costantino_3.jpg/1280px-Arco_di_Costantino_3.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Arco_di_Costantino_3.jpg', credit: 'Flazaza, CC BY-SA 3.0',
  read: 'IMP·CAES·FL·CONSTANTINO·MAXIMO\nP·F·AVGVSTO·S·P·Q·R\nQVOD·INSTINCTV·DIVINITATIS·MENTIS\nMAGNITVDINE·CVM·EXERCITV·SVO\nTAM·DE·TYRANNO·QVAM·DE·OMNI·EIVS\nFACTIONE·VNO·TEMPORE·IVSTIS\nREMPVBLICAM·VLTVS·EST·ARMIS\nARCVM·TRIVMPHIS·INSIGNEM·DICAVIT',
  exp: 'Imp(eratori) Caes(ari) Fl(avio) Constantino Maximo p(io) f(elici) Augusto s(enatus) p(opulus)q(ue) R(omanus), quod instinctu divinitatis, mentis magnitudine cum exercitu suo tam de tyranno quam de omni eius factione uno tempore iustis rempublicam ultus est armis, arcum triumphis insignem dicavit.',
  tr: 'Cesarzowi Flawiuszowi Konstantynowi Wielkiemu, pobożnemu, szczęśliwemu Augustowi – senat i lud rzymski, ponieważ z natchnienia bóstwa i dzięki wielkości ducha wraz ze swoim wojskiem jednocześnie pomścił państwo sprawiedliwym orężem zarówno na tyranie, jak i na całym jego stronnictwie – poświęcił ten łuk, wyróżniony przedstawieniami tryumfów.',
  notes: 'Najsłynniejsza dwuznaczność epigrafiki: INSTINCTV DIVINITATIS („z natchnienia bóstwa”) nie przesądza, o jakie bóstwo chodzi – w 315 r. odczytać to mogli zarówno chrześcijanie, jak i poganie. „Tyran” to Maksencjusz pokonany przy moście Mulwijskim (312). Zwróć uwagę na konstrukcję tam… quam („zarówno… jak i”) i deponens ultus est („pomścił”).',
  q: [
    { q: '<b>ultus est</b> to:', o: ['został pomszczony', 'pomścił (deponens: forma bierna, znaczenie czynne)', 'jest ostatni', 'będzie mścił'], a: 1, e: '<i>ulciscor, ulcisci, ultus sum</i> – deponens.' },
    { q: 'Dlaczego historycy dyskutują o słowach <b>INSTINCTV DIVINITATIS</b>?', o: ['bo są źle wykute', 'bo nie mówią, o jakie bóstwo chodzi – chrześcijańskie czy pogańskie', 'bo dodano je w średniowieczu', 'bo to skrót'], a: 1, e: 'Celowo neutralna formuła w okresie przemian religijnych.' },
    { q: 'Kto jest „tyranem” (TYRANNO)?', o: ['Neron', 'Maksencjusz, pokonany w 312 r.', 'Dioklecjan', 'Attyla'], a: 1, e: 'Bitwa przy moście Mulwijskim.' }
  ]
},
{
  id: 'i15', cat: 'arch', title: 'Fontanna di Trevi – tablica papieska', place: 'Rzym', date: '1735',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/0_Blason_de_Cl%C3%A9ment_XII_-_Fontazine_de_Trevi.JPG/1280px-0_Blason_de_Cl%C3%A9ment_XII_-_Fontazine_de_Trevi.JPG',
  page: 'https://commons.wikimedia.org/wiki/File:0_Blason_de_Cl%C3%A9ment_XII_-_Fontazine_de_Trevi.JPG', credit: 'Jean-Pol Grandmont, CC BY 4.0',
  read: 'CLEMENS·XII·PONT·MAX·\nAQVAM·VIRGINEM\nCOPIA·ET·SALVBRITATE·COMMENDATAM\nCVLTV·MAGNIFICO·ORNAVIT\nANNO·DOMINI·MDCCXXXV·PONTIF·VI·',
  exp: 'Clemens XII pont(ifex) max(imus) aquam Virginem copia et salubritate commendatam cultu magnifico ornavit anno Domini MDCCXXXV pontif(icatus) VI.',
  tr: 'Klemens XII, papież, wodę Aqua Virgo, cenioną za obfitość i zdrowotność, ozdobił wspaniałą oprawą w roku Pańskim 1735, szóstym roku pontyfikatu.',
  notes: 'Barokowa inskrypcja fundacyjna w stylu antycznym. Aqua Virgo to nazwa starożytnego akweduktu z 19 r. p.n.e., który zasila fontannę – nie „woda dziewicza”. PPP commendatam zgadza się z aquam (biernik l. poj. r. ż.), a ablatywy copia et salubritate mówią „czym” woda jest ceniona.',
  q: [
    { q: 'Co jest podmiotem zdania?', o: ['aquam Virginem', 'Clemens XII', 'cultu magnifico', 'anno Domini'], a: 1, e: 'Mianownik: Klemens XII – on <i>ornavit</i> (ozdobił).' },
    { q: 'Jak rozumieć <b>AQVAM VIRGINEM</b>?', o: ['woda dziewicza', 'Aqua Virgo – nazwa akweduktu', 'woda święcona', 'Matka Boża'], a: 1, e: 'Nazwa własna; dosłowny przekład byłby pułapką.' },
    { q: 'W którym roku pontyfikatu powstał napis?', o: ['w pierwszym', 'w szóstym', 'w dwunastym', 'w trzydziestym piątym'], a: 1, e: 'PONTIF VI – Klemens XII został wybrany w 1730 r.' }
  ]
},
{
  id: 'i16', cat: 'arch', title: 'Złota Brama w Gdańsku', place: 'Gdańsk, ul. Długa', date: '1612–1614',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/635493_Gda%C5%84sk_Brama_Z%C5%82ota_02.JPG/1280px-635493_Gda%C5%84sk_Brama_Z%C5%82ota_02.JPG',
  page: 'https://commons.wikimedia.org/wiki/File:635493_Gda%C5%84sk_Brama_Z%C5%82ota_02.JPG', credit: 'Dawid Galus, CC BY-SA 3.0 pl',
  read: 'CONCORDIA RES PUBLICAE PARVAE CRESCUNT – DISCORDIA MAGNAE CONCIDUNT',
  exp: 'Concordia res publicae parvae crescunt, discordia magnae concidunt.',
  tr: 'Dzięki zgodzie małe państwa rosną, przez niezgodę wielkie upadają.',
  notes: 'Napis biegnie na fryzie fasady od strony ul. Długiej (powiększ zdjęcie na Commons). To parafraza zdania z Salustiusza (Wojna z Jugurtą 10) – ulubiona maksyma mieszczańskich republik. Zwróć uwagę: res publicae to tu mianownik liczby mnogiej („państwa”), a concordia i discordia to ablatywy przyczyny („dzięki zgodzie”, „przez niezgodę”). Budowa antytetyczna: parvae ↔ magnae, crescunt ↔ concidunt.',
  q: [
    { q: 'Jaką funkcję pełni <b>concordia</b>?', o: ['podmiot', 'ablatyw przyczyny: „dzięki zgodzie”', 'wołacz', 'dopełnienie'], a: 1, e: 'Odpowiada na pytanie: dzięki czemu? – ablativus causae.' },
    { q: '<b>res publicae parvae</b> to:', o: ['mianownik l. mn.: małe państwa', 'dopełniacz l. poj.: małego państwa', 'celownik', 'biernik'], a: 0, e: 'Podmiot do <i>crescunt</i> (rosną – 3. osoba l. mn.).' },
    { q: 'Skąd pochodzi myśl napisu?', o: ['z Biblii', 'z Salustiusza', 'z Konstytucji 3 maja', 'od Kopernika'], a: 1, e: 'Salustiusz, Bellum Iugurthinum 10.' }
  ]
},
{
  id: 'i17', cat: 'arch', title: 'Katedra na Wawelu – inskrypcja nad portalem', place: 'Kraków, Wawel', date: 'tablica nowożytna; treść o 1320 r.',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Krak%C3%B3w_Wawel_3_ko%C5%9Bci%C3%B3%C5%82_portal_od_pd._detal.jpg/1280px-Krak%C3%B3w_Wawel_3_ko%C5%9Bci%C3%B3%C5%82_portal_od_pd._detal.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Krak%C3%B3w_Wawel_3_ko%C5%9Bci%C3%B3%C5%82_portal_od_pd._detal.jpg', credit: 'Januszk57, CC BY-SA 4.0',
  read: 'D. O. M. B. M. V. SS. PATRONIS\nECCLESIAM HANC IGNE ABSVMPTAM NANKERVS SILESIVS\nEP̃VS CRAC. IN HANC FORMAM RESTITVIT; RELIQVI POSTEA\nSVCC̃ORES EP̃I ET CAPITVLVM CVM EX COMMVNI TVM VERO\nQVIDAM EX PRIVATO CENSV ADORNAVERE.\nA. D. MCCCXX.',
  exp: 'D(eo) O(ptimo) M(aximo), B(eatae) M(ariae) V(irgini), s(anctis) patronis. Ecclesiam hanc igne absumptam Nankerus Silesius ep(iscop)us Crac(oviensis) in hanc formam restituit; reliqui postea succ(esso)res ep(iscop)i et capitulum cum ex communi tum vero quidam ex privato censu adornavere. A(nno) D(omini) MCCCXX.',
  tr: 'Bogu Najlepszemu Największemu, Najświętszej Marii Pannie i świętym patronom. Ten kościół, strawiony przez ogień, Nanker Ślązak, biskup krakowski, odbudował w tym kształcie; pozostali biskupi, jego następcy, i kapituła ozdobili go potem – zarówno ze wspólnych funduszy, jak i niektórzy z prywatnego majątku. Roku Pańskiego 1320.',
  notes: 'Znakomity materiał do skrótów: tylda nad EP̃VS i SVCC̃ORES to ten sam znak kontrakcji, co w rękopisach (episcopus, successores). D.O.M. otwiera niemal każdą nowożytną tablicę w polskich kościołach. Ablativus absolutus? Nie – igne absumptam to imiesłów bierny zgodny z ecclesiam („strawiony przez ogień”). Pułapka datacyjna: tablica jest nowożytna, a podana data dotyczy początku odbudowy za biskupa Nankera. Zapis adornavere = adornaverunt (końcówka -ere w 3. os. l. mn. czasu przeszłego).',
  q: [
    { q: 'Rozwiń <b>EP̃VS</b>:', o: ['epus', 'episcopus', 'epistulas', 'eius'], a: 1, e: 'Tylda oznacza opuszczone litery w środku słowa (kontrakcja).' },
    { q: 'Co oznacza <b>D.O.M.</b>?', o: ['Dom', 'Deo Optimo Maximo – Bogu Najlepszemu Największemu', 'Domini', 'data obitus mortis'], a: 1, e: 'Nagłówek tablic fundacyjnych i nagrobnych.' },
    { q: 'Czy tablica pochodzi z 1320 r.?', o: ['tak, to data wykucia', 'nie – to późniejsza tablica, która upamiętnia odbudowę z 1320 r.'], a: 1, e: 'Jak w Panteonie: data w napisie nie musi być datą napisu.' },
    { q: '<b>adornavere</b> to:', o: ['bezokolicznik', 'perfectum, 3. os. l. mn. = adornaverunt („ozdobili”)', 'tryb rozkazujący', 'imiesłów'], a: 1, e: 'Końcówka <i>-ere</i> zamiast <i>-erunt</i> – częsta w tekstach podniosłych.' }
  ]
},
{
  id: 'i18', cat: 'pomnik', title: 'Epitafium Bartolomea Berrecciego', place: 'Kraków, kościół Bożego Ciała', date: 'tablica późniejsza; Berrecci zm. 1537',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Epiafium_B._BerrecciegoObraz_039.jpg/1280px-Epiafium_B._BerrecciegoObraz_039.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Epiafium_B._BerrecciegoObraz_039.jpg', credit: 'Miezian, CC BY-SA 3.0',
  read: 'D. O. M.\nMAGISTRO BARTHOLOMAEO BERECCIO FLORENTINO\nSIGISMUNDI REGIS LAPICIDAE\nQUOD SACELLO REGIO TRANSALPINAS INTER AEDES\nLONGE VENUSTISSIMO ALIISQUE MONUMENTIS\nPATRIAM NOBIS PRAECLARE ORNAVERIT\nPOLONI\nMARMOREAM HANC TABULAM PIAE MEMORIAE\nGRATIQUE ANIMI PIGNUS TRIA POST SAECULA\nOBLIVIONIS IN TEMPLO UBI TESTAMENTO SEPELIRI\nJUSSIT LUBENTES POSUERUNT.\nNATUS IN VALLE DE SIEVE, POLONIAM ACCESSUS 1517\nMORTUS CRACOVIAE 1537',
  exp: 'D(eo) O(ptimo) M(aximo). Magistro Bartholomaeo Bereccio Florentino, Sigismundi regis lapicidae, quod sacello regio, transalpinas inter aedes longe venustissimo, aliisque monumentis patriam nobis praeclare ornaverit, Poloni marmoream hanc tabulam piae memoriae gratique animi pignus tria post saecula oblivionis in templo, ubi testamento sepeliri iussit, lubentes posuerunt.',
  tr: 'Bogu Najlepszemu Największemu. Mistrzowi Bartłomiejowi Berrecciemu z Florencji, kamieniarzowi króla Zygmunta, za to, że kaplicą królewską – zdecydowanie najpiękniejszą budowlą po tej stronie Alp – i innymi dziełami wspaniale ozdobił naszą ojczyznę, Polacy po trzech wiekach zapomnienia chętnie umieścili tę marmurową tablicę jako zadatek pobożnej pamięci i wdzięczności, w kościele, w którym w testamencie kazał się pochować. Urodzony w dolinie Sieve, przybył do Polski w 1517 r., zmarł w Krakowie w 1537 r.',
  notes: 'Twórca Kaplicy Zygmuntowskiej (sacellum regium). Klasyczny układ nowożytnego epitafium: D.O.M., adresat w celowniku (MAGISTRO… LAPICIDAE), uzasadnienie (QUOD + coniunctivus ornaverit – przyczyna podana jako opinia fundatorów), podmiot (POLONI) i orzeczenie na końcu (POSUERUNT). Tablica pochodzi z XIX w. („po trzech wiekach zapomnienia”). Uwaga: w ostatnich wierszach zapisano ACCESSUS, choć poprawnie gramatycznie byłoby ACCESSIT – nawet napisy w kamieniu zawierają usterki.',
  q: [
    { q: 'Kto ufundował tablicę?', o: ['król Zygmunt', 'sam Berrecci', 'Polacy (POLONI)', 'Florentczycy'], a: 2, e: 'Podmiot stoi samotnie w osobnym wierszu: POLONI… POSUERUNT.' },
    { q: 'Czym jest <b>sacellum regium</b>?', o: ['skarbiec królewski', 'kaplica królewska (Zygmuntowska)', 'królewski sakwojaż', 'pałac'], a: 1, e: '<i>sacellum</i> – kaplica.' },
    { q: 'Dlaczego <b>ornaverit</b> stoi w trybie łączącym?', o: ['to błąd', 'quod + coniunctivus: przyczyna przedstawiona jako przekonanie fundatorów', 'to czas przyszły', 'bo to rozkaz'], a: 1, e: 'Tzw. quod z coniunctivem przyczyny subiektywnej.' }
  ]
},
{
  id: 'i19', cat: 'obraz', title: 'Hans Holbein, Kupiec Georg Gisze', place: 'Berlin, Gemäldegalerie', date: '1532',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Hans_Holbein_der_J%C3%BCngere_-_Der_Kaufmann_Georg_Gisze_-_Google_Art_Project.jpg/1280px-Hans_Holbein_der_J%C3%BCngere_-_Der_Kaufmann_Georg_Gisze_-_Google_Art_Project.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Hans_Holbein_der_J%C3%BCngere_-_Der_Kaufmann_Georg_Gisze_-_Google_Art_Project.jpg', credit: 'domena publiczna',
  read: 'ΔΙΣΤΙΧΟΝ ĩ imaginē Georgij Gysenij\nIsta refert vultus, qua cernis, Imago Georgi\nSic oculos vivos, sic habet ille genas.\nAnno aetatis suae XXXIIII\nAnno dom. 1532',
  exp: 'Distichon in imaginem Georgii Gysenii. Ista refert vultus, quam cernis, imago Georgi; sic oculos vivos, sic habet ille genas. Anno aetatis suae XXXIIII. Anno Dom(ini) 1532.',
  tr: 'Dwuwiersz na portret Jerzego Gisze. Ten obraz, który widzisz, oddaje rysy Jerzego: takie ma on żywe oczy, takie policzki. W 34. roku życia. Roku Pańskiego 1532.',
  notes: 'Gisze był kupcem gdańskim działającym w londyńskim Stalhofie. Kartka przypięta do ściany nad jego głową to ćwiczenie z humanistycznej kursywy: tytuł greckimi literami (ΔΙΣΤΙΧΟΝ), kreski skrótu (ĩ = in, imaginē = imaginem), końcówka -ij zamiast -ii. Wersy to dystych elegijny (heksametr + pentametr). Imię zlatynizowano: Gysenius. Formuła anno aetatis suae jest ta sama, co u Dürera.',
  q: [
    { q: 'Jak rozwinąć <b>ĩ imaginē</b>?', o: ['in imaginem', 'imagine', 'in imaginibus', 'ita imago'], a: 0, e: 'Kreska nad samogłoską zastępuje m lub n.' },
    { q: 'Ile lat miał Gisze według napisu?', o: ['32', '34 (34. rok życia)', '1532', '43'], a: 1, e: 'XXXIIII = 34; zapis IIII zamiast IV jest częsty.' },
    { q: 'Co oznacza słowo zapisane greckimi literami?', o: ['dwuwiersz (distichon)', 'portret', 'kupiec', 'Gdańsk'], a: 0, e: 'Humanistyczna maniera: greka jako ozdoba erudycji.' }
  ]
},
{
  id: 'i20', cat: 'obraz', title: 'Albrecht Dürer, Melencolia I', place: 'miedzioryt', date: '1514',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Albrecht_D%C3%BCrer_-_Melencolia_I_-_Google_Art_Project_%28427760%29.jpg/1280px-Albrecht_D%C3%BCrer_-_Melencolia_I_-_Google_Art_Project_%28427760%29.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_Melencolia_I_-_Google_Art_Project_(427760).jpg', credit: 'domena publiczna',
  read: 'MELENCOLIA·I\n(na kwadracie magicznym: 15 14 – rok 1514)\n(monogram: AD)',
  exp: 'Melencolia I',
  tr: 'Melancholia I.',
  notes: 'Krótki, ale pouczający napis: pisownia MELENCOLIA zamiast klasycznej melancholia pokazuje, jak niestabilna była ortografia słów greckiego pochodzenia (ch/c, a/e). Datę ukryto w dolnym wierszu kwadratu magicznego (15 14), a monogram AD to podpis Dürera. Znaczenie cyfry I pozostaje sporne (pierwszy rodzaj melancholii według Agryppy z Nettesheimu?).',
  q: [
    { q: 'Jaka jest klasyczna pisownia słowa <b>MELENCOLIA</b>?', o: ['melancholia', 'melencholia', 'melankolia', 'malacolia'], a: 0, e: 'Z greckiego μελαγχολία; wahania ch/c i e/a są częste w źródłach.' },
    { q: 'Gdzie Dürer ukrył datę 1514?', o: ['na skrzydle anioła', 'w dolnym wierszu kwadratu magicznego', 'na dzwonie', 'nigdzie'], a: 1, e: 'Dwie środkowe liczby dolnego wiersza: 15 i 14.' }
  ]
},
{
  id: 'i21', cat: 'rekopis', title: 'Księga z Kells – strona Chi-Rho', place: 'Dublin, Trinity College', date: 'ok. 800',
  img: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/KellsFol034rChiRhoMonogram.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:KellsFol034rChiRhoMonogram.jpg', credit: 'domena publiczna',
  read: 'XPI h generatio',
  exp: 'Christi autem generatio (Mt 1,18)',
  tr: 'A z narodzeniem Chrystusa [było tak]…',
  notes: 'Cała strona to trzy słowa. XPI to tzw. nomen sacrum: greckie litery chi (X) i rho (P) + łacińska końcówka -i = Christi. Znak h w piśmie insularnym to skrót słowa autem. Takie skróty imion świętych (XPS, IHS, DNS, SCS) spotkasz potem w każdym średniowiecznym dokumencie – zobacz moduł Skróty.',
  q: [
    { q: 'Co oznacza <b>XPI</b>?', o: ['liczbę 91', 'Christi – Chrystusa (greckie chi i rho)', 'papieża', 'ekspozyturę'], a: 1, e: 'Nomen sacrum – skrót imienia świętego.' },
    { q: 'Znak <b>h</b> w piśmie insularnym oznacza tu:', o: ['hoc', 'autem', 'hic', 'habet'], a: 1, e: 'Typowy skrót wysp brytyjskich.' }
  ]
},
{
  id: 'i22', cat: 'rekopis', title: 'Księga henrykowska – pierwsze zdanie po polsku', place: 'Wrocław, Archiwum Archidiecezjalne', date: 'ok. 1270',
  img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Book_of_Henryk%C3%B3w.PNG',
  page: 'https://commons.wikimedia.org/wiki/File:Book_of_Henryk%C3%B3w.PNG', credit: 'domena publiczna',
  read: '… uxor stab(at) sepissime ad molã molendo …\n… [vi]r suus idem .b. compassus dixit: Sine ut ego ĩ molam …\n… [ho]c ē ĩ polonico: Day ut ia pobrusa a ti poziwai. Sic ille …',
  exp: '… uxor stabat saepissime ad molam molendo. … Vir suus idem B(oguchwalus) compassus dixit: Sine, ut ego etiam molam, hoc est in polonico: Day ut ia pobrusa, a ti poziwai.',
  tr: '…żona bardzo często stała przy żarnach i mełła. … Jej mąż, tenże Boguchwał, ulitowawszy się, powiedział: „Pozwól, niech i ja pomielę”, to jest po polsku: Daj, ać ja pobruszę, a ty poczywaj [= odpocznij].',
  notes: 'Fragment kroniki klasztoru cystersów w Henrykowie. Czerwonym atramentem wyróżniono najstarsze znane zdanie zapisane po polsku. Na zdjęciu widać typowe skróty gotyckie: kreska nad molã (= molam), ĩ = in lub etiam, ē = est; .b. to inicjał imienia Boguchwała. Zwróć uwagę na suus w znaczeniu „jej” (łac. średniowieczna) i na łacińską glosę hoc est in polonico, która zapowiada polski cytat.',
  q: [
    { q: 'Jak rozwinąć <b>molã</b>?', o: ['mola', 'molam', 'molendo', 'molis'], a: 1, e: 'Kreska nad samogłoską = opuszczone m lub n.' },
    { q: 'Co znaczy <b>hoc est in polonico</b>?', o: ['to jest w Polsce', 'to jest po polsku', 'to jest polskie prawo', 'to Polak'], a: 1, e: 'Formuła wprowadzająca cytat w języku narodowym.' },
    { q: 'W zdaniu <i>vir suus</i> słowo <b>suus</b> znaczy:', o: ['swój własny (podmiotu)', '„jej” – mąż kobiety, o której mowa', 'jego syn', 'jakiś'], a: 1, e: 'W łacinie średniowiecznej <i>suus</i> często zastępuje <i>eius</i>.' }
  ]
},
{
  id: 'i23', cat: 'rekopis', title: 'Magna Carta (1215)', place: 'Londyn, British Library', date: '15 VI 1215',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/1280px-Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Magna_Carta_(British_Library_Cotton_MS_Augustus_II.106).jpg', credit: 'domena publiczna',
  read: '(początek) Johannes Dei gratia rex Anglie, dominus Hibernie, dux Normannie et Aquitannie et comes Andegavie, archiepiscopis, episcopis, abbatibus, comitibus, baronibus, justiciariis, forestariis, vicecomitibus, prepositis, ministris et omnibus ballivis et fidelibus suis salutem.',
  exp: 'Iohannes Dei gratia rex Angliae, dominus Hiberniae, dux Normanniae et Aquitaniae et comes Andegaviae, archiepiscopis, episcopis, abbatibus, comitibus, baronibus, iusticiariis, forestariis, vicecomitibus, praepositis, ministris et omnibus ballivis et fidelibus suis salutem.',
  tr: 'Jan, z łaski Bożej król Anglii, pan Irlandii, książę Normandii i Akwitanii oraz hrabia Andegawenii, arcybiskupom, biskupom, opatom, hrabiom, baronom, sędziom, leśniczym, szeryfom, prepozytom, urzędnikom i wszystkim komornikom i swoim wiernym – pozdrowienie.',
  notes: 'Otwórz oryginał w pełnej rozdzielczości: to gęsta minuskuła kancelaryjna z mnóstwem skrótów. Pierwsze zdanie to podręcznikowy protokół dokumentu: intitulatio (Johannes… comes Andegavie), inscriptio (archiepiscopis… fidelibus suis – długa lista w celowniku) i salutatio (salutem). Porównaj z polskimi dokumentami w Czytance: ta sama struktura w całej łacińskiej Europie. Uwaga na comes – w Anglii „hrabia” (earl), w Polsce piastowskiej „komes, możny”.',
  q: [
    { q: 'W jakim przypadku stoi lista adresatów (archiepiscopis, episcopis…)?', o: ['mianownik', 'celownik – „do kogo?”', 'biernik', 'dopełniacz'], a: 1, e: 'Inscriptio – adresaci w celowniku.' },
    { q: 'Która część dokumentu kończy się słowem <b>salutem</b>?', o: ['arenga', 'salutatio (pozdrowienie)', 'sanctio', 'datatio'], a: 1, e: 'Protokół: intitulatio → inscriptio → salutatio.' }
  ]
},
{
  id: 'i24', cat: 'druk', title: 'Biblia Gutenberga – list św. Hieronima', place: 'Moguncja', date: 'ok. 1455',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg/1280px-Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg',
  page: 'https://commons.wikimedia.org/wiki/File:Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg', credit: 'domena publiczna',
  read: '(rubryka) Incipit epistola sancti iheronimi ad paulinum presbiterum de omnibus divine historie libris. capitulum primum.\n(tekst) Frater ambrosius tua michi munuscula perferens…',
  exp: 'Incipit epistola sancti Hieronymi ad Paulinum presbyterum de omnibus divinae historiae libris. Capitulum primum. Frater Ambrosius tua mihi munuscula perferens…',
  tr: 'Zaczyna się list świętego Hieronima do kapłana Paulina o wszystkich księgach historii świętej. Rozdział pierwszy. Brat Ambroży, przynosząc mi twoje podarki…',
  notes: 'Pierwsza drukowana Biblia naśladuje rękopis: tekst czarnym gotykiem (textura), rubryka czerwienią, iluminowany inicjał F. Drukarz zachował rękopiśmienne skróty i pisownię średniowieczną: iheronimi (= Hieronymi), presbiterum (y → i), divine historie (e = ae), michi (= mihi). Słowo incipit („zaczyna się”) i explicit („kończy się”) otwiera i zamyka teksty w kodeksach.',
  q: [
    { q: 'Co znaczy <b>incipit</b>?', o: ['koniec', 'zaczyna się', 'rozdział', 'list'], a: 1, e: 'Od <i>incipere</i>. Przeciwieństwo: <i>explicit</i>.' },
    { q: 'Klasyczna postać <b>michi</b> to:', o: ['mihi', 'Michael', 'mici', 'mi'], a: 0, e: 'Średniowieczne ch zamiast h.' },
    { q: 'Dlaczego część tekstu jest czerwona?', o: ['bo to błąd drukarza', 'to rubryka – tytuł wyróżniony czerwienią (łac. ruber)', 'bo to cytat z Ewangelii', 'bo to dopisek późniejszy'], a: 1, e: 'Stąd słowo „rubryka”.' }
  ]
},
{
  id: 'i25', cat: 'druk', title: 'Kronika norymberska – widok Krakowa', place: 'Norymberga, H. Schedel', date: '1493',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nuremberg_chronicles_-_CRACOVIA.png/1280px-Nuremberg_chronicles_-_CRACOVIA.png',
  page: 'https://commons.wikimedia.org/wiki/File:Nuremberg_chronicles_-_CRACOVIA.png', credit: 'domena publiczna (M. Wolgemut, W. Pleydenwurff)',
  read: 'CRACOVIA · CASMIRVS · CLEPARDIA',
  exp: 'Cracovia · Casimirus (= Casimiria) · Clepardia',
  tr: 'Kraków · Kazimierz · Kleparz',
  notes: 'Najstarszy drukowany widok Krakowa. Podpisy to łacińskie nazwy trzech miast tworzących zespół krakowski: Cracovia, Casimiria (tu zapis CASMIRVS – od imienia założyciela, Kazimierza Wielkiego) i Clepardia (Kleparz). Sprawdź w module Nazwy i miary, jak odmieniają się nazwy miejscowe i jakie tworzą przymiotniki (Cracoviensis, Casimiriensis, Clepardiensis).',
  q: [
    { q: 'Co oznacza <b>CLEPARDIA</b>?', o: ['Kleparz', 'Kazimierz', 'Wawel', 'Podgórze'], a: 0, e: 'Miasto lokowane w 1366 r. na północ od Krakowa.' },
    { q: 'Jak brzmi przymiotnik od <b>Cracovia</b>?', o: ['Cracovius', 'Cracoviensis', 'Cracovianus', 'Cracovicus'], a: 1, e: 'Sufiks <i>-ensis</i>: Cracoviensis, Gnesnensis, Posnaniensis.' }
  ]
}
];

LAT.IMG_CATS = { arch: 'Architektura', pomnik: 'Pomniki i epitafia', obraz: 'Malarstwo i grafika', rekopis: 'Rękopisy i dokumenty', druk: 'Druki' };

/* Skróty epigraficzne i formuły inskrypcyjne */
LAT.EPIGRAPHY = [
  ['D M', 'D(is) M(anibus)', 'Bogom Manom (początek rzymskiego napisu nagrobnego)'],
  ['H S E', 'h(ic) s(itus/-a) e(st)', 'tu leży (pochowany/-a)'],
  ['S T T L', 's(it) t(ibi) t(erra) l(evis)', 'niech ci ziemia lekką będzie'],
  ['F', 'f(ilius)', 'syn (po imieniu ojca w gen.: L·F – syn Lucjusza)'],
  ['COS', 'co(n)s(ul)', 'konsul'],
  ['IMP', 'imp(erator)', 'cesarz, wódz'],
  ['P M / PONT MAX', 'p(ontifex) m(aximus)', 'najwyższy kapłan; w nowożytności: papież'],
  ['TR POT', 'tr(ibunicia) pot(estate)', 'z władzą trybuna (liczba = rok panowania cesarza)'],
  ['AVG', 'Aug(ustus)', 'August (tytuł cesarski)'],
  ['S P Q R', 's(enatus) p(opulus)q(ue) R(omanus)', 'senat i lud rzymski'],
  ['V S L M', 'v(otum) s(olvit) l(ibens) m(erito)', 'spełnił ślub chętnie i zasłużenie (napisy wotywne)'],
  ['B M', 'b(ene) m(erenti)', 'dobrze zasłużonemu'],
  ['F C', 'f(aciendum) c(uravit)', 'kazał wykonać'],
  ['D O M', 'D(eo) O(ptimo) M(aximo)', 'Bogu Najlepszemu Największemu – nagłówek nowożytnych epitafiów i tablic fundacyjnych w Polsce'],
  ['A D', 'a(nno) D(omini)', 'roku Pańskiego'],
  ['I N R I', 'I(esus) N(azarenus) R(ex) I(udaeorum)', 'Jezus Nazareński Król Żydowski'],
  ['IHS', 'IHS(US)', 'Jezus (z greki: ΙΗΣΟΥΣ)'],
  ['R I P', 'r(equiescat) i(n) p(ace)', 'niech spoczywa w pokoju'],
  ['P P', 'p(osuit) / p(ater) p(atriae)', 'położył (ufundował) / ojciec ojczyzny'],
  ['OB', 'ob(iit)', 'zmarł'],
  ['AET', 'aet(atis)', 'w wieku (aetatis suae anno…)'],
  ['MDCXII', '1612', 'liczby rzymskie; w epitafiach często chronogramy']
];
