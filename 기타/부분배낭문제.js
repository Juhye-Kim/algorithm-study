const items = [
  [10, 10],
  [15, 12],
  [20, 10],
  [25, 8],
  [30, 5],
];

const getMaxValue = (items, capacity) => {
  items.sort((a, b) => b[1] / b[0] - a[1] / a[0]);
  let sum = 0;
  let bag = [];
  for (let i = 0; i < items.length; i++) {
    if (sum + items[i] > capacity) break;
    bag.push(items[i]);
  }
  return;
};

console.log(getMaxValue(items, 30)); // 24.5
