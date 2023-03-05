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

function changeDisplay(e) {
  if (e.target.textContent.search(/[0-9]/) === 0 || e.target.textContent === "." && screen.textContent.indexOf(".") === -1) {
    return screen.textContent += e.target.textContent;
  }
  if (e.target.textContent === "Clear") {
    return screen.textContent = "";
  }
  if (e.target.textContent === "Backspace") {
    return screen.textContent = screen.textContent.split("").slice(0, screen.textContent.length-1).join("");
  }
  if (e.target.textContent === "+/-") {
    if (screen.textContent.indexOf("-") !== -1) {
      return screen.textContent = screen.textContent.split("").slice(1).join("");
    }
    return screen.textContent = "-" + screen.textContent;
  }
}

const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', changeDisplay);
});