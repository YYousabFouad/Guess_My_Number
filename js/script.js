'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

if (Number(document.querySelector('.guess').value) === secretNumber) {
  document.querySelector('.message').textContent = '🎉 Congrats , You win! 🎉';
} else if (Number(document.querySelector('.guess').value) > secretNumber) {
  document.querySelector('.message').textContent = 'Too High, Try again!';
} else {
  document.querySelector('.message').textContent = 'Too low , Try again!';
}
