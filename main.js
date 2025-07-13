// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Настройка WebApp
tg.expand();
tg.ready();

// Данные карт таро
const tarotCards = [
    { name: "Шут", image: "images/shut.png" },
    { name: "Маг", image: "images/mag.png" },
    { name: "Верховная Жрица", image: "images/verhovnaya_zhrica.png" },
    { name: "Императрица", image: "images/imperatrica.png" },
    { name: "Император", image: "images/imperator.png" },
    { name: "Иерофант", image: "images/ierofant.png" },
    { name: "Влюбленные", image: "images/vlyublennye.png" },
    { name: "Колесница", image: "images/kolesnica.png" },
    { name: "Сила", image: "images/sila.png" },
    { name: "Отшельник", image: "images/otshelnik.png" },
    { name: "Колесо Фортуны", image: "images/koleso_fortuny.png" },
    { name: "Справедливость", image: "images/spravedlivost.png" },
    { name: "Повешенный", image: "images/poveshennyj.png" },
    { name: "Смерть", image: "images/smert.png" },
    { name: "Умеренность", image: "images/umerennost.png" },
    { name: "Дьявол", image: "images/dyavol.png" },
    { name: "Башня", image: "images/bashnya.png" },
    { name: "Звезда", image: "images/zvezda.png" },
    { name: "Луна", image: "images/luna.png" },
    { name: "Солнце", image: "images/solnce.png" },
    { name: "Суд", image: "images/sud.png" },
    { name: "Мир", image: "images/mir.png" },
    // --- ДОБАВЛЕНЫ КАРТЫ С ПОЛНЫМИ ПУТЯМИ ---
    { name: "10 жезлов", image: "cards/10_жезлов/73_wands_10.png" },
    { name: "10 кубков", image: "cards/10_кубка/31_cups_10.png" },
    { name: "10 мечей", image: "cards/10_мечей/59_swords_10.png" },
    { name: "10 Пентаклей", image: "cards/10_Пентакля/minor_arcana_pentacles_10.png" },
    { name: "2 жезлов", image: "cards/2_жезла/65_wands_2.png" },
    { name: "2 кубков", image: "cards/2_кубка/23_cups_2.png" },
    { name: "2 мечей", image: "cards/2_меча/51_swords_2.png" },
    { name: "2 Пентаклей", image: "cards/2_Пентакля/37_pentacles_2.png" },
    { name: "3 жезлов", image: "cards/3_жезла/66_wands_3.png" },
    { name: "3 кубков", image: "cards/3_кубка/24_cups_3.png" },
    { name: "3 мечей", image: "cards/3_меча/52_swords_3.png" },
    { name: "3 Пентаклей", image: "cards/3_Пентакля/38_pentacles_3.png" },
    { name: "4 жезла", image: "cards/4-жезла/67_wands_4.png" },
    { name: "4 кубков", image: "cards/4_кубка/25_cups_4.png" },
    { name: "4 меча", image: "cards/4_меча/53_swords_4.png" },
    { name: "4 Пентаклей", image: "cards/4_Пентакля/39_pentacles_4.png" },
    { name: "5 жезлов", image: "cards/5-жезлов/68_wands_5.png" },
    { name: "5 кубков", image: "cards/5_кубка/26_cups_5.png" },
    { name: "5 мечей", image: "cards/5_мечей/54_swords_5.png" },
    { name: "5 Пентаклей", image: "cards/5_Пентакля/40_pentacles_5.png" },
    { name: "6 жезлов", image: "cards/6_жезлов/69_wands_6.png" },
    { name: "6 кубков", image: "cards/6_кубка/27_cups_6.png" },
    { name: "6 мечей", image: "cards/6_мечей/55_swords_6.png" },
    { name: "6 Пентаклей", image: "cards/6_Пентакля/41_pentacles_6.png" },
    { name: "7 жезлов", image: "cards/7_жезлов/70_wands_7.png" },
    { name: "7 кубков", image: "cards/7_кубка/28_cups_7.png" },
    { name: "7 мечей", image: "cards/7_мечей/56_swords_7.png" },
    { name: "7 Пентаклей", image: "cards/7_Пентакля/42_pentacles_7.png" },
    { name: "8 жезлов", image: "cards/8_жезлов/71_wands_8.png" },
    { name: "8 кубков", image: "cards/8_кубка/29_cups_8.png" },
    { name: "8 мечей", image: "cards/8_мечей/57_swords_8.png" },
    { name: "8 Пентаклей", image: "cards/8_Пентакля/43_pentacles_8.png" },
    { name: "9 кубков", image: "cards/9-кубка/30_cups_9.png" },
    { name: "9 жезлов", image: "cards/9_жезлов/72_wands_9.png" },
    { name: "9 мечей", image: "cards/9_мечей/58_swords_9.png" },
    { name: "9 Пентаклей", image: "cards/9_Пентакля/44_pentacles_9.png" },
    { name: "Башня", image: "cards/Башня/20_tower.png" },
    { name: "Влюбленные", image: "cards/Влюбленные/06_the_lovers.png" },
    { name: "Дьявол", image: "cards/Дьявол/08_devil.png" },
    { name: "Жрица", image: "cards/Жрица/02_high_priestess.png" },
    { name: "Звезда", image: "cards/Звезда/17_the_star.png" },
    { name: "Иерофант", image: "cards/Иерофант/05_hierophant.png" },
    { name: "Иерофант (альт)", image: "cards/Иерофант/major_arcana_hierophant.png" },
    { name: "Император", image: "cards/Император/04_emperor.png" },
    { name: "Императрица", image: "cards/Императрица/03_empress.png" },
    { name: "Колесница", image: "cards/Колесница/09_the_chariot.png" },
    { name: "Колесо Фортуны", image: "cards/Колесо Фортуны/11_fortune.png" },
    { name: "Королева жезлов", image: "cards/Королева_жезлов/78_wands_queen.png" },
    { name: "Королева кубков", image: "cards/Королева_кубков/36_cups_queen.png" },
    { name: "Королева мечей", image: "cards/Королева_мечей/64_swords_queen.png" },
    { name: "Королева пентаклей", image: "cards/Королева_пентаклей/50_pentacles_queen.png" },
    { name: "Король мечей", image: "cards/Король_ мечей/61_swords_king.png" },
    { name: "Король жезлов", image: "cards/Король_жезлов/75_wands_king.png" },
    { name: "Король кубков", image: "cards/Король_кубков/33_cups_king.png" },
    { name: "Король пентаклей", image: "cards/Король_пентаклей/47_pentacles_king.png" },
    { name: "Луна", image: "cards/Луна/16_moon.png" },
    { name: "Маг", image: "cards/Маг/01_magician.png" },
    { name: "Мир", image: "cards/Мир/21_world.png" },
    { name: "Обложка", image: "cards/Обложка/обложка.png" },
    { name: "Отшельник", image: "cards/Отшельник/13_hermit.png" },
    { name: "Паж жезлов", image: "cards/Паж_жезлов/77_wands_page.png" },
    { name: "Паж кубков", image: "cards/Паж_кубков/35_cups_page.png" },
    { name: "Паж мечей", image: "cards/Паж_мечей/63_swords_page.png" },
    { name: "Паж пентаклей", image: "cards/Паж_пентаклей/49_pentacles_page.png" },
    { name: "Повешенный", image: "cards/Повешенный/12_hanged.png" },
    { name: "Рыцарь жезлов", image: "cards/Рыцарь_жезлов/76_wands_knight.png" },
    { name: "Рыцарь кубков", image: "cards/Рыцарь_кубков/34_cups_knight.png" },
    { name: "Рыцарь мечей", image: "cards/Рыцарь_мечей/62_swords_knight.png" },
    { name: "Рыцарь пентаклей", image: "cards/Рыцарь_пентаклей/48_pentacles_knight.png" },
    { name: "Сила", image: "cards/Сила/18_strength.png" },
    { name: "Смерть", image: "cards/Смерть/07_death.png" },
    { name: "Солнце", image: "cards/Солнце/19_sun.png" },
    { name: "Справедливость", image: "cards/Справедливость/15_justice.png" },
    { name: "Суд", image: "cards/Суд/14_judgement.png" },
    { name: "Туз жезлов", image: "cards/Туз_жезлов/74_wands_ace.png" },
    { name: "Туз кубков", image: "cards/Туз_кубков/32_cups_ace.png" },
    { name: "Туз мечей", image: "cards/Туз_мечей/60_swords_ace.png" },
    { name: "Туз пентаклей", image: "cards/Туз_пентаклей/46_pentacles_ace.png" },
    { name: "Умеренность", image: "cards/Умеренность/20_temperance.png" },
    { name: "Фон", image: "cards/Фон/Space_wallpaper.png" },
    { name: "Шут", image: "cards/Шут/10_the_fool.png" }
];

