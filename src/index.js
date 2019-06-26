var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("display");

var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal === "0")
        displayVal = "";
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = "0"
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener("click", performOperation, false);
}

clearBtn.onclick = () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

    if (displayVal === "")
        displayVal = "0";

    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes("."))
        displayVal += ".";
    displayValElement.innerText = displayVal;
}

calcOperatorBtns.onclick = () => {
    if (evalStringArray.length - 1 === "+" || "-" || "*" || "/")
        evalStringArray = evalStringArray.slice(0, evalStringArray - 1);
}