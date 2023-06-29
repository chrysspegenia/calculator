let firstNum;
let operator;
let secondNum;



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