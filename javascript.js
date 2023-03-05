function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a/b;
}

function multiply(a, b) {
  return a*b;
}

function operate(operator, currentVal, newVal) {
  if (operator === "+") {
    return add(currentVal, newVal);
  }
  if (operator === "-") {
    return subtract(currentVal, newVal);    
  }
  if (operator === "/") {
    return divide(currentVal, newVal);
  }
  if (operator === "*") {
    return multiply(currentVal, newVal);
  }
}

const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons');

function createCalc(x, y) {
  for (let y = 0; y < gridSize; y++) {
    const div = document.createElement('div');
    div.classList.add('coloumn');
    container.appendChild(div);
    for (let x = 0; x < gridSize; x++) {
    const button = document.createElement('button');
    button.classList.add('btn');
    btn.addEventListener('click', selectButton);
      divx.appendChild(divy)
    }
  }
}

createCalc(4, 5);