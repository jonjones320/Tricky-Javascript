function createAccount(pin, amount) {
    let currentPin = pin;
    let balance = amount;

    return {
        checkBalance(inputPin) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            return `Current balance: $${balance}`;
        },


        deposit(inputPin, amount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            balance += amount;
            return `Deposited $${amount}. Current balance: $${balance}`;
        },


        withdraw(inputPin, amount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            if (amount > balance) {
                return `Insufficient funds. Current balance: $${balance}`;
            }
            balance -= amount;
            return `Withdrew $${amount}. Current balance: $${balance}`;
        },


        changePin(inputPin, newPin) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed.";
        }
    };
    
}

module.exports = { createAccount };
