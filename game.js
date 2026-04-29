<<<<<<< HEAD
const RECIPES = [
  { name: 'Margherita', ingredients: ['tomate', 'mozza'] },
  { name: 'Pepperoni', ingredients: ['tomate', 'mozza', 'pepperoni'] },
  { name: 'Funghi', ingredients: ['tomate', 'mozza', 'champignon'] },
];

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const orderEl = document.getElementById('order');
const currentPizzaEl = document.getElementById('currentPizza');
const messageEl = document.getElementById('message');
const validateBtn = document.getElementById('validate');
const restartBtn = document.getElementById('restart');
const ingredientButtons = document.querySelectorAll('[data-ingredient]');

let score = 0;
let timeLeft = 30;
let timer;
let currentOrder;
let selected = [];
let isRunning = false;

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((item, i) => item === sortedB[i]);
}

function setMessage(text, good = false) {
  messageEl.textContent = text;
  messageEl.style.color = good ? '#1b8f3f' : '#8b1f1f';
}

function nextOrder() {
  currentOrder = RECIPES[Math.floor(Math.random() * RECIPES.length)];
  orderEl.textContent = `${currentOrder.name} (${currentOrder.ingredients.join(', ')})`;
  selected = [];
  currentPizzaEl.textContent = 'Aucun ingrédient';
}

function updateHUD() {
  timeEl.textContent = timeLeft;
  scoreEl.textContent = score;
}

function endGame() {
  isRunning = false;
  clearInterval(timer);
  ingredientButtons.forEach((button) => (button.disabled = true));
  validateBtn.disabled = true;
  setMessage(`Temps écoulé ! Score final: ${score}.`, false);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  isRunning = true;
  ingredientButtons.forEach((button) => (button.disabled = false));
  validateBtn.disabled = false;
  setMessage('Le service commence !', true);
  nextOrder();
  updateHUD();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft -= 1;
    updateHUD();
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

ingredientButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!isRunning) return;
    const ingredient = button.dataset.ingredient;
    selected.push(ingredient);
    currentPizzaEl.textContent = selected.join(', ');
  });
});

validateBtn.addEventListener('click', () => {
  if (!isRunning) return;

  if (arraysEqual(selected, currentOrder.ingredients)) {
    score += 100;
    setMessage('Parfait ! Client satisfait 😄', true);
  } else {
    score = Math.max(0, score - 30);
    setMessage('Oups, mauvaise pizza 😅', false);
  }

  updateHUD();
  nextOrder();
});

restartBtn.addEventListener('click', startGame);

=======
const RECIPES = [
  { name: 'Margherita', ingredients: ['tomate', 'mozza'] },
  { name: 'Pepperoni', ingredients: ['tomate', 'mozza', 'pepperoni'] },
  { name: 'Funghi', ingredients: ['tomate', 'mozza', 'champignon'] },
];

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const orderEl = document.getElementById('order');
const currentPizzaEl = document.getElementById('currentPizza');
const messageEl = document.getElementById('message');
const validateBtn = document.getElementById('validate');
const restartBtn = document.getElementById('restart');
const ingredientButtons = document.querySelectorAll('[data-ingredient]');

let score = 0;
let timeLeft = 30;
let timer;
let currentOrder;
let selected = [];
let isRunning = false;

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((item, i) => item === sortedB[i]);
}

function setMessage(text, good = false) {
  messageEl.textContent = text;
  messageEl.style.color = good ? '#1b8f3f' : '#8b1f1f';
}

function nextOrder() {
  currentOrder = RECIPES[Math.floor(Math.random() * RECIPES.length)];
  orderEl.textContent = `${currentOrder.name} (${currentOrder.ingredients.join(', ')})`;
  selected = [];
  currentPizzaEl.textContent = 'Aucun ingrédient';
}

function updateHUD() {
  timeEl.textContent = timeLeft;
  scoreEl.textContent = score;
}

function endGame() {
  isRunning = false;
  clearInterval(timer);
  ingredientButtons.forEach((button) => (button.disabled = true));
  validateBtn.disabled = true;
  setMessage(`Temps écoulé ! Score final: ${score}.`, false);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  isRunning = true;
  ingredientButtons.forEach((button) => (button.disabled = false));
  validateBtn.disabled = false;
  setMessage('Le service commence !', true);
  nextOrder();
  updateHUD();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft -= 1;
    updateHUD();
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

ingredientButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!isRunning) return;
    const ingredient = button.dataset.ingredient;
    selected.push(ingredient);
    currentPizzaEl.textContent = selected.join(', ');
  });
});

validateBtn.addEventListener('click', () => {
  if (!isRunning) return;

  if (arraysEqual(selected, currentOrder.ingredients)) {
    score += 100;
    setMessage('Parfait ! Client satisfait 😄', true);
  } else {
    score = Math.max(0, score - 30);
    setMessage('Oups, mauvaise pizza 😅', false);
  }

  updateHUD();
  nextOrder();
});

restartBtn.addEventListener('click', startGame);

>>>>>>> cd4d4de924d809ff37df21849746c30ecffd6a3f
startGame();