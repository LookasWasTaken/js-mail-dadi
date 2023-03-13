
/* Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// generate a random number from 1 to 6 for player & cpu

const playerDice = Math.floor(Math.random() * 6) + 1;
console.log("Player roll " + playerDice);

const cpuDice = Math.floor(Math.random() * 6) + 1;
console.log("CPU roll " + cpuDice);

// guess the winner

if (playerDice > cpuDice) {
    console.log("Player won!");
  } else if (playerDice < cpuDice) {
    console.log("Player lost!");
  } else {
    console.log("Draw!");
  }

 