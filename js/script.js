'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  if (!document.querySelector('.guess').value) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (Number(document.querySelector('.guess').value) === secretNumber) {
    // if number is right
    document.querySelector('.message').textContent =
      '🎉 Congrats , You win! 🎉';
  } else {
    while (secretNumber !== Number(document.querySelector('.guess').value)) {
      if (Number(document.querySelector('.guess').value) > secretNumber) {
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
