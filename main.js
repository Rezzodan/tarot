// Массив всех 78 карт (0-77)
const allCards = Array.from({length: 78}, (_, i) => i);

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const cardsGrid = document.getElementById('cards-grid');
const sendBtn = document.getElementById('send-btn');

let selectedCards = [];
let revealed = false;

// Выбираем 6 случайных карт
const sixCards = shuffle(allCards).slice(0, 6);

function renderCards() {
  cardsGrid.innerHTML = '';
  sixCards.forEach((cardId, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.cardId = cardId;
    cardDiv.dataset.idx = idx;

    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    // Рубашка
    const backFace = document.createElement('div');
    backFace.className = 'card-face back';
    const backImg = document.createElement('img');
    backImg.src = 'back/back.png'; // PNG!
    backImg.alt = 'Рубашка';
    backFace.appendChild(backImg);

    // Лицевая сторона
    const frontFace = document.createElement('div');
    frontFace.className = 'card-face front';
    const frontImg = document.createElement('img');
    frontImg.src = `cards/${cardId}/front.png`;
    frontImg.alt = `Карта ${cardId+1}`;
    frontFace.appendChild(frontImg);

    cardInner.appendChild(backFace);
    cardInner.appendChild(frontFace);
    cardDiv.appendChild(cardInner);

    // Клик по карте
    cardDiv.addEventListener('click', () => {
      if (revealed) return;
      if (cardDiv.classList.contains('selected')) return;
      if (selectedCards.length >= 3) return;

      cardDiv.classList.add('selected');
      selectedCards.push({idx, cardId});
      if (selectedCards.length === 3) {
        revealSelected();
        sendBtn.disabled = false;
      }
    });

    cardsGrid.appendChild(cardDiv);
  });
}

function revealSelected() {
  revealed = true;
  // Открываем только выбранные карты
  selectedCards.forEach(sel => {
    const cardDiv = cardsGrid.children[sel.idx];
    cardDiv.classList.add('flipped');
  });
}

sendBtn.addEventListener('click', () => {
  if (selectedCards.length !== 3) return;
  // Отправляем данные в Telegram WebApp, если доступно
  if (window.Telegram && Telegram.WebApp) {
    const data = selectedCards.map(c => sixCards[c.idx]);
    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close();
  } else {
    alert('Выбранные карты: ' + selectedCards.map(c => sixCards[c.idx]).join(', '));
  }
});

renderCards();