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