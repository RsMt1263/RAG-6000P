// cp.js

const trasy = {
    // KOMPLETNÁ TRASA SMER NIŽNÁ ŠEBASTOVÁ
    sebas: [
        {n: "Solivar", u: "Solivarská ul.", min: 0},
        {n: "Zborov, Staré Nádraží", u: "Zborovská ul.", min: 1},
        {n: "Mladějovská", u: "Zborovská ul.", min: 2},
        {n: "Na Cvičišti", u: "Zborovská ul.", min: 3},
        {n: "Nákupní Zóna", u: "Zborovská ul.", min: 4},
        {n: "Dopravný Podnik", u: "Bardejovská ul.", min: 5},
        {n: "Městské Lázně", u: "Spolková ul.", min: 7},
        {n: "U Lišky", u: "Spolková ul.", min: 8},
        {n: "Autobusové Nádraží Spolková", u: "Spolková ul.", min: 9},
        {n: "Marie Sklodowské", u: "Ul. Marie Sklodowské", min: 10},
        {n: "Náměstí Osovobození", u: "Obchodní ul.", min: 12},
        {n: "Obchodní", u: "Obchodní ul.", min: 13},
        {n: "Karlovo Náměstí", u: "Obchodní ul.", min: 14},
        {n: "U Viaduktu", u: "Ul. U Viaduktu", min: 15},
        {n: "Hlavní Nádraží (St.3)", u: "Národní ul.", min: 16},
        {n: "Pivovarská", u: "Národní ul.", min: 17},
        {n: "Severní Předměstí", u: "Národní ul.", min: 18},
        {n: "Háje, Hypermarket", u: "Okružní ul.", min: 20},
        {n: "V Osadách", u: "Okružní ul.", min: 21},
        {n: "Borovecká", u: "Borovecká ul.", min: 22},                      
        {n: "Nižná Šebastová", u: "Vranovská ul.", min: 24}
    ],

    // KOMPLETNÁ TRASA SMER SOLIVAR
    soliv: [
        {n: "Nižná Šebastová", u: "Vranovská ul.", min: 0},
        {n: "Václava Volfa", u: "Ul. Václava Volfa", min: 1},
        {n: "Okružní", u: "Ul. Václava Volfa", min: 2},
        {n: "V Osadách", u: "Okružní ul.", min: 3},
        {n: "Háje, Hypermarket", u: "Okružní ul.", min: 4},
        {n: "Severní Předměstí", u: "Národní ul.", min: 5},
        {n: "Pivovarská", u: "Národní ul.", min: 6},
        {n: "Hlavní Nádraží (St.3)", u: "Národní ul.", min: 7},
        {n: "U Viaduktu", u: "Ul. U Viaduktu", min: 8},
        {n: "Karlovo Náměstí", u: "Obchodní ul.", min: 9},
        {n: "Obchodní", u: "Obchodní ul.", min: 10},
        {n: "Náměstí Osovobození", u: "Obchodní ul.", min: 11},
        {n: "Marie Sklodowské", u: "Ul. Marie Sklodowské", min: 12},
        {n: "Autobusové Nádraží Spolková", u: "Spolková ul.", min: 14},
        {n: "U Lišky", u: "Spolková ul.", min: 15},
        {n: "Městské Lázně", u: "Spolková ul.", min: 16},
        {n: "Dopravný Podnik", u: "Bardejovská ul.", min: 18},
        {n: "Nákupní Zóna", u: "Zborovská ul.", min: 19},
        {n: "Na Cvičišti", u: "Zborovská ul.", min: 20},
        {n: "Mladějovská", u: "Zborovská ul.", min: 21},
        {n: "Zborov, Staré Nádraží", u: "Zborovská ul.", min: 22},
        {n: "Solivar", u: "Solivarská ul.", min: 24}
    ],

    // TECHNOLOGICKÉ TRASY
    najazd_solivar: [
        {n: "Garáž", u: "Bardejovská ul.", min: 0},
        {n: "Solivar", u: "Solivarská ul.", min: 15}
    ],
    najazd_sebas: [
        {n: "Garáž", u: "Bardejovská ul.", min: 0},
        {n: "Nižná Šebastová", u: "Vranovská ul.", min: 6}
    ],
    dojazd: [
        {n: "Nižná Šebastová", u: "Vranovská ul.", min: 0},
        {n: "Garáž", u: "Bardejovská ul.", min: 6}
    ]
};

const databazaCP = {
    "1142": {
        "vozidlo": "803", // Číslo vozidla priradené k tomuto kurzu
        "SO/NE/SVIATOK": [
            { id: 0, L: "#", smer: "Technologická Jazda", odchod: "21:15", t: trasy.najazd_sebas },
            { id: 1, L: "1", smer: "Nižná Šebastová", odchod: "14:07", t: trasy.sebas },
            { id: 2, L: "1", smer: "Solivar", odchod: "14:32", t: trasy.soliv },
            { id: 3, L: "1", smer: "Nižná Šebastová", odchod: "15:37", t: trasy.sebas },
            { id: 4, L: "1", smer: "Solivar", odchod: "16:02", t: trasy.soliv },
            { id: 5, L: "1", smer: "Nižná Šebastová", odchod: "16:37", t: trasy.sebas },
            { id: 6, L: "1", smer: "Solivar", odchod: "17:02", t: trasy.soliv },
            { id: 7, L: "1", smer: "Nižná Šebastová", odchod: "17:37", t: trasy.sebas },
            { id: 8, L: "1", smer: "Solivar", odchod: "18:02", t: trasy.soliv },
            { id: 9, L: "1", smer: "Nižná Šebastová", odchod: "18:37", t: trasy.sebas },
            { id: 10, L: "1", smer: "Solivar", odchod: "19:02", t: trasy.soliv },
            { id: 11, L: "1", smer: "Nižná Šebastová", odchod: "20:07", t: trasy.sebas },
            { id: 12, L: "1", smer: "Solivar", odchod: "20:32", t: trasy.soliv },
            { id: 13, L: "1", smer: "Nižná Šebastová", odchod: "21:07", t: trasy.sebas },
            { id: 14, L: "1", smer: "Solivar", odchod: "21:32", t: trasy.soliv },
            { id: 15, L: "1", smer: "Nižná Šebastová", odchod: "22:07", t: trasy.sebas },
            { id: 16, L: "#", smer: "Technologická Jazda", odchod: "22:31", t: trasy.dojazd }
        ]
    }
};