const container = document.querySelector('#container');
let firstNumber, secondNumber, operator;

const add = () => firstNumber + secondNumber;

const substract = () => firstNumber - secondNumber;

const multiply = () =>  firstNumber * secondNumber;

const divide = () => firstNumber / secondNumber;

const main = () => {
  switch (operator) {
    case '+':
      console.log(`${firstNumber} + ${secondNumber} = ${add()}`);
      
      // break;

    case '-':
      console.log(`${firstNumber} - ${secondNumber} = ${substract()}`);
      
      // break;
    
    case '*':
      console.log(`${firstNumber} * ${secondNumber} = ${ multiply()}`);
    
      // break;

    case '/':
      console.log(`${firstNumber} / ${secondNumber} = ${divide()}`);
      
      // break;

    default:
      break;
  }
} 

firstNumber = 3;
secondNumber = 5;
operator = '+';

main();