// *typeof*/
// innit variable
let typeofVariable = "Hello, world!";
document.getElementById("typeof-data-info").innerHTML = `Data: ${typeofVariable}`;
//display variables type
let typeofDataType = typeof typeofVariable;
document.getElementById("typeof-data-type").innerHTML = `Data type of typeofVariable "Hello World" is: ${typeofDataType}`;

//*coercion*/
// init variable
let coercionVariable = "\"10\", 5";
document.getElementById("coercion-data-info").innerHTML = `Data: ${coercionVariable}`;
//display coerced variable
let coercionDataType = "10" + 5;
document.getElementById("coercion-data-type").innerHTML = `Data type of coercionVariable \"10\", 5 is: ${coercionDataType}`;

//*NaN*/
// init variable
let nanVariable = "0/0";
document.getElementById("nan-data-info").innerHTML = `Data: ${nanVariable}`;
//display NaN variable
let nanDataType = 0 / 0;
document.getElementById("nan-data-type").innerHTML = `Data: ${nanDataType}`;
//init variable
let nanVariableTrue = "This is a string";
document.getElementById("nan-data-info-true").innerHTML = `Data: ${nanVariableTrue}`;
//display if NaN
document.getElementById("nan-data-type-true").innerHTML = `NaN: ` +isNaN(nanVariableTrue);
//init variable
let nanVariableFalse = 7;
document.getElementById("nan-data-info-false").innerHTML = `Data: ${nanVariableFalse}`;
//display if NaN
document.getElementById("nan-data-type-false").innerHTML = `NaN: ` +isNaN(nanVariableFalse);

//*Infinity*/
// init infinity variable
let infinityVariable = 2E310;
// display infinity variable in string form
document.getElementById("inifity-data-info").innerHTML = `Data: 2E310`;
// display inifnity variable
document.getElementById("inifity-data-type").innerHTML = `Data: ${infinityVariable}`;

// init negative infinity variable
let negativeInfinityVariable = -3E310;
// display negative variable in string form
document.getElementById("negative-inifity-data-info").innerHTML = `Data: 3E310`;
// display negative inifnity variable
document.getElementById("negative-inifity-data-type").innerHTML = `Data: ${negativeInfinityVariable}`;

//*Boolean Logic*/
// init boolean variable
let booleanVariableTrue = 10 > 5;
// display boolean variable in string form
document.getElementById("true-boolean-data-info").innerHTML = `Data: 10 > 5`;
// display boolean variable in boolean form
document.getElementById("true-boolean-data-type").innerHTML = `Data: ${booleanVariableTrue}`;

// init boolean variable
let booleanVariableFalse = 5 > 10;
// display boolean variable in string form
document.getElementById("false-boolean-data-info").innerHTML = `Data: 5 > 10`;
// display boolean variable in boolean form
document.getElementById("false-boolean-data-type").innerHTML = `Data: ${booleanVariableFalse}`;

//*Console.log Math Operation*/
function consoleLogMathOperation() {
    const num1 = 5;
    const num2 = 3;
    const result = num1 + num2;
    console.log(`The result of ${num1} + ${num2} is ${result}`);
}

//*Console.log Boolean Logic*/
function consoleLogBooleanLogic() {
    const boolean = 5 > 3;
    console.log(`the result of 5 > 3 is ${boolean}`);
}

//*Double Equals Boolean Logic*/
// init boolean variable
let doubleEqualsBooleanVariableTrue = 10 + 5 == 15;
// display boolean variable in string form
document.getElementById("true-double-equals-data-info").innerHTML = `Data: 10 + 5 == 15`;
// display boolean variable in boolean form
document.getElementById("true-double-equals-data-type").innerHTML = `Data: ${doubleEqualsBooleanVariableTrue}`;

// init boolean variable
let doubleEqualsBooleanVariableFalse = 10 + 5 == 0;
// display boolean variable in string form
document.getElementById("false-double-equals-data-info").innerHTML = `Data: 10 + 5 == 0`;
// display boolean variable in boolean form
document.getElementById("false-double-equals-data-type").innerHTML = `Data: ${doubleEqualsBooleanVariableFalse}`;

//*Triple Equals Boolean Logic*/
// init variables and boolean logic
let tripleEqualsDataTrue_Num1 = 10;
let tripleEqualsDataTrue_Num2 = 10;
let tripleEqualsDataTrue = tripleEqualsDataTrue_Num1 === tripleEqualsDataTrue_Num2;
// display variable data in string form
document.getElementById("true-datatype-triple-equals-data-info").innerHTML = `Data: <br>tripleEqualsDataTrue_Num1 = 10 <br>tripleEqualsDataTrue_Num2 = 10`;
// display if variable data is triple equals in boolean form
document.getElementById("true-datatype-triple-equals-data-type").innerHTML = `Result: <br>tripleEqualsDataTrue_Num1 === tripleEqualsDataTrue_Num2: ${tripleEqualsDataTrue}`;

// init variables and boolean logic
let tripleEqualsDataFalse_Num1 = 0;
let tripleEqualsDataFalse_Num2 = 10;
let tripleEqualsDataFalse = tripleEqualsDataFalse_Num1 === tripleEqualsDataFalse_Num2;
// display variable data in string form
document.getElementById("false-datatype-triple-equals-data-info").innerHTML = `Data: <br>tripleEqualsDataFalse_Num1 = 0 <br>tripleEqualsDataFalse_Num2 = 10`;
// display if variable data is triple equals in boolean form
document.getElementById("false-datatype-triple-equals-data-type").innerHTML = `Result: <br>tripleEqualsDataFalse_Num1 === tripleEqualsDataFalse_Num2: ${tripleEqualsDataFalse}`;


