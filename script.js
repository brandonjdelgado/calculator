let firstNumber = 0;
let secondNumber;
let digitClickCount = 0;
let operatorClickCount = 0;
let operation;

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
  } else if (operatorClickCount >= 1) {
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

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', (e) => {
  if (operatorClickCount === 0) {
    firstNumber += e.target.value;
    display.textContent = firstNumber;
  } else if (operatorClickCount >= 1) {
    secondNumber += e.target.value;
    display.textContent = secondNumber;
  }
  decimal.disabled = true;
})

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => operator.addEventListener('click', (e) => {
  operatorClickCount++;
  decimal.disabled = false;
  if (operatorClickCount > 1 && secondNumber !== null) {
    operate();
    firstNumber = display.textContent;
    secondNumber = null;
    digitClickCount = 0;
    operation = e.target.value;
    console.log(`First: ${firstNumber}`);
    console.log(`Second: ${secondNumber}`);
  } else {
    digitClickCount = 0;
    operation = e.target.value;
    console.log(`First: ${firstNumber}`);
    console.log(`Second: ${secondNumber}`);
  }
}))

const equal = document.querySelector('#equal');
equal.addEventListener('click', operate);

function add(a, b) {
  if (a === 'Error' || b === 'Error') {
    display.textContent = 'Error';
  } else {
    const result = +a + +b;
    if (result % 1 !== 0) {
      display.textContent = Math.round(result * 100) / 100;
    } else {
      display.textContent = result;
    }
  }
}

function subtract(a, b) {
  if (a === 'Error' || b === 'Error') {
    display.textContent = 'Error';
  } else {
    const result = +a - +b;
    if (result % 1 !== 0) {
      display.textContent = Math.round(result * 100) / 100;
    } else {
      display.textContent = result;
    }
  }
}

function multiply(a, b) {
  if (a === 'Error' || b === 'Error') {
    display.textContent = 'Error';
  } else {
    const result = +a * +b;
    if (result % 1 !== 0) {
      display.textContent = Math.round(result * 100) / 100;
    } else {
      display.textContent = result;
    }
  }
}

function divide(a, b) {
  if (+b === 0) {
    display.textContent = 'Error';
  } else {
    const result = +a / +b;
    if (result % 1 !== 0) {
      display.textContent = Math.round(result * 100) / 100;
    } else {
      display.textContent = result;
    }
  }
}

function operate() {
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
  decimal.disabled = false;
})
