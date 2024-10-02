const summaryList = document.querySelector('.summary-list');

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
    color: '#ff5757',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
    color: '#ffb01f',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
    color: '#00bd91',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
    color: '#1125d4',
  },
];

summaryList.innerHTML = '';

data.forEach((item) => {
  const markup = `
    <li class="summary-item" style="background-color:${item.color}15">
            <div class="item-header" >
              <img
                src="${item.icon}"
                alt="${item.category} icon"
                class="item-icon"
              />
              <h4 style="color: ${item.color}">${item.category}</h4>
            </div>
            <div class="scores">
              <span class="score">${item.score}</span>
              <span class="score-bound"> / 100</span>
            </div>
          </li>
  `;

  summaryList.insertAdjacentHTML('beforeend', markup);
});
