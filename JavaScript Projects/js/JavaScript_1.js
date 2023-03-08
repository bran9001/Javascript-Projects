//Select an animal via switch function and print to HTML element
function animalFunction() {
    let favoriteAnimal = document.getElementById("animal-input").value 
    switch (favoriteAnimal.toLowerCase()) {
        case "bobcat":
        case "cat":
            document.getElementById("animal-output").innerHTML = "Cats are great"
            break
        case "dog":
            document.getElementById("animal-output").innerHTML = "Dogs are great"
            break
        case "shark":
            document.getElementById("animal-output").innerHTML = "Sharks are great"
            break
    }
}

// Utilizes getElementsByClassName to change HTML element
function changeText() {
    var paragraphs = document.getElementsByClassName("paragraph-text");
    paragraphs[0].innerHTML = "New paragraph text";
}

// Utilizes HTML Canvas Element to add graphics
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


var c = document.getElementById("ID_Name2");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);