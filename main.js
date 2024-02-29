const calculator = document.querySelector('#calculator');
const domDisplayedValue = document.querySelector('#displayedValue');
let txt = document.createTextNode('');
domDisplayedValue.appendChild(txt);
let displayedValue = '';
let firstNumber, secondNumber, operator;

const add = () => +firstNumber + +secondNumber;

const substract = () => firstNumber - secondNumber;

const multiply = () =>  firstNumber * secondNumber;

const divide = () => firstNumber / secondNumber;

const operate = () => {
  switch (operator) {
    case '+':
      return add();

    case '-':
      return substract();
    
    case '*':
      return multiply();

    case '/':
      return divide();

    default:
      return 'Operation not implemented yet';
  }
} 

const catchClickedValue = (event) => {
  let value = event.target.value;
  let regExp = /\+|\-|\/|\*/;
  switch (value) {
    case 'Clear':
      updateDisplayValue('');
      break;
    case '=':
      setOperator(regExp);
      let operandsArray = displayedValue.split(operator);
      [firstNumber, secondNumber] = operandsArray;
      updateDisplayValue(operate());
      break;
    default:
      if( value.match(regExp) ){
        //TODO: here goes the code to integrate more than one operator
      }
      appendValueToDisplay(value);
      updateDisplayValue(displayedValue);
      break;
  }
}

const setOperator = (regExp) => {
  operator = displayedValue[displayedValue.search(regExp)];
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
