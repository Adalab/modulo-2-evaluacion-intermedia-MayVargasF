'use strict';

//comparar input con random number
//si es mayor, poner mensaje de mayor
//si es menor, poner mensaje menor
//si es igual, poner mensaje ganadora

const inputNumber = document.querySelector('.js_input');
const inputBtn = document.querySelector('.js_btn');
const clue = document.querySelector('.js_clue');
const attempts = document.querySelector('.js_attempts');


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




function handleClick (ev){
    ev.preventDefault();
    numberGame();
}


inputBtn.addEventListener('click', handleClick);