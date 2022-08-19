// input value: string to number
function getValue(id) {
  const input = document.getElementById(id).value;
  const inputFieldValue = parseFloat(input);
  document.getElementById(id).value = '';
  return inputFieldValue;
}

// current amount: string to number
function getAmount(id) {
  const input = document.getElementById(id).innerText;
  const amount = parseFloat(input);
  return amount;
}

// add
function totalAmount(newAmount, previousAmount) {
  return newAmount + previousAmount;
}

// set amount 
function setText(id, value) {
  document.getElementById(id).innerText = value;
}