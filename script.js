let firstNumber = 0;
let secondNumber = null;
let digitClickCount = 0;
let operatorClickCount = 0;
let decimalClickCount = 0;
// let equalClickCount = 0;
let operation = null;

const display = document.querySelector('#display');
display.textContent = `${firstNumber}`;

const digits = document.querySelectorAll('#digit');
digits.forEach((digit) => digit.addEventListener('click', (e) => {
  digitClickCount++;
  console.log(`digits digit: ${digitClickCount}`)
  if (operatorClickCount === 0) {
    if (digitClickCount === 1) {
      if (decimalClickCount === 0) {
        firstNumber = e.target.value;
        display.textContent = firstNumber;
        console.log(`first: ${firstNumber}`);
      } else if (decimalClickCount === 1) {
        if (firstNumber === 0) {
          firstNumber = e.target.value;
          display.textContent = firstNumber;
          console.log(`first: ${firstNumber}`);
        } else {
          firstNumber = display.textContent + e.target.value;
          display.textContent = firstNumber;
          console.log(`first: ${firstNumber}`);
        }
      }
    } else if (digitClickCount > 1) {
      firstNumber = firstNumber + e.target.value;
      display.textContent = firstNumber;
      console.log(`first: ${firstNumber}`);
    }
  } else if (operatorClickCount >= 1) {
    if (digitClickCount === 1) {
      if (decimalClickCount === 0) {
        secondNumber = e.target.value;
        display.textContent = secondNumber;
        console.log(`second: ${secondNumber}`);
      } else if (decimalClickCount === 1) {
        if (secondNumber === 0) {
          secondNumber = e.target.value;
          display.textContent = secondNumber;
          console.log(`second: ${secondNumber}`);
        } else {
          secondNumber = display.textContent + e.target.value;
          display.textContent = secondNumber;
          console.log(`second: ${secondNumber}`);
        }
      }
    } else if (digitClickCount > 1) {
      secondNumber = secondNumber + e.target.value;
      display.textContent = secondNumber;
      console.log(`second: ${secondNumber}`);
    }
  }
}))

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', (e) => {
  decimalClickCount++;
  console.log(`decimal decimal: ${decimalClickCount}`)
  if (operatorClickCount === 0) {
    if (digitClickCount === 0) {
      if (firstNumber !== 0) {
        firstNumber += e.target.value;
        display.textContent = firstNumber;
        console.log(`first number: ${firstNumber}`);
      } else {
        firstNumber = 0;
        firstNumber += e.target.value;
        console.log(`first number: ${firstNumber}`);
        display.textContent = firstNumber;
      }
    } else {
      firstNumber += e.target.value;
      display.textContent = firstNumber;
      console.log(`first number: ${firstNumber}`);
    }
  } else if (operatorClickCount >= 1) {
    if (digitClickCount === 0) {
      secondNumber = 0;
      secondNumber += e.target.value;
      console.log(`second number: ${secondNumber}`);
      display.textContent = secondNumber;
    } else {
      secondNumber += e.target.value;
      display.textContent = secondNumber;
      console.log(`second number: ${secondNumber}`);
    }
  }
  decimal.disabled = true;
})

const signs = document.querySelector('#signs');
signs.addEventListener('click', () => {
  if (operatorClickCount === 0) {
    firstNumber *= -1;
    console.log(`first number: ${firstNumber}`);
    display.textContent = firstNumber;
  } else if (operatorClickCount >= 1) {
    secondNumber *= -1;
    console.log(`second number: ${secondNumber}`);
    display.textContent = secondNumber;
  }
})

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => {
  if (operatorClickCount === 0) {
    if (firstNumber !== 0) {
      firstNumber /= 100;
      console.log(`first number: ${firstNumber}`);
      display.textContent = firstNumber;
      decimal.disabled = true;
    } if (firstNumber === 0){
      decimal.disabled = false;
    }
  } else if (operatorClickCount >= 1) {
    if (secondNumber !== 0) {
      secondNumber /= 100;
      console.log(`second number: ${secondNumber}`);
      display.textContent = secondNumber;
      decimal.disabled = true;
    } if (secondNumber === 0){
      decimal.disabled = false;
    }
  }
}) 

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => operator.addEventListener('click', (e) => {
  operatorClickCount++;
  console.log(`operators operator: ${operatorClickCount}`)
  decimal.disabled = false;
  if (operatorClickCount > 1 && secondNumber !== null && operation !== null) {
    operate();
    firstNumber = display.textContent;
    secondNumber = null;
    digitClickCount = 0;
    decimalClickCount = 0;
    operation = e.target.value;
    console.log(operation);
    console.log(`First: ${firstNumber}`);
    console.log(`Second: ${secondNumber}`);
  } else {
    console.log('less than 1 or equal to 1');
    firstNumber = display.textContent;
    digitClickCount = 0;
    console.log(`operators digit: ${digitClickCount}`);
    decimalClickCount = 0;
    console.log(`operators decimal: ${decimalClickCount}`);
    operation = e.target.value;
    console.log(operation);
    console.log(`First: ${firstNumber}`);
    console.log(`Second: ${secondNumber}`);
  }
}))

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  operate();
  digitClickCount = 0;
  console.log(`equal digit: ${digitClickCount}`);
  decimalClickCount = 0;
  console.log(`equal decimal: ${decimalClickCount}`);
  operatorClickCount = 0;
  console.log(`equal operator: ${operatorClickCount}`);
  secondNumber = null;
  firstNumber = display.textContent;
  operation = null;
  console.log(`first number: ${firstNumber}`);
  const isDecimal = firstNumber.includes('.');
  console.log(`${isDecimal} contains '.' in '${firstNumber}'`)
  if (isDecimal) {
    console.log(true);
    decimal.disabled = true;
  } else {
    decimal.disabled = false;
  }
  // maybe wrong cuz no else statement
  console.log(`First: ${firstNumber}`);
  console.log(`Second: ${secondNumber}`);
});

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
  console.log(`equal digit: ${digitClickCount}`);
  operatorClickCount = 0;
  console.log(`equal operator: ${operatorClickCount}`);
  decimalClickCount = 0;
  console.log(`equal decimal: ${decimalClickCount}`);
  operation = null;
  secondNumber = null;
  display.textContent = firstNumber;
  decimal.disabled = false;
})

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
