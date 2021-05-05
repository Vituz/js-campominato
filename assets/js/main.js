/*
Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 
*/


var livello = parseInt(prompt("Scegli il livello di difficoltà! [0 - 1 - 2]"));

var difficolta;

switch (livello) {
    case 1:
        difficolta = 80;
        break;

    case 2:
        difficolta = 50;
         break;

    default:
        difficolta = 100;
        break;
}

var punti = difficolta - 16;

console.log("punti " + punti);



var bombe = [];

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

while(bombe.length < 16){
     var bomba = randomNumber(1, difficolta);
    if( !bombe.includes(bomba)){
        bombe.push(bomba);
    }
}
console.log(bombe);

var userNumberList = [];

for(var i = 0; i < punti; i++){

    var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e " + difficolta));


while(userNumber < 1 || userNumber > difficolta || isNaN(userNumber)){
         alert("Non hai inserito un valore corretto. Riprova");
         userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e " + difficolta));
}

if(userNumberList.includes(userNumber)){
    alert("Hai già inserito questo numero" + userNumberList);
    i--;
} else {

    if (bombe.includes(userNumber)){
        alert("Hai calpestato una mina! Hai totalizzato: " + userNumberList.length + " Punti");
        break;
    } else {
        userNumberList.push(userNumber);
        console.log(userNumberList);
    }

}


}

if(userNumberList == punti){
    alert("Hai vinto! Hai totalizzato: " + punti + " Punti!")
    
}
