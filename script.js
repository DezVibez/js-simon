/*Descrizione:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

console.log("js ok")
//target random numbers
const target1 = document.getElementById("numero1")
const target2 = document.getElementById("numero2")
const target3 = document.getElementById("numero3")
const target4 = document.getElementById("numero4")
const target5 = document.getElementById("numero5")
//target count down
const count = document.getElementById("count")
//target titolo
const titolo = document.getElementById("titolo")

//target inserisci i numeri
const inserisci1 = document.getElementById("inserisci1")
const inserisci2 = document.getElementById("inserisci2")
const inserisci3 = document.getElementById("inserisci3")
const inserisci4 = document.getElementById("inserisci4")
const inserisci5 = document.getElementById("inserisci5")

//target bottone
const button = document.getElementById("button")


//funzione genera numeri
function getRandomNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber
}

//generare 5 numeri 

target1.innerText = getRandomNumber(1, 99)
target2.innerText = getRandomNumber(1, 99)
target3.innerText = getRandomNumber(1, 99)
target4.innerText = getRandomNumber(1, 99)
target5.innerText = getRandomNumber(1, 99)

//mi stampo i risultati per test
console.log(target1.innerText,target2.innerText,target3.innerText,target4.innerText,target5.innerText)


//timing function
let seconds = 30
const countdown = setInterval(function() {

    if(seconds === 0){
        clearInterval(countdown)
        //quando il tempo finisce nasconde i numeri generati
        target1.classList.add("hidden")
        target2.classList.add("hidden")
        target3.classList.add("hidden")
        target4.classList.add("hidden")
        target5.classList.add("hidden")
        count.classList.add("hidden")
        titolo.innerText = ("Ti ricordi i numeri?")

        //quando il tempo finisce crea degli input per inserire i dati
        inserisci1.classList.add("block")
        inserisci2.classList.add("block")
        inserisci3.classList.add("block")
        inserisci4.classList.add("block")
        inserisci5.classList.add("block")
        button.classList.add("block")
    }
    count.innerText = --seconds

}, 1000);


//ascolta evento al bottone
 
button.addEventListener("click", function()
{   //se il valore inserito è uguale ai random numbers stampati nel dom allora ho vinto, ne basta uno sbagliato per perdere la partita
    if (inserisci1.value == target1.innerText && 
        inserisci2.value == target2.innerText &&
        inserisci3.value == target3.innerText && 
        inserisci4.value == target4.innerText &&
        inserisci5.value == target5.innerText) {
        alert("Grande,hai vinto!")
        }else {
            alert ("Spiacente,i numeri inseriti sono sbagliati, ricarica e riprova.")
        }
})
