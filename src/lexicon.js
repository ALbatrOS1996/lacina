/* ============================================================
   SŁOWNIK
   Format wiersza:  hasło | klasa | rodzaj/część mowy | znaczenie | pola | uwaga
   Klasy: n1 n2 n2r n2n n3 n3i n3n n3ni n4 n5 (rzeczowniki),
          a12 a12p a3_1 a3_2 a3_3 a3c (przymiotniki), pron:<klucz>,
          v1 v2 v3 v3i v4, v1d…v4d (deponentia), v2sd (semidep.),
          sum possum volo nolo fio eo fer (nieregularne), x (nieodmienne)
   Pola: rd rdzeń · dok dokumenty · pr prawo/sądy · ko Kościół · ur urzędy i stany
         ty tytulatura · ma majątek i gospodarka · mi miary i monety
         cz czas i datowanie · kr kroniki/narracja · wo wojsko · ep znaczenie zależne od epoki
   Kolejność w obrębie grup odpowiada mniej więcej częstości w dokumentach.
   ============================================================ */
LAT.LEXICON_RAW = `
sum, esse, fui | sum | | być | rd |
possum, posse, potui | possum | | móc | rd |
habeo, habere, habui, habitum | v2 | | mieć; uważać (habere pro) | rd |
do, dare, dedi, datum | v1 | | dawać; nadawać | rd dok | datum (est) – dano (w formule datacyjnej)
facio, facere, feci, factum | v3i | | czynić, robić; sprawić | rd | notum facere – podać do wiadomości; facere + inf. – kazać (fecimus roborari)
dico, dicere, dixi, dictum | v3 | | mówić; nazywać | rd dok | dictus – zwany; predictus, supradictus – wspomniany
volo, velle, volui | volo | | chcieć | rd dok | volumus et mandamus – chcemy i polecamy
nolo, nolle, nolui | nolo | | nie chcieć | rd |
fio, fieri, factus sum | fio | | stawać się; dziać się; być czynionym | rd | fiat – niech się stanie
eo, ire, ii, itum | eo | | iść | rd |
fero, ferre, tuli, latum | fer | | nieść; znosić | rd |
confero, conferre, contuli, collatum | fer | | nadawać, przekazywać | dok ma | podstawowy czasownik nadań
refero, referre, rettuli, relatum | fer | | odnosić; donosić, relacjonować | rd |
offero, offerre, obtuli, oblatum | fer | | ofiarowywać; przedkładać | ko |
venio, venire, veni, ventum | v4 | | przychodzić; stawać (przed sądem) | rd pr | personaliter veniens – osobiście przybywszy
invenio, invenire, inveni, inventum | v4 | | znajdować | rd |
convenio, convenire, conveni, conventum | v4 | | zbierać się; zgadzać się, umawiać się | pr |
audio, audire, audivi, auditum | v4 | | słyszeć; przesłuchiwać | rd pr |
scio, scire, scivi, scitum | v4 | | wiedzieć | rd |
sepelio, sepelire, sepelivi, sepultum | v4 | | grzebać, chować | ko | sepultus est – został pochowany
munio, munire, munivi, munitum | v4 | | umacniać, zabezpieczać | dok | sigilli munimine – umocnieniem pieczęci
video, videre, vidi, visum | v2 | | widzieć; videri – wydawać się | rd |
teneo, tenere, tenui, tentum | v2 | | trzymać; dzierżyć; (pass.) być zobowiązanym | rd pr | tenetur solvere – jest zobowiązany zapłacić
debeo, debere, debui, debitum | v2 | | być winnym; powinien | rd pr |
pertineo, pertinere, pertinui | v2 | | należeć (do), dotyczyć | dok ma | ad villam pertinentes – należące do wsi
possideo, possidere, possedi, possessum | v2 | | posiadać | dok ma |
maneo, manere, mansi, mansum | v2 | | pozostawać | rd |
moveo, movere, movi, motum | v2 | | poruszać; wnosić (sprawę) | rd |
iubeo, iubere, iussi, iussum | v2 | | rozkazywać | rd |
respondeo, respondere, respondi, responsum | v2 | | odpowiadać | rd pr |
voco, vocare, vocavi, vocatum | v1 | | nazywać; wzywać | rd | que vocatur – która nazywa się
nomino, nominare, nominavi, nominatum | v1 | | nazywać; mianować | rd |
appello, appellare, appellavi, appellatum | v1 | | nazywać; apelować, odwoływać się | pr |
dono, donare, donavi, donatum | v1 | | darować, nadawać | dok ma |
confirmo, confirmare, confirmavi, confirmatum | v1 | | zatwierdzać, potwierdzać | dok |
roboro, roborare, roboravi, roboratum | v1 | | umacniać (dokument pieczęcią) | dok |
libero, liberare, liberavi, liberatum | v1 | | uwalniać, zwalniać (od ciężarów) | dok ma |
loco, locare, locavi, locatum | v1 | | lokować, osadzać (wieś, miasto) | ma | iure Theutonico locare – lokować na prawie niemieckim
resigno, resignare, resignavi, resignatum | v1 | | rezygnować na rzecz; wieczyście zbywać | pr ma |
mando, mandare, mandavi, mandatum | v1 | | polecać, rozkazywać | dok |
servo, servare, servavi, servatum | v1 | | zachowywać, przestrzegać | rd |
conservo, conservare, conservavi, conservatum | v1 | | zachowywać, utrzymywać | dok |
iuro, iurare, iuravi, iuratum | v1 | | przysięgać | pr |
cito, citare, citavi, citatum | v1 | | pozywać | pr | citavit – pozwał
condemno, condemnare, condemnavi, condemnatum | v1 | | skazywać | pr |
obligo, obligare, obligavi, obligatum | v1 | | zobowiązywać; zastawiać | pr ma |
quieto, quietare, quietavi, quietatum | v1 | | kwitować (z długu) | pr ma | łacina późnośredniowieczna i nowożytna
pronuntio, pronuntiare, pronuntiavi, pronuntiatum | v1 | | ogłaszać, orzekać | pr |
creo, creare, creavi, creatum | v1 | | tworzyć; mianować, wybierać | ur |
regno, regnare, regnavi, regnatum | v1 | | panować | kr |
pugno, pugnare, pugnavi, pugnatum | v1 | | walczyć | wo kr |
occupo, occupare, occupavi, occupatum | v1 | | zajmować, zagarniać | kr pr |
ordino, ordinare, ordinavi, ordinatum | v1 | | porządkować, zarządzać; wyświęcać | ko ep | w kontekście kościelnym ordinare = wyświęcać, nie „zarządzać”
consecro, consecrare, consecravi, consecratum | v1 | | konsekrować, poświęcać | ko |
baptizo, baptizare, baptizavi, baptizatum | v1 | | chrzcić | ko |
copulo, copulare, copulavi, copulatum | v1 | | łączyć; dawać ślub | ko | w metrykach ślubów: copulavi – pobłogosławiłem związek
celebro, celebrare, celebravi, celebratum | v1 | | odprawiać, sprawować; świętować | ko |
laboro, laborare, laboravi, laboratum | v1 | | pracować, trudzić się | rd |
invito, invitare, invitavi, invitatum | v1 | | zapraszać | kr |
praeparo, praeparare, praeparavi, praeparatum | v1 | | przygotowywać | kr |
considero, considerare, consideravi, consideratum | v1 | | rozważać, brać pod uwagę | dok | considerantes – zważywszy
expono, exponere, exposui, expositum | v3 | | wykładać, przedstawiać | dok | expositum est nobis – przedstawiono nam
narro, narrare, narravi, narratum | v1 | | opowiadać | kr |
habito, habitare, habitavi, habitatum | v1 | | mieszkać | rd |
iudico, iudicare, iudicavi, iudicatum | v1 | | sądzić | pr |
decerno, decernere, decrevi, decretum | v3 | | postanawiać, orzekać | pr |
vendo, vendere, vendidi, venditum | v3 | | sprzedawać | ma |
emo, emere, emi, emptum | v3 | | kupować | ma |
cedo, cedere, cessi, cessum | v3 | | ustępować; odstępować (prawa) | pr |
concedo, concedere, concessi, concessum | v3 | | udzielać, przyznawać | dok |
succedo, succedere, successi, successum | v3 | | następować (po kimś) | rd |
statuo, statuere, statui, statutum | v3 | | ustanawiać, postanawiać | dok pr |
constituo, constituere, constitui, constitutum | v3 | | ustanawiać; (pass.) stawać | pr | personaliter constitutus – osobiście stawiwszy się
mitto, mittere, misi, missum | v3 | | posyłać | rd |
promitto, promittere, promisi, promissum | v3 | | obiecywać, ślubować | pr |
committo, committere, commisi, commissum | v3 | | powierzać; popełniać | rd |
dimitto, dimittere, dimisi, dimissum | v3 | | zwalniać; zostawiać; odpuszczać | rd |
scribo, scribere, scripsi, scriptum | v3 | | pisać | rd |
conscribo, conscribere, conscripsi, conscriptum | v3 | | spisywać | dok |
lego, legere, legi, lectum | v3 | | czytać; wybierać | rd | leguntur contulisse – czyta się, że nadali
eligo, eligere, elegi, electum | v3 | | wybierać | ur |
pono, ponere, posui, positum | v3 | | kłaść, umieszczać | rd |
peto, petere, petivi, petitum | v3 | | prosić, żądać | rd |
quaero, quaerere, quaesivi, quaesitum | v3 | | szukać; pytać | rd |
nosco, noscere, novi, notum | v3 | | poznawać; novi – wiem | rd dok | noverint universi – niech wiedzą wszyscy
cognosco, cognoscere, cognovi, cognitum | v3 | | poznawać; rozpoznawać (sprawę) | rd pr |
recognosco, recognoscere, recognovi, recognitum | v3 | | przyznawać, zeznawać (przed urzędem) | pr | recognovit – zeznał, przyznał
contingo, contingere, contigi, contactum | v3 | | dotykać; zdarzać się | kr | contigit – zdarzyło się
vinco, vincere, vici, victum | v3 | | zwyciężać; (pr.) wygrać sprawę | wo pr | iure victus – pokonany prawem (skazany wyrokiem)
rego, regere, rexi, rectum | v3 | | rządzić | rd |
solvo, solvere, solvi, solutum | v3 | | płacić; rozwiązywać | ma |
reddo, reddere, reddidi, redditum | v3 | | oddawać; płacić (czynsz) | ma |
trado, tradere, tradidi, traditum | v3 | | przekazywać; wydawać | rd |
credo, credere, credidi, creditum | v3 | | wierzyć | rd |
duco, ducere, duxi, ductum | v3 | | prowadzić; ducere uxorem – żenić się | rd |
extendo, extendere, extendi, extentum | v3 | | rozciągać | rd |
procedo, procedere, processi, processum | v3 | | postępować, wychodzić | rd |
relinquo, relinquere, reliqui, relictum | v3 | | zostawiać | rd |
defendo, defendere, defendi, defensum | v3 | | bronić | wo pr |
gero, gerere, gessi, gestum | v3 | | prowadzić, sprawować | kr | res gestae – dzieje
occido, occidere, occidi, occisum | v3 | | zabijać | kr pr |
repello, repellere, reppuli, repulsum | v3 | | odpychać, odpędzać | kr |
attendo, attendere, attendi, attentum | v3 | | zważać | dok | attendentes – zważając
incurro, incurrere, incurri, incursum | v3 | | popadać, ściągać na siebie | dok | w sankcji: indignationem Dei incursurum
praesumo, praesumere, praesumpsi, praesumptum | v3 | | ośmielać się, ważyć się | dok | w sankcji: si quis… presumpserit
contradico, contradicere, contradixi, contradictum | v3 | | sprzeciwiać się | pr |
infero, inferre, intuli, illatum | fer | | wnosić; zadawać (szkodę) | pr | damna inferre – wyrządzać szkody
permitto, permittere, permisi, permissum | v3 | | pozwalać | rd |
capio, capere, cepi, captum | v3i | | chwytać; brać; pojmać | rd |
accipio, accipere, accepi, acceptum | v3i | | przyjmować, otrzymywać | rd |
recipio, recipere, recepi, receptum | v3i | | przyjmować, odbierać | ma |
incipio, incipere, incepi, inceptum | v3i | | zaczynać (się) | rd |
interficio, interficere, interfeci, interfectum | v3i | | zabijać | kr |
inspicio, inspicere, inspexi, inspectum | v3i | | oglądać | dok | presentes litteras inspecturi – ci, którzy będą oglądać niniejszy dokument
excipio, excipere, excepi, exceptum | v3i | | wyłączać | dok | exceptis… – z wyjątkiem…
fugio, fugere, fugi, fugitum | v3i | | uciekać | kr |
advenio, advenire, adveni, adventum | v4 | | przybywać | kr |
obeo, obire, obii, obitum | eo | | umierać | ko | obiit – zmarł (nekrologi, metryki zgonów)
transeo, transire, transii, transitum | eo | | przechodzić | rd |
adsum, adesse, adfui | sum | | być obecnym | rd |
absum, abesse, afui | sum | | być nieobecnym | rd |
praesum, praeesse, praefui | sum | | stać na czele | ur |
existo, existere, extiti | v3 | | istnieć, być | rd | sanus mente et corpore existens – będąc zdrowym na umyśle i ciele
loquor, loqui, locutus sum | v3d | | mówić | rd |
sequor, sequi, secutus sum | v3d | | iść za, następować | rd |
utor, uti, usus sum | v3d | | używać (+ abl.) | rd |
fruor, frui, fructus sum | v3d | | korzystać (+ abl.) | ma |
nascor, nasci, natus sum | v3d | | rodzić się | ko |
proficiscor, proficisci, profectus sum | v3d | | wyruszać | kr |
morior, mori, mortuus sum | v3id | | umierać | ko kr |
patior, pati, passus sum | v3id | | cierpieć, znosić | rd |
vereor, vereri, veritus sum | v2d | | obawiać się | rd |
fateor, fateri, fassus sum | v2d | | wyznawać; zeznawać | pr | fassus est – zeznał (akta sądowe)
confiteor, confiteri, confessus sum | v2d | | wyznawać, zeznawać | pr ko |
hortor, hortari, hortatus sum | v1d | | zachęcać | rd |
arbitror, arbitrari, arbitratus sum | v1d | | sądzić, mniemać | rd |
moror, morari, moratus sum | v1d | | przebywać; zwlekać | rd |
dominor, dominari, dominatus sum | v1d | | panować | kr |
interpretor, interpretari, interpretatus sum | v1d | | tłumaczyć, wykładać | kr | u Galla w znaczeniu biernym: que nidus interpretatur – co tłumaczy się jako „gniazdo”
largior, largiri, largitus sum | v4d | | hojnie obdarzać | dok |
potior, potiri, potitus sum | v4d | | zawładnąć (+ abl.) | kr |
soleo, solere, solitus sum | v2sd | | mieć zwyczaj | rd |
gaudeo, gaudere, gavisus sum | v2sd | | cieszyć się | rd |

dominus, domini | n2 | m | pan; Pan (Bóg) | rd ko ty | dominus przed imieniem – tytuł (pan, dostojnik); in nomine Domini
deus, dei | n2 | m | Bóg; bóg | rd ko | Dei gratia – z łaski Bożej
filius, filii | n2 | m | syn | rd |
populus, populi | n2 | m | lud | rd |
annus, anni | n2 | m | rok | rd cz | anno Domini – roku Pańskiego
servus, servi | n2 | m | sługa; niewolnik | rd ko | servus servorum Dei – tytuł papieża
amicus, amici | n2 | m | przyjaciel | rd |
locus, loci | n2 | m | miejsce | rd | in locum, qui dicitur… – do miejsca, które zwie się…
terminus, termini | n2 | m | granica; termin (sądowy) | pr ma |
campus, campi | n2 | m | pole | ma |
rivus, rivi | n2 | m | strumień | ma |
fluvius, fluvii | n2 | m | rzeka | ma |
episcopus, episcopi | n2 | m | biskup | ko ur |
archiepiscopus, archiepiscopi | n2 | m | arcybiskup | ko ur |
clericus, clerici | n2 | m | duchowny | ko |
canonicus, canonici | n2 | m | kanonik | ko |
monachus, monachi | n2 | m | mnich | ko |
parochus, parochi | n2 | m | proboszcz | ko |
plebanus, plebani | n2 | m | pleban, proboszcz | ko | termin średniowieczny
presbyter, presbyteri | n2r | m | kapłan, prezbiter | ko |
castellanus, castellani | n2 | m | kasztelan | ur |
palatinus, palatini | n2 | m | wojewoda | ur ep | w Polsce = wojewoda (nie „palatyn” jak na Węgrzech czy w Niemczech)
advocatus, advocati | n2 | m | wójt; obrońca | ur ep | w mieście lokacyjnym: wójt, nie adwokat
scultetus, sculteti | n2 | m | sołtys | ur ma |
capitaneus, capitanei | n2 | m | starosta | ur | XIV–XVIII w.
notarius, notarii | n2 | m | pisarz kancelarii; notariusz | ur dok |
nuntius, nuntii | n2 | m | posłaniec; poseł | ur | nuntii terrestres – posłowie ziemscy
consiliarius, consiliarii | n2 | m | doradca; senator | ur | consiliarii regni – rada koronna (senatorowie)
praelatus, praelati | n2 | m | prałat, dostojnik kościelny | ko ur |
patrinus, patrini | n2 | m | ojciec chrzestny | ko |
mansus, mansi | n2 | m | łan (jednostka gruntu) | mi ma | ok. 16–25 ha, zależnie od rodzaju łanu
laneus, lanei | n2 | m | łan | mi ma |
denarius, denarii | n2 | m | denar; pieniądz | mi |
grossus, grossi | n2 | m | grosz | mi | od XIV w.
scotus, scoti | n2 | m | skojec (1/24 grzywny) | mi |
florenus, floreni | n2 | m | floren; złoty polski | mi | florenus Polonicalis – złoty polski (30 groszy)
modius, modii | n2 | m | korzec (miara zboża) | mi |
vir, viri | n2r | m | mąż, mężczyzna | rd | discretus vir – roztropny mąż (tytuł)
puer, pueri | n2r | m | chłopiec | rd |
ager, agri | n2r | m | pole, rola | ma |
liber, libri | n2r | m | księga | rd |
tomus, tomi | n2 | m | tom, zwój | dok |
kmeto, kmetonis | n3 | m | kmieć (chłop na pełnym łanie) | ma ur | latynizacja polskiego słowa
bellum, belli | n2n | n | wojna | wo kr |
donum, doni | n2n | n | dar | rd |
verbum, verbi | n2n | n | słowo | rd |
consilium, consilii | n2n | n | rada; zamiar | rd ur | secreto Dei consilio – z tajemnego Bożego zamysłu
auxilium, auxilii | n2n | n | pomoc | rd |
regnum, regni | n2n | n | królestwo | rd ur | Regnum Poloniae – Królestwo Polskie, Korona
privilegium, privilegii | n2n | n | przywilej | dok pr |
iudicium, iudicii | n2n | n | sąd; wyrok | pr |
officium, officii | n2n | n | urząd; obowiązek | ur pr ep | officium castrense – urząd grodzki
castrum, castri | n2n | n | gród; zamek | ur ep | w aktach nowożytnych: gród = siedziba starosty i sądu grodzkiego
oppidum, oppidi | n2n | n | miasto, miasteczko | ma |
praedium, praedii | n2n | n | posiadłość | ma |
allodium, allodii | n2n | n | alod, własność dziedziczna | ma pr |
beneficium, beneficii | n2n | n | dobrodziejstwo; beneficjum kościelne; nadanie | ko ep | w kontekście kościelnym: uposażenie urzędu (beneficjum), nie „korzyść”
feudum, feudi | n2n | n | lenno | pr ep |
tributum, tributi | n2n | n | danina | ma |
servitium, servitii | n2n | n | służba; powinność | ma ep | servitia – posługi, powinności poddanych
dominium, dominii | n2n | n | władztwo; własność | pr |
signum, signi | n2n | n | znak | rd |
sigillum, sigilli | n2n | n | pieczęć | dok |
instrumentum, instrumenti | n2n | n | dokument (zwł. notarialny) | dok ep |
testimonium, testimonii | n2n | n | świadectwo | dok | in cuius rei testimonium – na świadectwo czego
festum, festi | n2n | n | święto | cz |
saeculum, saeculi | n2n | n | wiek; świat doczesny | ko |
testamentum, testamenti | n2n | n | testament | pr |
matrimonium, matrimonii | n2n | n | małżeństwo | ko pr |
sacramentum, sacramenti | n2n | n | sakrament; przysięga | ko |
iuramentum, iuramenti | n2n | n | przysięga | pr |
molendinum, molendini | n2n | n | młyn | ma |
convivium, convivii | n2n | n | uczta | kr |
damnum, damni | n2n | n | szkoda | pr | pis. śr. dampnum
gravamen, gravaminis | n3n | n | obciążenie, krzywda | pr |
praeiudicium, praeiudicii | n2n | n | szkoda, uszczerbek (prawny) | pr |
incommodum, incommodi | n2n | n | niewygoda, szkoda | pr |
terra, terrae | n1 | f | ziemia; kraj | rd ma ep | terra Cracoviensis – ziemia krakowska (jednostka terytorialna)
ecclesia, ecclesiae | n1 | f | kościół; Kościół | ko |
gratia, gratiae | n1 | f | łaska | rd dok | Dei gratia – z łaski Bożej; pis. śr. gracia
villa, villae | n1 | f | wieś | ma ep | w średniowieczu i nowożytności = wieś, nie „willa”
littera, litterae | n1 | f | litera; lm. list, dokument | dok | presentes litterae – niniejszy dokument
causa, causae | n1 | f | przyczyna; sprawa (sądowa) | pr |
poena, poenae | n1 | f | kara | pr | pis. śr. pena
memoria, memoriae | n1 | f | pamięć | dok | ad perpetuam rei memoriam – na wieczną rzeczy pamiątkę
familia, familiae | n1 | f | rodzina; czeladź, ludzie zależni | ma ep | familia monasterii – ludzie zależni od klasztoru
provincia, provinciae | n1 | f | prowincja | ko |
patria, patriae | n1 | f | ojczyzna | rd |
curia, curiae | n1 | f | dwór; kuria | ur |
anima, animae | n1 | f | dusza | ko | pro remedio animae – dla zbawienia duszy
pecunia, pecuniae | n1 | f | pieniądze | ma |
regina, reginae | n1 | f | królowa | ur |
filia, filiae | n1 | f | córka | rd |
domina, dominae | n1 | f | pani | ty |
decima, decimae | n1 | f | dziesięcina | ko ma |
sententia, sententiae | n1 | f | wyrok; zdanie | pr |
iniuria, iniuriae | n1 | f | krzywda, bezprawie | pr |
persona, personae | n1 | f | osoba | rd |
marca, marcae | n1 | f | grzywna (jednostka wagi i obrachunkowa) | mi | 1 grzywna = 4 wiardunki = 24 skojce = 48 groszy
parochia, parochiae | n1 | f | parafia | ko |
iustitia, iustitiae | n1 | f | sprawiedliwość | pr |
summa, summae | n1 | f | suma, kwota | ma |
vigilia, vigiliae | n1 | f | wigilia (dzień przed świętem) | cz |
octava, octavae | n1 | f | oktawa (8. dzień od święta) | cz |
feria, feriae | n1 | f | dzień tygodnia (w liczeniu kościelnym) | cz ep | feria secunda = poniedziałek, feria tertia = wtorek … feria sexta = piątek
dominica, dominicae | n1 | f | niedziela | cz |
septimana, septimanae | n1 | f | tydzień | cz | późnołac.; klas. hebdomas
pertinentia, pertinentiae | n1 | f | przynależność | dok ma | cum omnibus pertinentiis – ze wszystkimi przynależnościami
taberna, tabernae | n1 | f | karczma | ma |
scultetia, scultetiae | n1 | f | sołectwo | ma |
vidua, viduae | n1 | f | wdowa | rd |
matrina, matrinae | n1 | f | matka chrzestna | ko |
consors, consortis | n3i | f | małżonka; współuczestniczka | ko ep | w metrykach: consors = żona
uxor, uxoris | n3 | f | żona | rd |
tonsura, tonsurae | n1 | f | postrzyżyny; tonsura | kr ko |
gentilitas, gentilitatis | n3 | f | pogaństwo | kr | more gentilitatis – według pogańskiego obyczaju
infantia, infantiae | n1 | f | dzieciństwo | rd |
via, viae | n1 | f | droga | rd |
vita, vitae | n1 | f | życie | rd |
silva, silvae | n1 | f | las | ma |
aqua, aquae | n1 | f | woda | ma |
gloria, gloriae | n1 | f | chwała | ko |
molestia, molestiae | n1 | f | przykrość, uciążliwość | pr |
rex, regis | n3 | m | król | ur |
dux, ducis | n3 | m | książę; wódz | ur ep | w kontekście polskim X–XIV w.: książę, nie „wódz”
comes, comitis | n3 | m | komes, możny; towarzysz | ur ep | w Polsce piastowskiej: możny, urzędnik – nie „hrabia”
miles, militis | n3 | m | rycerz; żołnierz | wo ur ep | w XII–XV w. zwykle rycerz
princeps, principis | n3 | m | władca, książę | ur |
iudex, iudicis | n3 | m | sędzia | pr |
heres, heredis | n3 | m | dziedzic; spadkobierca | pr ma ep | heres de N. – dziedzic (właściciel) wsi N.
baro, baronis | n3 | m | możny, baron | ur |
abbas, abbatis | n3 | m | opat | ko |
frater, fratris | n3 | m | brat; zakonnik | rd ko |
pater, patris | n3 | m | ojciec | rd |
mater, matris | n3 | f | matka | rd |
homo, hominis | n3 | m | człowiek | rd |
mulier, mulieris | n3 | f | kobieta | rd |
successor, successoris | n3 | m | następca | dok | legitimi successores – prawowici następcy
predecessor, predecessoris | n3 | m | poprzednik | dok |
hospes, hospitis | n3 | m | gość; przybysz, osadnik | kr ma |
ferto, fertonis | n3 | m | wiardunek (1/4 grzywny) | mi |
procer, proceris | n3 | m | możny (zwykle lm. proceres) | kr ur |
pax, pacis | n3 | f | pokój | rd |
lex, legis | n3 | f | prawo, ustawa | pr |
vox, vocis | n3 | f | głos | rd |
mos, moris | n3 | m | obyczaj | rd |
civitas, civitatis | n3 | f | gród; miasto; państwo | ur ma ep | X–XII w.: gród, ośrodek grodowy; potem miasto
auctoritas, auctoritatis | n3 | f | powaga, władza | dok |
utilitas, utilitatis | n3 | f | pożytek; lm. pożytki z ziemi | dok ma |
libertas, libertatis | n3 | f | wolność; wolnizna; przywilej | pr ma ep | przy lokacji: lata wolnizny (zwolnienia od czynszu)
veritas, veritatis | n3 | f | prawda | rd |
hereditas, hereditatis | n3 | f | dziedzictwo; dobra dziedziczne | pr ma |
proprietas, proprietatis | n3 | f | własność | pr |
voluntas, voluntatis | n3 | f | wola | rd |
fidelitas, fidelitatis | n3 | f | wierność | ty | fidelitas tua – wierność twoja (zwrot grzecznościowy)
dignitas, dignitatis | n3 | f | godność | ur |
maiestas, maiestatis | n3 | f | majestat | ty | Sacra Regia Maiestas – Jego Królewska Mość
conventio, conventionis | n3 | f | zjazd; ugoda | ur pr | generalis conventio – sejm walny
donatio, donationis | n3 | f | nadanie, darowizna | dok ma |
venditio, venditionis | n3 | f | sprzedaż | ma |
possessio, possessionis | n3 | f | posiadanie; posiadłość | ma |
confirmatio, confirmationis | n3 | f | zatwierdzenie | dok |
constitutio, constitutionis | n3 | f | ustawa, konstytucja | pr | konstytucje sejmowe
indignatio, indignationis | n3 | f | gniew, oburzenie | dok | indignatio omnipotentis Dei – gniew Boga wszechmogącego
solutio, solutionis | n3 | f | zapłata, świadczenie | ma |
exactio, exactionis | n3 | f | pobór, ściąganie danin | ma |
innovatio, innovationis | n3 | f | odnowienie; zmiana | pr |
tenor, tenoris | n3 | m | treść, brzmienie | dok | tenore presentium – treścią niniejszego
munimen, muniminis | n3n | n | umocnienie, zabezpieczenie | dok |
nomen, nominis | n3n | n | imię; nazwa | rd | in nomine Domini
tempus, temporis | n3n | n | czas | rd |
corpus, corporis | n3n | n | ciało | rd |
opus, operis | n3n | n | dzieło, praca | rd |
genus, generis | n3n | n | ród; rodzaj | rd |
flumen, fluminis | n3n | n | rzeka | ma |
ius, iuris | n3n | n | prawo; uprawnienie | pr | iure hereditario – prawem dziedzicznym; ius Theutonicum – prawo niemieckie
caput, capitis | n3n | n | głowa; gardło (w prawie karnym) | pr | causae de capite – sprawy gardłowe
latus, lateris | n3n | n | bok | rd |
membrum, membri | n2n | n | członek (ciała) | pr | de capite et membris – o głowę i członki (sprawy karne)
mare, maris | n3ni | n | morze | rd |
testis, testis | n3i | m | świadek | dok pr | testes, presentibus hiis testibus
civis, civis | n3i | m | obywatel; mieszczanin | ur |
hostis, hostis | n3i | m | wróg | wo |
finis, finis | n3i | m | koniec; granica | ma |
affinis, affinis | n3i | m | sąsiad; (w Dagome) granica | ma |
pars, partis | n3i | f | część; strona (procesowa) | rd pr |
mors, mortis | n3i | f | śmierć | rd |
urbs, urbis | n3i | f | miasto | rd |
mons, montis | n3i | m | góra | ma |
infans, infantis | n3i | m | dziecko, niemowlę | ko |
gens, gentis | n3i | f | ród; lud | kr |
sedes, sedis | n3i | f | siedziba; stolica | ko | sedes apostolica – Stolica Apostolska
consensus, consensus | n4 | m | zgoda | pr |
census, census | n4 | m | czynsz | ma ep | w dokumentach lokacyjnych = czynsz, nie „spis”
exercitus, exercitus | n4 | m | wojsko | wo |
fructus, fructus | n4 | m | owoc; lm. pożytki, dochody | ma |
usus, usus | n4 | m | używanie, użytek | ma |
introitus, introitus | n4 | m | wejście | rd |
actus, actus | n4 | m | czynność; akt | pr |
spiritus, spiritus | n4 | m | duch | ko |
manus, manus | n4 | f | ręka; oddział | rd |
res, rei | n5 | f | rzecz; sprawa | rd | res publica – Rzeczpospolita
dies, diei | n5 | m | dzień | cz | die… mensis… – dnia… miesiąca…
fides, fidei | n5 | f | wiara; wierność | ko | fide digni – godni wiary
mensis, mensis | n3i | m | miesiąc | cz |
hora, horae | n1 | f | godzina | cz |

bonus, bona, bonum | a12 | | dobry; lm. n. bona – dobra, majątek | rd ma |
magnus, magna, magnum | a12 | | wielki | rd |
multus, multa, multum | a12 | | liczny, wiele | rd |
novus, nova, novum | a12 | | nowy | rd | nihil novi – nic nowego
sanctus, sancta, sanctum | a12 | | święty | ko |
beatus, beata, beatum | a12 | | błogosławiony; święty | ko | beatus Petrus – św. Piotr
praedictus, praedicta, praedictum | a12 | | wspomniany, wyżej wymieniony | dok | pis. śr. predictus
praefatus, praefata, praefatum | a12 | | wspomniany | dok | pis. śr. prefatus
perpetuus, perpetua, perpetuum | a12 | | wieczysty | dok |
proprius, propria, proprium | a12 | | własny | rd |
certus, certa, certum | a12 | | pewny, określony | rd |
publicus, publica, publicum | a12 | | publiczny | pr |
legitimus, legitima, legitimum | a12 | | prawowity; ślubny | pr ko | filius legitimus – syn z prawego łoża
dilectus, dilecta, dilectum | a12 | | umiłowany | ty | fidelis nobis dilecte – wierny nam miły
integer, integra, integrum | a12 | | cały | rd | in integro – w całości
longus, longa, longum | a12 | | długi | rd |
universus, universa, universum | a12 | | cały; lm. wszyscy | dok | universis presentes litteras inspecturis
iustus, iusta, iustum | a12 | | sprawiedliwy | pr |
liber, libera, liberum | a12 | | wolny | pr ma |
grandis, grande | a3_2 | | wielki | kr |
Theutonicus, Theutonica, Theutonicum | a12 | | niemiecki | pr ma | ius Theutonicum – prawo niemieckie
Polonicus, Polonica, Polonicum | a12 | | polski | pr | ius Polonicum – prawo polskie
Latinus, Latina, Latinum | a12 | | łaciński | rd |
secretus, secreta, secretum | a12 | | tajny | rd |
generosus, generosa, generosum | a12 | | urodzony (tytuł szlachecki) | ty ep | w aktach XVI–XVIII w. = szlachcic, nie „hojny”
famatus, famata, famatum | a12 | | sławetny (tytuł mieszczański) | ty ep |
honestus, honesta, honestum | a12 | | uczciwy (tytuł mieszczan i chłopów) | ty ep |
laboriosus, laboriosa, laboriosum | a12 | | pracowity (tytuł chłopski) | ty ep | w metrykach wskazuje stan chłopski
providus, provida, providum | a12 | | opatrzny (tytuł mieszczański) | ty ep |
discretus, discreta, discretum | a12 | | roztropny (tytuł: sołtys, mieszczanin) | ty ep |
strenuus, strenua, strenuum | a12 | | dzielny (tytuł rycerski) | ty ep |
reverendus, reverenda, reverendum | a12 | | wielebny (duchowni) | ty |
magnificus, magnifica, magnificum | a12 | | wielmożny | ty |
serenissimus, serenissima, serenissimum | a12 | | najjaśniejszy (monarcha) | ty |
religiosus, religiosa, religiosum | a12 | | zakonny; pobożny | ko ep | religiosi viri – zakonnicy
noster, nostra, nostrum | a12 | | nasz | rd |
vester, vestra, vestrum | a12 | | wasz | rd |
suus, sua, suum | a12 | | swój | rd | w łac. śr. często = eius (jego, jej)
meus, mea, meum | a12 | | mój | rd |
tuus, tua, tuum | a12 | | twój | rd |
ceterus, cetera, ceterum | a12 | | pozostały | rd |
antiquus, antiqua, antiquum | a12 | | dawny | rd |
dignus, digna, dignum | a12 | | godny | rd |
nullus, nulla, nullum | a12p | | żaden | rd |
ullus, ulla, ullum | a12p | | jakikolwiek | rd |
totus, tota, totum | a12p | | cały | rd |
unus, una, unum | a12p | | jeden | rd |
solus, sola, solum | a12p | | sam, jedyny | rd |
duo | x | liczebnik (duo, duae, duo; acc. duos) | dwa | rd |
tres | x | liczebnik (tres, tria; gen. trium) | trzy | rd |
primus, prima, primum | a12 | | pierwszy | cz |
secundus, secunda, secundum | a12 | | drugi | cz |
tertius, tertia, tertium | a12 | | trzeci | cz |
quartus, quarta, quartum | a12 | | czwarty | cz |
quintus, quinta, quintum | a12 | | piąty | cz |
sextus, sexta, sextum | a12 | | szósty | cz |
decimus, decima, decimum | a12 | | dziesiąty | cz |
vicesimus, vicesima, vicesimum | a12 | | dwudziesty | cz |
quinquagesimus, quinquagesima, quinquagesimum | a12 | | pięćdziesiąty | cz |
sexagesimus, sexagesima, sexagesimum | a12 | | sześćdziesiąty | cz |
septuagesimus, septuagesima, septuagesimum | a12 | | siedemdziesiąty | cz |
centesimus, centesima, centesimum | a12 | | setny | cz |
ducentesimus, ducentesima, ducentesimum | a12 | | dwusetny | cz |
trecentesimus, trecentesima, trecentesimum | a12 | | trzysetny | cz |
quingentesimus, quingentesima, quingentesimum | a12 | | pięćsetny | cz |
sexcentesimus, sexcentesima, sexcentesimum | a12 | | sześćsetny | cz |
millesimus, millesima, millesimum | a12 | | tysięczny | cz | anno Domini millesimo… – roku Pańskiego tysięcznego…
proximus, proxima, proximum | a12 | | najbliższy | cz | feria secunda proxima post… – w najbliższy poniedziałek po…
omnis, omne | a3_2 | | każdy; lm. wszyscy | rd |
communis, commune | a3_2 | | wspólny | pr |
fidelis, fidele | a3_2 | | wierny; lm. wierni | ko ty | Christi fideles – wierni chrześcijanie
nobilis, nobile | a3_2 | | szlachetny; szlachcic | ty ep |
venerabilis, venerabile | a3_2 | | czcigodny (duchowni) | ty |
illustris, illustre | a3_2 | | oświecony (książęta) | ty |
terrestris, terrestre | a3_2 | | ziemski | ur | nuntii terrestres – posłowie ziemscy
castrensis, castrense | a3_2 | | grodzki | ur pr | acta castrensia – akta grodzkie
capitanealis, capitaneale | a3_2 | | starościński | ur |
generalis, generale | a3_2 | | ogólny; walny | ur |
spiritualis, spirituale | a3_2 | | duchowny | ko |
temporalis, temporale | a3_2 | | doczesny, świecki | ko |
rationabilis, rationabile | a3_2 | | rozumny, słuszny | pr |
omnipotens, omnipotentis | a3_1 | | wszechmogący | ko |
praesens, praesentis | a3_1 | | obecny; niniejszy | dok | per presentes (litteras) – niniejszym
aequus, aequa, aequum | a12 | | słuszny, równy | pr |
maior, maius | a3c | | większy; starszy | rd pr | causae maiores – sprawy większe (karne)
minor, minus | a3c | | mniejszy; młodszy | rd |

is | pron:is | zaimek | on, ten | rd |
hic | pron:hic | zaimek | ten (tutaj) | rd |
ille | pron:ille | zaimek | tamten; ów | rd |
iste | pron:iste | zaimek | ten (przy tobie) | rd |
ipse | pron:ipse | zaimek | sam; tenże | rd |
idem | pron:idem | zaimek | ten sam | rd dok | eidem Petro – temuż Piotrowi
qui | pron:qui | zaimek | który | rd |
quis | pron:quis | zaimek | kto? co?; ktoś | rd | si quis – jeśli ktoś
quilibet | pron:quilibet | zaimek | każdy, jakikolwiek | rd |
ego | pron:ego | zaimek | ja | rd |
tu | pron:tu | zaimek | ty | rd |
sui | pron:sui | zaimek | siebie | rd |

in | x | przyimek + abl. / + acc. | w, na (+ abl.); do, na (+ acc.) | rd |
cum | x | przyimek + abl.; spójnik | z (+ abl.); gdy, ponieważ | rd |
ad | x | przyimek + acc. | do, ku; przy | rd |
ab | x | przyimek + abl. (a, ab) | od; przez (przy stronie biernej) | rd |
a | x | przyimek + abl. | od; przez | rd |
de | x | przyimek + abl. | z, od; o | rd | de villa N. – ze wsi N.; w łac. śr. często zamiast dopełniacza
ex | x | przyimek + abl. (e, ex) | z | rd |
per | x | przyimek + acc. | przez | rd |
pro | x | przyimek + abl. | za; dla; w zamian za | rd |
sine | x | przyimek + abl. | bez | rd |
sub | x | przyimek + abl. / + acc. | pod; za (czasów) | rd |
super | x | przyimek + acc. / + abl. | nad; o, w sprawie | rd |
post | x | przyimek + acc. | po | rd cz |
ante | x | przyimek + acc. | przed | rd cz |
infra | x | przyimek + acc. | poniżej; (śr.) w obrębie | rd ep | w łac. śr. często = intra (w obrębie)
intra | x | przyimek + acc. | wewnątrz, w obrębie | rd |
inter | x | przyimek + acc. | między | rd |
contra | x | przyimek + acc. | przeciw | rd |
propter | x | przyimek + acc. | z powodu | rd |
apud | x | przyimek + acc. | u, przy | rd |
circa | x | przyimek + acc. | około, wokół | rd |
iuxta | x | przyimek + acc. | obok; według | rd |
secundum | x | przyimek + acc. | według | rd |
usque | x | przysłówek | aż | rd | usque ad – aż do
et | x | spójnik | i; także | rd |
ac | x | spójnik | i | rd |
atque | x | spójnik | i | rd |
sed | x | spójnik | lecz | rd |
vel | x | spójnik | lub | rd |
aut | x | spójnik | albo | rd |
nec | x | spójnik | i nie, ani | rd |
neque | x | spójnik | i nie, ani | rd |
quod | x | spójnik | że; ponieważ | rd ep | w łac. śr. quod + verbum finitum zastępuje AcI
quia | x | spójnik | ponieważ; (śr.) że | rd ep |
quoniam | x | spójnik | ponieważ | rd |
ut | x | spójnik | aby; że; jak | rd |
ne | x | spójnik | aby nie | rd |
si | x | spójnik | jeśli | rd |
nisi | x | spójnik | jeśli nie; chyba że | rd |
dum | x | spójnik | podczas gdy; dopóki | rd |
quando | x | spójnik / przysłówek | kiedy | rd |
ubi | x | spójnik / przysłówek | gdzie; gdy | rd |
unde | x | przysłówek | skąd; dlatego | rd |
sicut | x | spójnik | jak, tak jak | rd |
sicuti | x | spójnik | tak jak | rd |
tam | x | przysłówek | tak | rd | tam… quam… – zarówno… jak i…
quam | x | przysłówek / spójnik | jak; niż | rd |
etiam | x | przysłówek | także, nawet | rd |
quoque | x | przysłówek | także | rd |
autem | x | spójnik | zaś, natomiast | rd |
enim | x | spójnik | bowiem | rd |
igitur | x | spójnik | więc, zatem | rd |
ergo | x | spójnik | więc | rd |
namque | x | spójnik | bowiem; otóż | rd |
tamen | x | przysłówek | jednak | rd |
vero | x | przysłówek | zaś; zaiste | rd |
item | x | przysłówek | także, również; dalej | dok | w wyliczeniach i regestach
non | x | przysłówek | nie | rd |
iam | x | przysłówek | już | rd |
semper | x | przysłówek | zawsze | rd |
nunc | x | przysłówek | teraz | rd |
tunc | x | przysłówek | wtedy | rd |
deinde | x | przysłówek | następnie | rd |
deinceps | x | przysłówek | odtąd, w przyszłości | dok |
postea | x | przysłówek | potem | rd |
statim | x | przysłówek | natychmiast | rd |
perpetuo | x | przysłówek | na wieczność, wieczyście | dok |
recte | x | przysłówek | prosto; słusznie | rd |
personaliter | x | przysłówek | osobiście | pr |
plenarie | x | przysłówek | w pełni, całkowicie | pr |
libere | x | przysłówek | swobodnie | rd |
exinde | x | przysłówek | stamtąd; odtąd | rd |
ibi | x | przysłówek | tam | rd |
prope | x | przysłówek / przyimek + acc. | blisko | rd |
olim | x | przysłówek | niegdyś | rd |
quondam | x | przysłówek | niegdyś; (przy imieniu) zmarły, śp. | pr ep | quondam Nicolaus – śp. Mikołaj
hodie | x | przysłówek | dziś | rd |
videlicet | x | przysłówek | mianowicie | dok |
secus | x | przysłówek | inaczej | dok | secus non facturus – nie czyniąc inaczej
verum | x | spójnik | lecz | rd | non solum… verum etiam – nie tylko… lecz także
solum | x | przysłówek | tylko | rd |
amen | x | wykrz. | amen, niech się stanie | ko |
Sclavonice | x | przysłówek | po słowiańsku | kr |
`;

