// Concatenates two strings to print Hello World to HTML element
function concatFunction() {
    const string1 = "Hello, "
    const string2 = "world!"
    const result = string1.concat(string2);
    document.getElementById("concat-function").innerHTML = result;
}
// Uses the slice method to extract "Johnny" from the Sentence string
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice-function").innerHTML = Section;
}
// Uses the uppcase method to assign uppercase to HTML buttons input
function convertToUppercase() {
    var input = document.getElementById("case-input");
    input.value = input.value.toUpperCase();
}
// Searches lorem ipsum, if value not found returns -1 (error), if value found prints index in HTML element
function search() {
    var input = document.getElementById("myInput");
    var searchString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    var index = searchString.search(input.value);
    if (index === -1) {
      document.getElementById("search-result").innerHTML = "Substring not found."
    } else {
        document.getElementById("search-result").innerHTML = "Substring found at " + index + ".";
    }
}

// Replaces the number 123 with a string
function convertToString() {
    const number = 123;
    const string = number.toString();
    document.getElementById("string-element").innerHTML = `The result is: ${string}`;
}

// formats a number to a specific length using the precision method
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("precision-element").innerHTML = x.toPrecision(10);
}

// rounds a number using the tofixed method
function toFixed_Method() {
    const num = 3.14159265359;
    const fixedNum = num.toFixed(2);
    document.getElementById("to-fixed-element").innerHTML = `The fixed number is: ${fixedNum}`;
}

// gets value of variable
function valueOf_Method() {
    const str = "Hello, world!";
    const value = str.valueOf();
    document.getElementById("value-of-element").innerHTML = `The value is: ${value}`;
}