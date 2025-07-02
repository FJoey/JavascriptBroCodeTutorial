/* -----------------------------------LOGICAL OPERATORS
 */

const temp = 20;
if (temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}


if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else {
    console.log("The weather is GOOD");
}


const isSunny = true;

if(!isSunny){
    console.log("It is Cloudy");
} else {
    console.log("It is Sunny");
}


