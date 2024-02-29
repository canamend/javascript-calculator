const calculator = document.querySelector('#calculator');
const domDisplayedValue = document.querySelector('#displayedValue');
let txt = document.createTextNode('');
domDisplayedValue.appendChild(txt);
let displayedValue = '';
let firstNumber, secondNumber, operator = null;
const regExp = /\+|\-|\/|\*/;


const add = () => +firstNumber + +secondNumber;

const substract = () => firstNumber - secondNumber;

const multiply = () =>  firstNumber * secondNumber;

const divide = () => {
  if(secondNumber == 0) return 'Error, the result of a division by zero is undefined'
  return firstNumber / secondNumber
};

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
      return displayedValue;
  }
} 

const catchClickedValue = (event) => {
  let value = event.target.value;
  switch (value) {
    case 'Clear':
      updateDisplayValue('');
      break;
    case 'Erase':
      if(displayedValue.length < 1) break;
      updateDisplayValue(displayedValue.slice(0, -1));
      break;
    case '=':
      setOperands();
      updateDisplayValue(operate().toString());
      clearValues();
      break;

    default:
      if( displayedValue.match(regExp) !== null && regExp.test(value)){
        setOperands();
        if(secondNumber == null || firstNumber == null){
          console.log('entra');
          return;
        }else{
          updateDisplayValue(operate().toString());
          clearValues();
        }
      }
      updateDisplayValue(displayedValue+value);
      break;
  }
}

const setOperator = () => {
  operator = displayedValue[displayedValue.search(regExp)];
}

const clearValues = () => {
  operator = '';
  firstNumber == null;
  secondNumber == null;
}

const setOperands = () => {
  setOperator();
  let operandsArray = displayedValue.split(operator);
  [firstNumber, secondNumber] = operandsArray;
}

const updateDisplayValue = (string) => {
  displayedValue = string;
  txt.nodeValue = displayedValue;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', catchClickedValue);
});
