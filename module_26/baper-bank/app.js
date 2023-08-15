const viewBalance = document.getElementById('current-balance');

document.getElementById('money-input-btn').addEventListener('click', function(event){
    // Deposit Money Input
    const moneyDeposit = document.getElementById('money-input');
    // Deposit Money VIEW
    const viewDepositMoney = document.getElementById('deposit-money');

    if (moneyDeposit.value <= 0) {
        depositeError.showModal();
    } else {
        // Total Deposit
        const totalDeposit = parseFloat(viewDepositMoney.innerText) + parseFloat(moneyDeposit.value);
        viewDepositMoney.innerText = totalDeposit;
        
        // Display Balance
        viewBalance.innerText = parseFloat(moneyDeposit.value) + parseFloat(viewBalance.innerText);
        moneyDeposit.value = '';
    }

});

document.getElementById('money-output-btn').addEventListener('click', function() {
    // Withdraw Money Input
    const moneyWithdraw = document.getElementById('money-output');
    // Total Withdraw Money Display
    const viewWithdrawMoney = document.getElementById('withdraw-money');

    if (moneyWithdraw.value <= 0) {
        withdrawError.showModal();
    } else {
        if (parseFloat(viewBalance.innerText) >= parseFloat(moneyWithdraw.value))  {
            const totalWithdraw = parseFloat(viewWithdrawMoney.innerText) + parseFloat(moneyWithdraw.value) ;
            viewWithdrawMoney.innerText = totalWithdraw;
        
            // Current Balance - withdraw
            viewBalance.innerText = parseFloat(viewBalance.innerText) - parseFloat(moneyWithdraw.value);
            moneyWithdraw.value = '';
        } else {
            outOfAmount.showModal();
        }
    }
});