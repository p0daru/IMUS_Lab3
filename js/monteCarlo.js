// Координати центра кола та квадрат радіуса
const a = 8;
const b = 6;
const c = 58;

const n = 100000; // Кількість ітерацій

// Площа квадрата, в який вписане коло
function calcSquareArea(squaredRadius) {
  // Сторона квадрата, в який вписане коло
  const squareSide = 2 * Math.sqrt(squaredRadius);
  // Площа квадрата
  const squareArea = Math.pow(squareSide, 2);

  return squareArea.toFixed(2);
}

function calcPoints(n, a, b, c) {
  const random = Math.random;
  let points = 0; // Лічильник точок всередині кола

  for (let i = 0; i < n; i++) {
    const x = random() * (15.62 - 0.39) + 0.39; // випадкове число x в діапазоні (0.39, 15.62)
    const y = random() * (13.57 - -1.66) + -1.66; // випадкове число y в діапазоні (-1.66, 13.57)

    // Обчислення квадрату відстані від точки до центру кола
    const distanceSquared = Math.pow(x - a, 2) + Math.pow(y - b, 2);

    // Якщо точка знаходиться всередині кола, збільшуємо лічильник m
    if (distanceSquared <= c) {
      points++;
    }
  }

  return points;
}

const m = calcPoints(n, a, b, c);
const squareArea = calcSquareArea(c);
const circleArea = (m / n) * squareArea;

console.log(`Circle area: ${circleArea}`);
