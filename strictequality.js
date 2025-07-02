/* -----------------------------------STRICT EQUALITY
*/

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


