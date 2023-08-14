const viewDeposit = document.getElementById('deposit-money');
const viewWithdraw = document.getElementById('withdraw-money');
const viewBalance = document.getElementById('current-balance');
const moneyDeposit = document.getElementById('money-input');
const moneyWithdraw = document.getElementById('money-output');


const depositMoney = 0;
// const withdrawMoney = 0;
// const currentBalance = 1200;
// viewBalance.innerText = currentBalance;

document.getElementById('money-input-btn').addEventListener('click', function() {
    
    const totalDeposit =  moneyDeposit + depositMoney;
    // inputMoney = depositMoney;
    viewDeposit.innerText = totalDeposit;

});

