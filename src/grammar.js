/* ============================================================
   GRAMATYKA RECEPCYJNA
   Kolejność wg częstości w źródłach, nie wg tradycyjnego podręcznika.
   Typy ćwiczeń:
     mcq  – pytanie wyboru  {q, o:[], a, e}
     find – zaznacz w zdaniu {q, s:'… [[cel]] …', e}   (słowa w [[ ]] to odpowiedź)
   drill – trening rozpoznawania form: {classes:[…], filter:'…', label}
   ============================================================ */
LAT.LESSONS = [
{
  id: 'l0', title: 'Pierwsze kroki: łacina, którą już znasz', short: 'Bez tabel i terminów: słowa znane z polszczyzny i pierwsza formuła', gentle: true,
  body: `
<p class="lead-in">Zacznijmy spokojnie. W tej lekcji nie ma tabel odmiany ani trudnych terminów. Zobaczysz, że <b>sporo łaciny już znasz</b>: z polszczyzny, z kościoła, z napisów na budynkach.</p>
<h4>1. Słowa, które rozpoznasz od razu</h4>
<div class="wordgrid">
<div><i class="la">rex</i><span>król</span><small>por. „regalia”, „regent”</small></div>
<div><i class="la">dominus</i><span>pan</span><small>por. „dominować”</small></div>
<div><i class="la">terra</i><span>ziemia</span><small>por. „terytorium”, „teren”</small></div>
<div><i class="la">annus</i><span>rok</span><small>por. „annały”, „anno Domini”</small></div>
<div><i class="la">nomen</i><span>imię, nazwa</span><small>por. „nominacja”</small></div>
<div><i class="la">ecclesia</i><span>kościół</span><small>por. „eklezjalny”</small></div>
<div><i class="la">sigillum</i><span>pieczęć</span><small>por. „sygnet”</small></div>
<div><i class="la">testis</i><span>świadek</span><small>por. „atest”, „protest”</small></div>
<div><i class="la">civitas</i><span>gród, miasto</span><small>por. „cywilizacja”</small></div>
<div class="trap"><i class="la">villa</i><span>wieś!</span><small>nie „willa” – pierwsza pułapka</small></div>
</div>
<h4>2. Twoja pierwsza formuła</h4>
<p>Tak zaczynają się setki średniowiecznych dokumentów:</p>
<div class="formula"><span><i class="la">In</i><small>w</small></span><span><i class="la">nomine</i><small>imię</small></span><span><i class="la">Domini</i><small>Pana</small></span><span><i class="la">amen</i><small>amen</small></span></div>
<p>Razem: <b>„W imię Pańskie, amen”</b>. Gratulacje – właśnie przeczytałeś inwokację, pierwszą część dokumentu.</p>
<h4>3. Końcówki działają jak w polskim</h4>
<p>Po polsku mówimy „wieś – wsi – wsią”. Łacina też zmienia końcówki: <i class="la">villa – villae – villam</i>. To końcówka, a nie kolejność słów, mówi, kto co robi. Dlatego <i class="la">villam dat</i> i <i class="la">dat villam</i> znaczą to samo: „daje wieś”.</p>
<h4>4. Jak nazywamy formy (bez wkuwania)</h4>
<p>Gramatyki i słowniki łaciny używają łacińskich nazw i skrótów. <b>Nie musisz ich zapamiętywać.</b> Każdy termin w aplikacji jest podkreślony kropkami: dotknij go, a zobaczysz polskie wyjaśnienie. Pełny słowniczek otwiera przycisk ze znakiem zapytania na górze ekranu.</p>
<table class="tbl">
<tr><th>skrót</th><th>nazwa łacińska</th><th>po polsku</th></tr>
<tr><td>nom.</td><td>nominativus</td><td>mianownik (kto? co?)</td></tr>
<tr><td>gen.</td><td>genetivus</td><td>dopełniacz (kogo? czego?)</td></tr>
<tr><td>dat.</td><td>dativus</td><td>celownik (komu? czemu?)</td></tr>
<tr><td>acc.</td><td>accusativus</td><td>biernik (kogo? co?)</td></tr>
<tr><td>abl.</td><td>ablativus</td><td>„ablatyw”: narzędnik i miejscownik w jednym (kim? czym? gdzie? kiedy?)</td></tr>
<tr><td>lp. / lm.</td><td>singularis / pluralis</td><td>liczba pojedyncza / mnoga</td></tr>
</table>
<p class="tip">W ćwiczeniach etykiety form pokazujemy domyślnie po polsku („dopełniacz, l. mn.”), a łaciński skrót drobnym drukiem obok. Możesz to zmienić w ustawieniach.</p>`,
  ex: [
    { t: 'mcq', q: 'Co znaczy <i class="la">rex</i>?', o: ['pan', 'król', 'prawo', 'rzeka'], a: 1, e: 'Por. „regalia”, „regent”.' },
    { t: 'mcq', q: 'Co w średniowiecznym dokumencie oznacza <i class="la">villa</i>?', o: ['willę, rezydencję', 'wieś', 'miasto', 'zamek'], a: 1, e: 'Klasyczna pułapka tłumacza: <i>villa</i> to wieś.' },
    { t: 'find', q: 'Zaznacz słowo, które znaczy „Pana”.', s: 'In nomine [[Domini]] amen.', e: '<i>Domini</i> – „Pana”. Forma odpowiada na pytanie „czyje imię?”.' },
    { t: 'mcq', q: '<i class="la">In nomine Domini amen</i> to:', o: ['W imię Pańskie, amen', 'Imię Pana jest amen', 'W domu Pana, amen', 'Pan nazywa się Amen'], a: 0, e: 'Inwokacja – wezwanie imienia Bożego na początku dokumentu.' },
    { t: 'mcq', q: 'Jak nazywa się po łacinie polski mianownik?', o: ['ablativus', 'genetivus', 'nominativus', 'dativus'], a: 2, e: '<i>nominativus</i> – od <i>nomen</i> (imię, nazwa): przypadek, który „nazywa”.' },
    { t: 'mcq', q: 'Skrót <b>lm.</b> oznacza:', o: ['liczbę mnogą', 'łacinę średniowieczną', 'lekcję mistrza', 'list miejski'], a: 0, e: 'lp. – liczba pojedyncza, lm. – liczba mnoga.' },
    { t: 'mcq', q: 'Dlaczego <i class="la">villam dat</i> i <i class="la">dat villam</i> znaczą to samo?', o: ['bo łacina nie ma gramatyki', 'bo o funkcji słowa decyduje końcówka, a nie kolejność – jak w polskim', 'bo to błąd kopisty', 'bo czasownik zawsze stoi pierwszy'], a: 1, e: 'Dokładnie tak jak „Piotr widzi Pawła” i „Pawła widzi Piotr”.' }
  ]
},
{
  id: 'l1', title: 'Jak czytać zdanie łacińskie', short: 'Końcówki zamiast szyku, orzeczenie na końcu, podmiot ukryty',
  body: `
<p class="lead-in">Znasz już pierwszą formułę i wiesz, że końcówki działają jak w polskim. Teraz trzy proste nawyki, dzięki którym długie zdania przestaną straszyć.</p>
<p>Łacina jest językiem <b>fleksyjnym</b>, tak jak polski. Funkcję słowa w zdaniu wskazuje końcówka, a nie miejsce w szyku. To dobra wiadomość dla polskiego czytelnika: <i class="la">villam dat</i> i <i class="la">dat villam</i> znaczą to samo („daje wieś”).</p>
<h4>Trzy nawyki, które oszczędzają najwięcej czasu</h4>
<ol>
<li><b>Najpierw znajdź orzeczenie.</b> W prozie dokumentowej i kronikarskiej czasownik osobowy stoi zwykle na końcu zdania lub członu: <i class="la">…ecclesie sancti Adalberti <u>damus</u>.</i> Końcówka czasownika powie ci od razu, kto działa: <i class="la">-mus</i> = „my”, <i class="la">-t</i> = „on/ona”, <i class="la">-nt</i> = „oni”.</li>
<li><b>Podmiot bywa ukryty w końcówce.</b> <i class="la">Damus</i> = „(my) dajemy”. W dokumentach wystawca mówi o sobie w liczbie mnogiej (<i>pluralis maiestatis</i>): <i class="la">Nos Boleslaus… damus</i> – „My, Bolesław… dajemy”.</li>
<li><b>Grupuj słowa według zgodności końcówek</b>, nie według sąsiedztwa: <i class="la">presentes litteras</i> (acc. lm. – „niniejszy dokument”) może być rozdzielone innymi słowami.</li>
</ol>
<h4>Plan pracy ze zdaniem</h4>
<p>1) orzeczenie → 2) podmiot (mianownik lub końcówka czasownika) → 3) dopełnienie (biernik, celownik) → 4) okoliczniki (ablativus, wyrażenia przyimkowe) → 5) zdania podrzędne (zaczynają się od <i class="la">quod, ut, qui, cum, si…</i>).</p>
<h4>Pisownia średniowieczna – pierwsze spotkanie</h4>
<p>W tej aplikacji teksty średniowieczne mają pisownię źródeł. Najczęstsze różnice: <b>e zamiast ae</b> (<i class="la">ecclesie</i> = <i class="la">ecclesiae</i>, <i class="la">Polonie</i> = <i class="la">Poloniae</i>), <b>c zamiast t</b> przed samogłoską (<i class="la">gracia</i> = <i class="la">gratia</i>), <b>michi, nichil</b> zamiast <i class="la">mihi, nihil</i>. Analizator form rozpoznaje obie pisownie.</p>`,
  ex: [
    { t: 'find', q: 'Zaznacz orzeczenie (czasownik osobowy).', s: 'Nos Boleslaus villam nostram ecclesie [[damus]].', e: '<i>damus</i> – 1 os. lm. czasu teraźniejszego: „dajemy”.' },
    { t: 'find', q: 'Zaznacz oba orzeczenia.', s: 'Dux convivium grande [[preparavit]] et multos amicos [[invitavit]].', e: '<i>preparavit, invitavit</i> – perfectum, 3 os. lp. („przygotował”, „zaprosił”).' },
    { t: 'mcq', q: 'Kto jest podmiotem w zdaniu <i class="la">Villam ecclesie conferimus</i>?', o: ['wieś (villam)', 'kościół (ecclesie)', '„my” – ukryty w końcówce -mus', 'nie da się ustalić'], a: 2, e: 'Końcówka <i>-mus</i> wskazuje 1 os. lm. <i>Villam</i> to biernik (dopełnienie), <i>ecclesie</i> – celownik (komu?).' },
    { t: 'mcq', q: 'Jak w pisowni klasycznej brzmi forma <i class="la">ecclesie</i>?', o: ['ecclesia', 'ecclesiae', 'ecclesiis', 'ecclesiam'], a: 1, e: 'Średniowieczne <i>e</i> odpowiada klasycznemu <i>ae</i> (dyftong uległ monoftongizacji).' },
    { t: 'mcq', q: 'Które słowo jest najprawdopodobniej orzeczeniem: <i class="la">Comes Petrus villam suam monasterio donavit</i>?', o: ['Comes', 'villam', 'monasterio', 'donavit'], a: 3, e: '<i>donavit</i> – perfectum, 3 os. lp.: „podarował”.' }
  ]
},
{
  id: 'l2', title: 'Przypadki w dokumentach. Deklinacja I i II', short: 'Funkcje przypadków; terra, dominus, puer, privilegium',
  body: `
<p class="lead-in">Przypadki znasz z polskiego – zmieniają się tylko nazwy. Do czytania potrzebujesz pięciu (wołacz pomijamy, w dokumentach prawie nie występuje). Polskie odpowiedniki są pod każdą nazwą.</p>
<table class="tbl">
<tr><th>przypadek</th><th>pytanie</th><th>typowa funkcja w dokumencie</th><th>przykład</th></tr>
<tr><td><b>nominativus</b><br><small class="muted">mianownik</small></td><td>kto? co?</td><td>wystawca, podmiot</td><td><i class="la">Nos Boleslaus dux</i></td></tr>
<tr><td><b>genetivus</b><br><small class="muted">dopełniacz</small></td><td>kogo? czego?</td><td>przynależność, tytuł, data</td><td><i class="la">dux Polonie, anno Domini</i></td></tr>
<tr><td><b>dativus</b><br><small class="muted">celownik</small></td><td>komu? czemu?</td><td>odbiorca nadania</td><td><i class="la">ecclesie damus</i></td></tr>
<tr><td><b>accusativus</b><br><small class="muted">biernik</small></td><td>kogo? co?</td><td>przedmiot nadania; kierunek (<i class="la">in, ad</i>)</td><td><i class="la">villam damus</i></td></tr>
<tr><td><b>ablativus</b><br><small class="muted">ablatyw = narzędnik + miejscownik</small></td><td>kim? czym? gdzie? kiedy?</td><td>narzędzie, sposób, miejsce, czas; po <i class="la">cum, de, ex, in, pro, sine</i></td><td><i class="la">iure hereditario, in Cracovia, anno</i></td></tr>
</table>
<h4>Deklinacja I (rodzaj żeński, nieliczne męskie: papa, scriba)</h4>
<table class="tbl par"><tr><th></th><th>lp.</th><th>lm.</th></tr>
<tr><td>nom.</td><td>terr<b>a</b></td><td>terr<b>ae</b> (śr. -e)</td></tr>
<tr><td>gen.</td><td>terr<b>ae</b> (-e)</td><td>terr<b>arum</b></td></tr>
<tr><td>dat.</td><td>terr<b>ae</b> (-e)</td><td>terr<b>is</b></td></tr>
<tr><td>acc.</td><td>terr<b>am</b></td><td>terr<b>as</b></td></tr>
<tr><td>abl.</td><td>terr<b>a</b></td><td>terr<b>is</b></td></tr></table>
<p class="warn">Pułapka: forma <i class="la">ecclesie</i> może być gen. lp., dat. lp. albo nom. lm. Rozstrzyga kontekst. Przy nadaniu (<i class="la">ecclesie damus</i>) to zwykle celownik.</p>
<h4>Deklinacja II</h4>
<table class="tbl par"><tr><th></th><th>m. lp.</th><th>m. lm.</th><th>n. lp.</th><th>n. lm.</th></tr>
<tr><td>nom.</td><td>domin<b>us</b> / puer</td><td>domin<b>i</b></td><td>privilegi<b>um</b></td><td>privilegi<b>a</b></td></tr>
<tr><td>gen.</td><td>domin<b>i</b></td><td>domin<b>orum</b></td><td>privilegi<b>i</b></td><td>privilegi<b>orum</b></td></tr>
<tr><td>dat.</td><td>domin<b>o</b></td><td>domin<b>is</b></td><td>privilegi<b>o</b></td><td>privilegi<b>is</b></td></tr>
<tr><td>acc.</td><td>domin<b>um</b></td><td>domin<b>os</b></td><td>privilegi<b>um</b></td><td>privilegi<b>a</b></td></tr>
<tr><td>abl.</td><td>domin<b>o</b></td><td>domin<b>is</b></td><td>privilegi<b>o</b></td><td>privilegi<b>is</b></td></tr></table>
<p>Wyrazy typu <i class="la">puer, pueri</i> i <i class="la">ager, agri</i> mają w mianowniku <i>-er</i>; temat poznasz z dopełniacza. Neutrum ma zawsze <b>nom. = acc.</b>, a w lm. końcówkę <b>-a</b>.</p>
<p class="tip">W słowniku zawsze patrz na dopełniacz: <i class="la">terra, -ae</i> (I), <i class="la">dominus, -i</i> (II). Dopełniacz mówi, do której deklinacji należy słowo.</p>`,
  ex: [
    { t: 'mcq', q: 'W zdaniu <i class="la">Villam ecclesie sancti Adalberti damus</i> forma <i class="la">ecclesie</i> to:', o: ['nom. lm.', 'gen. lp.', 'dat. lp.', 'abl. lp.'], a: 2, e: 'Odbiorca nadania – komu dajemy? kościołowi. <i>sancti Adalberti</i> to dopełniacz (czyj kościół).' },
    { t: 'mcq', q: '<i class="la">anno Domini</i> – w jakim przypadku jest <i class="la">anno</i>?', o: ['nom.', 'dat.', 'abl. (czasu)', 'acc.'], a: 2, e: 'Ablativus temporis – „w roku”. <i>Domini</i> – gen. lp.: „Pańskiego”.' },
    { t: 'find', q: 'Zaznacz wszystkie dopełniacze (genetivus).', s: 'Nos Boleslaus, [[Dei]] gracia dux [[Polonie]], villam ecclesie [[sancti]] [[Adalberti]] damus.', e: '<i>Dei</i> (Boga), <i>Polonie</i> (Polski), <i>sancti Adalberti</i> (św. Wojciecha). <i>gracia</i> to ablativus, <i>ecclesie</i> – celownik.' },
    { t: 'mcq', q: 'Forma <i class="la">privilegia</i> to:', o: ['nom./acc. lm. n.', 'abl. lp.', 'nom. lp. f.', 'gen. lm.'], a: 0, e: 'Neutrum II deklinacji: lm. nom. = acc. = <i>-a</i>.' }
  ],
  drill: { classes: ['n1', 'n2', 'n2r', 'n2n'], filter: 'noun', label: 'Rzeczowniki dekl. I i II' }
},
{
  id: 'l3', title: 'Deklinacja III, IV i V', short: 'rex, civitas, nomen, civis; census; res, dies',
  body: `
<p>Deklinacja III jest najliczniejsza i najmniej regularna w mianowniku. <b>Temat zawsze odczytujesz z dopełniacza</b>: <i class="la">rex, reg-is</i>; <i class="la">civitas, civitat-is</i>; <i class="la">nomen, nomin-is</i>; <i class="la">heres, hered-is</i>.</p>
<table class="tbl par"><tr><th></th><th>m./f. lp.</th><th>m./f. lm.</th><th>n. lp.</th><th>n. lm.</th></tr>
<tr><td>nom.</td><td>rex, civitas</td><td>reg<b>es</b></td><td>nomen</td><td>nomin<b>a</b></td></tr>
<tr><td>gen.</td><td>reg<b>is</b></td><td>reg<b>um</b> / civi<b>ium</b></td><td>nomin<b>is</b></td><td>nomin<b>um</b></td></tr>
<tr><td>dat.</td><td>reg<b>i</b></td><td>reg<b>ibus</b></td><td>nomin<b>i</b></td><td>nomin<b>ibus</b></td></tr>
<tr><td>acc.</td><td>reg<b>em</b></td><td>reg<b>es</b></td><td>nomen</td><td>nomin<b>a</b></td></tr>
<tr><td>abl.</td><td>reg<b>e</b></td><td>reg<b>ibus</b></td><td>nomin<b>e</b></td><td>nomin<b>ibus</b></td></tr></table>
<p>Tematy na <b>-i</b> (<i class="la">civis, testis, pars, mons</i>; neutra <i class="la">mare</i>) mają gen. lm. <i>-ium</i>, a neutra także abl. lp. <i>-i</i> i nom./acc. lm. <i>-ia</i>.</p>
<h4>Deklinacja IV (-us, -us) i V (-es, -ei)</h4>
<table class="tbl par"><tr><th></th><th>IV lp.</th><th>IV lm.</th><th>V lp.</th><th>V lm.</th></tr>
<tr><td>nom.</td><td>cens<b>us</b></td><td>cens<b>us</b></td><td>r<b>es</b></td><td>r<b>es</b></td></tr>
<tr><td>gen.</td><td>cens<b>us</b></td><td>cens<b>uum</b></td><td>r<b>ei</b></td><td>r<b>erum</b></td></tr>
<tr><td>dat.</td><td>cens<b>ui</b></td><td>cens<b>ibus</b></td><td>r<b>ei</b></td><td>r<b>ebus</b></td></tr>
<tr><td>acc.</td><td>cens<b>um</b></td><td>cens<b>us</b></td><td>r<b>em</b></td><td>r<b>es</b></td></tr>
<tr><td>abl.</td><td>cens<b>u</b></td><td>cens<b>ibus</b></td><td>r<b>e</b></td><td>r<b>ebus</b></td></tr></table>
<p class="warn">Uwaga na <b>-us</b>: <i class="la">dominus</i> (II) i <i class="la">census</i> (IV) wyglądają tak samo w mianowniku. Rozróżnisz je dopiero po dopełniaczu w słowniku: <i class="la">domini</i> / <i class="la">census</i>.</p>
<p>Formuły z V deklinacją spotkasz w każdym dokumencie: <i class="la">in cuius <u>rei</u> testimonium</i> („na świadectwo której rzeczy”), <i class="la"><u>die</u> 16 mensis Ianuarii</i>, <i class="la">fide digni</i>.</p>`,
  ex: [
    { t: 'mcq', q: 'Jaki jest temat słowa <i class="la">heres, heredis</i> (dziedzic)?', o: ['her-', 'hered-', 'heres-', 'here-'], a: 1, e: 'Temat z dopełniacza: <i>hered-is</i> → <i>hered-</i>. Stąd <i>heredes, heredibus</i>.' },
    { t: 'mcq', q: '<i class="la">in cuius rei testimonium</i> – forma <i class="la">rei</i> to:', o: ['nom. lm.', 'gen. lp.', 'acc. lp.', 'abl. lp.'], a: 1, e: 'Gen. lp. od <i>res</i>: „na świadectwo której rzeczy” = „na dowód czego”.' },
    { t: 'mcq', q: 'Forma <i class="la">civitatem</i> to:', o: ['acc. lp.', 'gen. lm.', 'abl. lp.', 'nom. lp.'], a: 0, e: 'Dekl. III, acc. lp. <i>-em</i>.' },
    { t: 'find', q: 'Zaznacz wszystkie ablatywy.', s: 'Datum in [[Cracovia]] [[anno]] Domini, [[presentibus]] [[testibus]] multis.', e: '<i>in Cracovia</i> (miejsce), <i>anno</i> (czas), <i>presentibus testibus</i> (abl. abs.).' }
  ],
  drill: { classes: ['n3', 'n3i', 'n3n', 'n3ni', 'n4', 'n5'], filter: 'noun', label: 'Rzeczowniki dekl. III–V' }
},
{
  id: 'l4', title: 'Przymiotniki i zaimki dokumentowe', short: 'bonus, omnis, presens; is, hic, ipse, idem, qui; suus/eius',
  body: `
<p>Przymiotnik zgadza się z rzeczownikiem w <b>rodzaju, liczbie i przypadku</b>, ale nie musi mieć tej samej końcówki: <i class="la">omnibus pertinentiis</i>, <i class="la">perpetuo iure</i>, <i class="la">presentes litteras</i>.</p>
<p><b>Grupa I/II</b> (<i class="la">bonus, -a, -um; noster, -tra, -trum</i>) odmienia się jak <i class="la">dominus / terra / privilegium</i>. <b>Grupa III</b> (<i class="la">omnis, omne; presens, -ntis; fidelis, -e</i>) – jak tematy na -i: abl. lp. <i>-i</i>, gen. lm. <i>-ium</i>, n. lm. <i>-ia</i>.</p>
<h4>Zaimki, bez których nie przeczytasz dokumentu</h4>
<table class="tbl"><tr><th>zaimek</th><th>znaczenie</th><th>w dokumentach</th></tr>
<tr><td><i class="la">is, ea, id</i></td><td>on, ten</td><td><i class="la">eius</i> (jego), <i class="la">eorum</i> (ich)</td></tr>
<tr><td><i class="la">hic, haec, hoc</i></td><td>ten (tutaj)</td><td><i class="la">presentibus hiis testibus</i> (śr. <i>hiis</i> = <i>his</i>)</td></tr>
<tr><td><i class="la">ipse, -a, -um</i></td><td>sam; tenże</td><td><i class="la">ab ipsa Craccoa</i> – od tegoż Krakowa</td></tr>
<tr><td><i class="la">idem, eadem, idem</i></td><td>ten sam</td><td><i class="la">eidem Petro</i> – temuż Piotrowi</td></tr>
<tr><td><i class="la">qui, quae, quod</i></td><td>który</td><td><i class="la">in cuius rei</i> – zaimek względny łączący = „tej”</td></tr>
<tr><td><i class="la">predictus, prefatus, dictus</i></td><td>wspomniany</td><td>pełnią funkcję zaimka wskazującego</td></tr></table>
<h4>suus czy eius?</h4>
<p>W łacinie klasycznej <i class="la">suus</i> odnosi się do podmiotu („swój”), a <i class="la">eius</i> do kogoś innego („jego”). W łacinie średniowiecznej ta różnica się zaciera: <i class="la">suus</i> często znaczy po prostu „jego/jej”. Przy dokumentach prawnych zawsze sprawdź z kontekstu, <b>czyje</b> są wymienione dobra.</p>
<p class="tip">Zaimek względny na początku zdania (<i class="la">Quibus elapsis…, In cuius rei…, Qui statim…</i>) to tzw. <b>relativum coniunctivum</b>. Tłumacz go jak zaimek wskazujący: „Po upływie tych lat…”, „Na dowód tego…”, „Oni zaś natychmiast…”.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">cum omnibus pertinentiis suis</i> – w jakim przypadku są te słowa?', o: ['dat. lm.', 'abl. lm.', 'acc. lm.', 'nom. lm.'], a: 1, e: 'Po <i>cum</i> stoi ablativus; <i>-ibus / -iis / -is</i> to abl. lm.' },
    { t: 'mcq', q: '<i class="la">In cuius rei testimonium</i> najlepiej przetłumaczyć:', o: ['W czyjej rzeczy świadectwie', 'Na świadectwo tego / Na dowód czego', 'W rzeczy którego świadka', 'Któremu dano świadectwo'], a: 1, e: 'Zaimek względny łączący + utarta formuła korroboracyjna.' },
    { t: 'find', q: 'Zaznacz słowa, które zgadzają się z <i>litteras</i>.', s: 'Notum facimus universis [[presentes]] litteras inspecturis.', e: '<i>presentes litteras</i> – acc. lm. f. <i>universis… inspecturis</i> to osobna grupa (dat. lm.).' },
    { t: 'mcq', q: 'W łacinie średniowiecznej <i class="la">suus</i>:', o: ['zawsze odnosi się do podmiotu zdania', 'często znaczy po prostu „jego/jej”', 'oznacza wyłącznie „nasz”', 'jest zaimkiem pytającym'], a: 1, e: 'Klasyczne rozróżnienie <i>suus/eius</i> nie jest w tekstach średniowiecznych przestrzegane konsekwentnie.' }
  ],
  drill: { classes: ['a12', 'a12p', 'a3_1', 'a3_2', 'pron'], filter: 'adj', label: 'Przymiotniki i zaimki' }
},
{
  id: 'l5', title: 'Czasownik: system praesentis i esse', short: 'Osoby, czasy teraźniejszy, przeszły niedokonany, przyszły',
  body: `
<p>Czasownik podajemy w słowniku w czterech formach: <i class="la">do, dare, dedi, datum</i> (1 os. lp. praes., bezokolicznik, perfectum, supinum). Bezokolicznik wskazuje koniugację i temat czasu teraźniejszego.</p>
<table class="tbl"><tr><th>koniugacja</th><th>bezokol.</th><th>temat</th><th>przykład</th></tr>
<tr><td>I</td><td>-āre</td><td>do-/voca-</td><td>confirmare, donare</td></tr>
<tr><td>II</td><td>-ēre</td><td>habe-</td><td>habere, tenere, possidere</td></tr>
<tr><td>III</td><td>-ĕre</td><td>mitt-</td><td>mittere, statuere, dicere</td></tr>
<tr><td>III (-io)</td><td>-ĕre</td><td>faci-</td><td>facere, recipere</td></tr>
<tr><td>IV</td><td>-īre</td><td>audi-</td><td>audire, venire</td></tr></table>
<h4>Końcówki osobowe (strona czynna)</h4>
<p><b>-o/-m, -s, -t, -mus, -tis, -nt</b> – ja, ty, on, my, wy, oni.</p>
<table class="tbl par"><tr><th></th><th>praesens</th><th>imperfectum</th><th>futurum I (I–II)</th><th>futurum I (III–IV)</th></tr>
<tr><td>1 lp.</td><td>don<b>o</b></td><td>dona<b>bam</b></td><td>dona<b>bo</b></td><td>mitt<b>am</b></td></tr>
<tr><td>2 lp.</td><td>dona<b>s</b></td><td>dona<b>bas</b></td><td>dona<b>bis</b></td><td>mitt<b>es</b></td></tr>
<tr><td>3 lp.</td><td>dona<b>t</b></td><td>dona<b>bat</b></td><td>dona<b>bit</b></td><td>mitt<b>et</b></td></tr>
<tr><td>1 lm.</td><td>dona<b>mus</b></td><td>dona<b>bamus</b></td><td>dona<b>bimus</b></td><td>mitt<b>emus</b></td></tr>
<tr><td>2 lm.</td><td>dona<b>tis</b></td><td>dona<b>batis</b></td><td>dona<b>bitis</b></td><td>mitt<b>etis</b></td></tr>
<tr><td>3 lm.</td><td>dona<b>nt</b></td><td>dona<b>bant</b></td><td>dona<b>bunt</b></td><td>mitt<b>ent</b></td></tr></table>
<p class="warn">W koniugacji III–IV czas przyszły ma <b>-e-</b> (<i class="la">mittet</i> – pośle), a teraźniejszy <b>-i-</b> (<i class="la">mittit</i> – posyła). Jedna litera zmienia sens zapisu prawnego.</p>
<h4>esse – być</h4>
<p><i class="la">sum, es, est, sumus, estis, sunt</i> · impf. <i class="la">eram…</i> · fut. <i class="la">ero, eris, erit…</i> · perf. <i class="la">fui…</i>. W dokumentach częste: <i class="la">esto</i> („niech będzie”), <i class="la">fore</i> („że będzie”), <i class="la">sit</i> („niech będzie”: <i class="la">Notum sit omnibus</i>).</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">conferimus</i> to:', o: ['nadajemy', 'nadaliśmy', 'nadamy', 'niech nadają'], a: 0, e: 'praes. ind. act., 1 os. lm. (od nieregularnego <i>confero</i>).' },
    { t: 'mcq', q: 'Kmieć <i class="la">solvet unam marcam</i> – kiedy?', o: ['płaci teraz', 'zapłacił', 'zapłaci (w przyszłości)', 'płacił'], a: 2, e: '<i>solvet</i> – fut. I (koniug. III: <i>-et</i>). Teraźniejszy brzmiałby <i>solvit</i>.' },
    { t: 'mcq', q: 'Forma <i class="la">tenebitur</i> (<i>teneo</i>, strona bierna) znaczy:', o: ['trzymał', 'będzie zobowiązany', 'jest trzymany', 'trzymałby'], a: 1, e: 'fut. I pass., 3 os. lp.; <i>teneri</i> = być zobowiązanym.' }
  ],
  drill: { classes: ['v1', 'v2', 'v3', 'v3i', 'v4', 'sum'], filter: 'presAct', label: 'Czasowniki: praes., impf., fut. I (strona czynna)' }
},
{
  id: 'l6', title: 'Perfectum i strona bierna', short: 'dedi, contulimus, datum est; amatur, dicitur, vocatur',
  body: `
<p>Perfectum (czas przeszły dokonany) tworzy się od trzeciej formy słownikowej: <i class="la">dedi → ded-</i>, <i class="la">contuli → contul-</i>, <i class="la">feci → fec-</i>. To najczęstszy czas narracji kronikarskiej i <i>narratio</i> dokumentu.</p>
<table class="tbl par"><tr><th></th><th>perfectum</th><th>plusquamperf.</th><th>futurum II</th></tr>
<tr><td>1 lp.</td><td>ded<b>i</b></td><td>ded<b>eram</b></td><td>ded<b>ero</b></td></tr>
<tr><td>2 lp.</td><td>ded<b>isti</b></td><td>ded<b>eras</b></td><td>ded<b>eris</b></td></tr>
<tr><td>3 lp.</td><td>ded<b>it</b></td><td>ded<b>erat</b></td><td>ded<b>erit</b></td></tr>
<tr><td>1 lm.</td><td>ded<b>imus</b></td><td>ded<b>eramus</b></td><td>ded<b>erimus</b></td></tr>
<tr><td>2 lm.</td><td>ded<b>istis</b></td><td>ded<b>eratis</b></td><td>ded<b>eritis</b></td></tr>
<tr><td>3 lm.</td><td>ded<b>erunt</b> / -ere</td><td>ded<b>erant</b></td><td>ded<b>erint</b></td></tr></table>
<p><b>Futurum II</b> występuje w sankcjach i warunkach: <i class="la">Si quis… <u>presumpserit</u></i> – „jeśli ktoś się odważy” (dosł. „odważy się był”). Polszczyzna oddaje go zwykle czasem przyszłym.</p>
<h4>Strona bierna</h4>
<p>Końcówki: <b>-r, -ris, -tur, -mur, -mini, -ntur</b>. Najczęstsze formy w źródłach: <i class="la">vocatur, dicitur</i> („nazywa się”), <i class="la">leguntur</i> („czyta się”), <i class="la">tenetur</i> („jest zobowiązany”).</p>
<p>Czasy przeszłe strony biernej tworzy imiesłów + <i class="la">esse</i>: <i class="la">datum est</i> („zostało dane”), <i class="la">sunt repulsi</i> („zostali odepchnięci”), <i class="la">expositum est nobis</i> („przedstawiono nam”). W formule <i class="la">Datum in Cracovia</i> słowo <i>est</i> jest opuszczone.</p>
<p class="tip">Bezokolicznik bierny kończy się na <b>-ri</b> (I, II, IV) lub <b>-i</b> (III): <i class="la">roborari, communiri, mitti</i>. <i class="la">fecimus roborari</i> = „kazaliśmy umocnić”.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">contulimus</i> to:', o: ['nadajemy', 'nadaliśmy', 'nadamy', 'nadawaliśmy'], a: 1, e: 'perf. ind. act., 1 os. lm. od <i>confero, contuli</i>.' },
    { t: 'mcq', q: '<i class="la">locus, qui dicitur Russe</i> – <i class="la">dicitur</i> to:', o: ['mówi', 'nazywa się (jest nazywane)', 'powiedział', 'będzie mówić'], a: 1, e: 'praes. ind. pass., 3 os. lp.' },
    { t: 'mcq', q: '<i class="la">Si quis presumpserit</i> – forma czasownika:', o: ['perf. ind.', 'fut. II (lub coni. perf.)', 'praes. ind.', 'impf. coni.'], a: 1, e: 'W zdaniu warunkowym o przyszłości: futurum II, tłumaczymy „jeśliby ktoś się ważył”.' },
    { t: 'find', q: 'Zaznacz formy strony biernej.', s: 'Unam civitatem, que [[vocatur]] Schinesghe, beato Petro contulisse [[leguntur]].', e: '<i>vocatur</i> – „nazywa się”; <i>leguntur</i> – „czyta się (o nich)”. <i>contulisse</i> to bezokolicznik czynny.' }
  ],
  drill: { classes: ['v1', 'v2', 'v3', 'v3i', 'v4'], filter: 'perfPass', label: 'Perfectum, plusquamperf., fut. II i strona bierna' }
},
{
  id: 'l7', title: 'Coniunctivus w dokumentach', short: 'Notum sit, noverint, fiat; zdania z ut/ne',
  body: `
<p>Tryb łączący (<i>coniunctivus</i>) wyraża życzenie, rozkaz w 3 osobie, cel lub skutek. W dokumentach spotkasz go w formułach od pierwszych linijek.</p>
<table class="tbl"><tr><th>formuła</th><th>forma</th><th>przekład</th></tr>
<tr><td><i class="la">Notum <u>sit</u> omnibus</i></td><td>coni. praes. od <i>esse</i></td><td>Niech będzie wiadomo wszystkim</td></tr>
<tr><td><i class="la"><u>Noverint</u> universi</i></td><td>coni. perf. od <i>nosco</i> (novi = wiem)</td><td>Niech wiedzą wszyscy</td></tr>
<tr><td><i class="la"><u>Fiat</u></i></td><td>coni. praes. od <i>fio</i></td><td>Niech się stanie</td></tr>
<tr><td><i class="la">ut… <u>possideat</u></i></td><td>coni. praes.</td><td>aby posiadał</td></tr>
<tr><td><i class="la">ne… <u>labantur</u></i></td><td>coni. praes. (dep.)</td><td>aby nie przeminęły</td></tr></table>
<h4>Rozpoznawanie</h4>
<p><b>Praesens:</b> I koniug. <i>-e-</i> (<i class="la">confirmet</i>), pozostałe <i>-a-</i> (<i class="la">habeat, mittat, audiat</i>).<br><b>Imperfectum:</b> bezokolicznik + końcówka (<i class="la">daret, haberet, esset</i>).<br><b>Perfectum:</b> <i>-erim, -eris, -erit…</i> (<i class="la">noverint, dederit</i>).<br><b>Plusquamperf.:</b> <i>-issem…</i> (<i class="la">dedisset</i>).</p>
<p class="warn">Uwaga: w I koniugacji <i class="la">confirmet</i> to coni., ale w III <i class="la">mittet</i> to futurum ind. Zawsze najpierw ustal koniugację.</p>
<h4>ut i ne</h4>
<p><i class="la">ut</i> + coni. = „aby” (cel) lub „że” (skutek, po <i class="la">ita, sic, tam</i>); <i class="la">ne</i> + coni. = „aby nie”. <i class="la">ut</i> + indicativus = „jak” lub „gdy”.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">Noverint universi</i> to:', o: ['Poznali wszyscy', 'Niech wiedzą wszyscy', 'Poznają wszyscy', 'Wszyscy wiedzieli'], a: 1, e: 'coni. perf. od <i>nosco</i>; <i>novi</i> ma znaczenie teraźniejsze („wiem”), więc coni. = „niech wiedzą”.' },
    { t: 'mcq', q: '<i class="la">statuimus, ut nihil novi constitui debeat</i> – <i class="la">debeat</i> to:', o: ['ind. praes.', 'coni. praes. w zdaniu dopełnieniowym', 'fut. I', 'imperativus'], a: 1, e: 'Po <i>statuimus, ut</i> – coni.: „postanowiliśmy, że nie powinno się ustanawiać niczego nowego”.' },
    { t: 'find', q: 'Zaznacz czasowniki w trybie łączącym.', s: 'Notum [[sit]] omnibus, quod villam damus, ut ecclesia eam perpetuo [[possideat]].', e: '<i>sit</i> (niech będzie), <i>possideat</i> (aby posiadał). <i>damus</i> – indicativus.' }
  ],
  drill: { classes: ['v1', 'v2', 'v3', 'v3i', 'v4', 'sum'], filter: 'coni', label: 'Coniunctivus' }
},
{
  id: 'l8', title: 'Imiesłowy i participium coniunctum', short: 'inspecturis, existens, dictus, attendentes',
  body: `
<p>Imiesłowy są w dokumentach wszechobecne i to one najczęściej sprawiają, że zdanie wydaje się „nie mieć końca”. Łacina ma trzy imiesłowy:</p>
<table class="tbl"><tr><th>imiesłów</th><th>tworzenie</th><th>znaczenie</th><th>przykład</th></tr>
<tr><td>PPA (praes. act.)</td><td>-ns, -ntis</td><td>czynny, współczesny: „robiący, robiąc”</td><td><i class="la">attendentes</i> – zważając; <i class="la">veniens</i> – przybywając</td></tr>
<tr><td>PPP (perf. pass.)</td><td>od supinum: -tus, -a, -um</td><td>bierny, uprzedni: „zrobiony”</td><td><i class="la">dictus</i> – zwany; <i class="la">datum</i> – dane</td></tr>
<tr><td>part. fut. act.</td><td>-turus, -a, -um</td><td>„mający zrobić, który zrobi”</td><td><i class="la">inspecturis</i> – którzy będą oglądać</td></tr></table>
<h4>Participium coniunctum</h4>
<p>Imiesłów zgodny z rzeczownikiem w zdaniu (podmiotem lub dopełnieniem) zastępuje zdanie podrzędne. Tłumacz go zdaniem lub imiesłowem przysłówkowym:</p>
<div class="exs">
<p><i class="la">universis presentes litteras <u>inspecturis</u></i> – wszystkim, <b>którzy będą oglądać</b> niniejszy dokument</p>
<p><i class="la">Nos… <u>attendentes</u> fidelia servicia… damus</i> – My, <b>zważając</b> na wierne usługi… dajemy</p>
<p><i class="la">Stanislaus… personaliter <u>veniens</u> recognovit</i> – Stanisław, <b>przybywszy</b> osobiście, zeznał</p>
<p><i class="la">villam <u>dictam</u> Dambrowa</i> – wieś <b>zwaną</b> Dąbrowa</p></div>
<p class="tip">Kiedy widzisz końcówkę <b>-ns / -ntis / -nte / -ntes</b> albo <b>-tus / -ta / -tum</b>, zapytaj: z którym rzeczownikiem się zgadza? Ten rzeczownik „wykonuje” (PPA) lub „doznaje” (PPP) czynności.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">universis presentes litteras inspecturis</i>:', o: ['wszystkim, którzy oglądali niniejszy dokument', 'wszystkim, którzy będą oglądać niniejszy dokument', 'wszyscy oglądający dokument', 'dokument obejrzany przez wszystkich'], a: 1, e: '<i>inspecturis</i> – part. fut. act., dat. lm., zgodny z <i>universis</i>.' },
    { t: 'mcq', q: '<i class="la">sanus mente et corpore existens</i>:', o: ['istniejący zdrowy umysł', 'będąc zdrowym na umyśle i ciele', 'zdrowe ciało i umysł istnieją', 'zdrowiejący'], a: 1, e: '<i>existens</i> – PPA, zgodny z podmiotem; typowa formuła akt i testamentów.' },
    { t: 'find', q: 'Zaznacz imiesłowy.', s: 'Ad acta presentia personaliter [[veniens]] generosus Stanislaus, sanus mente [[existens]], recognovit.', e: '<i>veniens, existens</i> – PPA; <i>presentia</i> to przymiotnik (od <i>praesens</i>), <i>recognovit</i> – orzeczenie.' }
  ],
  drill: { classes: ['v1', 'v2', 'v3', 'v3i', 'v4'], filter: 'part', label: 'Imiesłowy, gerundium, bezokoliczniki' }
},
{
  id: 'l9', title: 'Ablativus absolutus', short: 'presentibus testibus, quibus elapsis, Deo volente',
  body: `
<p>Ablativus absolutus („ablatyw oderwany”) to <b>rzeczownik/zaimek + imiesłów w ablatywie</b>, gramatycznie niezależne od reszty zdania. Pełni funkcję zdania okolicznikowego (czasu, przyczyny, przyzwolenia, warunku).</p>
<table class="tbl"><tr><th>łacina</th><th>budowa</th><th>przekład</th></tr>
<tr><td><i class="la">presentibus hiis testibus</i></td><td>abl. + PPA (praesens)</td><td>w obecności tych świadków</td></tr>
<tr><td><i class="la">quibus (annis) elapsis</i></td><td>abl. + PPP</td><td>po upływie tych (lat)</td></tr>
<tr><td><i class="la">Deo volente</i></td><td>abl. + PPA</td><td>jeśli Bóg pozwoli</td></tr>
<tr><td><i class="la">exceptis… </i></td><td>PPP + abl.</td><td>z wyjątkiem…</td></tr>
<tr><td><i class="la">mediante iustitia</i></td><td>PPA + abl.</td><td>za pośrednictwem sprawiedliwości (= drogą prawną)</td></tr>
<tr><td><i class="la">rege regnante</i></td><td>abl. + PPA</td><td>za panowania króla</td></tr></table>
<h4>Jak tłumaczyć</h4>
<ul><li>PPA → czynność <b>współczesna</b>: „gdy…, podczas gdy…, w obecności…”</li>
<li>PPP → czynność <b>uprzednia</b>: „po tym jak…, gdy już…”</li>
<li>Bez imiesłowu (rzeczownik + rzeczownik/przymiotnik): <i class="la">Iohanne papa</i> – „za papieża Jana”.</li></ul>
<p class="tip">Najprostszy test: czy grupę w ablatywie można wyciąć, a zdanie dalej jest gramatycznie pełne? Jeśli tak, to prawie na pewno abl. abs.</p>
<p class="warn">W łacinie średniowiecznej konstrukcja bywa „zepsuta”: imiesłów zgadza się nieprawidłowo albo podmiot abl. abs. jest jednocześnie członem zdania głównego. Przykład z <i>Dagome iudex</i>: <i class="la">fines Russe extendente</i> – rzeczownik w acc., imiesłów w abl.</p>`,
  ex: [
    { t: 'find', q: 'Zaznacz ablativus absolutus.', s: 'Actum in Cracovia, [[presentibus]] [[hiis]] [[testibus]].', e: '<i>presentibus hiis testibus</i> – „w obecności tych świadków”.' },
    { t: 'find', q: 'Zaznacz ablativus absolutus.', s: '[[Quibus]] [[elapsis]] quilibet kmeto unam marcam solvere tenebitur.', e: '„Po upływie których (lat)” → „Po ich upływie każdy kmieć będzie zobowiązany płacić jedną grzywnę”.' },
    { t: 'mcq', q: '<i class="la">Iudicio terrestri sedente</i> najlepiej oddać jako:', o: ['sąd ziemski siedział', 'podczas posiedzenia sądu ziemskiego', 'sądowi ziemskiemu siedzącemu', 'siedząc w sądzie ziemskim'], a: 1, e: 'Abl. abs. z PPA: czynność współczesna.' },
    { t: 'mcq', q: '<i class="la">Rebus sic stantibus</i>:', o: ['rzeczy stoją tak', 'skoro sprawy tak się mają', 'rzeczom tak stojącym', 'stojąc przy rzeczach'], a: 1, e: 'Abl. abs. o znaczeniu przyczynowym/warunkowym.' }
  ]
},
{
  id: 'l10', title: 'Accusativus cum infinitivo i średniowieczne quod', short: 'AcI, NcI (leguntur contulisse), dico quod…',
  body: `
<p>Po czasownikach mówienia, myślenia, wiedzy i postrzegania łacina klasyczna używa <b>accusativus cum infinitivo</b> (AcI): podmiot zdania podrzędnego stoi w bierniku, a orzeczenie w bezokoliczniku.</p>
<div class="exs"><p><i class="la">Scimus <u>ducem</u> villam ecclesie <u>dedisse</u>.</i> – Wiemy, <b>że książę dał</b> wieś kościołowi.</p></div>
<p>Tłumacząc, wstaw „że”, biernik zamień na mianownik, a bezokolicznik na czasownik osobowy. Czas bezokolicznika wyraża stosunek do zdania głównego: <i>-re</i> = współczesność, <i>-isse</i> = uprzedniość, <i>-turum esse</i> = następczość.</p>
<h4>Nominativus cum infinitivo (NcI)</h4>
<p>Przy czasowniku w stronie biernej (<i class="la">dicitur, videtur, legitur</i>) podmiot stoi w mianowniku:</p>
<div class="exs"><p><i class="la"><u>Dagome iudex et Ote senatrix</u>… <u>leguntur</u> beato Petro <u>contulisse</u>…</i> – <b>Czyta się, że</b> sędzia Dagome i senatorka Ote <b>nadali</b> św. Piotrowi…</p></div>
<h4>Łacina średniowieczna: quod / quia</h4>
<p>Od późnej starożytności AcI coraz częściej zastępuje zdanie z <b>quod</b> lub <b>quia</b> („że”) i trybem oznajmującym albo łączącym, jak w polskim:</p>
<div class="exs"><p><i class="la">Notum facimus, <u>quod</u> villam… <u>damus</u>.</i> – Podajemy do wiadomości, <b>że dajemy</b> wieś…</p>
<p><i class="la">Petrus respondit, <u>quod</u> non <u>tenetur</u>.</i> – Piotr odpowiedział, <b>że nie jest zobowiązany</b>.</p></div>
<p class="warn">Nie tłumacz automatycznie <i>quod</i> jako „który” czy „ponieważ”. Po <i class="la">notum facimus, recognovit, dixit, respondit</i> prawie zawsze znaczy „że”.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">Petrus respondit, quod non tenetur</i>:', o: ['Piotr odpowiedział, który nie jest trzymany', 'Piotr odpowiedział, że nie jest zobowiązany', 'Piotr odpowiedział, ponieważ nie trzyma', 'Piotr nie odpowiedział'], a: 1, e: 'Średniowieczne <i>quod</i> = „że” zamiast AcI.' },
    { t: 'mcq', q: 'W <i class="la">leguntur contulisse</i> mamy do czynienia z:', o: ['ablativus absolutus', 'nominativus cum infinitivo', 'gerundivum', 'coniunctivus'], a: 1, e: 'Podmiot (Dagome, Ote, synowie) w mianowniku + <i>leguntur</i> + bezokolicznik.' },
    { t: 'find', q: 'Zaznacz biernik i bezokolicznik tworzące AcI.', s: 'Dicunt [[ducem]] villam monasterio [[dedisse]].', e: '„Mówią, że książę dał wieś klasztorowi”.' }
  ]
},
{
  id: 'l11', title: 'Gerundium i gerundivum', short: 'possidendam, ad habendum, pro conservanda pace',
  body: `
<p>Obie formy mają w temacie <b>-nd-</b>. <b>Gerundium</b> to rzeczownik odczasownikowy („posiadanie”), <b>gerundivum</b> to przymiotnik („mający być posiadanym”).</p>
<table class="tbl"><tr><th>forma</th><th>przykład</th><th>przekład</th></tr>
<tr><td>gerundium + ad</td><td><i class="la">ad habendum</i></td><td>do posiadania, aby mieć</td></tr>
<tr><td>gerundium gen.</td><td><i class="la">causa vendendi</i></td><td>w celu sprzedaży</td></tr>
<tr><td>gerundivum predykatywne</td><td><i class="la">villam… damus possidendam</i></td><td>dajemy wieś <b>do posiadania</b> (aby ją posiadał)</td></tr>
<tr><td>gerundivum + ad / pro</td><td><i class="la">pro conservanda pace</i></td><td>dla zachowania pokoju</td></tr>
<tr><td>gerundivum + esse (powinność)</td><td><i class="la">solvendum est</i></td><td>należy zapłacić</td></tr>
<tr><td>gerundivum jako przymiotnik</td><td><i class="la">reverendus, venerandus</i></td><td>wielebny (godny czci)</td></tr></table>
<h4>W dokumentach lokacyjnych i nadaniach</h4>
<p><i class="la">villam… iure Theutonico <u>locandam</u> damus</i> – dajemy wieś <b>do lokowania</b> na prawie niemieckim.<br>
<i class="la">iure hereditario perpetuo <u>possidendam</u></i> – <b>do posiadania</b> prawem dziedzicznym na wieczność.<br>
<i class="la">cum plena potestate <u>vendendi, donandi, commutandi</u></i> – z pełnym prawem <b>sprzedaży, darowania, zamiany</b>.</p>
<p class="tip">Gerundivum zgadza się z rzeczownikiem (<i class="la">villam… possidend<b>am</b></i>), gerundium stoi samo. Jeśli forma na <i>-nd-</i> zgadza się w rodzaju z jakimś rzeczownikiem, to gerundivum.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">villam ecclesie damus perpetuo possidendam</i>:', o: ['dajemy wieś, którą kościół posiadał', 'dajemy kościołowi wieś do posiadania na wieczność', 'kościół posiada wieś wiecznie', 'posiadając wieś dajemy kościołowi'], a: 1, e: '<i>possidendam</i> – gerundivum, acc. lp. f., zgodne z <i>villam</i>.' },
    { t: 'mcq', q: '<i class="la">cum potestate vendendi</i> – <i>vendendi</i> to:', o: ['gerundium, gen.', 'gerundivum, nom. lm.', 'PPA', 'inf. praes.'], a: 0, e: '„z prawem sprzedawania” – gerundium w dopełniaczu.' },
    { t: 'find', q: 'Zaznacz gerundivum.', s: 'Villam nostram iure Theutonico [[locandam]] damus discreto viro Petro.', e: '<i>locandam</i> – „do lokowania”, zgodne z <i>villam</i>.' }
  ]
},
{
  id: 'l12', title: 'Cum historicum, ut/ne i następstwo czasów', short: 'cum + coni.; consecutio temporum',
  body: `
<p><b>Cum historicum</b> (<i class="la">cum</i> + coni. impf./pqpf.) to podstawowa konstrukcja narracji kronikarskiej: „gdy”, „ponieważ”, „chociaż”.</p>
<div class="exs"><p><i class="la"><u>Cum</u> dux convivium <u>preparasset</u>, hospites advenerunt.</i> – <b>Gdy</b> książę przygotował ucztę, przybyli goście.</p>
<p><i class="la"><u>Cum</u> autem <u>nolimus</u> cives nostros iniuriis affici, mandamus…</i> – <b>Ponieważ</b> zaś nie chcemy, by nasi mieszczanie doznawali krzywd, polecamy…</p></div>
<p>Znaczenia <i class="la">cum</i>: z ablatywem – przyimek „z”; z indicativus – „gdy, kiedy”; z coniunctivus – „gdy” (narracja), „ponieważ”, „chociaż”.</p>
<h4>Consecutio temporum (następstwo czasów)</h4>
<p>Czas coniunctivu w zdaniu podrzędnym zależy od czasu zdania głównego:</p>
<table class="tbl"><tr><th>zdanie główne</th><th>współczesność</th><th>uprzedniość</th></tr>
<tr><td>czas teraźniejszy / przyszły</td><td>coni. praes. (<i class="la">ut possideat</i>)</td><td>coni. perf. (<i class="la">quod dederit</i>)</td></tr>
<tr><td>czas przeszły</td><td>coni. impf. (<i class="la">ut possideret</i>)</td><td>coni. pqpf. (<i class="la">quod dedisset</i>)</td></tr></table>
<p>Dla tłumacza wniosek praktyczny: <b>coni. impf. po czasie przeszłym nie oznacza przeszłości niedokonanej</b>, tylko współczesność. <i class="la">Rogavit, ut veniret</i> – „prosił, aby przyszedł”, nie „aby przychodził”.</p>
<p class="warn">W łacinie średniowiecznej zasady consecutio są przestrzegane mniej ściśle. Nie wyciągaj wniosków chronologicznych z samego czasu coniunctivu.</p>`,
  ex: [
    { t: 'mcq', q: '<i class="la">Cum hospites advenissent, a civitate repulsi sunt</i>:', o: ['Z gośćmi przybyłymi zostali odepchnięci', 'Gdy goście przybyli, zostali odpędzeni od grodu', 'Chociaż goście przybędą, będą odepchnięci', 'Goście przybywali z grodu'], a: 1, e: '<i>cum</i> + coni. pqpf. – uprzedniość w przeszłości.' },
    { t: 'mcq', q: '<i class="la">Mandavit, ut cives conservaret</i> – <i>conservaret</i> wyraża:', o: ['czynność uprzednią', 'czynność współczesną/następczą wobec rozkazu', 'czynność przyszłą bez związku', 'tryb rozkazujący'], a: 1, e: 'Po czasie przeszłym coni. impf. = współczesność (cel rozkazu).' },
    { t: 'mcq', q: 'W którym zdaniu <i class="la">cum</i> jest przyimkiem?', o: ['Cum autem nolimus…', 'cum omnibus pertinentiis', 'Cum dux venisset…', 'cum ista agerentur'], a: 1, e: '<i>cum</i> + ablativus (<i>omnibus pertinentiis</i>) = „z”.' }
  ]
},
{
  id: 'l13', title: 'Deponentia i czasowniki nieregularne', short: 'fateor, interpretor, nascor; fero, volo, fio, eo',
  body: `
<p><b>Verba deponentia</b> mają formy bierne, ale znaczenie czynne: <i class="la">fatetur</i> – „zeznaje”, <i class="la">loquitur</i> – „mówi”, <i class="la">natus est</i> – „urodził się”, <i class="la">obiit / mortuus est</i> – „zmarł”.</p>
<table class="tbl"><tr><th>czasownik</th><th>forma w źródle</th><th>przekład</th></tr>
<tr><td><i class="la">fateor, fateri, fassus sum</i></td><td><i class="la">fassus est</i></td><td>zeznał (akta sądowe)</td></tr>
<tr><td><i class="la">confiteor, confiteri, confessus sum</i></td><td><i class="la">confitemur</i></td><td>wyznajemy, oświadczamy</td></tr>
<tr><td><i class="la">nascor, nasci, natus sum</i></td><td><i class="la">natus</i></td><td>urodzony</td></tr>
<tr><td><i class="la">labor, labi, lapsus sum</i></td><td><i class="la">ne labantur</i></td><td>aby nie przeminęły</td></tr>
<tr><td><i class="la">utor, uti, usus sum</i> + abl.</td><td><i class="la">iure Theutonico utantur</i></td><td>niech korzystają z prawa niemieckiego</td></tr></table>
<p class="warn">Niektóre deponentia mają w łacinie średniowiecznej także znaczenie bierne. U Galla <i class="la">que nidus interpretatur</i> znaczy „co <b>tłumaczy się</b> jako gniazdo”, a nie „co tłumaczy gniazdo”.</p>
<h4>Najważniejsze czasowniki nieregularne</h4>
<table class="tbl"><tr><th>czasownik</th><th>kluczowe formy</th></tr>
<tr><td><i class="la">fero, ferre, tuli, latum</i> i złożenia: <i class="la">confero</i> (nadaję), <i class="la">infero, refero, offero</i></td><td><i class="la">fert, ferunt; contulit, contulisse; collatum</i></td></tr>
<tr><td><i class="la">volo, velle, volui</i> / <i class="la">nolo, nolle</i></td><td><i class="la">volumus, vult; velit; nolimus</i></td></tr>
<tr><td><i class="la">fio, fieri, factus sum</i></td><td><i class="la">fit, fiat, fieri</i> (bierne do <i>facio</i>)</td></tr>
<tr><td><i class="la">eo, ire, ii, itum</i> i złożenia</td><td><i class="la">obiit</i> (zmarł), <i class="la">transiit</i> (przeszedł)</td></tr>
<tr><td><i class="la">possum, posse, potui</i></td><td><i class="la">potest, possit, poterunt</i></td></tr></table>`,
  ex: [
    { t: 'mcq', q: '<i class="la">Stanislaus fassus est se recepisse</i>:', o: ['Stanisław został zeznany', 'Stanisław zeznał, że otrzymał', 'Stanisław był wyznawany', 'Stanisław zezna'], a: 1, e: '<i>fassus est</i> – perf. deponentis (znaczenie czynne) + AcI <i>se recepisse</i>.' },
    { t: 'mcq', q: '<i class="la">obiit</i> to:', o: ['obchodzi', 'zmarł', 'obiegnie', 'okrążył'], a: 1, e: 'perf. od <i>obeo</i>; standardowo w nekrologach i metrykach zgonów.' },
    { t: 'mcq', q: '<i class="la">contulisse</i> pochodzi od:', o: ['contulo', 'confero', 'contollo', 'contueor'], a: 1, e: '<i>confero, conferre, contuli, collatum</i> – perfectum ma inny temat niż praesens.' }
  ],
  drill: { classes: ['v1d', 'v2d', 'v3d', 'v3id', 'v4d', 'fer', 'volo', 'nolo', 'fio', 'eo', 'possum'], filter: 'any', label: 'Deponentia i czasowniki nieregularne' }
},
{
  id: 'l14', title: 'Łacina średniowieczna i nowożytna', short: 'Ortografia, słownictwo, składnia – co się zmienia',
  body: `
<p>Łacina średniowieczna to nie „zepsuta klasyczna”, tylko żywy język pisany z własnymi normami, które zmieniały się regionalnie. Dla polskiego historyka to zwykle podstawowy materiał.</p>
<h4>Ortografia</h4>
<table class="tbl"><tr><th>średniowieczna</th><th>klasyczna</th><th>przykład</th></tr>
<tr><td>e</td><td>ae, oe</td><td><i class="la">ecclesie, pena, celum</i> → ecclesiae, poena, caelum</td></tr>
<tr><td>ci + samogł.</td><td>ti + samogł.</td><td><i class="la">gracia, donacio, presencium</i></td></tr>
<tr><td>ch / h dodane lub opuszczone</td><td>h</td><td><i class="la">michi, nichil; ortus/hortus; habundare</i></td></tr>
<tr><td>y</td><td>i</td><td><i class="la">ymago, ydoneus, sylva</i></td></tr>
<tr><td>mpn, mpt</td><td>mn, mt</td><td><i class="la">dampnum, sollempnis, contempnere</i></td></tr>
<tr><td>pojedyncze/podwójne spółgłoski</td><td>—</td><td><i class="la">litera/littera, comodum, aparere</i></td></tr>
<tr><td>j, v</td><td>i, u</td><td><i class="la">Johannes, juramentum</i></td></tr></table>
<p>W XVI–XVIII w. humaniści przywracają pisownię klasyczną (<i class="la">ae, ti</i>), więc metryki i akta nowożytne często wyglądają „klasycznie”, choć słownictwo pozostaje późne.</p>
<h4>Składnia</h4>
<ul>
<li><b>quod/quia + verbum finitum</b> zamiast AcI (lekcja 10).</li>
<li><b>suus/eius</b> używane zamiennie (lekcja 4).</li>
<li><b>de + abl.</b> zamiast dopełniacza: <i class="la">heres de Wola</i> – „dziedzic Woli”, <i class="la">civis de Cracovia</i>.</li>
<li><b>przyimki o nowych znaczeniach</b>: <i class="la">infra</i> = „w obrębie” (klas. „poniżej”), <i class="la">per</i> = „przez” (sprawcy), <i class="la">sub</i> = „pod (karą)”: <i class="la">sub poena</i>.</li>
<li><b>zanik rozróżnień trybów</b>: coni. tam, gdzie klasycznie byłby ind., i odwrotnie.</li>
<li>analityczne formy strony biernej: <i class="la">datum fuit</i> zamiast <i class="la">datum est</i>.</li>
</ul>
<h4>Słownictwo</h4>
<p>Słowa klasyczne zmieniają znaczenie (<i class="la">miles</i> – rycerz, <i class="la">comes</i> – możny, <i class="la">villa</i> – wieś, <i class="la">honor</i> – urząd), pojawiają się latynizacje słów polskich i niemieckich (<i class="la">kmeto</i> – kmieć, <i class="la">scultetus</i> – sołtys, <i class="la">laneus</i> – łan, <i class="la">vlodarius</i> – włodarz), a tytuły grzecznościowe pozwalają odczytać stan społeczny (<i class="la">generosus, famatus, honestus, laboriosus</i>). Zajrzyj do modułu <b>Pułapki tłumacza</b>.</p>`,
  ex: [
    { t: 'mcq', q: 'Klasyczna postać <i class="la">dampnum</i> to:', o: ['damnum', 'dapnum', 'dannum', 'damnium'], a: 0, e: 'Średniowieczne wtrącenie <i>p</i> między <i>m</i> i <i>n</i>.' },
    { t: 'mcq', q: '<i class="la">heres de Wola</i> to:', o: ['spadkobierca z Woli', 'dziedzic (właściciel) Woli', 'dziedzictwo w Woli', 'następca Woli'], a: 1, e: '<i>de</i> + abl. zamiast dopełniacza; <i>heres</i> w polskich źródłach = właściciel dziedziczny.' },
    { t: 'mcq', q: 'Słowo <i class="la">presencium</i> w pisowni klasycznej:', o: ['praesentium', 'presentiam', 'praesencium', 'presentum'], a: 0, e: 'e → ae, ci → ti.' }
  ]
}
];
