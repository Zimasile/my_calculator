let display = document.getElementById('output');

let firstNumber = document.getElementById('button-1');

firstNumber.addEventListener('click', () => {
    let numb1 = firstNumber.innerText;
    display.innerHTML += numb1;
})

let secNumber = document.getElementById('button-2');

secNumber.addEventListener('click', () => {
    let numb2 = secNumber.innerText;
    display.innerHTML += numb2;
})

let thirdNumber = document.getElementById('button-3');

thirdNumber.addEventListener('click', () => {
    let numb3 = thirdNumber.innerText;
    display.innerHTML += numb3;
})

let fourthNumber = document.getElementById('button-4');

fourthNumber.addEventListener('click', () => {
    let numb4 = fourthNumber.innerText;
    display.innerHTML += numb4;
})

let fifthNumber = document.getElementById('button-5');

fifthNumber.addEventListener('click', () => {
    let numb5 = fifthNumber.innerText;
    display.innerHTML += numb5;
})

let sixthNumber = document.getElementById('button-6');

sixthNumber.addEventListener('click', () => {
    let numb6 = sixthNumber.innerText;
    display.innerHTML += numb6;
})

let seventhNumber = document.getElementById('button-7');

seventhNumber.addEventListener('click', () => {
    let numb7 = seventhNumber.innerText;
    display.innerHTML += numb7;
})

let eighthNumber = document.getElementById('button-8');

eighthNumber.addEventListener('click', () => {
    let numb8 = eighthNumber.innerText;
    display.innerHTML += numb8;
})

let ninthNumber = document.getElementById('button-9');

ninthNumber.addEventListener('click', () => {
    let numb9 = ninthNumber.innerText;
    display.innerHTML += numb9;
})

let zeroNumber = document.getElementById('button-0');

zeroNumber.addEventListener('click', () => {
    let numb0 = zeroNumber.innerText;
    display.innerHTML += numb0;
})

let addition = document.querySelector('#button-add');
addition.addEventListener('click', ()=>{
    display.innerText += addition.innerText;
})

let subtraction = document.querySelector('#button-subtract');
subtraction.addEventListener('click', ()=>{
    display.innerText += subtraction.innerText;
})

let multiplication = document.querySelector('#button-multiply');
multiplication.addEventListener('click', ()=>{
    display.innerText += multiplication.innerText;
})

let division = document.querySelector('#button-divide');
division.addEventListener('click', ()=>{
    display.innerText += division.innerText;
})
let nonNumber = document.getElementById('button-decimal');

nonNumber.addEventListener('click', () => {
    let numbnone = nonNumber.innerText;
    display.innerHTML += numbnone;
})

let clear = document.querySelector('#button-clear');
clear.addEventListener('click', ()=>{
    let erase = clear.innerText;
    display.innerHTML = "";
})

let equals = document.querySelector('.span-1');
equals.addEventListener('click', ()=>{
    let equal = equals.innerText;
    display.innerHTML = eval(display.innerHTML);
})

