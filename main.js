'use strict';

//F generar random number
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










function handleClick (ev){
    ev.preventDefault();
    getRandomNumber(100);
    console.log(getRandomNumber(100));
}


inputBtn.addEventListener('click', handleClick);