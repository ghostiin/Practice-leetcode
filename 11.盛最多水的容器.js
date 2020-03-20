/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {};
// @lc code=end

//3/5
var maxArea = function(height) {
	let i = 0,
		j = height.length - 1;
	let max = 0;
	while (i !== j) {
		const minH = height[i] < height[j] ? height[i++] : height[j--];
		const area = minH * (j - i + 1);
		max = Math.max(area, max);
	}
	return max;
};
//---
var maxArea = function(height) {
	let max = 0;
	for (let i = 0; i < height.length - 1; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const area = (j - i) * (height[i] < height[j] ? height[i] : height[j]);
			max = max < area ? area : max;
		}
	}
	return max;
};

//2/5
//题目理解: i是index也是横坐标，ai是height[i]的值，也是纵坐标
//2.左右边界index i,j 向中间收敛，所以在中间相遇就只有一层循环
//O(n)
var maxArea = function(height) {
	let max = 0;
	for (let i = 0, j = height.length - 1; i < j; ) {
		const minH = height[i] < height[j] ? height[i++] : height[j--];
		//取minH时是i or j取完之后是i+1 or j-1，所以计算是还原i-j就是i-j+1
		const area = (j - i + 1) * minH;
		max = Math.max(max, area);
	}
	return max;
};

//1.遍历枚举每一种情况，二层循环
//O(n^2)
//遍历-记录每种area情况的值-记录最大值
var maxArea = function(height) {
	let max = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const area = (j - i) * Math.min(height[i], height[j]);
			max = Math.max(max, area);
		}
	}
	return max;
};
