document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.querySelector(".card-grid");
  const selectedCards = [];
  let selectionLocked = false;

  const allImages = [
    "cards/73_wands_10.png",
    "cards/31_cups_10.png",
    "cards/59_swords_10.png",
    "cards/22_pentacles_10.png",
    "cards/65_wands_2.png",
    "cards/23_cups_2.png",
    "cards/51_swords_2.png",
    "cards/37_pentacles_2.png",
    "cards/66_wands_3.png",
    "cards/24_cups_3.png",
    "cards/52_swords_3.png",
    "cards/38_pentacles_3.png",
    "cards/67_wands_4.png",
    "cards/25_cups_4.png",
    "cards/53_swords_4.png",
    "cards/39_pentacles_4.png",
    "cards/68_wands_5.png",
    "cards/26_cups_5.png",
    "cards/54_swords_5.png",
    "cards/40_pentacles_5.png",
    "cards/69_wands_6.png",
    "cards/27_cups_6.png",
    "cards/55_swords_6.png",
    "cards/41_pentacles_6.png",
    "cards/70_wands_7.png",
    "cards/28_cups_7.png",
    "cards/56_swords_7.png",
    "cards/42_pentacles_7.png",
    "cards/71_wands_8.png",
    "cards/29_cups_8.png",
    "cards/57_swords_8.png",
    "cards/43_pentacles_8.png",
    "cards/30_cups_9.png",
    "cards/72_wands_9.png",
    "cards/58_swords_9.png",
    "cards/44_pentacles_9.png",
    "cards/45_tower.png",
    "cards/06_the_lovers.png",
    "cards/08_devil.png",
    "cards/02_high_priestess.png",
    "cards/17_the_star.png",
    "cards/05_hierophant.png",
    "cards/04_emperor.png",
    "cards/03_empress.png",
    "cards/09_the_chariot.png",
    "cards/11_fortune.png",
    "cards/78_wands_queen.png",
    "cards/36_cups_queen.png",
    "cards/64_swords_queen.png",
    "cards/50_pentacles_queen.png",
    "cards/61_swords_king.png",
    "cards/75_wands_king.png",
    "cards/33_cups_king.png",
    "cards/47_pentacles_king.png",
    "cards/16_moon.png",
    "cards/01_magician.png",
    "cards/21_world.png",
    "cards/13_hermit.png",
    "cards/77_wands_page.png",
    "cards/35_cups_page.png",
    "cards/63_swords_page.png",
    "cards/49_pentacles_page.png",
    "cards/12_hanged.png",
    "cards/76_wands_knight.png",
    "cards/34_cups_knight.png",
    "cards/62_swords_knight.png",
    "cards/48_pentacles_knight.png",
    "cards/18_strength.png",
    "cards/07_death.png",
    "cards/19_sun.png",
    "cards/15_justice.png",
    "cards/14_judgement.png",
    "cards/74_wands_ace.png",
    "cards/32_cups_ace.png",
    "cards/60_swords_ace.png",
    "cards/46_pentacles_ace.png",
    "cards/20_temperance.png",
    "cards/10_the_fool.png"
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