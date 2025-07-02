/* -----------------------------------STRING METHODS
*/
let userName = "Blastoise";

console.log(userName.charAt(2));

console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));

console.log(userName.length);

console.log(userName.trim());

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(userName.repeat(3));

let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
//let restul = userName.includes(" ");
console.log(result);

    if(result){
        console.log("Your username can't being with ' ' ");
    } else {
        console.log(userName);
    }


let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", " ");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

