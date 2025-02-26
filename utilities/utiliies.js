function getInputById(id) {
  const input = document.getElementById(id);
  return input;
}

function getInputValueById(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getInputConvertedValueById(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}

function getInputCovertedTextByID(id) {
  const text = document.getElementById(id).innerText;
  return parseInt(text);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
