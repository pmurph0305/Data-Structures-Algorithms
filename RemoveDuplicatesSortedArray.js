var assert = require("assert");

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

let arr1 = [1, 2, 2, 3, 4];
assert.equal(removeDuplicates(arr1), 4);
assert.deepEqual(arr1, [1, 2, 3, 4]);

arr1 = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
assert.equal(removeDuplicates(arr1), 4);
assert.deepEqual(arr1, [1, 2, 3, 4]);
