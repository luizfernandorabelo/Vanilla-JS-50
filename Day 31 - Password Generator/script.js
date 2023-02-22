const UPPERCASE_LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LOWERCASE_LETTERS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const SYMBOLS = ['/','*','-','+','.',',','!','@','#','$','%','&','=','[','{',']','}',':',';','?','>','<','\'', '"'];
const NUMBERS = ['1','2','3','4','5','6','7','8','9','0'];

const lengthInput = document.querySelector('#length');
const uppercaseInput = document.querySelector('#uppercase-check');
const lowercaseInput = document.querySelector('#lowercase-check');
const symbolInput = document.querySelector('#symbol-check');
const numberInput = document.querySelector('#number-check');
const passwordElement = document.querySelector('.generated-password');
const generatePwdBtn = document.querySelector('#generate-pwd-btn');
const copyToClipboardBtn = document.querySelector('#password-container .fa-copy');

const passwordParams = {
  upper: false,
  lower: false,
  symbol: false,
  number: false,
  length: 8
};

function updatePasswordParams() {
  passwordParams.upper = uppercaseInput.checked;
  passwordParams.lower = lowercaseInput.checked;
  passwordParams.symbol = symbolInput.checked;
  passwordParams.number = numberInput.checked;
  passwordParams.length = parseInt(lengthInput.value);
}

function areParamsValid() {

  let noneChecked = true;

  for (let param in passwordParams)
    noneChecked = noneChecked && passwordParams[param] !== true;

  return !noneChecked && passwordParams.length > 0 && passwordParams.length <= 20;
}

function generatePassword() {

  let password = '';
  let availableTokens = [];

  if (passwordParams.upper) {
    password += UPPERCASE_LETTERS[parseInt(Math.random() * UPPERCASE_LETTERS.length)];
    availableTokens = availableTokens.concat(UPPERCASE_LETTERS);
  }

  if (passwordParams.lower) {
    password += LOWERCASE_LETTERS[parseInt(Math.random() * LOWERCASE_LETTERS.length)];
    availableTokens = availableTokens.concat(LOWERCASE_LETTERS);
  }

  if (passwordParams.symbol) {
    password += SYMBOLS[parseInt(Math.random() * SYMBOLS.length)];
    availableTokens = availableTokens.concat(SYMBOLS);
  }

  if (passwordParams.number) {
    password += NUMBERS[parseInt(Math.random() * NUMBERS.length)];
    availableTokens = availableTokens.concat(NUMBERS);
  }

  while (password.length < passwordParams.length) {
    password += availableTokens[parseInt(Math.random() * availableTokens.length)];
  }

  return password;
}

generatePwdBtn.addEventListener('click', () => {
  updatePasswordParams();
  if (areParamsValid()) {
    const password = generatePassword();
    passwordElement.innerText = password;
  } else {
    alert('Check the password params and try again!');
  }
});

copyToClipboardBtn.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  if (!passwordElement.innerText) return;
  textArea.value = passwordElement.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');  //! deprecated
  textArea.remove();
  alert('Password copied to clipboard!');
});
