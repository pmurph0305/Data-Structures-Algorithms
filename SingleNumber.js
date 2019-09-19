var assert = require("assert");

// Given a non-empty array of integers, every element appears twice except for one.

const singleNumber = function(nums) {
  let counts = [];
  nums.forEach(el => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });

  return counts.indexOf(1);
};

// Using a set.
// 2 * Unique elements - total of all elements = Element that appears once.
const singleNumberSet = function(nums) {
  let set = new Set();
  let totalUnique = 0;
  let total = 0;
  nums.forEach(val => {
    if (!set.has(val)) {
      set.add(val);
      totalUnique += 2 * val;
    }
    total += val;
  });

  return totalUnique - total;
};

assert.equal(singleNumber([1]), 1);
assert.equal(singleNumber([2, 2, 1]), 1);
assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);

assert.equal(singleNumberSet([1]), 1);
assert.equal(singleNumberSet([2, 2, 1]), 1);
assert.equal(singleNumberSet([4, 4, 5, 1, 2, 1, 2]), 5);
