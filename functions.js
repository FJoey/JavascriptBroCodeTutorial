function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x -y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true: false;
}

let answer = add(2, 3);
console.log(answer);
console.log(add(2, 3));

console.log(isEven(10));
console.log(isEven(11));

console.log(isValidEmail("Blastoise@fake.com"));
console.log(isValidEmail("Blastoise.com"));

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Blastoise", 25);
happyBirthday("Charizard", 35);
happyBirthday("Snorlax", 2);