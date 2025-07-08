// cardsArray, cardBackImage, backgroundImage — как раньше

let sixCards = [];
let selected = new Set();
let revealed = false;

function getRandomCards(arr, n) {
  const result = [];
  const used = new Set();
  while (result.length < n) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!used.has(idx) && arr[idx].name !== "Фон" && arr[idx].name !== "Обложка") {
      used.add(idx);
      result.push({ ...arr[idx], idx });
    }
  }
  return result;
}

function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  sixCards.forEach((card, idx) => {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center cursor-pointer';
    const isSelected = selected.has(idx);
    const isRevealed = revealed && isSelected;
    div.innerHTML = `
      <img 
        src="${isRevealed ? card.path : cardBackImage}" 
        alt="${card.name}" 
        class="card-img w-24 h-36 object-cover mb-2 ${isSelected ? 'selected' : ''} ${isRevealed ? 'flip' : ''}" 
        data-idx="${idx}">
      <span class="text-sm">${isRevealed ? card.name : ''}</span>
    `;
    if (!revealed) {
      div.onclick = () => toggleCard(idx);
    }
    grid.appendChild(div);
  });
  document.getElementById('done-btn').disabled = selected.size !== 3 || revealed;
}

function toggleCard(idx) {
  if (selected.has(idx)) {
    selected.delete(idx);
  } else if (selected.size < 3) {
    selected.add(idx);
  }
  renderCards();
}

document.getElementById('done-btn').onclick = () => {
  if (selected.size === 3 && !revealed) {
    revealed = true;
    setTimeout(renderCards, 300);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundImage = `url('${backgroundImage}')`;
  document.body.style.backgroundSize = 'cover';
  sixCards = getRandomCards(cardsArray, 6);
  selected = new Set();
  revealed = false;
  renderCards();
});