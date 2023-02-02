// De uurlonen voor medewerkers van AH die onder de VGL CAO vallen.
// Linkje naar CAO: https://www.fnv.nl/cao-sector/handel/supermarkten/cao-supermarkt-vgl
// Voor sommige leeftijden is er in een salarisschaal geen uurloon gedefinieerd. Hanteer hier dan een 'null' value.
// Voor het geval dat je maximaal 1 functiejaar kan verdienen, is het laatste element van de array dan het uurloon voor 21+1fj.
// Voor het geval dat een uurloon voor 21 is gedefinieerd, maar niet voor 21+1fj, en wel voor bijv. 21+2fj, dan vul je 21+1fj met null en 21+2fj met het uurloon voor 21+2fj.

// De volgende waardes refereren aan de uurlonen tabel (uurlonen.js).
export const leeftijdsComponenten = {
  "15-": 0,
  16: 1,
  17: 2,
  18: 3,
  19: 4,
  20: 5,
  "21+": 6,
  "21+ (1 functiejaar)": 7,
  "21+ (2 functiejaren)": 8,
  "21+ (3 functiejaren)": 9,
  "21+ (4 functiejaren)": 10,
  "21+ (5 functiejaren)": 11,
};

// prettier-ignore
export const uurlonen = {
    //   15-        16      17      18      19      20      21      21+1fj
    "A": [3.90,     4.50,   5.14,   5.65,   6.70,   8.93,   11.16,  12.1    ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "B": [null,     5.49,   6.17,   6.67,   7.40,   9.33,   11.68,  12.96,  13.14,  13.33,  13.51,  13.87   ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "C": [null,     null,   null,   7.93,   8.77,   9.85,   12.31,  13.56,  13.79,  14.02,  14.25,  14.70   ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "D": [null,     null,   null,   9.18,   10.13,  11.08,  12.93,  14.17,  14.45,  14.72,  15.00,  15.54   ],
    //   15-        16      17      18      19      20      21      21+fj   21+2fj  21+3fj  21+4fj  21+5fj
    "E": [null,     null,   null,   null,   null,   13.95,  14.40,  14.98,  15.31,  15.63,  15.96,  16.62   ]
}

// Log
// up to date tot: 2023-01-02
// reden voor update: verandering in schaal A
