'use strict';

const checkingIfScoreIsZero = score => {
  if (score.textContent <= 0) {
    score.textContent = 0;
    document.querySelector('.message').textContent = 'You Lost The Game';
    document.querySelector('.imoge').textContent = '💀';
  }
};

const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const imoge = document.querySelector('.imoge');
  const score = document.querySelector('.score');
  if (!guess) {
    message.textContent = '⛔ No number!';
    imoge.textContent = '❌';
  } else if (guess === secretNumber) {
    // if number is right
    message.textContent = '🎉 Congrats , You win! 🎉';
    imoge.textContent = '✅';
  } else if (guess > secretNumber) {
    // if it false but higher
    message.textContent = '⚠️ Too High, Try again!';
    imoge.textContent = '⬇️';
    document.querySelector('.guess').value = '';
    score.textContent = score.textContent - 1;
    checkingIfScoreIsZero(score);
  } else {
    // if it false but lower
    message.textContent = '⚠️ Too low , Try again!';
    imoge.textContent = '⬆️';
    document.querySelector('.guess').value = '';
    score.textContent = score.textContent - 1;
    checkingIfScoreIsZero(score);
  }
});
