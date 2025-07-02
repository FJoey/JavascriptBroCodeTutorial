/* -----------------------------------CONSTANTS
*/
// const = a variable that can't be changed

// Constants are normally titled in all-caps, unless they are reference types, like Strings
const PI = 3.14159;
let radius;
let circumference;

// We wouldn't want this to happen for pi (variable reassignment)
// pi = 420.69;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
};



