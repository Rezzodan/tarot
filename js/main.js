const cardsArray = [
  { name: "Колесница", path: "/cards/Колесница/09_the_chariot.png" },
  { name: "Колесо фортуны", path: "/cards/Колесо Фортуны/11_fortune.png" },
  { name: "Королева жезлов", path: "/cards/Королева_жезлов/78_wands_queen.png" },
  { name: "Королева кубков", path: "/cards/Королева_кубков/36_cups_queen.png" },
  { name: "Королева мечей", path: "/cards/Королева_мечей/64_swords_queen.png" },
  { name: "Королева пентаклей", path: "/cards/Королева_пентаклей/50_pentacles_queen.png" },
  { name: "Король мечей", path: "/cards/Король_ мечей/61_swords_king.png" },
  { name: "Король жезлов", path: "/cards/Король_жезлов/75_wands_king.png" },
  { name: "Король кубков", path: "/cards/Король_кубков/33_cups_king.png" },
  { name: "Король пентаклей", path: "/cards/Король_пентаклей/47_pentacles_king.png" },
  { name: "Луна", path: "/cards/Луна/16_moon.png" },
  { name: "Маг", path: "/cards/Маг/01_magician.png" },
  { name: "Мир", path: "/cards/Мир/21_world.png" },
  { name: "Отшельник", path: "/cards/Отшельник/13_hermit.png" },
  { name: "Паж жезлов", path: "/cards/Паж_жезлов/77_wands_page.png" },
  { name: "Паж кубков", path: "/cards/Паж_кубков/35_cups_page.png" },
  { name: "Паж мечей", path: "/cards/Паж_мечей/63_swords_page.png" },
  { name: "Паж пентаклей", path: "/cards/Паж_пентаклей/49_pentacles_page.png" },
  { name: "Повешенный", path: "/cards/Повешенный/12_hanged.png" },
  { name: "Рыцарь жезлов", path: "/cards/Рыцарь_жезлов/76_wands_knight.png" },
  { name: "Рыцарь кубков", path: "/cards/Рыцарь_кубков/34_cups_knight.png" },
  { name: "Рыцарь мечей", path: "/cards/Рыцарь_мечей/62_swords_knight.png" },
  { name: "Рыцарь пентаклей", path: "/cards/Рыцарь_пентаклей/48_pentacles_knight.png" },
  { name: "Сила", path: "/cards/Сила/18_strength.png" },
  { name: "Смерть", path: "/cards/Смерть/07_death.png" },
  { name: "Солнце", path: "/cards/Солнце/19_sun.png" },
  { name: "Справедливость", path: "/cards/Справедливость/15_justice.png" },
  { name: "Суд", path: "/cards/Суд/14_judgement.png" },
  { name: "Туз жезлов", path: "/cards/Туз_жезлов/74_wands_ace.png" },
  { name: "Туз кубков", path: "/cards/Туз_кубков/32_cups_ace.png" },
  { name: "Туз мечей", path: "/cards/Туз_мечей/60_swords_ace.png" },
  { name: "Туз пентаклей", path: "/cards/Туз_пентаклей/46_pentacles_ace.png" },
  { name: "Умеренность", path: "/cards/Умеренность/20_temperance.png" },
  { name: "Шут", path: "/cards/Шут/10_the_fool.png" },
];
const cardBackImage = "/cards/Обложка/обложка.png";
const backgroundImage = "/cards/Фон/Space_wallpaper.png";
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
        class="card-img ${isSelected ? 'selected' : ''} ${isRevealed ? 'flip' : ''}" 
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