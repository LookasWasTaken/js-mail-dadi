/* Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus

Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// input/button
// for loop
// add.EventListener
// if/else
// Object Array

const allowedMail = [
  "lucapiacentini@gmail.com",
  "alexfioretti@gmail.com",
  "mattiavolpe@gmail.com",
  "paolozampa@gmail.com",
  "fabiopacifici@gmail.com",
  "donatoriccio@gmail.com",
  "giulianogostinfini@gmail.com",
];

const formEl = document.querySelector("form");
console.log(formEl);

const userMail = document.querySelector("input");
console.log(userMail.value);

const divEl = document.createElement("div");
console.log(divEl);

formEl.insertAdjacentElement("afterend", divEl);

//

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let checker = false;

  for (let i = 0; i < allowedMail.length; i++) {
    if (allowedMail[i] === userMail.value) {
      checker = true;
    }
  }
  if (checker != true) {
    divEl.innerHTML = `${userMail.value} not allowed to proceed`;
    divEl.classList.add("notallowed");
  } else {
    divEl.innerHTML = `${userMail.value} allowed to proceed`;
    divEl.classList.remove("notallowed");
    divEl.classList.add("allowed");
  }
});

console.log(divEl.innerHTML);
