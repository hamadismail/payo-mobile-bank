// Add Money
getInputById('btn-add-money').addEventListener('click', e => {
  e.preventDefault();

  const balance = getInputCovertedTextByID('balance');
  const addAmount = getInputConvertedValueById('add-amount');
  const accountPin = getInputConvertedValueById('account-pin');
  const accountNumber = getInputValueById('account-number');

  if (addAmount > 0) {
    if (accountNumber.length === 11) {
      if (accountPin === 1234) {
        const sum = balance + addAmount;
        setInnerText('balance', sum);

        const transactionContainer = getInputById('transactions-container');
        const li = document.createElement('li');

        li.innerText = ` Added amount ${addAmount} from ${accountNumber} account`;
        transactionContainer.appendChild(li);
      } else {
        alert('You entered the wrong PIN number');
      }
    } else {
      alert('Please Enter The Valid Account Number');
    }
  } else {
    alert('Amount should be greater then zero');
  }
});

// Cash Out
getInputById('btn-cashout').addEventListener('click', e => {
  e.preventDefault();

  const balance = getInputCovertedTextByID('balance');
  const accountNumber = getInputValueById('cashout-account-number');
  const accountPin = getInputConvertedValueById('cashout-account-pin');
  const cashoutAmount = getInputConvertedValueById('cashout-amount');

  const sub = balance - cashoutAmount;

  if (accountPin === 1234) {
    if (cashoutAmount <= 0 || isNaN(cashoutAmount)) {
      alert('Please Enter Valid Amount');
    } else if (sub > 0) {
      setInnerText('balance', sub);

      const transactionContainer = getInputById('transactions-container');
      const li = document.createElement('li');

      li.innerText = `Cashout amount ${cashoutAmount} from ${accountNumber} account`;
      transactionContainer.appendChild(li);
    } else {
      alert("You didn't have enough balance");
    }
  } else {
    alert('You entered wrong pin number');
  }
});

// logout
const logout = getInputById('btn-logout');
logout.addEventListener('click', () => {
  window.location.href = '../index.html';
});
