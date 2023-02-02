const input = document.querySelector('#input');
const btnCheck = document.querySelector('#check');
const result = document.querySelector('#result');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const totalTries = document.querySelector('#totalTries');
const btnNewGame = document.querySelector('#newGame');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let tries = 0;

const displayMessage = function (message) {
  result.textContent = message;
};

const checkNumber = () => {
  if (input) {
    const guess = Number(input.value);

    if (!guess) {
      // if there is no input
      displayMessage('⛔️ Enter a number!');
    } else if (guess !== secretNumber) {
      // if the guess is incorect
      tries++;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      // when player wins
      totalTries.textContent = tries;
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  }
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  tries = 0;
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('#input').value = '';
  displayMessage('');
};

btnCheck.addEventListener('click', checkNumber);
btnNewGame.addEventListener('click', resetGame);
