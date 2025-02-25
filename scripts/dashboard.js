const btnAddMoney = document.getElementById('btn-add-money');
const btnCashout = document.getElementById('btn-cashout');
const balance = document.getElementById('balance').innerText;

// Add Money
btnAddMoney.addEventListener('click', e => {
  e.preventDefault();
  const accountNumber = document.getElementById('account-number').value;
  const accountPin = document.getElementById('account-pin').value;
  const addAmount = document.getElementById('add-amount').value;

  if (addAmount > 0) {
    if (accountNumber.length === 11) {
      if (accountPin === '1234') {
        const sum = parseInt(balance) + parseInt(addAmount);
        document.getElementById('balance').innerText = sum;
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
let sub = parseInt(balance);
btnCashout.addEventListener('click', e => {
  e.preventDefault();
  const accountNumber = document.getElementById('cashout-account-number').value;
  const accountPin = document.getElementById('cashout-account-pin').value;
  const cashoutAmount = document.getElementById('cashout-amount').value;

  sub -= parseInt(cashoutAmount);

  if (cashoutAmount <= 0) {
    alert('Please Enter Valid Amount');
  } else if (sub >= 0) {
    document.getElementById('balance').innerText = sub;
  } else {
    alert("You didn't have enough balance");
  }
});

// logout
const logout = document.getElementById('btn-logout');
logout.addEventListener('click', () => {
  window.location.href = '../index.html';
});
