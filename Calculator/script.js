const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorSelectorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');

let result;




function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  const operator = operatorSelectorInput.value;
  let result = firstNumber + secondNumber;
  console.log(result);
}
calculateButton.addEventListener('click', calculate);