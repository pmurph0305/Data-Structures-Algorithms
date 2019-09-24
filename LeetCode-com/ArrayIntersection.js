var assert = require("assert");

// Given two arrays, write a function to compute their intersection.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr2 = [...nums2];
  let intersection = [];
  nums1.map(val => {
    let i = arr2.indexOf(val);
    if (i > -1) {
      intersection.push(val);
      arr2.splice(i, 1);
    }
  });
  return intersection;
};

assert.deepEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
assert.deepEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
// For above:
// Follow up
// What if array is already sorted, how would you optimize?
// Can easily skip elements with a comparison, & use min & max values to skip below/above those values.
// Can also count & bulk splice elements.
// Wouldn't use a map, would just for loop so you can skip elements & bulk process similar ones.

// What if nums1's size is small compared to num2's size?
// Can check which size is smaller in the algorithm and loop the smaller one

// What if elements of nums2 are stored on disk, and memory is limited such that you cannot load all elements into memory at once?
// Load elements you can, and map over those, splicing elements from the copied nums1 as you go, then repeat until all nums2 is done.