function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }

  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };

  BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  };

  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance for ${this.name}: $${this.balance}`);
  };

  BankAccount.prototype.isActive = function() {
    return this.active;
  };

  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }

  const account1 = new BankAccount(1, "John Doe", "Savings", 1000);
  const account2 = new BankAccount(2, "Jane Doe", "Checking", 500);

  function deposit(accountNumber, amount) {
    const account = accountNumber === 1 ? account1 : account2;
    account.deposit(amount);
    updateAccountInfo(accountNumber);
  }

  function withdraw(accountNumber, amount) {
    const account = accountNumber === 1 ? account1 : account2;
    account.withdraw(amount);
    updateAccountInfo(accountNumber);
  }

  function checkBalance(accountNumber) {
    const account = accountNumber === 1 ? account1 : account2;
    account.checkBalance();
    updateAccountInfo(accountNumber);
  }

  function checkIsActive() {
    console.log("Is account1 active?", account1.isActive());
    console.log("Is account2 active?", account2.isActive());
  }

  function displayTotalBalance() {
    const totalBalance = getTotalBalance([account1, account2]);
    console.log(`Total balance of all active accounts: $${totalBalance}`);
  }

  function updateAccountInfo(accountNumber) {
    const account = accountNumber === 1 ? account1 : account2;
    const accountInfoElement = document.getElementById(`account${accountNumber}-info`);
    accountInfoElement.textContent = `Account ${accountNumber} - ${account.name}'s balance: $${account.balance}`;
  }