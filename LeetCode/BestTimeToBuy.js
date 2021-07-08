/* 리트코드 121. Best Time to Buy and Sell Stock */

var maxProfit = function (prices) {
  let profits = [];
  for (let i = 1; i < prices.length; i++) {
    profits.push(prices[i] - prices[i - 1]);
  }
  for (let i = 1; i < profits.length; i++) {
    profits[i] = Math.max(profits[i], profits[i - 1] + profits[i]);
  }
  let max = Math.max(...profits);
  return max >= 0 ? max : 0;
};
