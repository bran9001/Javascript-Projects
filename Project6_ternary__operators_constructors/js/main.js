//Checks if user is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}
// Checks voting age
function checkAge() {
    var age = document.getElementById("ageInput").value;
    var result = age >= 18 ? "You are old enough to vote." : "You are not old enough to vote.";
    document.getElementById("result").innerHTML = result;
}

// Constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Constructor methods & variables
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// Create a class of person
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
}

// Create a new Person object using the "new" keyword
function createPerson() {
    const person = new Person("John", "Doe", 30);
    console.log(person);
}

// Nested Function
function Nested_Function() {
  var x = 10;

  function Inner_Nested_Function() {
    var y = 5;
    return x + y;
  }

  var result = Inner_Nested_Function();
  document.getElementById("paragraph-data").innerHTML = result;
}