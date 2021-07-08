/* 리트코드 - 122. Best Time to Buy and Sell Stock II */

var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1];
  }
  return sum;
};
