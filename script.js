let firstNumber = 0;
let secondNumber;
let digitClickCount = 0;
let operatorClickCount = 0;
const display = document.querySelector('#display');
display.textContent = `${firstNumber}`;

const digits = document.querySelectorAll('#digit');
digits.forEach((digit) => digit.addEventListener('click', (e) => {
  digitClickCount++;
  if (operatorClickCount === 0) {
    if (digitClickCount === 1) {
      firstNumber = e.target.value;
      display.textContent = firstNumber;
    }
    else if (digitClickCount > 1) {
      firstNumber = firstNumber.toString() + e.target.value;
      display.textContent = firstNumber;
    }
  } else if (operatorClickCount === 1) {
    if (digitClickCount === 1) {
      secondNumber = e.target.value;
      display.textContent = secondNumber;
    }
    else if (digitClickCount > 1) {
      secondNumber = secondNumber.toString() + e.target.value;
      display.textContent = secondNumber;
    }
  } else if (operatorClickCount > 1) {
    if (digitClickCount === 1) {
      secondNumber = e.target.value;
      display.textContent = secondNumber;
    }
    else if (digitClickCount > 1) {
      secondNumber = secondNumber.toString() + e.target.value;
      display.textContent = secondNumber;
    }
  }
}))

let operation;

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => operator.addEventListener('click', (e) => {
  operatorClickCount++;
  if (operatorClickCount > 1) {
    operate();
    firstNumber = display.textContent;
    // console.log(firstNumber);
    digitClickCount = 0;
    operation = e.target.value;
  } else {
    digitClickCount = 0;
    operation = e.target.value;
  }
}))

const equal = document.querySelector('#equal');
equal.addEventListener('click', operate);

function add(a, b) {
  const result = +a + +b;
  display.textContent = result;
}

function subtract(a, b) {
  const result = +a - +b;
  display.textContent = result;
}

function multiply(a, b) {
  const result = +a * +b;
  display.textContent = result;
}

function divide(a, b) {
  const result = +a / +b;
  display.textContent = result;
}

function operate() {
  // operatorClickCount = 0;
  let result; 
  switch(operation) {
    case 'add':
      add(firstNumber, secondNumber);
      break;
    case 'subtract':
      subtract(firstNumber, secondNumber);
      break;
    case 'multiply':
      multiply(firstNumber, secondNumber);
      break;
    case 'divide':
      divide(firstNumber, secondNumber);
      break;
  }
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  firstNumber = 0;
  digitClickCount = 0;
  operatorClickCount = 0;
  operation = null;
  secondNumber = null;
  display.textContent = firstNumber;
})