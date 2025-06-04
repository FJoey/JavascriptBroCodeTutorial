/* -----------------------------------RANDOM NUMBER GENERATOR
*/

/* Example:
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);
*/

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
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

/* -----------------------------------MATH OBJECT
// Math: built-in object that provides a collection of properties and methods for doing math
//console.log(Math.PI);
//console.log(Math.E);
let x = 3.21;
let y = 2;
let z;

//z = Math.round(x);    //Round
//z = Math.floor(x);    //Round down
//z = Math.ceil(x);     //Round up
//z = Math.trunc(x);    //Remove decimal values
//z = Math.pow(x, y);   //Exponent, x^y
//z = Math.sqrt(x);     //Square root
//z = Math.log(x);      //Logarithm
//z = Math.sin(x);      //Sine
//z = Math.cos(x);      //Cosine
//z = Math.tan(x);      //Tangent
//z = Math.abs(x);      //Absolute value
//z = Math.sign(x);     //Find sign (+ or -) pos = 1; neg = 0
//z = Math.max(x, y);   //Find max
//z = Math.min(x, y);   //Find min

console.log(z);
*/
/* -----------------------------------COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
*/
/* -----------------------------------CONSTANTS
// const = a variable that can't be changed

// Constants are normally titled in all-caps, unless they are reference types, like Strings
const PI = 3.14159;
let radius;
let circumference;

// We wouldn't want this to happen for pi (variable reassignment)
//pi = 420.69;

//radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

//console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
};

*/

/* -----------------------------------TYPE CONVERSION

let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/*
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);

*/

/* -----------------------------------USER INPUT
// Window prompt (Easy way)
let username1;
username = window.prompt("What's your username?");
console.log(username);


// Textbox ('Professional Way')
let username2;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
*/

/* -----------------------------------ARITHMETIC

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2; // <-exponent
// students = students % 2;
// let extraStudents = students % 3;

// augmented assignment operators
// students += 3;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;


// console.log(students);

/* -----------------------------------VARIABLES

/*
let fullName = "Big Man";
let age = 34;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
*/

// console.log("Hello");
// console.log("I like pizza");

// window.alert("This is an alert");
// window.alert("I like pizza!");

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza!";

// This is a comment

/*
 This is a comment
 Whoa buddy
*/

/*
let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName = "Bro";
let favoriteFood = "pizza";
let email = "example@email.com";

let online = false;
let forSale = true;
let isStudent = true;

console.log(`Enrolled: ${isStudent}`);

console.log(`Is this car for sale: ${forSale}`);

console.log(typeof online);
console.log(`Bro is online: ${online}`);

console.log(age);
console.log(price);
console.log(gpa);

console.log(typeof age);
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
console.log(`Your email is ${email}`);
*/
