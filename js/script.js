'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // if number is right
    document.querySelector('.message').textContent =
      '🎉 Congrats , You win! 🎉';
  } else {
    while (secretNumber !== guess) {
      if (guess > secretNumber) {
        // if it false but higher
        document.querySelector('.message').textContent = 'Too High, Try again!';
        document.querySelector('.guess').value = '';
        break;
      } else {
        // if it false but lower
        document.querySelector('.message').textContent = 'Too low , Try again!';
        document.querySelector('.guess').value = '';
        break;
      }
    }
  }
});
