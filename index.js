let firstNum = "";
let operator;
let secondNum = "";
const operationDisplay = document.getElementById("operationDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal").onclick = (() => equal());
const percentBtn = document.getElementById("percent").onclick = (() =>  percent());
const signsBtn = document.getElementById("sign").onclick = (() => changeSign());
const backspaceBtn = document.getElementById("backspace").onclick = (() => backspace());
const decimalBtn = document.getElementById("decimal").onclick = (() => decimal());

numberBtn.forEach(number => number.addEventListener("click", () => {
        if(!operator){ 
            firstNum += number.id //add string number to firstNum
            operationDisplay.textContent = firstNum //display new value
            console.log("firstNum: " + firstNum) //the textContents above can be combined
        } else if(operator){
            secondNum += number.id;
            operationDisplay.textContent = `${firstNum}${operator}${secondNum}`
            console.log("secondNum: " + secondNum);
        }
}))

operatorBtn.forEach(operation => operation.addEventListener("click", () => {
    let clickedOperator = operation.id;

    if (!firstNum) {
        // If firstNum is not defined, set it to "0"
        firstNum = "0";
    }

    if (firstNum && secondNum) {
        // If all three variables are defined, compute the previous operation
        let result = operate(firstNum, secondNum, operator);
        resultsDisplay.textContent = result;
        firstNum = result.toString(); // Update firstNum with the result for chaining
        secondNum = ""; // Reset secondNum
    }

    // Update operator to the clicked operator
    operator = clickedOperator;

    // Update the operation display
    operationDisplay.textContent = `${firstNum} ${operator}`;
}));


clearBtn.onclick = (() => {
    operationDisplay.textContent = "";
    resultsDisplay.textContent = "";
    firstNum = "";
    operator = "";
    secondNum = "";
})

function backspace(){
    //backspace for operationDisplay
    operationDisplay.textContent = operationDisplay.textContent.toString().slice(0, -1);

    //backspace for firstNum
    if(!secondNum && !operator){
        firstNum = firstNum.toString().slice(0, -1);
        return console.log("firstNum backspace: " + firstNum)
    }

    //backspace for operator
    if(!secondNum) return operator = operator.toString().slice(0, -1), 
        console.log("operator backspace: " + operator);

    //backspace for secondNum
    if(secondNum){
        secondNum = secondNum.toString().slice(0, -1);
        return console.log("secondNum backspace: " + secondNum)
    }
}

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
    if(operator){
        secondNum = secondNum * -1;
        console.log("firstNum change sign: " + secondNum)
        return operationDisplay.textContent = `${result}${operator}` + secondNum;
    };
}

function decimal(){
    if(!operator){
        if(!firstNum){
            firstNum = "0.";
            console.log(firstNum)
            return operationDisplay.textContent = firstNum;
        }
        if(firstNum && !firstNum.includes(".")){
            firstNum = firstNum + ".";
            console.log(firstNum)
            return operationDisplay.textContent = firstNum;
        }}

    if(operator){
        if(!secondNum){
            secondNum = "0.";
            console.log("secondNumDecimal: " + secondNum)
            return operationDisplay.textContent = firstNum + operator + secondNum;
        }
        if(secondNum && !secondNum.includes(".")){
            secondNum = secondNum + ".";
            return operationDisplay.textContent = firstNum + operator + secondNum;
        }}
}

function operate(firstNum, secondNum, operator){
    if(operator === "+") return add(firstNum, secondNum);
    if(operator ==="-") return subtract(firstNum, secondNum);
    if(operator === "×") return multiply(firstNum, secondNum);
    if(operator ==="÷") return divide(firstNum, secondNum);
}
function equal(){
    if(!firstNum || !secondNum) return; //prevents undefined
    let result = firstNum;//delays the display of firstNum for multiple equal clicks
    operate(firstNum, secondNum, operator)
    resultsDisplay.textContent = operate(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
    operationDisplay.textContent = `${result}${operator}${secondNum}`//display equation for multiple equal clicks
}