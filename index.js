let firstNum = "";
let operator;
let secondNum = "";
const operationDisplay = document.getElementById("operationDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const equalBtn = document.querySelector(".equal");
const percentBtn = document.getElementById("percent").onclick = (() =>  percent());
const signsBtn = document.getElementById("sign").onclick = (() => changeSign());


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
        secondNum = ""; //reset secondNum when clicking a new operator
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
    let first = parseFloat(firstNum)
    let second = parseFloat(secondNum)
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

function percent(){
    if(!firstNum) return;
    if(!operator){ 
        firstNum = firstNum / 100;
        console.log(`firstNum percent: ` + firstNum);
        return operationDisplay.textContent = firstNum; //display the percent value of firstNum
    }
    if(!secondNum) return;
    if(operator != undefined){
        secondNum = secondNum/100;
        console.log(`secondNum percent: ` + secondNum);
        return operationDisplay.textContent = `${firstNum}${operator}` + secondNum;
    }
}

function changeSign(){
    if(!firstNum) return;
    let result = firstNum;
    if(!operator){
        firstNum = firstNum * -1;
        console.log("firstNum change sign: " + firstNum)
        return operationDisplay.textContent = firstNum;
    }
    
    if(!secondNum) return;
    if(operator !== undefined){
        secondNum = secondNum * -1;
        console.log("firstNum change sign: " + secondNum)
        return operationDisplay.textContent = `${result}${operator}` + secondNum;
    };
}

function operate(firstNum, secondNum, operator){
    if(operator === "+") return add(firstNum, secondNum);
    if(operator ==="-") return subtract(firstNum, secondNum);
    if(operator === "×") return multiply(firstNum, secondNum);
    if(operator ==="÷") return divide(firstNum, secondNum);
}

equalBtn.onclick = (() => {
    if(!firstNum || !secondNum) return; //prevents undefined
    let result = firstNum;//delays the display of firstNum for spam equal
    operate()
    resultsDisplay.textContent = operate(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
    operationDisplay.textContent = `${result}${operator}${secondNum}`//display equation for spamming equal
})
