let display = document.getElementById('output');

let firstNumber = document.getElementById('button-1');

firstNumber.addEventListener('click', () => {
    let numb1 = firstNumber.innerText;
    display.value += numb1;
})

let secNumber = document.getElementById('button-2');

secNumber.addEventListener('click', () => {
    let numb2 = secNumber.innerText;
    display.value += numb2;
})

let thirdNumber = document.getElementById('button-3');

thirdNumber.addEventListener('click', () => {
    let numb3 = thirdNumber.innerText;
    display.value += numb3;
})

let fourthNumber = document.getElementById('button-4');

fourthNumber.addEventListener('click', () => {
    let numb4 = fourthNumber.innerText;
    display.value += numb4;
})

let fifthNumber = document.getElementById('button-5');

fifthNumber.addEventListener('click', () => {
    let numb5 = fifthNumber.innerText;
    display.value += numb5;
})

let sixthNumber = document.getElementById('button-6');

sixthNumber.addEventListener('click', () => {
    let numb6 = sixthNumber.innerText;
    display.value += numb6;
})

let seventhNumber = document.getElementById('button-7');

seventhNumber.addEventListener('click', () => {
    let numb7 = seventhNumber.innerText;
    display.value += numb7;
})

let eighthNumber = document.getElementById('button-8');

eighthNumber.addEventListener('click', () => {
    let numb8 = eighthNumber.innerText;
    display.value += numb8;
})

let ninthNumber = document.getElementById('button-9');

ninthNumber.addEventListener('click', () => {
    let numb9 = ninthNumber.innerText;
    display.value += numb9;
})

let zeroNumber = document.getElementById('button-0');

zeroNumber.addEventListener('click', () => {
    let numb0 = zeroNumber.innerText;
    display.value += numb0;
})

let addition = document.querySelector('#button-add');
addition.addEventListener('click', ()=>{
    display.value += addition.innerText;
})

let subtraction = document.querySelector('#button-subtract');
subtraction.addEventListener('click', ()=>{
    display.value += subtraction.innerText;
})

let multiplication = document.querySelector('#button-multiply');
multiplication.addEventListener('click', ()=>{
    display.value += multiplication.innerText;
})

let division = document.querySelector('#button-divide');
division.addEventListener('click', ()=>{
    display.value += division.innerText;
})

// Decimal button
let nonNumber = document.getElementById('button-decimal');

nonNumber.addEventListener('click', () => {
    let sum = display.value;
    let a = sum.length -1 ;
    if (sum[a] === '.') {
        
    }
    else{
        let numbnone = nonNumber.innerText;
        display.value += numbnone;
    }
    
})

let clear = document.querySelector('#button-clear');
clear.addEventListener('click', ()=>{
    display.value = "";
})

let equals = document.querySelector('.span-1');
equals.addEventListener('click', ()=>{
    display.value = eval(display.value);
})

let buttonDelete = document.querySelector('#button-del');
buttonDelete.addEventListener('click', ()=>{
    display.value = display.value.slice(0, -1) ;
})

