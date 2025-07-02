/* -----------------------------------IF STATEMENTS
*/


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let ageA;

mySubmit.onclick = function (){

    ageA = myText.value;
    ageA = Number(ageA);

    if(ageA >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(ageA == 0){
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(ageA < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else if(ageA >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    } 
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;

    }

}


ageA = 25;
let hasLicense = false;

if(ageA >= 16){
    console.log("You are old enough to drive.");

    if(hasLicense){
        console.log("You have your license!");
    } else {
        console.log("You do not have your license yet!");
    }
} else {
    console.log("You must be 16+ to have a license");
}


let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}
else {
    console.log("You are NOT a student!");
}


let time = 14;

if(time < 12){
    console.log("Good morning!");
}
else
{
    console.log("Good afternoon!");
}


let age = 13;

if(ageA >= 18){
    console.log("You are old enought to enter this site");
} else {
    console.log("You must be 18+ to enter this site");
}


