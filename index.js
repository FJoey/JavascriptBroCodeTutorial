/* -----------------------------------NUMBER GUESSING GAME
*/
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low; Try again")
        } else if (guess > answer){
            window.alert("Too high; Try again");
        } else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}

/* -----------------------------------FOR LOOPS
*/

/*
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    } else {
        console.log(i);
    }
}
*/

/*
for(let i = 10; i > 0; i-=2){
    console.log("Hello");
    console.log(i);
}

console.log("Happy New Year!");
*/

/* -----------------------------------WHILE LOOPS
*/

/*
let loggedIn = false;
let username;
let password;

do {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    } else {
        console.log("Invalid credentials! Please try again");
    }
} while(!loggedIn);
*/

// let username = "";

/*
while(username === "" || username === null){
    username = window.prompt(`Enter your name`);
} 
*/

/*
do{
    username = window.prompt(`Enter your name`);
} while(username === "" || username === null);

console.log(`Hello ${username}`);
*/

/* -----------------------------------STRICT EQUALITY
*/
/*
const PI = 3.14;

if(PI == "3.14"){
    console.log("That is PI");
} else{
    console.log("That is NOT PI");
}

if(PI === "3.14"){
    console.log("That is PI");
} else{
    console.log("That is NOT PI");
}

if(PI != "3.14"){
    console.log("That is NOT PI");
} else{
    console.log("That is PI");
}

const PIstr = "3.14";

if(PIstr !== "3.14"){
    console.log("That is NOT PI");
} else{
    console.log("That is PI");
}
*/

/* -----------------------------------LOGICAL OPERATORS
 */

// const temp = 20;
/*if (temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}*/

/*
if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else {
    console.log("The weather is GOOD");
}
*/
/*
const isSunny = true;

if(!isSunny){
    console.log("It is Cloudy");
} else {
    console.log("It is Sunny");
}
*/

/* -----------------------------------METHOD CHAINING
*/

// let userName = window.prompt("Enter your username: ");

// ------------------------- NO METHOD CHAINING

/*
userName = userName.trim();

let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();

userName = letter + extraChars;
console.log(userName);
*/
// ------------------------- METHOD CHAINING

/*
userName = userName.trim().charAt(0).toUpperCase() 
            + userName.trim().slice(1).toLowerCase();

console.log(userName);
*/

/* -----------------------------------STRING SLICING
*/

/*
const fullName = "Big Man Blastoise";

// ENDING INDEX IS EXCLUSIVE, SO END ON AN EXTRA INDEX
/*
let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8);

let firstChar = fullName.slice(0,1);
// NEGATIVE VALUES COUNT FROM BACK OF STRING TO FRONT
let lastChar = fullName.slice(-2);
*/
/*
let firstName = fullName.slice(0, fullName.lastIndexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

/*
const email = "BigManBlastoise@bigmenonly.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
*/



