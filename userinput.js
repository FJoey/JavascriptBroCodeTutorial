/* -----------------------------------USER INPUT
*/
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


