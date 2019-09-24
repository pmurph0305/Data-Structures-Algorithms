var assert = require("assert");
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// DOnt return anything, modify array in place.

// 1: Using pop/unshift.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  // makes it O(n) instead of O(k):
  while (k > nums.length) {
    k -= nums.length;
  }
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// tests
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
nums = [-1, -100, 3, 99];
rotate(nums, 2);
assert.deepEqual(nums, [3, 99, -1, -100]);
nums = [1, 2];
rotate(nums, 3);
assert.deepEqual(nums, [2, 1]);

//2 using splice & push.
var rotateB = function(nums, k) {
  while (k > nums.length) {
    k -= nums.length;
  }
  let vals = nums.splice(0, nums.length - k);
  vals.forEach(el => {
    nums.push(el);
  });
};

nums = [1, 2, 3, 4, 5, 6, 7];
rotateB(nums, 3);
assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
nums = [-1, -100, 3, 99];
rotateB(nums, 2);
assert.deepEqual(nums, [3, 99, -1, -100]);
nums = [1, 2];
rotateB(nums, 3);
assert.deepEqual(nums, [2, 1]);

//3 manual count swap.
// We calculate the # of maximum swaps, which is always N-1.
// Then we replace values with held values, wrapping around & handling the case if its evenly divisible.
// also make sure to continue to reduce i while we're over nums.length.
var rotateC = function(nums, k) {
  // handle k being larger then length, so we just move the minimum amount.
  while (k > nums.length) {
    k -= nums.length;
  }
  let swaps = 0;
  let maxSwaps = nums.length - 1;
  let i = 0;
  let t = nums[0];
  while (swaps <= maxSwaps) {
    i += k;
    if (i >= nums.length) {
      // need to make sure we're definitely under the max length, so that k can be bigger than length.

      i -= nums.length;

      // need to swap if evenly divisible, then start swapping at i + 1 again.
      if (k % 2 === 0 && nums.length % k === 0) {
        nums[i] = t;
        t = nums[i + 1];
        i = i + 1;
      }
    }
    // replace the current i value with the held value, hold the replaced value for the next swap.
    let a = nums[i];
    nums[i] = t;
    t = a;
    swaps += 1;
  }
};

// tests
nums = [1, 2, 3];
rotateC(nums, 3);
assert.deepEqual(nums, [1, 2, 3]);
nums = [1, 2, 3, 4, 5, 6, 7];
rotateC(nums, 3);
assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
nums = [-1, -100, 3, 99, 5, 6];
rotateC(nums, 2);
assert.deepEqual(nums, [5, 6, -1, -100, 3, 99]);
nums = [-1, -100, 3, 99];
rotateC(nums, 2);
assert.deepEqual(nums, [3, 99, -1, -100]);
nums = [1, 2, 3, 4, 5, 6, 7, 8];
rotateC(nums, 4);
assert.deepEqual(nums, [5, 6, 7, 8, 1, 2, 3, 4]);
nums = [1, 2];
rotateC(nums, 3);
assert.deepEqual(nums, [2, 1]);
