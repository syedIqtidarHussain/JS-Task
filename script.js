// Age to Days
const ageInput = document.getElementById('ageInput');
const ageResult = document.getElementById('ageResult');
ageInput.addEventListener('input', function () {
  const age = parseFloat(ageInput.value);
  ageResult.textContent = isNaN(age) ? '0' : (age * 365).toFixed(0);
});

// Hours to Seconds
const hoursInput = document.getElementById('hoursInput');
const hoursResult = document.getElementById('hoursResult');
hoursInput.addEventListener('input', function () {
  const hours = parseFloat(hoursInput.value);
  hoursResult.textContent = isNaN(hours) ? '0' : (hours * 3600).toFixed(0);
});

// Find Next Number - array
function findNextInArray(arr, target) {
  const index = arr.indexOf(target);
  if (index === -1) return 'Number not found in array';
  if (index === arr.length - 1) return 'No next number (last element)';
  return arr[index + 1];
}
document.getElementById('arrayFindBtn').addEventListener('click', function () {
  const rawArray = document.getElementById('arrayInput').value;
  const target = parseFloat(document.getElementById('arrayTarget').value);
  const arr = rawArray.split(',').map(item => parseFloat(item.trim())).filter(n => !isNaN(n));
  document.getElementById('arrayResult').textContent = findNextInArray(arr, target);
});

// Find Next Number - single value
function findNextValue(value) {
  if (Number.isInteger(value)) return value + 1;
  return Math.ceil(value);
}
document.getElementById('singleFindBtn').addEventListener('click', function () {
  const value = parseFloat(document.getElementById('singleInput').value);
  document.getElementById('singleResult').textContent = isNaN(value) ? 'Enter a valid number' : findNextValue(value);
});

// Name Capitalizer
const nameInput = document.getElementById('nameInput');
const nameResult = document.getElementById('nameResult');
nameInput.addEventListener('input', function () {
  const name = nameInput.value;
  if (name.length === 0) { nameResult.textContent = '-'; return; }
  nameResult.textContent = name.charAt(0).toUpperCase() + name.slice(1);
});

// BMI Calculator
document.getElementById('bmiBtn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weightInput').value);
  const height = parseFloat(document.getElementById('heightInput').value);
  const bmiResult = document.getElementById('bmiResult');
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    bmiResult.textContent = 'Enter valid weight and height';
    return;
  }
  const bmi = weight / (height * height);
  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';
  bmiResult.textContent = `${bmi.toFixed(2)} (${category})`;
});

// Random Array - First & Last
function getFirstElement(arr) { return arr[0]; }
function getLastElement(arr) { return arr[arr.length - 1]; }
document.getElementById('generateBtn').addEventListener('click', function () {
  const randomArray = [];
  for (let i = 0; i < 8; i++) randomArray.push(Math.floor(Math.random() * 100) + 1);
  document.getElementById('arrayDisplay').textContent = randomArray.join(', ');
  document.getElementById('firstResult').textContent = getFirstElement(randomArray);
  document.getElementById('lastResult').textContent = getLastElement(randomArray);
});

// Add Two Numbers
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumResult = document.getElementById('sumResult');
function updateSum() {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);
  sumResult.value = (isNaN(val1) || isNaN(val2)) ? 'NaN' : val1 + val2;
}
num1.addEventListener('input', updateSum);
num2.addEventListener('input', updateSum);
