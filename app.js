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

  deleteLastInput() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === "" && this.prevOperand != "") {
      this.prevOperand = this.prevOperand.toString().slice(0, -1);
    }
    this.updateCalculatorDisplay();
  }

  chooseOperation(operation) {
    // implement the operation function if the current operand is empty we need to prevent the main function
    if (this.currentOperand === "") return; // in this code we apply on the inner value in general
    if (this.prevOperand != "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = `${this.currentOperand}  ${operation}`;

    // console.log(this.prevOperand);
    this.currentOperand = "";
  }

  clearAll() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }

  compute() {
    // implement the omputation values
    let computation__result;
    const prev = parseFloat(this.prevOperand);
    const current = parseFloat(this.currentOperand);
    // validate the values of the inputs numbers itself

    if (isNaN(prev) || isNaN(current)) return; // prevent all the coputatino function

    // create a switch statement to handle the operations
    switch (this.operation) {
      case "+":
        computation__result = prev + current;
        break;
      case "-":
        computation__result = prev - current;
        break;
      case "*":
        computation__result = prev * current;
        break;
      case "÷":
        computation__result = prev / current;
      default:
        return;
    }
    this.currentOperand = computation__result;
    this.prevOperand = "";
    this.operation = undefined;
    this.updateCalculatorDisplay();
  }

  updateCalculatorDisplay() {
    current_ops_screen.innerText = this.currentOperand;
    prev_ops_screen.innerText = this.prevOperand;
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
operation.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateCalculatorDisplay();
  });
});

// computing function

equal_operation.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateCalculatorDisplay();
});

// clear function
clearAllOps.addEventListener("click", () => {
  {
    calculator.clearAll();
    calculator.updateCalculatorDisplay();
  }
});

// delete function
deleteOps.addEventListener("click", () => {
  calculator.deleteLastInput();
});
