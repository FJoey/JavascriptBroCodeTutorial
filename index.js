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

/*
let fullName = "Big Man";
let age = 34;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
*/

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

// User Input

// Window prompt

let username1;
username = window.prompt("What's your username?");
console.log(username);


// Textbox
let username2;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