/* Parser słownika */
LAT.parseLexicon = function (raw, prefix) {
  var out = [];
  raw.split('\n').forEach(function (line, i) {
    line = line.trim();
    if (!line) return;
    var c = line.split('|').map(function (s) { return s.trim(); });
    if (c.length < 4 || !c[3]) return;
    var e = {
      id: (prefix || 'w') + i,
      head: c[0],
      parts: c[0].split(',').map(function (s) { return s.trim(); }),
      cls: c[1],
      g: c[2],
      pl: c[3],
      fields: (c[4] || '').split(/\s+/).filter(Boolean),
      note: c[5] || ''
    };
    if (/^pron:/.test(e.cls)) { e.pron = e.cls.slice(5); e.cls = 'pron'; }
    out.push(e);
  });
  return out;
};

LAT.FIELDS = {
  rd: 'Rdzeń', dok: 'Dokumenty', pr: 'Prawo i sądy', ko: 'Kościół', ur: 'Urzędy i stany',
  ty: 'Tytulatura', ma: 'Majątek i gospodarka', mi: 'Miary i monety', cz: 'Czas i datowanie',
  kr: 'Kroniki', wo: 'Wojsko', ep: 'Znaczenia zależne od epoki'
};

LAT.CLS_LABEL = {
  n1: 'rzecz. dekl. I', n2: 'rzecz. dekl. II', n2r: 'rzecz. dekl. II (-er)', n2n: 'rzecz. dekl. II (n.)',
  n3: 'rzecz. dekl. III', n3i: 'rzecz. dekl. III (temat na -i)', n3n: 'rzecz. dekl. III (n.)', n3ni: 'rzecz. dekl. III (n., temat na -i)',
  n4: 'rzecz. dekl. IV', n5: 'rzecz. dekl. V',
  a12: 'przym. dekl. I/II', a12p: 'przym. zaimkowy (gen. -ius)', a3_1: 'przym. dekl. III (jednokońcówkowy)',
  a3_2: 'przym. dekl. III (dwukońcówkowy)', a3_3: 'przym. dekl. III (trzykońcówkowy)', a3c: 'stopień wyższy',
  pron: 'zaimek', v1: 'czas. koniug. I', v2: 'czas. koniug. II', v3: 'czas. koniug. III', v3i: 'czas. koniug. III (-io)',
  v4: 'czas. koniug. IV', v1d: 'deponens koniug. I', v2d: 'deponens koniug. II', v3d: 'deponens koniug. III',
  v3id: 'deponens koniug. III (-ior)', v4d: 'deponens koniug. IV', v2sd: 'semideponens',
  sum: 'czas. nieregularny', possum: 'czas. nieregularny', volo: 'czas. nieregularny', nolo: 'czas. nieregularny',
  fio: 'czas. nieregularny', eo: 'czas. nieregularny', fer: 'czas. nieregularny (jak fero)', x: 'nieodmienne'
};
