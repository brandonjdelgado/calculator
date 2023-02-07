let operation;
let firstNumber = 0;
let secondNumber;
let clickCount = 0;
const display = document.querySelector('#display');
display.textContent = `${firstNumber}`;

const digits = document.querySelectorAll('#digit');
digits.forEach((digit) => digit.addEventListener('click', (e) => {
  clickCount += 1;
  if (clickCount === 1) {
    firstNumber = e.target.value;
    console.log(firstNumber);
    display.textContent = `${firstNumber}`;
  } else if (clickCount === 2) {
    secondNumber = e.target.value;
    console.log(secondNumber);
    display.textContent = `${secondNumber}`;
  }
}))

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => operator.addEventListener('click', (e) => {
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
  switch(operation) {
    case 'add':
      (add(firstNumber, secondNumber));
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