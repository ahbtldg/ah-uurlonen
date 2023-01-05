# ah-uurlonen
`ah-uurlonen` is bedoeld om up-to-date informatie te bieden voor AH medewerkers in Nederland. Specifieker, informatie voor AH medewerkers die onder de _cao Supermarkten VGL_ vallen. Deze informatie, zoals uurlonen en functies, verandert af en toe. Als je wilt helpen om de gegevens up-to-date te houden, kan je een pull request indienen met up-to-date informatie of via een issue foute informatie melden. Informatie die up-to-date gehouden kan worden is de uurlonen tabel in [`uurlonen.js`](uurlonen.js), de percentages nabetaling winstuitkering in [`wuk-nabetaling.js`](wuk-nabetaling.js), en de hoogte van het all-in component in [`ah-uurlonen.js`](ah-uurlonen.js).

### Gebruik
Clone deze folder in je project. Je kan dan de volgende functies importeren vanuit `ah-uurlonen.js`. 

- `getUurloon(functie, leeftijd)` geeft het uurloon en het all-in uurloon terug op basis van de opgegeven functie en leeftijd.
	- `functie` is een key uit het `functies` object uit [`functies.js`](functies.js), bijvoorbeeld `Shiftleider` (string). 
	- `leeftijd` is een entry uit het `leeftijdsComponenten` object uit [`uurlonen.js`](uurlonen.js), bijvoorbeeld `0` voor `15-` of `7` voor `21+ (1 functiejaar)`. `leeftijd` is dus een integer. 
- `getNoOfFunctiejaren(functie)` geeft het maximum aantal functiejaren dat kan worden behaald in de opgegeven functie.
	- Dit is interessant omdat sommige salarisschalen minder trappen hebben omdat er minder functiejaren kunnen worden behaald in hun functies.
- `getWukNabetaling(year)` geeft het percentage WUK nabetaling over jaar (`year` - 1) jaar, betaald in jaar `year` terug, indien bekend.
- `getFunctiesAsArray()` geeft een gesorteerde lijst met alle bekende functies.
	- `getFuncties()` geeft het object met functies als keys en salarisschalen als entries.
- `getLeeftijdenAsArray()` geeft een gesorteerde lijst met alle beschikbare leeftijden.
	- `getLeeftijden()` geeft het object met leeftijden als keys en desbetreffende indices in de `uurlonen` tabel als entries terug.
- `getWukNabetalingPeriode()` geeft de periode terug waarvoor de wuk-nabetaling geldt. 

### Handig voor een up-to-date `ah-uurlonen`. 
- De laatste cao is (wanneer er een cao is) te vinden door te zoeken op [vgl cao supermarkt](https://www.google.com/search?q=vgl+cao+supermarkt). 
	- Het doel van [`uurlonen.js`](uurlonen.js) is om in de main branch de salaristabel te hebben die **nu** in werking is. 
	- Het is niet de bedoeling dat de all-in uurlonen in deze tabel komen. 
- De hoogte van de nabetaling winstuitkering ([`wuk-nabetaling.js`](wuk-nabetaling.js)) over jaar `x` wordt vaak in maart van jaar `x + 1` bekend gemaakt op het intranet van AH. Zet deze waarde dan bij jaar `x + 1` en niet bij jaar `x`.
- De hoogte van het all-in component (gedefinieerd in [`ah-uurlonen.js`](ah-uurlonen.js)) is te vinden op het intranet van AH. 
- De actuele uurlonen kunnen worden geverifieerd via de salariscalculator op [`werk.ah.nl`](https://werk.ah.nl). Via deze manier kan je ook de hoogte van het all-in component verifiëren. 

*Deze repository is opgezet door [`ahbetaaldag.nl`](https://ahbetaaldag.nl) en is niet van AH.* 
