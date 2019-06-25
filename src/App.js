import React from 'react';
import logo from './logo.svg';
import './App.css';

var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

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
      displayVal = "0";
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
      var evaluation = eval(evalStringArray.join(' '));
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

function App() {
}

export default App;
