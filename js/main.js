// Список карт для MVP (название и имя файла)
const cards = [
    { name: "Маг", file: "01_magician.png" },
    { name: "Жрица", file: "02_high_priestess.png" },
    { name: "Императрица", file: "03_empress.png" },
    { name: "Император", file: "04_emperor.png" },
    { name: "Иерофант", file: "05_hierophant.png" }
    // ...добавь остальные позже
];

const selected = new Set();

function renderCards() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
    cards.forEach((card, idx) => {
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center cursor-pointer';
        div.innerHTML = `
            <img src="cards/${card.file}" alt="${card.name}" class="card-img w-24 h-36 object-cover mb-2 ${selected.has(idx) ? 'selected' : ''}" data-idx="${idx}">
            <span class="text-sm">${card.name}</span>
        `;
        div.onclick = () => toggleCard(idx);
        grid.appendChild(div);
    });
    document.getElementById('done-btn').disabled = selected.size !== 3;
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
    if (selected.size === 3) {
        const chosen = Array.from(selected).map(idx => cards[idx].name);
        // Отправляем данные в Telegram-бота
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify({
                action: "cards_selected",
                cards: chosen
            }));
            Telegram.WebApp.close();
        } else {
            alert("WebApp API не найден!");
        }
    }
};

window.onload = renderCards;