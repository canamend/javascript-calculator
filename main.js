const calculator = document.querySelector('#calculator');
const domDisplayedValue = document.querySelector('#displayedValue');
let txt = document.createTextNode('');
domDisplayedValue.appendChild(txt);
let firstNumber, secondNumber, operator, displayedValue = '';

const add = () => firstNumber + secondNumber;

const substract = () => firstNumber - secondNumber;

const multiply = () =>  firstNumber * secondNumber;

const divide = () => firstNumber / secondNumber;

const operate = (operator) => {
  switch (operator) {
    case '+':
      return `${firstNumber} + ${secondNumber} = ${add()}`;

    case '-':
      return `${firstNumber} - ${secondNumber} = ${substract()}`;
    
    case '*':
      return `${firstNumber} * ${secondNumber} = ${ multiply()}`;

    case '/':
      return `${firstNumber} / ${secondNumber} = ${divide()}`;

    default:
      return 'Operation not implemented yet';
  }
} 

const catchClickedValue = (event) => {
  let value = event.target.value;
  switch (value) {
    case 'Clear':
      
      break;
    case '=':
      break;
    default:
      appendValueToDisplay(value);
      txt.nodeValue = displayedValue;
      break;
  }
}

const appendValueToDisplay = ( value ) => {
  // TODO: Tal vez sea necesario implementar la deteccion de más de un operando
  displayedValue += value;
}

firstNumber = 3;
secondNumber = 5;
operator = '*';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', catchClickedValue);
});

console.log( operate(operator) );