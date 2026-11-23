const QUESTIONS_DB = [
  // 1. BIOLÓGIAI ALAPOK (1-12)
  {
    category: "Biológiai alapok",
    question: "Miért NEM tartoznak a gombák a növények országába?",
    options: ["Mert nincs zöld színtestük (klorofilljuk)", "Mert tudnak szaladni", "Mert van csontvázuk", "Mert csak vízben élnek"],
    correct: "Mert nincs zöld színtestük (klorofilljuk)"
  },
  {
    category: "Biológiai alapok",
    question: "Milyen anyagból épül fel a gombák sejtfala?",
    options: ["Kitinből (mint a bogarak páncélja)", "Fából", "Mészkőből", "Vasból"],
    correct: "Kitinből (mint a bogarak páncélja)"
  },
  {
    category: "Biológiai alapok",
    question: "Hogyan szaporodnak a gombák?",
    options: ["Spórákkal", "Magokkal", "Tojásokkal", "Gumókkal"],
    correct: "Spórákkal"
  },
  {
    category: "Biológiai alapok",
    question: "Mi található a föld alatt, ami a gomba valódi, hatalmas teste?",
    options: ["A gombafonalak szövedéke (micélium)", "A gyökérzet", "A makk", "A levélnyél"],
    correct: "A gombafonalak szövedéke (micélium)"
  },
  {
    category: "Biológiai alapok",
    question: "Hogyan táplálkoznak a gombák?",
    options: ["Külső emésztéssel (emésztőnedvet bocsátanak ki)", "Napfényből készítenek cukrot", "Megrágják a leveleket", "Csak tiszta vizet isznak"],
    correct: "Külső emésztéssel (emésztőnedvet bocsátanak ki)"
  },
  {
    category: "Biológiai alapok",
    question: "Miért képesek a gombák teljes sötétségben (pl. pincében) is nőni?",
    options: ["Mert nincs szükségük napfényre a táplálkozáshoz", "Mert világítanak a sötétben", "Mert a holdfényből élnek", "Mert téli álmot alszanak"],
    correct: "Mert nincs szükségük napfényre a táplálkozáshoz"
  },
  {
    category: "Biológiai alapok",
    question: "Melyik részét látjuk a gombának az erdő talaján?",
    options: ["A termőtestet (kalap és tönk)", "A virágát", "A gyökerét", "A levelét"],
    correct: "A termőtestet (kalap és tönk)"
  },
  {
    category: "Biológiai alapok",
    question: "Melyik élőlénycsoporttal állnak közelebbi rokonságban a gombák?",
    options: ["Az állatokkal", "A fenyőfákkal", "A mohákkal", "A páfrányokkal"],
    correct: "Az állatokkal"
  },
  {
    category: "Biológiai alapok",
    question: "Minek nevezzük a gombatestet felépítő vékony, mikroszkopikus fonalakat?",
    options: ["Hifáknak", "Gyökérszőröknek", "Levélereknek", "Tüskéknek"],
    correct: "Hifáknak"
  },
  {
    category: "Biológiai alapok",
    question: "Miért nőnek ki a gombák gyakran eső után?",
    options: ["Mert a víz gyorsan megduzzasztja a gombafonalakat", "Mert az esővel esnek le az égből", "Mert félnek a napsütéstől", "Mert ilyenkor bújnak elő a földből melegedni"],
    correct: "Mert a víz gyorsan megduzzasztja a gombafonalakat"
  },
  {
    category: "Biológiai alapok",
    question: "Melyik országba tartoznak a gombák az élővilágban?",
    options: ["Saját, önálló országot alkotnak", "A növények országába", "Az állatok országába", "A baktériumok országába"],
    correct: "Saját, önálló országot alkotnak"
  },
  {
    category: "Biológiai alapok",
    question: "Hol képződnek a kalapos gombák spórái?",
    options: ["A kalap alatti lemezekben vagy csövecskékben", "A tönk belsejében", "A kalap tetején", "A föld alatti bocskorban"],
    correct: "A kalap alatti lemezekben vagy csövecskékben"
  },

  // 2. FAJISMERET ÉS ÉLŐHELYEK (13-26)
  {
    category: "Fajismeret",
    question: "Mi található az ízletes vargánya kalapja alatt lemezek helyett?",
    options: ["Apró csövecskék (szivacsos réteg)", "Tüskék", "Pikkelyek", "Magvak"],
    correct: "Apró csövecskék (szivacsos réteg)"
  },
  {
    category: "Fajismeret",
    question: "Hol él a mezei csiperke?",
    options: ["Nyílt réteken, legelőkön, parkokban", "Csak fák törzsén magasan", "A folyó medrében", "Sötét barlangokban"],
    correct: "Nyílt réteken, legelőkön, parkokban"
  },
  {
    category: "Fajismeret",
    question: "Melyik fafajjal él együtt leggyakrabban a piros kalapú légyölő galóca?",
    options: ["Nyírfával és lucfenyővel", "Kaktusszal", "Náddal", "Fűzfával"],
    correct: "Nyírfával és lucfenyővel"
  },
  {
    category: "Fajismeret",
    question: "Melyik ehető gomba hasonlít egy magas, pikkelyes esernyőre?",
    options: ["A nagy őzlábgomba", "A bükkfatapló", "A sárga rókagomba", "A csiperke"],
    correct: "A nagy őzlábgomba"
  },
  {
    category: "Fajismeret",
    question: "Milyen különleges tulajdonsága van a sárga rókagombának?",
    options: ["Sosem kukacosodik és sárgabarack illata van", "Sötétben világít", "Fák törzsén nő", "Halálosan mérgező"],
    correct: "Sosem kukacosodik és sárgabarack illata van"
  },
  {
    category: "Fajismeret",
    question: "Melyik gombával téveszthető össze a mérgező világító tölcsérgomba?",
    options: ["Az ehető sárga rókagombával", "A nagy őzlábgombával", "A bükkfataplóval", "A csiperkével"],
    correct: "Az ehető sárga rókagombával"
  },
  {
    category: "Fajismeret",
    question: "Hol él a késői laskagomba?",
    options: ["Elhalt lombos fák (pl. nyár, bükk) törzsén", "A füves réten", "A búzamezőn", "A homokos tengerparton"],
    correct: "Elhalt lombos fák (pl. nyár, bükk) törzsén"
  },
  {
    category: "Fajismeret",
    question: "Mire használták régen a kiszárított bükkfataplót?",
    options: ["Tűzgyújtásra (taplónak)", "Levesfőzésre", "Sajtérlelésre", "Kenyérsütésre"],
    correct: "Tűzgyújtásra (taplónak)"
  },
  {
    category: "Fajismeret",
    question: "Melyik taplógombát használják a gyógyászatban immunerősítésre?",
    options: ["A pecsétviaszgombát", "A gyilkos galócát", "A légyölő galócát", "A lisztharmatot"],
    correct: "A pecsétviaszgombát"
  },
  {
    category: "Fajismeret",
    question: "Melyik fafajokkal él leggyakrabban együtt a gyilkos galóca?",
    options: ["Tölggyel, gyertyánnal és bükkel", "Csak fenyőfákkal", "Náddal és sással", "Gyümölcsfákkal"],
    correct: "Tölggyel, gyertyánnal és bükkel"
  },
  {
    category: "Fajismeret",
    question: "Mi található a nagy őzlábgomba tönkjén?",
    options: ["Eltolható gyűrű", "Bocskor", "Tövisek", "Levelek"],
    correct: "Eltolható gyűrű"
  },
  {
    category: "Fajismeret",
    question: "Milyen alakú a bükkfatapló termőteste?",
    options: ["Patkó alakú és fás keménységű", "Vékony és puha", "Gömb alakú", "Tölcsér alakú"],
    correct: "Patkó alakú és fás keménységű"
  },

  // 3. BIZTONSÁG: CSIPERKE VS. GALÓCA (25-32)
  {
    category: "Gombabiztonság",
    question: "Milyen színűek a halálosan mérgező gyilkos galóca lemezei?",
    options: ["Mindig hófehérek", "Csokoládébarnák", "Élénkpirosak", "Feketék"],
    correct: "Mindig hófehérek"
  },
  {
    category: "Gombabiztonság",
    question: "Mi rejtőzik a gyilkos galóca tönkjének alján a földben?",
    options: ["Bőrszerű bocskor", "Répa", "Hagyma", "Makk"],
    correct: "Bőrszerű bocskor"
  },
  {
    category: "Gombabiztonság",
    question: "Milyen színűek az ehető csiperke lemezei idős korában?",
    options: ["Sötét csokoládébarnák", "Hófehérek", "Kékek", "Citromsárgák"],
    correct: "Sötét csokoládébarnák"
  },
  {
    category: "Gombabiztonság",
    question: "Van-e bocskora az ehető mezei csiperkének?",
    options: ["Nincs, a tönkje alja sima vagy gumós", "Igen, mindig nagy bocskora van", "Csak tavasszal van", "Igen, piros színű"],
    correct: "Nincs, a tönkje alja sima vagy gumós"
  },
  {
    category: "Gombabiztonság",
    question: "Mi a legfontosabb teendő, ha vadon termő gombát szedtél az erdőben?",
    options: ["Megmutatjuk hivatalos gombaszakellenőrnek", "Azonnal megfőzzük", "Megkóstoljuk nyersen", "Megmossuk ecetes vízben és megesszük"],
    correct: "Megmutatjuk hivatalos gombaszakellenőrnek"
  },
  {
    category: "Gombabiztonság",
    question: "Miért tilos a gombát a tönkjét elvágva leszedni, ha nem vagyunk benne biztosak?",
    options: ["Mert így a földben maradhat a mérgező fajokra jellemző bocskor", "Mert elszalad a gomba", "Mert megromlik a kés", "Mert nem nő ki többet"],
    correct: "Mert így a földben maradhat a mérgező fajokra jellemző bocskor"
  },
  {
    category: "Gombabiztonság",
    question: "Igaz-e, hogy amelyik gombát megrágta a csiga, az biztosan ehető?",
    options: ["Hamis! A csigák a mérgező gombát is megeszik", "Igaz, a csiga mindent tud", "Csak nyáron igaz", "Csak a piros gombáknál igaz"],
    correct: "Hamis! A csigák a mérgező gombát is megeszik"
  },
  {
    category: "Gombabiztonság",
    question: "Milyen színűek a fiatal csiperke lemezei?",
    options: ["Rózsaszínűek", "Hófehérek", "Zöldek", "Kékek"],
    correct: "Rózsaszínűek"
  },

  // 4. LEBONTÁS, EVOLÚCIÓ ÉS MIKORRHIZA (33-42)
  {
    category: "Erdő és Lebontás",
    question: "Mi az a kőkemény anyag a fák törzsében, amit csak a gombák tudnak igazán lebontani?",
    options: ["A lignin", "A cukor", "A mészkő", "A keményítő"],
    correct: "A lignin"
  },
  {
    category: "Erdő és Lebontás",
    question: "Mi történt a kidőlt ősfákkal évmilliókkal ezelőtt, mielőtt a gombák megtanulták lebontani a lignint?",
    options: ["Feketeszén keletkezett belőlük", "Elrepültek az űrbe", "Homokká váltak", "Jéggé fagytak"],
    correct: "Feketeszén keletkezett belőlük"
  },
  {
    category: "Erdő és Lebontás",
    question: "Mi a mikorrhiza?",
    options: ["A fák gyökere és a gombafonalak hasznos együttélése", "Egy mérgező bogár", "Egy konyhai edény", "Egy gombabetegség"],
    correct: "A fák gyökere és a gombafonalak hasznos együttélése"
  },
  {
    category: "Erdő és Lebontás",
    question: "Mit ad a gomba a fának a mikorrhiza kapcsolatban?",
    options: ["Vizet és ásványi sókat", "Napfényt", "Leveleket", "Makkot"],
    correct: "Vizet és ásványi sókat"
  },
  {
    category: "Erdő és Lebontás",
    question: "Mit ad a fa a gombának a mikorrhiza kapcsolatban?",
    options: ["Cukrot (tápanyagot)", "Vizet", "Spórákat", "Köveket"],
    correct: "Cukrot (tápanyagot)"
  },
  {
    category: "Erdő és Lebontás",
    question: "Miért nevezik a föld alatti gombahálózatot az 'erdő internetjének'?",
    options: ["Mert ezen keresztül tápanyagot és figyelmeztető jeleket küldenek a fák", "Mert wifi van az erdőben", "Mert világítanak a fonalak", "Mert telefonálni lehet rajta"],
    correct: "Mert ezen keresztül tápanyagot és figyelmeztető jeleket küldenek a fák"
  },
  {
    category: "Erdő és Lebontás",
    question: "Mi történne az erdővel, ha eltűnnének a lebontó gombák?",
    options: ["Méteres magasságban felhalmozódna az avar és a kidőlt fa", "Gyorsabban nőnének a fák", "Több virág nyílna", "Semmi sem változna"],
    correct: "Méteres magasságban felhalmozódna az avar és a kidőlt fa"
  },
  {
    category: "Erdő és Lebontás",
    question: "Hogyan segítik a taplógombák az erdei madarakat (pl. a harkályokat)?",
    options: ["Megpuhítják a fát, így a harkály odút tud vésni bele", "Fészket raknak nekik", "Énekelnek nekik", "Magokat adnak nekik"],
    correct: "Megpuhítják a fát, így a harkály odút tud vésni bele"
  },

  // 5. GOMBÁK ÉS MI: KONYHA, GYÓGYSZER, KÁROKOZÓK (43-50)
  {
    category: "Gombák és mi",
    question: "Melyik gomba segíti a kenyértészta megkelését a konyhában?",
    options: ["Az élesztőgomba", "A taplógomba", "A légyölő galóca", "A rozsdagomba"],
    correct: "Az élesztőgomba"
  },
  {
    category: "Gombák és mi",
    question: "Melyik gombafajt használják különleges sajtok (pl. camembert, márványsajt) érlelésére?",
    options: ["Nemespenészt", "Gyilkos galócát", "Lisztharmatot", "Kenyérpenészt"],
    correct: "Nemespenészt"
  },
  {
    category: "Gombák és mi",
    question: "Melyik életmentő gyógyszert fedezték fel az ecsetpenész segítségével?",
    options: ["A penicillint (antibiotikumot)", "A C-vitamint", "Az aszpirint", "A köptetőt"],
    correct: "A penicillint (antibiotikumot)"
  },
  {
    category: "Gombák és mi",
    question: "Mit kell tenni a penészes kenyérrel vagy gyümölccsel?",
    options: ["Az egészet ki kell dobni, mert mérgező anyagokat termel", "Levágjuk a szélét és megesszük", "Megpirítjuk", "Lemossuk vízzel"],
    correct: "Az egészet ki kell dobni, mert mérgező anyagokat termel"
  },
  {
    category: "Gombák és mi",
    question: "Melyik gomba okozhat növénybetegséget a kertben, szőlőben vagy a búzamezőn?",
    options: ["A lisztharmat és a rozsdagomba", "A vargánya", "Az őzlábgomba", "Az élesztő"],
    correct: "A lisztharmat és a rozsdagomba"
  },
  {
    category: "Gombák és mi",
    question: "Hogyan védekezhetünk az uszodában a bőrgomba és körömgomba ellen?",
    options: ["Papucs viselésével", "Kesztyű viselésével", "Sapkával", "Napszemüveggel"],
    correct: "Papucs viselésével"
  },
  {
    category: "Gombák és mi",
    question: "Hogyan segítik a gombák a modern, környezetbarát mezőgazdaságot?",
    options: ["Elpusztítják a kártevő rovarokat mérgező vegyszerek helyett", "Megöntözik a földet", "Leszedik a gyümölcsöt", "Elijesztik a seregélyeket"],
    correct: "Elpusztítják a kártevő rovarokat mérgező vegyszerek helyett"
  },
  {
    category: "Gombák és mi",
    question: "Miért puffad fel a kelttészta az élesztőgombától?",
    options: ["Mert az élesztő gázbuborékokat (szén-dioxidot) termel", "Mert vizet szív magába", "Mert megfagy", "Mert megsül"],
    correct: "Mert az élesztő gázbuborékokat (szén-dioxidot) termel"
  }
];
