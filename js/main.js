const cardsArray = [
  { name: "10 жезлов", path: "/cards/10_жезлов/73_wands_10.png" },
  { name: "10 кубков", path: "/cards/10_кубка/31_cups_10.png" },
  { name: "10 мечей", path: "/cards/10_мечей/59_swords_10.png" },
  { name: "10 Пентаклей", path: "/cards/10_Пентакля/minor_arcana_pentacles_10.png" },
  { name: "2 жезла", path: "/cards/2_жезла/65_wands_2.png" },
  { name: "2 кубка", path: "/cards/2_кубка/23_cups_2.png" },
  { name: "2 меча", path: "/cards/2_меча/51_swords_2.png" },
  { name: "2 Пентакля", path: "/cards/2_Пентакля/37_pentacles_2.png" },
  { name: "3 жезла", path: "/cards/3_жезла/66_wands_3.png" },
  { name: "3 кубка", path: "/cards/3_кубка/24_cups_3.png" },
  { name: "3 меча", path: "/cards/3_меча/52_swords_3.png" },
  { name: "3 Пентакля", path: "/cards/3_Пентакля/38_pentacles_3.png" },
  { name: "4 жезла", path: "/cards/4-жезла/67_wands_4.png" },
  { name: "4 кубка", path: "/cards/4_кубка/25_cups_4.png" },
  { name: "4 меча", path: "/cards/4_меча/53_swords_4.png" },
  { name: "4 Пентакля", path: "/cards/4_Пентакля/39_pentacles_4.png" },
  { name: "5 жезлов", path: "/cards/5-жезлов/68_wands_5.png" },
  { name: "5 кубка", path: "/cards/5_кубка/26_cups_5.png" },
  { name: "5 мечей", path: "/cards/5_мечей/54_swords_5.png" },
  { name: "5 Пентакля", path: "/cards/5_Пентакля/40_pentacles_5.png" },
  { name: "6 жезлов", path: "/cards/6_жезлов/69_wands_6.png" },
  { name: "6 кубка", path: "/cards/6_кубка/27_cups_6.png" },
  { name: "6 мечей", path: "/cards/6_мечей/55_swords_6.png" },
  { name: "6 Пентакля", path: "/cards/6_Пентакля/41_pentacles_6.png" },
  { name: "7 жезлов", path: "/cards/7_жезлов/70_wands_7.png" },
  { name: "7 кубка", path: "/cards/7_кубка/28_cups_7.png" },
  { name: "7 мечей", path: "/cards/7_мечей/56_swords_7.png" },
  { name: "7 Пентакля", path: "/cards/7_Пентакля/42_pentacles_7.png" },
  { name: "8 жезлов", path: "/cards/8_жезлов/71_wands_8.png" },
  { name: "8 кубка", path: "/cards/8_кубка/29_cups_8.png" },
  { name: "8 мечей", path: "/cards/8_мечей/57_swords_8.png" },
  { name: "8 Пентакля", path: "/cards/8_Пентакля/43_pentacles_8.png" },
  { name: "9 кубка", path: "/cards/9-кубка/30_cups_9.png" },
  { name: "9 жезлов", path: "/cards/9_жезлов/72_wands_9.png" },
  { name: "9 мечей", path: "/cards/9_мечей/58_swords_9.png" },
  { name: "9 Пентакля", path: "/cards/9_Пентакля/44_pentacles_9.png" },
  { name: "Башня", path: "/cards/Башня/20_tower.png" },
  { name: "Влюбленные", path: "/cards/Влюбленные/06_the_lovers.png" },
  { name: "Дьявол", path: "/cards/Дьявол/08_devil.png" },
  { name: "Жрица", path: "/cards/Жрица/02_high_priestess.png" },
  { name: "Звезда", path: "/cards/Звезда/17_the_star.png" },
  { name: "Иерофант", path: "/cards/Иерофант/05_hierophant.png" },
  { name: "Иерофант (major)", path: "/cards/Иерофант/major_arcana_hierophant.png" },
  { name: "Император", path: "/cards/Император/04_emperor.png" },
  { name: "Императрица", path: "/cards/Императрица/03_empress.png" },
  { name: "Колесница", path: "/cards/Колесница/09_the_chariot.png" },
  { name: "Колесо Фортуны", path: "/cards/Колесо Фортуны/11_fortune.png" },
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
  { name: "Обложка", path: "/cards/Обложка/обложка.png" },
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
  { name: "Фон", path: "/cards/Фон/Space_wallpaper.png" },
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