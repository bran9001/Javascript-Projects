// Updates paragraph elements text
function updateElementText() {
    const firstName = "John";
    const lastName = "Doe";
    
    document.getElementById("paragraph-element").innerHTML = firstName + " " + lastName;
  }

updateElementText()


function concatenateStrings() {
    var str1 = "Hello ";
    var str2 = "world!";
    var result = str1 + str2;
    document.getElementById("paragraph-element2").innerHTML = result;
}
