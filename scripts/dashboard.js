const btnAddMoney = document.getElementById('btn-add-money');

btnAddMoney.addEventListener('click', e => {
  e.preventDefault();
  const balance = document.getElementById('balance').innerText;
  const accountNumber = document.getElementById('account-number').value;
  const addAmount = document.getElementById('add-amount').value;
  const accountPin = document.getElementById('account-pin').value;

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

// logout
const logout = document.getElementById('btn-logout');
logout.addEventListener('click', () => {
  window.location.href = '../index.html';
});
