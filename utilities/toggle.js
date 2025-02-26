// Toggle Operations
toggleClassAdd('add-money', 'active');
handleToggle('section-cashout', 'none');
handleToggle('section-transactions', 'none');

// add money
document.getElementById('add-money').addEventListener('click', () => {
  handleToggle('section-add_money', 'block');
  handleToggle('section-cashout', 'none');
  handleToggle('section-transactions', 'none');

  toggleClassAdd('add-money', 'active');
  toggleClassRemove('cashout', 'active');
  toggleClassRemove('transactions', 'active');
});

// cashout
document.getElementById('cashout').addEventListener('click', () => {
  handleToggle('section-cashout', 'block');
  handleToggle('section-add_money', 'none');
  handleToggle('section-transactions', 'none');

  toggleClassAdd('cashout', 'active');
  toggleClassRemove('add-money', 'active');
  toggleClassRemove('transactions', 'active');
});

// Transactions
document.getElementById('transactions').addEventListener('click', () => {
  handleToggle('section-transactions', 'block');
  handleToggle('section-cashout', 'none');
  handleToggle('section-add_money', 'none');

  toggleClassAdd('transactions', 'active');
  toggleClassRemove('cashout', 'active');
  toggleClassRemove('add-money', 'active');
});

// resuable functions
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
function toggleClassAdd(id, status) {
  document.getElementById(id).classList.add(status);
}
function toggleClassRemove(id, status) {
  document.getElementById(id).classList.remove(status);
}
