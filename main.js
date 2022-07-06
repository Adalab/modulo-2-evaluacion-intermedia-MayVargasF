'use strict';

//añadir un intento por cada click

const inputNumber = document.querySelector('.js_input');
const inputBtn = document.querySelector('.js_btn');
const clue = document.querySelector('.js_clue');
const attemptsMsg = document.querySelector('.js_attempts');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log (randomNumber);


const numberGame = () => {

    const playerNumber = parseInt(inputNumber.value);
    console.log(playerNumber);
    
    if (playerNumber === randomNumber) {
        clue.innerHTML = "Has ganado campeona!!!";
    } 
    else if (playerNumber < randomNumber  ) {
        clue.innerHTML = "Pista: demasiado bajo";
    } 
    else if (playerNumber > randomNumber) {
        clue.innerHTML = "Pista: demasiado alto";
    }
}

let attempt = 0;

const attemptNumber =() => {
    attempt += 1;
}


function handleClick (ev){
    ev.preventDefault();
    numberGame();
    attemptNumber();
    attemptsMsg.innerHTML = `Número de intentos: ${attempt}`;
}


inputBtn.addEventListener('click', handleClick);