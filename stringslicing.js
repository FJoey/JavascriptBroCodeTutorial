/* -----------------------------------STRING SLICING
*/


const fullName = "Big Man Blastoise";

// ENDING INDEX IS EXCLUSIVE, SO END ON AN EXTRA INDEX

let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8);

let firstChar = fullName.slice(0,1);
// NEGATIVE VALUES COUNT FROM BACK OF STRING TO FRONT
let lastChar = fullName.slice(-2);


firstName = fullName.slice(0, fullName.lastIndexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);



const email = "BigManBlastoise@bigmenonly.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