// init variables and boolean logic
let tripleEqualsValueTrue_String1 = "Magnus";
let tripleEqualsValueTrue_String2 = "Magnus";
let tripleEqualsValueTrue = tripleEqualsValueTrue_String1 === tripleEqualsValueTrue_String2;
// display variable data in string form
document.getElementById("true-value-triple-equals-data-info").innerHTML = `Data: <br>tripleEqualsValueTrue_String1 = "Magnus" <br>tripleEqualsValueTrue_String2 = "Magnus"`;
// display if variable data is triple equals in boolean form
document.getElementById("true-value-triple-equals-data-type").innerHTML = `Result: <br>tripleEqualsValueTrue_String1 === tripleEqualsValueTrue_String2: ${tripleEqualsValueTrue}`;



// init variables and boolean logic
let tripleEqualsValueFalse_String1 = "Magnus";
let tripleEqualsValueFalse_String2 = "Opus";
let tripleEqualsValueFalse = tripleEqualsValueFalse_String1 === tripleEqualsValueFalse_String2;
// display variable data in string form
document.getElementById("false-value-triple-equals-data-info").innerHTML = `Data: <br>tripleEqualsValueFalse_String1 = "Magnus" <br>tripleEqualsValueFalse_String2 = "Opus"`;
// display if variable data is triple equals in boolean form
document.getElementById("false-value-triple-equals-data-type").innerHTML = `Result: <br>tripleEqualsValueFalse_String1 === tripleEqualsValueFalse_String2: ${tripleEqualsValueFalse}`;


/* Operators */

// init variables and boolean logic
let trueAndOperator_Expression1 = 5 > 2;
let trueAndOperator_Expression2 = 10 > 4;
let trueAndOperatorDataTrue = trueAndOperator_Expression1 && trueAndOperator_Expression2;
// display variable data in string form
document.getElementById("true-and-operator-data-info").innerHTML = `Data: <br>trueAndOperator_Expression1 = 5 > 2 <br>trueAndOperator_Expression2 = 10 > 4`;
// display if variable data is AND in boolean form
document.getElementById("true-and-operator-data-type").innerHTML = `Result: <br>trueAndOperator_Expression1 && trueAndOperator_Expression2: ${trueAndOperatorDataTrue}`;


// init variables and boolean logic
let falseAndOperator_Expression1 = 5 > 10;
let falseAndOperator_Expression2 = 10 > 4;
let falseAndOperatorDataTrue = falseAndOperator_Expression1 && falseAndOperator_Expression2;
// display variable data in string form
document.getElementById("false-and-operator-data-info").innerHTML = `Data: <br>falseAndOperator_Expression1 = 5 > 10 <br>falseAndOperator_Expression2 = 10 > 4`;
// display if variable data is AND in boolean form
document.getElementById("false-and-operator-data-type").innerHTML = `Result: <br>falseAndOperator_Expression1 && falseAndOperator_Expression2: ${falseAndOperatorDataTrue}`;


// init variables and boolean logic
let trueOrOperator_Expression1 = 5 > 10;
let trueOrOperator_Expression2 = 10 > 4;
let orOperatorDataTrue = trueOrOperator_Expression1 || trueOrOperator_Expression2;
// display variable data in string form
document.getElementById("true-or-operator-data-info").innerHTML = `Data: <br>trueOrOperator_Expression1 = 5 > 10 <br>trueOrOperator_Expression2 = 10 > 4`;
// display if variable data is OR in boolean form
document.getElementById("true-or-operator-data-type").innerHTML = `Result: <br>trueOrOperator_Expression1 || trueOrOperator_Expression2: ${orOperatorDataTrue}`;

// init variables and boolean logic
let falseOrOperator_Expression1 = 5 > 10;
let falseOrOperator_Expression2 = 10 > 20;
let orOperatorDataFalse = falseOrOperator_Expression1 || falseOrOperator_Expression2;
// display variable data in string form
document.getElementById("false-or-operator-data-info").innerHTML = `Data: <br>falseOrOperator_Expression1 = 5 > 10 <br>falseOrOperator_Expression2 = 10 > 20`;
// display if variable data is OR in boolean form
document.getElementById("false-or-operator-data-type").innerHTML = `Result: <br>falseOrOperator_Expression1 || falseOrOperator_Expression2: ${orOperatorDataFalse}`;

// init variables and boolean logic
let trueNotOperator_Expression = 5 > 10 ;
let NotOperatorDataTrue = !trueNotOperator_Expression;
// display variable data in string form
document.getElementById("true-not-operator-data-info").innerHTML = `Data: <br>trueNotOperator_Expression = 5 > 10`;
// display if variable data is NOT in boolean form
document.getElementById("true-not-operator-data-type").innerHTML = `Result: <br>trueNotOperator_Expression = !5 > 10: ${NotOperatorDataTrue}`;


// init variables and boolean logic
let falseNotOperator_Expression = 20 > 10 ;
let NotOperatorDataFalse = !falseNotOperator_Expression;
// display variable data in string form
document.getElementById("false-not-operator-data-info").innerHTML = `Data: <br>falseNotOperator_Expression = 20 > 10`;
// display if variable data is NOT in boolean form
document.getElementById("false-not-operator-data-type").innerHTML = `Result: <br>falseNotOperator_Expression = !20 > 10: ${NotOperatorDataFalse}`;