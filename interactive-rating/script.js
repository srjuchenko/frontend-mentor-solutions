const mainContentEl = document.querySelector('.main-content');
const ratedContentEl = document.querySelector('.rated-content');
const btnsWrapper = document.querySelector('ol');
const ratingBtns = document.querySelectorAll('li button');
const submitBtn = document.querySelector('.main-content>button');
const ratingSpan = document.querySelector('span');

let selectedRating = 0;

function toggleContent() {
  mainContentEl.classList.toggle('hidden');
  ratedContentEl.classList.toggle('hidden');
}

function updateSelectedRating(rating) {
  selectedRating = rating;
  ratingSpan.innerText = selectedRating;
}

function resetActiveBtn() {
  ratingBtns.forEach((btn) => btn.classList.remove('active'));
}

btnsWrapper.addEventListener('click', (e) => {
  const btn = e.target.closest('button');

  if (!btn) return;
  resetActiveBtn();

  btn.classList.add('active');
  updateSelectedRating(+btn.innerText);
});

submitBtn.addEventListener('click', (e) => {
  if (!selectedRating) return;

  toggleContent();
});
