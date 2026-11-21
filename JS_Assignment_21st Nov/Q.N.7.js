const validateWithdrawal = (withdrawalAmount, accountBalance) => {
    if (withdrawalAmount > accountBalance) {
        return "Insufficient Balance";
    } else if (withdrawalAmount % 500 !== 0) {
        return "Amount must be a multiple of 500";
    } else {
        return true;
    }
};

const withdrawMoney = (
    withdrawalAmount,
    accountBalance,
    validationCallback
) => {
    const validationResult = validationCallback(
        withdrawalAmount,
        accountBalance
    );

    if (validationResult === true) {
        const transactionFee = 25;
        const remainingBalance =
            accountBalance - withdrawalAmount - transactionFee;

        console.log("Account Balance: Rs.", accountBalance);
        console.log("Withdrawal Amount: Rs.", withdrawalAmount);
        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs.", transactionFee);
        console.log("Remaining Balance: Rs.", remainingBalance);

        return remainingBalance;
    } else {
        console.log("Account Balance: Rs.", accountBalance);
        console.log("Withdrawal Amount: Rs.", withdrawalAmount);
        console.log("Transaction Failed!");
        console.log("Reason:", validationResult);
        console.log("Remaining Balance: Rs.", accountBalance);

        return accountBalance;
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);
