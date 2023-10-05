class Calculator {
  constructor(screens) {
    const { current_ops_screen, prev_ops_screen } = screens; //extract the values from the distructuring however the order is
    this.current_ops_screen = current_ops_screen;
    this.prev_ops_screen = prev_ops_screen;
    this.clearAll(); //whenever we build a new calculator we clear all the data
  }

  //add the main functionality of the calculator

  appendNumber(number) {
    //append the numbers
    if (number === "." && this.currentOperand.includes(".")) return; // prevent the
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  delete() {}

  chooseOperation(operation) {}

  clearAll() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }

  compute() {}

  updateCalculatorDisplay() {
    current_ops_screen.innerText = this.currentOperand;
  }
}

// select the different elemnts

const current_ops_screen = document.querySelector("[data-current]");
const prev_ops_screen = document.querySelector("[data-prev]");
const numbers__btn = document.querySelectorAll("[data-number]");
const clearAllOps = document.querySelector("[data-all-clear]");
const deleteOps = document.querySelector("[data-delete]");
const operation = document.querySelectorAll("[data-operation]");
const equal_operation = document.querySelector("[data-equal]");

// create a constant calculator

const calculator = new Calculator(prev_ops_screen, current_ops_screen);

numbers__btn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateCalculatorDisplay();
  });
});

// operations choosed
