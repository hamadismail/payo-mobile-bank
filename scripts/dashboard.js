// Add Money
getInputById('btn-add-money').addEventListener('click', e => {
  e.preventDefault();

  const balance = getInputCovertedTextByID('balance');
  const addAmount = getInputConvertedValueById('add-amount');
  const accountPin = getInputConvertedValueById('account-pin');
  const accountNumber = getInputValueById('account-number');
  const selectedBank = getInputValueById('banks');

  if (selectedBank === 'Select Bank') {
    alert('Please select a bank');
    return;
  } else if (addAmount > 0) {
    if (accountNumber.length === 11) {
      if (accountPin === 1234) {
        const sum = balance + addAmount;
        setInnerText('balance', sum);

        const transactionContainer = getInputById('transactions-container');
        const div = document.createElement('div');
        div.classList.add('my-4', 'bg-green-100', 'rounded-lg', 'p-3');

        div.innerHTML = `
          <h1>Added Money ${addAmount} From ${selectedBank} Bank</h1>
          <h1>Account Number : ${accountNumber}</h1>
        `;

        transactionContainer.appendChild(div);
      } else {
        alert('You entered the wrong PIN number');
      }
    } else {
      alert('Please Enter The Valid Account Number');
    }
  } else {
    alert('Amount should be greater then zero');
    return;
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
      return;
    } else if (sub >= 0) {
      setInnerText('balance', sub);

      const transactionContainer = getInputById('transactions-container');
      const div = document.createElement('div');
      div.classList.add('my-4', 'bg-red-200', 'rounded-lg', 'p-3');

      div.innerHTML = `
          <h1>Cashout Money ${cashoutAmount}</h1>
          <h1>Account Number : ${accountNumber}</h1>
        `;

      transactionContainer.appendChild(div);
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
