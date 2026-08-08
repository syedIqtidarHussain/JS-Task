/* Scroll reveal animation for cards */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
  revealObserver.observe(card);
});

/* 1. Age to Days Converter */
const ageInput = document.getElementById('ageInput');
const ageResult = document.getElementById('ageResult');

ageInput.addEventListener('input', () => {
  const age = parseFloat(ageInput.value);
  if (isNaN(age)) {
    ageResult.value = '';
    return;
  }
  const days = age * 365;
  ageResult.value = `${days} days`;
});

/* 2. Hours to Seconds Converter */
const hoursInput = document.getElementById('hoursInput');
const hoursResult = document.getElementById('hoursResult');

hoursInput.addEventListener('input', () => {
  const hours = parseFloat(hoursInput.value);
  if (isNaN(hours)) {
    hoursResult.value = '';
    return;
  }
  const seconds = hours * 3600;
  hoursResult.value = `${seconds} seconds`;
});

/* 3. Find Next Number */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

const arrayInput = document.getElementById('arrayInput');
const arrayTarget = document.getElementById('arrayTarget');
const arrayResult = document.getElementById('arrayResult');
const arrayFindBtn = document.getElementById('arrayFindBtn');

arrayFindBtn.addEventListener('click', () => {
  const arr = arrayInput.value
    .split(',')
    .map(v => parseFloat(v.trim()))
    .filter(v => !isNaN(v));

  const target = parseFloat(arrayTarget.value);
  const index = arr.indexOf(target);

  if (index === -1) {
    arrayResult.value = 'Number not found in array';
  } else if (index === arr.length - 1) {
    arrayResult.value = 'No number after this one';
  } else {
    arrayResult.value = arr[index + 1];
  }
});

const singleInput = document.getElementById('singleInput');
const singleResult = document.getElementById('singleResult');
const singleFindBtn = document.getElementById('singleFindBtn');

singleFindBtn.addEventListener('click', () => {
  const value = singleInput.value.trim();
  const num = parseFloat(value);

  if (value === '' || isNaN(num)) {
    singleResult.value = 'Please enter a valid number';
    return;
  }

  const isFloat = value.includes('.');
  const next = isFloat ? (num + 0.1).toFixed(1) : num + 1;
  singleResult.value = next;
});

/* 4. Name Capitalizer */
const nameInput = document.getElementById('nameInput');
const nameResult = document.getElementById('nameResult');
const nameHint = document.getElementById('nameHint');

nameInput.addEventListener('input', () => {
  const value = nameInput.value;

  if (value !== value.toLowerCase()) {
    nameHint.textContent = 'Please use lowercase letters only.';
    nameResult.value = '';
    return;
  }

  nameHint.textContent = '';
  if (value.length === 0) {
    nameResult.value = '';
    return;
  }
  nameResult.value = value.charAt(0).toUpperCase() + value.slice(1);
});

/* 5. BMI Calculator */
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const bmiBtn = document.getElementById('bmiBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

bmiBtn.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    bmiResult.value = '';
    bmiCategory.textContent = 'Please enter valid weight and height.';
    return;
  }

  const bmi = weight / (height * height);
  bmiResult.value = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  bmiCategory.textContent = category;
  bmiCategory.style.color = '#4f6ef7';
});

/* 6. Random Array Generator */
const generateArrayBtn = document.getElementById('generateArrayBtn');
const generatedArrayField = document.getElementById('generatedArray');
const firstEl = document.getElementById('firstEl');
const lastEl = document.getElementById('lastEl');

function generateRandomArray() {
  const length = Math.floor(Math.random() * 6) + 5; // 5 to 10 elements
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

generateArrayBtn.addEventListener('click', () => {
  const arr = generateRandomArray();
  generatedArrayField.value = `[${arr.join(', ')}]`;
  firstEl.value = arr[0];
  lastEl.value = arr[arr.length - 1];
});

/* 7. Live Number Adder */
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumResult = document.getElementById('sumResult');

function updateSum() {
  const a = parseInt(num1.value);
  const b = parseInt(num2.value);

  if (isNaN(a) || isNaN(b)) {
    sumResult.value = 'NaN';
  } else {
    sumResult.value = a + b;
  }
}

num1.addEventListener('input', updateSum);
num2.addEventListener('input', updateSum);
