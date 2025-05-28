function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

const x1 = 1, y1 = 2;
const x2 = 4, y2 = 6;

const distance = calculateDistance(x1, y1, x2, y2);
console.log(`Расстояние между точками: ${distance.toFixed(2)}`);