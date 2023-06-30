let firstNum = "";
let operator;
let secondNum = "";
const operationDisplay = document.getElementById("operationDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");


numberBtn.forEach(number => number.addEventListener("click", () => {
        if(!operator){ 
            firstNum += number.id //add string number to firstNum
            operationDisplay.textContent = "" //erase current display
            operationDisplay.textContent += firstNum //display new value
            console.log("firstNum: " + firstNum)
        } else if(operator != undefined){
            secondNum += number.id;
            operationDisplay.textContent = `${firstNum}${operator}`
            operationDisplay.textContent += secondNum;
            console.log("secondNum: " + secondNum);
        }
}))

operatorBtn.forEach(operation => operation.addEventListener("click", () => {
    operator = operation.id;
    if(operator !== undefined) 
        operationDisplay.textContent = `${firstNum}`; //removes the initial chosen operator
        operationDisplay.textContent += operator;
    console.log("operator: " +operator)
}))

clearBtn.onclick = (() => {
    operationDisplay.textContent = "";
    resultsDisplay.textContent = "";
    firstNum = "";
    operator = "";
    secondNum = "";
})

function add(firstNum, secondNum){
    let first = parseInt(firstNum)
    let second = parseInt(secondNum)
    return first + second;
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

function operate(firstNum, secondNum, operator){
    if(operator === "+") return add(firstNum, secondNum);
    if(operator ==="-") return subtract(firstNum, secondNum);
    if(operator === "×") return multiply(firstNum, secondNum);
    if(operator ==="÷") return divide(firstNum, secondNum);
}

equalBtn.onclick = (() => {
    operate()
    resultsDisplay.textContent = operate(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
})

