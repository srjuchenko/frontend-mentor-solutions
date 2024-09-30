'use strict';

const questionTitles = document.querySelectorAll('.question-title h2');
const questionBtn = document.querySelectorAll('.question-title button');

const toggleAnswer = function (e) {
  const question = e.target.closest('.question');
  const answer = question.querySelector('.question-answer');
  const btn = question.querySelector('button img');

  answer.classList.toggle('hidden');
  if (answer.classList.contains('hidden')) {
    btn.src = 'assets/images/icon-plus.svg';
  } else {
    btn.src = 'assets/images/icon-minus.svg';
  }
};

questionTitles.forEach((question) =>
  question.addEventListener('click', toggleAnswer)
);

questionBtn.forEach((question) =>
  question.addEventListener('click', toggleAnswer)
);
