let firstNum;
let operator;
let secondNum;
const operationDisplay = document.getElementById("operationDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");


numberBtn.forEach(number => number.addEventListener("click", () => {
    //firstNum = number.id;
    // operationDisplay.textContent += firstNum;
    
        if(!operator){ 
            firstNum += number.id
            operationDisplay.textContent = "" 
            operationDisplay.textContent += firstNum
            console.log("firstNum: " + firstNum)
        } else if(operator != undefined){
            secondNum = number.id;
            operationDisplay.textContent = `${firstNum}${operator}`
            operationDisplay.textContent += secondNum;
            console.log("secondNum: " + secondNum);
        }
    
    
}))

operatorBtn.forEach(operation => operation.addEventListener("click", () => {
    operator = operation.id;
    operationDisplay.textContent += operator;
}))

clearBtn.onclick = (() => {
    operationDisplay.textContent = "";
    resultsDisplay.textContent = "";
    firstNum = "";
    operator = "";
    secondNum = "";
})

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
    if(operator === "+") return add(firstNum, secondNum);
    if(operator ==="-") return subtract(firstNum, secondNum);
    if(operator === "×") return multiply(firstNum, secondNum);
    if(operator ==="÷") return divide(firstNum, secondNum);
}
//console.log(operate(firstNum, secondNum, operator))


equalBtn.onclick = (() => {
    operate()
    resultsDisplay.textContent = operate(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
})

