const calculator = document.querySelector('#calculator');
const domDisplayedValue = document.querySelector('#displayedValue');
let txt = document.createTextNode('');
domDisplayedValue.appendChild(txt);
let displayedValue = '';

const add = (firstNumber, secondNumber) => +firstNumber + +secondNumber;

const substract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) =>  firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);

    case '-':
      return substract(firstNumber, secondNumber);
    
    case '*':
      return multiply(firstNumber, secondNumber);

    case '/':
      return divide(firstNumber, secondNumber);

    default:
      return 'Operation not implemented yet';
  }
} 

const catchClickedValue = (event) => {
  let value = event.target.value;
  switch (value) {
    case 'Clear':
      updateDisplayValue('');
      break;
    case '=':
      let operator = getOperator(displayedValue);
      let operandsArray = displayedValue.split(operator);
      updateDisplayValue(operate(operator, ...operandsArray));
      break;
    default:
      appendValueToDisplay(value);
      updateDisplayValue(displayedValue);
      break;
  }
}

const getOperator = (operation) => {
  let regExp = /\+|\-|\/|\*/;
  let operator = operation.search(regExp);
  return operation[operator];
}

const appendValueToDisplay = ( value ) => {
  // TODO: Tal vez sea necesario implementar la deteccion de más de un operando
  displayedValue += value;
}

const updateDisplayValue = (string) => {
  displayedValue = string;
  txt.nodeValue = displayedValue;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', catchClickedValue);
});
