let operation;
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
  }
}))

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => operator.addEventListener('click', (e) => {
  operatorClickCount++;
  digitClickCount = 0;
  operation = e.target.value;
  console.log(operation);
}))

const equal = document.querySelector('#equal');
equal.addEventListener('click', operate);

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function operate() {
  operatorClickCount = 0;
  switch(operation) {
    case 'add':
      console.log(add(firstNumber, secondNumber));
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