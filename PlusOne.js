var assert = require("assert");
//  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//  The digits are stored such that the most significant digit is at the head of the list,
//  and each element in the array contain a single digit.
//  You may assume the integer does not contain any leading zero, except the number 0 itself.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let numbers = [...digits];
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] += 1;
    if (numbers[i] >= 10) {
      numbers[i] = 0;
      if (i === 0) {
        numbers.unshift(1);
      }
    } else {
      break;
    }
  }
  return numbers;
};

assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
assert.deepEqual(plusOne([9]), [1, 0]);
assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
assert.deepEqual(plusOne([1, 2, 9]), [1, 3, 0]);

var plusOneR = function(digits) {
  let add = function(nums, i) {
    nums[i] += 1;
    if (nums[i] >= 10) {
      nums[i] = 0;
      if (i === 0) {
        nums.unshift(0);
        i = 1;
      }
      return add(nums, i - 1);
    }
    return nums;
  };
  return add([...digits], digits.length - 1);
};

assert.deepEqual(plusOneR([1, 2, 3]), [1, 2, 4]);
assert.deepEqual(plusOneR([4, 3, 2, 1]), [4, 3, 2, 2]);
assert.deepEqual(plusOneR([9]), [1, 0]);
assert.deepEqual(plusOneR([9, 9]), [1, 0, 0]);
assert.deepEqual(plusOneR([1, 2, 9]), [1, 3, 0]);
