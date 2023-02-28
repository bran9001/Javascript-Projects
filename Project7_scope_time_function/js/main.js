//* Scope
//Init variable
var globalVariable = "I am a global variable";
//Console log local and global variable
function myFunction() {
  var localVariable = "I am a local variable";
  console.log(globalVariable);
  console.log(localVariable);
}
//Console log local and global variable resulting in an error
function errorFunction() {
    console.log(globalVariable);
    console.log(localVariable);
}
//Sets HTML element to How are you today if the time is earlier than 6:00pm 
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("statement-data").innerHTML = "How are you today?";
    }
}
//If statement
function ifStatement() {
    const num1 = 25
    const num2 = 15
    if (num1 > 15) {
        document.getElementById("ifstatement-data").innerHTML = "25 > 15"
    }
}
//If Else statement
function ifElseStatement() {
    const num1 = 14
    const num2 = 15
    if (num1 > 15) {
        document.getElementById("ifstatement-data").innerHTML = "14 > 15"
    } else {
        document.getElementById("if-else-statement-data").innerHTML = "14 is not greater than 15"
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("time-of-day").innerHTML = Reply;

}