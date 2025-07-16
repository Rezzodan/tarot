document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.querySelector(".card-grid");
  const selectedCards = [];
  let selectionLocked = false;

  const allImages = [
    "cards/10_жезлов/73_wands_10.png",
    "cards/10_кубка/31_cups_10.png",
    "cards/10_мечей/59_swords_10.png",
    "cards/10_Пентакля/minor_arcana_pentacles_10.png",
    "cards/2_жезла/65_wands_2.png",
    "cards/2_кубка/23_cups_2.png",
    "cards/2_меча/51_swords_2.png",
    "cards/2_Пентакля/37_pentacles_2.png",
    "cards/3_жезла/66_wands_3.png",
    "cards/3_кубка/24_cups_3.png",
    "cards/3_меча/52_swords_3.png",
    "cards/3_Пентакля/38_pentacles_3.png",
    "cards/4-жезла/67_wands_4.png",
    "cards/4_кубка/25_cups_4.png",
    "cards/4_меча/53_swords_4.png",
    "cards/4_Пентакля/39_pentacles_4.png",
    "cards/5-жезлов/68_wands_5.png",
    "cards/5_кубка/26_cups_5.png",
    "cards/5_мечей/54_swords_5.png",
    "cards/5_Пентакля/40_pentacles_5.png",
    "cards/6_жезлов/69_wands_6.png",
    "cards/6_кубка/27_cups_6.png",
    "cards/6_мечей/55_swords_6.png",
    "cards/6_Пентакля/41_pentacles_6.png",
    "cards/7_жезлов/70_wands_7.png",
    "cards/7_кубка/28_cups_7.png",
    "cards/7_мечей/56_swords_7.png",
    "cards/7_Пентакля/42_pentacles_7.png",
    "cards/8_жезлов/71_wands_8.png",
    "cards/8_кубка/29_cups_8.png",
    "cards/8_мечей/57_swords_8.png",
    "cards/8_Пентакля/43_pentacles_8.png",
    "cards/9-кубка/30_cups_9.png",
    "cards/9_жезлов/72_wands_9.png",
    "cards/9_мечей/58_swords_9.png",
    "cards/9_Пентакля/44_pentacles_9.png",
    "cards/Башня/20_tower.png",
    "cards/Влюбленные/06_the_lovers.png",
    "cards/Дьявол/08_devil.png",
    "cards/Жрица/02_high_priestess.png",
    "cards/Звезда/17_the_star.png",
    "cards/Иерофант/05_hierophant.png",
    "cards/Иерофант/major_arcana_hierophant.png",
    "cards/Император/04_emperor.png",
    "cards/Императрица/03_empress.png",
    "cards/Колесница/09_the_chariot.png",
    "cards/Колесо Фортуны/11_fortune.png",
    "cards/Королева_жезлов/78_wands_queen.png",
    "cards/Королева_кубков/36_cups_queen.png",
    "cards/Королева_мечей/64_swords_queen.png",
    "cards/Королева_пентаклей/50_pentacles_queen.png",
    "cards/Король_ мечей/61_swords_king.png",
    "cards/Король_жезлов/75_wands_king.png",
    "cards/Король_кубков/33_cups_king.png",
    "cards/Король_пентаклей/47_pentacles_king.png",
    "cards/Луна/16_moon.png",
    "cards/Маг/01_magician.png",
    "cards/Мир/21_world.png",
    "cards/Отшельник/13_hermit.png",
    "cards/Паж_жезлов/77_wands_page.png",
    "cards/Паж_кубков/35_cups_page.png",
    "cards/Паж_мечей/63_swords_page.png",
    "cards/Паж_пентаклей/49_pentacles_page.png",
    "cards/Повешенный/12_hanged.png",
    "cards/Рыцарь_жезлов/76_wands_knight.png",
    "cards/Рыцарь_кубков/34_cups_knight.png",
    "cards/Рыцарь_мечей/62_swords_knight.png",
    "cards/Рыцарь_пентаклей/48_pentacles_knight.png",
    "cards/Сила/18_strength.png",
    "cards/Смерть/07_death.png",
    "cards/Солнце/19_sun.png",
    "cards/Справедливость/15_justice.png",
    "cards/Суд/14_judgement.png",
    "cards/Туз_жезлов/74_wands_ace.png",
    "cards/Туз_кубков/32_cups_ace.png",
    "cards/Туз_мечей/60_swords_ace.png",
    "cards/Туз_пентаклей/46_pentacles_ace.png",
    "cards/Умеренность/20_temperance.png",
    "cards/Шут/10_the_fool.png"
  ];

  const shuffled = allImages.sort(() => 0.5 - Math.random()).slice(0, 6);
  cardGrid.innerHTML = "";

  shuffled.forEach((imgPath, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.cardId = imgPath;
    card.style.transition = "transform 0.6s ease, left 0.6s ease, top 0.6s ease";
    card.style.position = "absolute";
    card.style.width = "150px";
    card.style.height = "250px";

    const row = index < 3 ? 0 : 1;
    const col = index % 3;
    const gap = 30;
    const cardWidth = 150;
    const totalWidth = 3 * cardWidth + 2 * gap;
    const startX = (window.innerWidth - totalWidth) / 2;
    const startY = (window.innerHeight - (250 * 2 + gap)) / 2 + row * (250 + gap);
    card.style.left = `${startX + col * (cardWidth + gap)}px`;
    card.style.top = `${startY}px`;

    const inner = document.createElement("div");
    inner.classList.add("card-inner");
    inner.style.width = "100%";
    inner.style.height = "100%";
    inner.style.transition = "transform 0.8s ease";
    inner.style.transformStyle = "preserve-3d";
    inner.style.position = "relative";

    const front = document.createElement("img");
    front.classList.add("card-face", "front");
    front.src = imgPath;
    front.style.transform = "rotateY(180deg)";
    front.style.backfaceVisibility = "hidden";
    front.style.position = "absolute";
    front.style.width = "100%";
    front.style.height = "100%";

    const back = document.createElement("img");
    back.classList.add("card-face", "back");
    back.src = "back/back.png";
    back.style.transform = "rotateY(0deg)";
    back.style.backfaceVisibility = "hidden";
    back.style.position = "absolute";
    back.style.width = "100%";
    back.style.height = "100%";

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    cardGrid.appendChild(card);

    card.addEventListener("click", () => {
      if (selectionLocked || card.classList.contains("selected")) return;

      if (selectedCards.length < 3) {
        card.classList.add("selected");
        card.classList.add("selected-glow");
        selectedCards.push(card);
      }

      if (selectedCards.length === 3) {
        selectionLocked = true;

        document.querySelectorAll(".card").forEach(c => {
          if (!selectedCards.includes(c)) {
            c.style.opacity = 0;
          }
        });

        setTimeout(() => {
          const gap = 60;
          const cardWidth = 150;
          const cardHeight = 250;
          const totalWidth = selectedCards.length * cardWidth + (selectedCards.length - 1) * gap;
          const startX = (window.innerWidth - totalWidth) / 2;

          const topRowY = (window.innerHeight - (250 * 2 + gap)) / 2;
          const bottomRowY = topRowY + 250 + gap;
          const centerY = (topRowY + bottomRowY) / 2 - (cardHeight * 1.3) / 2;

          selectedCards.forEach((card, i) => {
            const targetX = startX + i * (cardWidth + gap);
            card.style.transition = "transform 0.8s ease, left 0.8s ease, top 0.8s ease";
            card.style.left = `${targetX}px`;
            card.style.top = `${centerY}px`;
            card.style.transform = "scale(1.3)";
            card.classList.remove("selected-glow");
            card.classList.add("final-glow");

            setTimeout(() => {
              card.querySelector(".card-inner").style.transform = "rotateY(180deg)";
            }, 800);
          });
        }, 300);

        const chosenIds = selectedCards.map(card => card.dataset.cardId);
        const payload = { action: "cards_selected", cards: chosenIds };

        setTimeout(() => {
          if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify(payload));
            Telegram.WebApp.close();
          } else {
            alert("Telegram.WebApp не найден! Проверьте запуск через Telegram.");
            console.log("Telegram.WebApp не найден! Payload:", payload);
          }
        }, 3000);
      }
    });
  });
}); 