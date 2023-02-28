// Updates paragraph elements text
function updateElementText() {
    const firstName = "John";
    const lastName = "Doe";
    
    document.getElementById("paragraph-element").innerHTML = firstName + " " + lastName;
  }

updateElementText()

// Concatenates strings two variables assigned to strings
function concatenateStrings() {
    var str1 = "Hello ";
    var str2 = "world!";
    var result = str1 += str2;
    //Displays function result by calling HTML element
    document.getElementById("paragraph-element2").innerHTML = result;
}
