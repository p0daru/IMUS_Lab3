//===== ДАНІ, ОТРИМАНІ З ЕКСПЕРИМЕНТІВ =====//
const data_100 = [
  181, 185.6, 183.3, 183.3, 176.3, 178.6, 176.3, 187.9, 187.9, 181,
];

const data_500 = [
  184.2, 188.8, 181.9, 185.6, 187.5, 188.4, 187, 184.2, 187.5, 181.4,
];

const data_1000 = [
  187, 189.3, 183.5, 186.5, 185.4, 184.4, 188.4, 187.2, 186.3, 186.3,
];

const data_5000 = [
  184, 183.3, 181.1, 182.5, 181.2, 182, 182.6, 183.4, 181.5, 182.9,
];

const data_10000 = [
  182.8, 183.1, 182, 182.5, 182.3, 182.8, 182.7, 181.4, 182.4, 181.8,
];

const data_100000 = [
  182.4, 182.5, 181.9, 182.5, 182.5, 182.7, 182.2, 182, 182.4, 181.8,
];

//===== ФУНКЦІЇ =====//
// Обчислюємо середнє значення
function calcMean(data) {
  const runs = data.length; // к-сть прогонів
  const sum = data.reduce((acc, val) => acc + val, 0); // сума всіх елементів у масиві

  return (sum / runs).toFixed(2);
}

// Обчислюємо дисперсію
function calсVariance(data) {
  const runs = data.length; // к-сть прогонів
  const mean = calcMean(data, runs); // середнє значення

  // сума квадратів відхилень від середнього значення
  const sumSquaredDiff = data.reduce((acc, val) => acc + (val - mean) ** 2, 0);
  // дисперсія є середнім значенням суми квадратів відхилень
  return (sumSquaredDiff / runs).toFixed(5);
}

//===== РЕЗУЛЬТАТИ =====//
// середні значення
const mean = [
  calcMean(data_100),
  calcMean(data_500),
  calcMean(data_1000),
  calcMean(data_5000),
  calcMean(data_10000),
  calcMean(data_100000),
];

console.log('Середні значення');
console.log(mean);

// дисперсії
const variance = [
  calсVariance(data_100),
  calсVariance(data_500),
  calсVariance(data_1000),
  calсVariance(data_5000),
  calсVariance(data_10000),
  calсVariance(data_100000),
];

console.log('Дисперсії');
console.log(variance);