// Состояние приложения
let selectedCards = [];
let flippedCards = [];

// DOM элементы
const cardsGrid = document.getElementById('cardsGrid');
const selectedCount = document.getElementById('selectedCount');
const selectedList = document.getElementById('selectedList');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const userQuestion = document.getElementById('userQuestion');

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeCards();
    setupEventListeners();
});

function initializeCards() {
    // Перемешиваем карты
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    
    // Берем первые 6 карт
    const displayCards = shuffledCards.slice(0, 6);
    
    // Создаем элементы карт
    displayCards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardsGrid.appendChild(cardElement);
    });
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.cardIndex = index;
    cardDiv.dataset.cardName = card.name;
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.setProperty('--card-image', `url('${card.image}')`);
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    cardDiv.appendChild(cardFront);
    cardDiv.appendChild(cardBack);
    
    return cardDiv;
}

function setupEventListeners() {
    // Обработчик клика по картам
    cardsGrid.addEventListener('click', function(e) {
        const card = e.target.closest('.card');
        if (card && !card.classList.contains('flipped')) {
            handleCardClick(card);
        }
    });
    
    // Обработчик кнопки отправки
    submitBtn.addEventListener('click', handleSubmit);
    
    // Обработчик кнопки сброса
    resetBtn.addEventListener('click', handleReset);
}

