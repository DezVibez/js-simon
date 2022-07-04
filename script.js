/*Descrizione:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

console.log("js ok")

const target1 = document.getElementById("numero1")
const target2 = document.getElementById("numero2")
const target3 = document.getElementById("numero3")
const target4 = document.getElementById("numero4")
const target5 = document.getElementById("numero5")


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

 

