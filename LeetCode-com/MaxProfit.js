var assert = require("assert");

// An array for which the ith element is the price of a given stock on a day
// design an algorithm to maximize profit.
// Can complete as many transactions as you like, but must sell before you buy again.

// Steps:
// find next lowest price
// find next highest price
// add to profit
// repeat.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i = 0;
  let profit = 0;
  while (i < prices.length) {
    // find lowest price
    while (prices[i] >= prices[i + 1]) {
      i++;
    }
    let buyPrice = prices[i];
    // find highest price.
    while (prices[i] <= prices[i + 1]) {
      i++;
    }
    // sell and increase i.
    profit += prices[i] - buyPrice;
    i++;
  }
  return profit;
};

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 7);
assert.equal(maxProfit([1, 2, 3, 4, 5]), 4);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
assert.equal(maxProfit([1, 7, 5, 2, 111]), 115);
assert.equal(maxProfit([5, 1, 3, 3, 7, 7, 9, 2, 3]), 9);

// Done this way for practice, as recursive functions are definitely not my strongest skill.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitRecursive = function(prices) {
  const calcProfit = function(i) {
    let currentPrice = prices[i];
    // We want to buy at the next lowest price.
    while (prices[i] >= prices[i + 1]) {
      i++;
    }
    let buyPrice = prices[i];
    // We want to sell at the highest price that comes after the lowest price.
    while (prices[i] <= prices[i + 1]) {
      i++;
    }
    // Sell at highest price, if it's not the current price we are at.
    if (currentPrice != prices[i]) {
      return prices[i] - buyPrice + calcProfit(i + 1);
    } else {
      return 0;
    }
  };
  return calcProfit(0);
};

assert.equal(maxProfitRecursive([7, 1, 5, 3, 6, 4]), 7);
assert.equal(maxProfitRecursive([1, 2, 3, 4, 5]), 4);
assert.equal(maxProfitRecursive([7, 6, 4, 3, 1]), 0);
assert.equal(maxProfitRecursive([1, 7, 5, 2, 111]), 115);
assert.equal(maxProfitRecursive([5, 1, 1, 3, 3, 7, 7, 9, 2, 3]), 9);
