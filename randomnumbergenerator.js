/* -----------------------------------RANDOM NUMBER GENERATOR
*/

// Example:
const minA = 50;
const maxA = 100;

let randomNum = Math.floor(Math.random() * (maxA - minA)) + minA;
console.log(randomNum);



const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * maxA) + minA;
    randomNum2 = Math.floor(Math.random() * maxA) + minA;
    randomNum3 = Math.floor(Math.random() * maxA) + minA;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

