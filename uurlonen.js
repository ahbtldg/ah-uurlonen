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
    "A": [3.94,     4.54,   5.20,   5.70,   6.70,   8.93,   11.16,  12.22   ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "B": [null,     5.54,   6.23,   6.74,   7.48,   9.43,   11.80,  13.09,  13.27,  13.46,  13.64,  14.01   ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "C": [null,     null,   null,   8.01,   8.86,   9.95,   12.44,  13.70,  13.93,  14.16,  14.39,  14.85   ],
    //   15-        16      17      18      19      20      21      21+1fj  21+2fj  21+3fj  21+4fj  21+5fj
    "D": [null,     null,   null,   9.27,   10.23,  11.20,  13.06,  14.31,  14.59,  14.87,  15.15,  15.69   ],
    //   15-        16      17      18      19      20      21      21+fj   21+2fj  21+3fj  21+4fj  21+5fj
    "E": [null,     null,   null,   null,   null,   14.09,  14.54,  15.13,  15.46,  15.79,  16.12,  16.79   ]
}

// Log
// up to date tot: 2023-03-01
// reden voor update: verhoging 1.5% maart
