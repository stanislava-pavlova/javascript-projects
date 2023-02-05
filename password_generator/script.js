const passwordContainer = document.querySelector('.password-container');
const passwordField = document.querySelector('#passwordField');
const copyBtn = document.querySelector('#copyBtn');
const generateBtn = document.querySelector('#generateBtn');
const rangeInput = document.querySelector('#rangeInput');
const rangeValue = document.querySelector('#rangeValue');

const generatePassword = (passLength = 8) => {
  const passwordCharacters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%^&*()';

  let password = '';

  for (let i = 0; i < passLength; i++) {
    // Taking random char from passwordCharacters
    let char = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[char];
  }

  passwordField.value = password;
};

const copyToClipboard = () => {
  // Selecting password field
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  // Adding selected text to clipboard
  navigator.clipboard.writeText(passwordField.value);

  passwordContainer.classList.add('active');
};

function handleInputChange(e) {
  let target = e.target;

  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}

rangeInput.addEventListener('input', handleInputChange);
copyBtn.addEventListener('click', copyToClipboard);
generateBtn.addEventListener('click', () => {
  if (rangeValue.value > 50 || rangeValue.value < 0) {
    alert('Choose a number between 0 and 50');
    return;
  }
  generatePassword(rangeValue.value);
});
