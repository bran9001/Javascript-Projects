//Iteration function
// Console Log Iteration While Loop
function Call_Loop() {
    let i = 0;
    while (i < 10) {
        console.log("Iteration", i + 1);
        i++;
    }
}
// Get length of string from HTML element
function stringLength() {
    let result = document.getElementById("length").innerHTML;
    document.getElementById("length-data").innerHTML = result.length;
}


// Console Log For Loop
function for_Loop(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// Get data from Array via HTML value
function cat_pics() {
    var cat_picture = [];
    var cat_data = document.getElementById("cat-data").value
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[cat_data]
}

// sets a constant, changes the value, and sets a new value
function constant_function() {
    const musical_instrument = {type:"Guitar", brand:"fender", color:"Black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was " + musical_instrument.price;
}


// Utilize the let keyword
function let_keyword() {
    let x = 10; // x is only accessible within this function
    if (true) {
      let y = 20; // y is only accessible within this block
      console.log(x); 
      console.log(y); 
    }
    console.log(x); 
    console.log(y); // outside of block scope
}

// Utilize the let keyword to make an object
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.model; 
    }
};
document.getElementById("car-object").innerHTML = car.description();

// Console Log Break
function break_function() {
    for(let i = 1; i <= 20; i++) {
        if(i == 13){
            break;
        }
        console.log(i);
    }

}
// Console Log Continue
function continue_function() {
    for(let i = 1; i <= 20; i++) {
        if(i == 13){
            continue;
        }
        console.log(i);
    }

}