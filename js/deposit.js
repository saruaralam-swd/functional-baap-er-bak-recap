/*
1.  add event listener to the deposit button
2.  get update amount from the deposit input field
    than convert string to number deposit amount
3.  clear the deposit input field getting the value
4.  get the previous deposit total
5.  calculate new deposit total and set the value to the deposit total
6.  get current balance total
7.  calculate the new balance and set it to the balance total element
*/
// btn-deposit
// deposit-field
// deposit-total
// balance-total

document.getElementById('btn-deposit').addEventListener('click', () => {
    const newDepositAmount = getValue('deposit-field');
    const previousDepositTotal = getAmount('deposit-total');
    const totalDepositAmount =  totalAmount(newDepositAmount, previousDepositTotal);
    setText('deposit-total', totalDepositAmount);
    
    const previousBalance = getAmount('balance-total');
    const currentBalance = totalAmount(previousBalance, newDepositAmount)
    setText('balance-total', currentBalance)
});