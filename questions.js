const QUESTIONS_DB = [
  // --- 1. TÉMAKÖR: Magok terjedése (13 kérdés) ---
  {
    category: "Magok terjedése",
    question: "Milyen szerkezettel utazik a gyermekláncfű (pitypang) magja a levegőben?",
    options: ["Ejtőernyőszerű bóbita (repítőszőr)", "Fás szárnyacskák", "Horgas tüskék"],
    correct: "Ejtőernyőszerű bóbita (repítőszőr)"
  },
  {
    category: "Magok terjedése",
    question: "Mi segíti a juharfa ikerlependék termését a pörgő repülésben?",
    options: ["Helikopterszerű repítőszárny", "Ragadós nedvréteg", "Levegővel teli úszóhólyag"],
    correct: "Helikopterszerű repítőszárny"
  },
  {
    category: "Magok terjedése",
    question: "Hogyan kapaszkodik meg a bojtorján termése az állatok bundájában?",
    options: ["Apró visszahajló horgokkal", "Mágneses szőrökkel", "Erős ragasztóanyaggal"],
    correct: "Apró visszahajló horgokkal"
  },
  {
    category: "Magok terjedése",
    question: "Hogyan terjed a cseresznye és a meggy magja a természetben?",
    options: ["Madarak eszik meg, és sértetlenül kiürítik", "A szél fújja el kilométerekre", "A víz felszínén úszik el"],
    correct: "Madarak eszik meg, és sértetlenül kiürítik"
  },
  {
    category: "Magok terjedése",
    question: "Melyik madár felelős rengeteg tölgyfa makkjának elásásáért és terjesztéséért?",
    options: ["Szajkó (mátyásmadár)", "Fecske", "Gyurgyalag"],
    correct: "Szajkó (mátyásmadár)"
  },
  {
    category: "Magok terjedése",
    question: "Miért képes a kókuszdió akár több száz kilométert utazni az óceánon?",
    options: ["Rostos, levegővel teli, vízhatlan héja van", "Mert hajtómotorként kilövelli a vizet", "Mert nincs súlya"],
    correct: "Rostos, levegővel teli, vízhatlan héja van"
  },
  {
    category: "Magok terjedése",
    question: "Milyen különleges módszerrel szórja el magvait a nebáncsvirág?",
    options: ["Hirtelen felpattanva kilövelli őket", "A hangyák hátára ragasztja", "A víz alá süllyeszti"],
    correct: "Hirtelen felpattanva kilövelli őket"
  },
  {
    category: "Magok terjedése",
    question: "Miért lapos a tökmag formája?",
    options: ["Lapos rétegben jól elfér a tökben és ráfekszik a talajra", "Hogy a szél vitorlaként elvigye", "Mert a hideg összenyomta"],
    correct: "Lapos rétegben jól elfér a tökben és ráfekszik a talajra"
  },
  {
    category: "Magok terjedése",
    question: "Melyik növény magjait terjesztik előszeretettel a hangyák a rajta lévő olajos testecske miatt?",
    options: ["Hóvirág és odvas keltike", "Kukorica", "Búza"],
    correct: "Hóvirág és odvas keltike"
  },
  {
    category: "Magok terjedése",
    question: "Milyen növényi magot fúj el a szél fehér vattaszerű pamacsokban tavasszal?",
    options: ["Nyárfa magját", "Diót", "Tököt"],
    correct: "Nyárfa magját"
  },
  {
    category: "Magok terjedése",
    question: "Hogyan utazik a ragadós galaj a mezőn?",
    options: ["Tüskés szőreivel az ember ruhájára és állatokra tapad", "Golyóként gurul a fűben", "A föld alatt fúr járatot"],
    correct: "Tüskés szőreivel az ember ruhájára és állatokra tapad"
  },
  {
    category: "Magok terjedése",
    question: "Milyen közeg szállítja a sárga vízitök és a tavirózsa magjait?",
    options: ["Víz sodrása", "Hóvihar", "Föld alatti vakondok"],
    correct: "Víz sodrása"
  },
  {
    category: "Magok terjedése",
    question: "Miért gyűjti össze a mókus a mogyorót és a makkot ősszel?",
    options: ["Téli raktárba rejti, de sokat elfelejt, amik tavasszal kicsíráznak", "Fészket épít belőlük a fán", "Csak játszik velük"],
    correct: "Téli raktárba rejti, de sokat elfelejt, amik tavasszal kicsíráznak"
  },

  // --- 2. TÉMAKÖR: A mag belső részei és csírázás (12 kérdés) ---
  {
    category: "A mag részei",
    question: "Mi a legkülső réteg, ami megvédi a magot a kiszáradástól és sérüléstől?",
    options: ["Maghéj", "Sziklevél", "Csíragyökér"],
    correct: "Maghéj"
  },
  {
    category: "A mag részei",
    question: "Mi az a magban található apró rész, amiből majd az új növény kifejlődik?",
    options: ["Csíra (embrió)", "Magléc", "Héjkéreg"],
    correct: "Csíra (embrió)"
  },
  {
    category: "A mag részei",
    question: "Mi a babszem szikleveleinek legfőbb feladata a csírázás idején?",
    options: ["Tápanyagot (fehérjét, keményítőt) raktározni a csírának", "Elnyelni a napfényt", "Vizet párologtatni"],
    correct: "Tápanyagot (fehérjét, keményítőt) raktározni a csírának"
  },
  {
    category: "A mag részei",
    question: "A csírázás során melyik rész tör ki először a maghéjon keresztül?",
    options: ["Gyököcske (gyökérkezdemény)", "Virágkezdemény", "Zöld levél"],
    correct: "Gyököcske (gyökérkezdemény)"
  },
  {
    category: "A mag részei",
    question: "Milyen 3 alapvető feltétel kell a magvak csírázásának megindulásához?",
    options: ["Víz, oxigén (levegő) és megfelelő hőmérséklet", "Erős napsütés, szél és trágya", "Fagy, sötétség és szárazság"],
    correct: "Víz, oxigén (levegő) és megfelelő hőmérséklet"
  },
  {
    category: "A mag részei",
    question: "Szüksége van-e fényre a babszemnek a talaj alatt ahhoz, hogy a csírázás beinduljon?",
    options: ["Nem, a kezdeti raktározott tápanyagból fejlődik a sötétben is", "Igen, fény nélkül nem tud vizet inni", "Csak zöld fényre van szüksége"],
    correct: "Nem, a kezdeti raktározott tápanyagból fejlődik a sötétben is"
  },
  {
    category: "A mag részei",
    question: "Mi történik a maggal közvetlenül a csírázás legelső lépéseként, amikor vizet kap?",
    options: ["Megduzzad és megrepeszti a héját", "Azonnal virágot bont", "Kiszárad és elporlad"],
    correct: "Megduzzad és megrepeszti a héját"
  },
  {
    category: "A mag részei",
    question: "Miből fejlődnek ki a csíranövény legelső föld feletti zöld levelei?",
    options: ["Rügyecskéből", "Gyököcskéből", "Maghéjból"],
    correct: "Rügyecskéből"
  },
  {
    category: "A mag részei",
    question: "Miért zsugorodnak össze és hullanak le a sziklevelek, miután a növény kilevelesedett?",
    options: ["Mert a csíra elhasználta a bennük lévő raktározott tápanyagot", "Mert megcsípte őket a fagy", "Mert elrágták a hangyák"],
    correct: "Mert a csíra elhasználta a bennük lévő raktározott tápanyagot"
  },
  {
    category: "A mag részei",
    question: "Mi a maghéjon látható kis bemélyedés vagy pont (köldökfolt) szerepe?",
    options: ["Itt kapcsolódott korábban a mag az anyanövény termésfalához", "Itt lélegzik be a szén-dioxidot", "Itt lát ki a csíra a külvilágra"],
    correct: "Itt kapcsolódott korábban a mag az anyanövény termésfalához"
  },
  {
    category: "A mag részei",
    question: "Miért áztatjuk be a babszemeket a boncolás vagy vetés előtti napon?",
    options: ["Hogy felpuhuljon a maghéj és a csíra felébredjen", "Hogy kimossuk belőle a színeket", "Hogy elpusztítsuk a magot"],
    correct: "Hogy felpuhuljon a maghéj és a csíra felébredjen"
  },
  {
    category: "A mag részei",
    question: "Melyik rész nem található meg egy nyugalomban lévő száraz babszem belsejében?",
    options: ["Kifejlett sárga virág", "Gyököcske kezdemény", "Két darab sziklevél"],
    correct: "Kifejlett sárga virág"
  },

  // --- 3. TÉMAKÖR: Egyszikűek és Kétszikűek (13 kérdés) ---
  {
    category: "Egyszikű - Kétszikű",
    question: "Hány sziklevele van a fejlődő búzacsírának a mag belsejében?",
    options: ["Egyetlen sziklevél", "Két sziklevél", "Négy sziklevél"],
    correct: "Egyetlen sziklevél"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Hány sziklevél található egy beáztatott babszem héja alatt?",
    options: ["Kettő (könnyen kettényitható)", "Egy", "Három"],
    correct: "Kettő (könnyen kettényitható)"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Melyik növénycsoportba tartozik a kukorica a csírázása alapján?",
    options: ["Egyszikű növény", "Kétszikű növény", "Harangvirágú"],
    correct: "Egyszikű növény"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Melyik csoportba soroljuk a veteménybabot és a zöldborsót?",
    options: ["Kétszikűek", "Egyszikűek", "Páfrányok"],
    correct: "Kétszikűek"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Milyen a levelek erezete általában az egyszikű növényeknél (pl. fűfélék, búza)?",
    options: ["Párhuzamos erezetű", "Hálózatos vagy tenyeres erezetű", "Nincs rajtuk semmilyen erezet"],
    correct: "Párhuzamos erezetű"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Milyen a levelek erezete a legtöbb kétszikű kerti zöldségnél (pl. tök, napraforgó)?",
    options: ["Hálózatos vagy ujjasan elágazó", "Egyenes, párhuzamos csíkok", "Körkörös gyűrűs"],
    correct: "Hálózatos vagy ujjasan elágazó"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Milyen a gyökérzete a kifejlett egyszikű növényeknek (pl. fű, vöröshagyma)?",
    options: ["Mellékgyökérzet (bojtos gyökérzet)", "Erős, mélyre hatoló karógyökér", "Léggyökér hálózat"],
    correct: "Mellékgyökérzet (bojtos gyökérzet)"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Milyen gyökérzettel rendelkezik a sárgarépa és a bab (kétszikűek)?",
    options: ["Főgyökérrendszer (vastag karógyökér elágazásokkal)", "Bojtos mellékgyökérzet", "Úszó vízgyökérzet"],
    correct: "Főgyökérrendszer (vastag karógyökér elágazásokkal)"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Egyszikű vagy kétszikű növény-e a vöröshagyma és a fokhagyma?",
    options: ["Egyszikű növény", "Kétszikű növény", "Mohaféle"],
    correct: "Egyszikű növény"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Egyszikű vagy kétszikű növény a sulikertben magasodó napraforgó?",
    options: ["Kétszikű növény", "Egyszikű növény", "Tűlevelű növény"],
    correct: "Kétszikű növény"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Melyik növény tartozik az alábbiak közül az egyszikűek osztályába?",
    options: ["Búza", "Retek", "Paradicsom"],
    correct: "Búza"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Melyik növény kétszikű az alábbi három közül?",
    options: ["Sütőtök", "Rozs", "Zab"],
    correct: "Sütőtök"
  },
  {
    category: "Egyszikű - Kétszikű",
    question: "Hol tárolja a kukoricaszem a tápanyagai nagy részét a csíra mellett?",
    options: ["A lisztes belső raktárszövetben (endospermium)", "A vastag gyökerében", "A levél szélén"],
    correct: "A lisztes belső raktárszövetben (endospermium)"
  },

  // --- 4. TÉMAKÖR: Termés vagy mag? (12 kérdés) ---
  {
    category: "Termés vagy mag?",
    question: "Miből képződik a mag a növény elvirágzása után?",
    options: ["A virágban lévő megtermékenyített magkezdeményből", "A zöld levelekből", "A szár tövéből"],
    correct: "A virágban lévő megtermékenyített magkezdeményből"
  },
  {
    category: "Termés vagy mag?",
    question: "Miből alakul ki a termés fala (pl. a húsos alma vagy a bab hüvelye)?",
    options: ["A virág magházának megvastagodó falából", "A növény főgyökeréből", "A lehullott sziromlevelekből"],
    correct: "A virág magházának megvastagodó falából"
  },
  {
    category: "Termés vagy mag?",
    question: "A bab hüvelye (amiben a szemek ülnek) mag vagy termés?",
    options: ["Hüvelytermés (ami magokat zár magába)", "Maga a mag", "Gyökérhajtás"],
    correct: "Hüvelytermés (ami magokat zár magába)"
  },
  {
    category: "Termés vagy mag?",
    question: "Amit a boltban pirított 'napraforgómagként' veszünk héjasan, az botanikailag mi?",
    options: ["Zárt kaszattermés (amiben bent rejtőzik a valódi mag)", "Csak egy puszta levélke", "Egyetlen csupasz maghéj"],
    correct: "Zárt kaszattermés (amiben bent rejtőzik a valódi mag)"
  },
  {
    category: "Termés vagy mag?",
    question: "Mi a piros paradicsom botanikai szempontból?",
    options: ["Bogyótermés (húsos belsővel, benne a magokkal)", "Óriási mag", "Gyökérgumó"],
    correct: "Bogyótermés (húsos belsővel, benne a magokkal)"
  },
  {
    category: "Termés vagy mag?",
    question: "Hány magot találunk általában egyetlen cseresznye belsejében?",
    options: ["Pontosan egy magot (csonthéjba zárva)", "Több száz apró magot", "Egyetlen magja sincs"],
    correct: "Pontosan egy magot (csonthéjba zárva)"
  },
  {
    category: "Termés vagy mag?",
    question: "Milyen terméstípusba tartozik az alma és a körte?",
    options: ["Almatermés (húsos áltermés)", "Száraz hüvelytermés", "Becőtermés"],
    correct: "Almatermés (húsos áltermés)"
  },
  {
    category: "Termés vagy mag?",
    question: "A zöldborsó zöld hüvelye a termés, de mik maguk a zöld golyócskák benne?",
    options: ["A növény valódi magjai", "Apró termések", "Kis gyökérgumók"],
    correct: "A növény valódi magjai"
  },
  {
    category: "Termés vagy mag?",
    question: "Miért nevezik a máktokot 'száraz felnyíló termésnek'?",
    options: ["Mert éréskor kiszárad, és apró lyukain át kiszórja a rengeteg magot", "Mert vízbe esve elrohad", "Mert nincs benne mag"],
    correct: "Mert éréskor kiszárad, és apró lyukain át kiszórja a rengeteg magot"
  },
  {
    category: "Termés vagy mag?",
    question: "A dió kemény, fás héja a maghéj vagy a termés része?",
    options: ["A csonthéjas termés belső, megfásodott fala", "A csíra burka", "Egy megkövesedett levél"],
    correct: "A csonthéjas termés belső, megfásodott fala"
  },
  {
    category: "Termés vagy mag?",
    question: "Mi található az eper felületén lévő rengeteg apró sárgásbarna pontban?",
    options: ["Ezek mind-mind apró valódi aszmagtermések, bennük a maggal", "Csak por és piszok", "Kártevő rovarok petéi"],
    correct: "Ezek mind-mind apró valódi aszmagtermések, bennük a maggal"
  },
  {
    category: "Termés vagy mag?",
    question: "Mi a búzaszem és kukoricaszem szakszerű botanikai elnevezése?",
    options: ["Szemtermés (ahol a termésfal összenőtt a maghéjjal)", "Csonthéjas termés", "Makktermés"],
    correct: "Szemtermés (ahol a termésfal összenőtt a maghéjjal)"
  }
];
