const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  const accountNumber = document.getElementById('account-number').value;
  const accountPin = document.getElementById('account-pin').value;

  if (accountNumber.length === 11 && accountPin === '1234') {
    // window.location.href = '../main.html';

    // for github page
    window.location.href =
      'https://hamadismail.github.io/payo-mobile-bank/main';
  } else {
    alert('Invalid Credentials');
  }
});
