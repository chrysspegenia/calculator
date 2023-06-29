let firstNum;
let operator;
let secondNum;
const operationDisplay = document.getElementById("operationDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
operationDisplay.textContent = "";
resultsDisplay.textContent = "";

numberBtn.forEach(number => number.addEventListener("click", () => {
    firstNum = number.id;
    operationDisplay.textContent += firstNum;
}))

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

//keep option to replace value to actual symbols for HTML text display
function operate(firstNum, secondNum, operator){
    if(operator === "add") return add(firstNum, secondNum);
    if(operator ==="subtract") return subtract(firstNum, secondNum);
    if(operator === "multiply") return multiply(firstNum, secondNum);
    if(operator ==="divide") return divide(firstNum, secondNum);
}
console.log(operate(firstNum, secondNum, operator))