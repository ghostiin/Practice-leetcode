/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {};
// @lc code=end

//2.哈希表
//两边，第一遍将（nums[i],i）存入map，以i作为value的意义是比较target时不取到自身
var twoSum = function(nums, target) {
	const m = new Map();
	nums.forEach((e, i) => {
		m.set(e, i);
	});
	for (let i = 0; i < nums.length; i++) {
		const t = target - nums[i];
		if (m.has(t) && m.get(t) !== i) {
			return [ i, m.get(t) ];
		}
	}
	return [];
};
//也可以一边，一边存一边找，返回数组顺序要变

//1.两层循环枚举，因为题目假设只有一个对应答案，
//所以遍历找到后可以直接返回
// 29/29 cases passed (132 ms)
// Your runtime beats 45.36 % of javascript submissions
// Your memory usage beats 56.14 % of javascript submissions (34.8 MB)
var twoSum = function(nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [ i, j ];
			}
		}
	}
};