function handleCardClick(card) {
    const cardName = card.dataset.cardName;
    
    if (selectedCards.length >= 3 && !selectedCards.includes(cardName)) {
        showNotification('Можно выбрать только 3 карты!');
        return;
    }
    
    if (selectedCards.includes(cardName)) {
        // Убираем карту из выбранных
        selectedCards = selectedCards.filter(name => name !== cardName);
        card.classList.remove('selected');
    } else {
        // Добавляем карту к выбранным
        selectedCards.push(cardName);
        card.classList.add('selected');
    }
    
    updateSelectedCardsDisplay();
    updateSubmitButton();
}

function updateSelectedCardsDisplay() {
    selectedCount.textContent = selectedCards.length;
    
    selectedList.innerHTML = '';
    selectedCards.forEach(cardName => {
        const cardItem = document.createElement('div');
        cardItem.className = 'selected-card-item';
        cardItem.textContent = cardName;
        selectedList.appendChild(cardItem);
    });
}

function updateSubmitButton() {
    submitBtn.disabled = selectedCards.length !== 3;
}

function handleSubmit() {
    if (selectedCards.length !== 3) {
        showNotification('Выберите ровно 3 карты!');
        return;
    }
    
    // Показываем анимацию переворота карт
    flipSelectedCards();
    
    // Отправляем данные в бот
    setTimeout(() => {
        sendDataToBot();
    }, 2000);
}

function flipSelectedCards() {
    const cards = document.querySelectorAll('.card.selected');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipping');
            setTimeout(() => {
                card.classList.add('flipped');
                card.classList.remove('flipping');
            }, 300);
        }, index * 200);
    });
}

function sendDataToBot() {
    const data = {
        selectedCards: selectedCards,
        question: userQuestion.value.trim() || null
    };
    
    // Отправляем данные в Telegram бот
    tg.sendData(JSON.stringify(data));
    
    // Показываем сообщение об успешной отправке
    showNotification('🔮 Данные отправлены! Получаем интерпретацию...');
}

function handleReset() {
    // Сбрасываем состояние
    selectedCards = [];
    flippedCards = [];
    
    // Убираем классы с карт
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('selected', 'flipped');
    });
    
    // Очищаем вопрос
    userQuestion.value = '';
    
    // Обновляем отображение
    updateSelectedCardsDisplay();
    updateSubmitButton();
    
    showNotification('🔄 Расклад сброшен! Выберите карты заново.');
}

function showNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 1000;
        font-size: 16px;
        animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Добавляем CSS анимации для уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);