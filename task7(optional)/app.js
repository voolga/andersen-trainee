const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  memory: 0,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else if (calculator.displayValue === '0') {
    calculator.displayValue = digit;
  } else {
    calculator.displayValue += digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) 
  {
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result.toFixed(8)).slice(0, 10);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '=': (firstOperand, secondOperand) => secondOperand,
};

function clearCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');

  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();

    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();

    return;
  }

  if (target.classList.contains('all-clear')) {
    clearCalculator();
    updateDisplay();

    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

function memoryRecall() {
  calculator.displayValue = calculator.memory;
  calculator.waitingForSecondOperand = true;
  updateDisplay();
}

function memoryClear() {
  calculator.memory = 0;
}

function memoryAdd() {
  calculator.memory += parseFloat(calculator.displayValue);
}

function memorySubtract() {
  calculator.memory -= parseFloat(calculator.displayValue);
}

document.querySelector('.memory-recall').addEventListener('click', memoryRecall);
document.querySelector('.memory-clear').addEventListener('click', memoryClear);
document.querySelector('.memory-add').addEventListener('click', memoryAdd);
document.querySelector('.memory-subtract').addEventListener('click', memorySubtract);

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    inputDigit(e.key);
  }
  if (e.key === '.' || e.key === ',') {
    inputDecimal('.');
  }

  if (e.key === '=' || e.key === 'Enter') 
  {
    handleOperator('=');
  }
  if (e.key === 'Escape') {
    clearCalculator();
  }
  if (['/', '*', '-', '+'].includes(e.key)) {
    handleOperator(e.key);
  }

  updateDisplay();
});



