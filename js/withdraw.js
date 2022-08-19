/*
1. add withdraw button event handler
2. get withdraw amount by using getValue function
3. get previous withdraw by using getAmount function
4. add new withdraw and previous withdraw by using totalAmount function
5. set new withdraw total using setText function

6. get pervious balance by using getAmount function
7. add total balance by using totalAmount function
8. set new balance by using setText function
*/
// btn-withdraw
// withdraw-field
// withdraw-total
// balance-total

document.getElementById('btn-withdraw').addEventListener('click', () => {
    const newWithdrawAmount = getValue('withdraw-field');
    const previousWithdrawTotal = getAmount('withdraw-total');
    const totalWithdrawAmount =  totalAmount(newWithdrawAmount, previousWithdrawTotal);
    setText('withdraw-total', totalWithdrawAmount);

    const previousBalance = getAmount('balance-total');
    const currentBalance = totalAmount(previousBalance, (-1 * newWithdrawAmount));
    setText('balance-total', currentBalance)
});