var assert = require("assert");

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let operations = 0;
  for (let i = 0; i < nums.length - operations; i++) {
    if (nums[i] === 0) {
      operations += 1;
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
    }
  }
  console.log("moveZeros operations:" + operations);
  return nums;
};

assert.deepEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]); // 2 ops
assert.deepEqual(moveZeroes([0, 0, 1, 0, 3, 12]), [1, 3, 12, 0, 0, 0]); // 3 ops
assert.deepEqual(moveZeroes([0, 0, 1, 0, 0, 3, 12]), [1, 3, 12, 0, 0, 0, 0]); // 4 ops

// Counting consecutive zeros reduces the number of operations.
var moveZeroes2 = function(nums) {
  let operations = 0;
  let numZeros = 0;
  for (let i = 0; i < nums.length - numZeros; i++) {
    if (nums[i] === 0) {
      let countConsecutiveZeros = function(arr, j) {
        if (arr[j] == 0) {
          return 1 + countConsecutiveZeros(arr, j + 1);
        }
        return 0;
      };
      let consecutiveZeros = 1 + countConsecutiveZeros(nums, i + 1);
      operations += 1;
      numZeros += consecutiveZeros;
      let zeros = nums.splice(i, consecutiveZeros);
      Array.prototype.push.apply(nums, zeros);
    }
  }
  console.log("moveZeros2 operations:" + operations);
  return nums;
};

assert.deepEqual(moveZeroes2([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]); //2 ops
assert.deepEqual(moveZeroes2([0, 0, 1, 0, 3, 12]), [1, 3, 12, 0, 0, 0]); //2 ops
assert.deepEqual(moveZeroes2([0, 0, 1, 0, 0, 3, 12]), [1, 3, 12, 0, 0, 0, 0]); //2 ops
