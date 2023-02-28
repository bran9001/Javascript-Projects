// Adds two numbers
function addButton() {
  const num1 = 1;
  const num2 = 2;
  const result = num1 + num2;
  document.getElementById("add-result").textContent = `The sum of ${num1} and ${num2} is ${result}`;
}
// Subtracts two numbers
function subtractButton() {
  const num1 = 3;
  const num2 = 4;
  const result = num1 - num2;
  document.getElementById("subtract-result").textContent = `The sum of ${num1} and ${num2} is ${result}`;
}
// Multiplies two numbers
function multiplicationButton() {
  const num1 = 5;
  const num2 = 6;
  const result = num1 * num2;
  document.getElementById("multiplication-result").textContent = `The sum of ${num1} and ${num2} is ${result}`;
}
// Divides two numbers
function divisionButton() {
  const num1 = 7;
  const num2 = 8;
  const result = num1 / num2;
  document.getElementById("division-result").textContent = `The sum of ${num1} and ${num2} is ${result}`;
}
// Finds the remainder of two numbers
function remainderButton() {
  const num1 = 10;
  const num2 = 9;
  const result = num1 % num2;
  document.getElementById("remainder-result").textContent = `The sum of ${num1} and ${num2} is ${result}`;
}

// Negates a number
function negationButton() {
  const num1 = 10;
  const result = -num1;
  document.getElementById("negation-result").textContent = `The negation of ${num1} is ${result}`;
}
// Increments a number
function incrementButton() {
  var num1 = 10;
  var result = num1++;
  document.getElementById("increment-result").textContent = `The incrementation of ${result} is ${num1++}`;
}
// Decrements a number
function decrementButton() {
  var num1 = 10;
  var result = num1--;
  document.getElementById("decrement-result").textContent = `The decrementation of ${result} is ${num1--}`;
}
// Finds a random number
function randomButton() {
  var num1 = Math.random() * 100;
  result = Math.round(num1)
  document.getElementById("random-result").textContent = `Your random number is ${result}`;
}

