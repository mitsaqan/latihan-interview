var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 9) return [i, j];
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
