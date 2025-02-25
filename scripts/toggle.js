// Toggle Operations
const addMoney = document.getElementById('add-money');
const cashout = document.getElementById('cashout');
const sectionAddMoney = document.getElementById('section-add_money');
const sectionCashout = document.getElementById('section-cashout');

addMoney.classList.add('active');
sectionCashout.style.display = 'none';

addMoney.addEventListener('click', () => {
  sectionAddMoney.style.display = 'block';
  sectionCashout.style.display = 'none';

  addMoney.classList.add('active');
  cashout.classList.remove('active');
});
cashout.addEventListener('click', () => {
  sectionAddMoney.style.display = 'none';
  sectionCashout.style.display = 'block';

  cashout.classList.add('active');
  addMoney.classList.remove('active');
});
