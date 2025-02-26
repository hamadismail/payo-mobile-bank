const btnAddMoney = getInputById('btn-add-money');
const btnCashout = getInputById('btn-cashout');
const balance = getInputCovertedTextByID('balance');

// Add Money
btnAddMoney.addEventListener('click', e => {
  e.preventDefault();

  const addAmount = getInputConvertedValueById('add-amount');
  const accountPin = getInputConvertedValueById('account-pin');
  const accountNumber = getInputValueById('account-number');

  if (addAmount > 0) {
    if (accountNumber.length === 11) {
      if (accountPin === 1234) {
        const sum = balance + addAmount;
        setInnerText('balance', sum);
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
let sub = balance;
btnCashout.addEventListener('click', e => {
  e.preventDefault();
  const accountNumber = getInputValueById('cashout-account-number');
  const accountPin = getInputConvertedValueById('cashout-account-pin');
  const cashoutAmount = getInputConvertedValueById('cashout-amount');

  sub -= cashoutAmount;

  if (cashoutAmount <= 0 || isNaN(cashoutAmount)) {
    alert('Please Enter Valid Amount');
  } else if (sub > 0) {
    setInnerText('balance', sub);
  } else {
    alert("You didn't have enough balance");
  }
});

// logout
const logout = getInputById('btn-logout');
logout.addEventListener('click', () => {
  window.location.href = '../index.html';
});
