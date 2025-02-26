const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  const accountNumber = document.getElementById('account-number').value;
  const accountPin = document.getElementById('account-pin').value;

  if (accountNumber.length === 11 && accountPin === '1234') {
    window.location.href = 'src/main.html';
  } else {
    alert('Invalid Credentials');
  }
});
