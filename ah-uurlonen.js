import { functies } from "./functies";
import { uurlonen, leeftijdsComponenten } from "./uurlonen";
import { wukNabetaling, wukNabetalingPeriode } from "./wuk-nabetaling";

// Bij een all-in salaris is het periodeloon hoger omdat bepaalde componenten direct worden uitbetaald.
// De volgende waarde is de multiplier die deze verhoging weergeeft.
const allInComponent = 1.3316;

export const getUurloon = (functie, leeftijd) => {
  const schaal = functies[functie];
  if (!schaal) return { uurloon: null, allInUurloon: null };
  let uurloon = uurlonen[schaal][leeftijd];
  if (uurloon === null) {
    // Wanneer je jonger bent dan 21 en je uurloon voor je functie is niet in de tabel, dan wordt het uurloon van de eerste leeftijd die je gaat bereiken gebruikt.
    // Bijvoorbeeld: als je 15 bent en je functie heeft een uurloon van null, dan wordt het uurloon van 16 gebruikt (en anders 17, enz.).
    // Als je meer functiejaren hebt dan functiejaren die je in de functie kan krijgen, dan wordt het maximale uurloon van de functie gebruikt.
    const start = leeftijd <= 6 ? 0 : uurlonen[schaal].length - 1;
    const end = leeftijd <= 6 ? 6 : -1;
    const increment = leeftijd <= 6 ? 1 : -1;
    for (let i = start; i !== end; i += increment) {
      uurloon = uurlonen[schaal][i];
      if (uurloon !== null) break;
    }
  }
  const allInUurloon = (uurloon * allInComponent).toFixed(2);
  uurloon = uurloon.toFixed(2);
  return { uurloon, allInUurloon };
};

// Krijgt een functie en geeft het maximum aantal functiejaren die je in een functie kan verdienen terug.
// Gaat ervanuit dat er in leeftijdsComponenten een functiejaar begint bij 21+ (1 functiejaar).
export function getNoOfFunctiejaren(functie) {
  if (!functies[functie]) return undefined;
  return uurlonen[functies[functie]].length - 7;
}

// Verdere functies
export function getWukNabetaling(year) {
  return wukNabetaling[year];
}

export function getFunctiesAsArray() {
  return Object.keys(functies).sort(sortObj(functies));
}

export function getFuncties() {
  return functies;
}

export function getLeeftijdenAsArray() {
  return Object.keys(leeftijdsComponenten).sort(sortObj(leeftijdsComponenten));
}

export function getLeeftijden() {
  return leeftijdsComponenten;
}

const sortObj = (obj) => (a, b) => obj[a] - obj[b];

export function getWukNabetalingPeriode() {
  return wukNabetalingPeriode;
}
