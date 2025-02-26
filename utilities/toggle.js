// Toggle Operations
document.getElementById('add-money').classList.add('active');
document.getElementById('section-cashout').style.display = 'none';

document.getElementById('add-money').addEventListener('click', () => {
  handleToggle('section-add_money', 'block');
  handleToggle('section-cashout', 'none');

  toggleClassAdd('add-money', 'active');
  toggleClassRemove('cashout', 'active');
});
document.getElementById('cashout').addEventListener('click', () => {
  handleToggle('section-cashout', 'block');
  handleToggle('section-add_money', 'none');

  toggleClassAdd('cashout', 'active');
  toggleClassRemove('add-money', 'active');
});

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
function toggleClassAdd(id, status) {
  document.getElementById(id).classList.add(status);
}
function toggleClassRemove(id, status) {
  document.getElementById(id).classList.remove(status);
}
