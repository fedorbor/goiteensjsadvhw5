// Масив клавіш
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// Змінні для збереження стану гри
let currentKeyIndex;
let currentKey;

// Функція для початку нової гри
function startNewGame() {
  currentKeyIndex = 0;
  currentKey = keys[currentKeyIndex];
  document.getElementById('key').textContent = currentKey;
}

// Обробник події keydown
document.addEventListener('keydown', function(event) {
  if (event.key.toUpperCase() === currentKey) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      currentKeyIndex = 0;
    }
    currentKey = keys[currentKeyIndex];
    document.getElementById('key').textContent = currentKey;
    new PNotify({
      text: 'Ви натиснули правильну клавішу!',
      type: 'success'
    });
  } else {
    new PNotify({
      text: 'Помилка! Натисніть правильну клавішу.',
      type: 'error'
    });
  }
});

// Обробник події keypress для запобігання дії за замовчуванням
document.addEventListener('keypress', function(event) {
  event.preventDefault();
});

// Початок нової гри при завантаженні сторінки
startNewGame();