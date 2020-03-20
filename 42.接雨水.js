/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let ans = 0;
	for (let i = 1; i < height.length - 1; i++) {
		let right = 0,
			left = 0;
		for (let j = i - 1; j >= 0; j--) {
			left = Math.max(left, height[j]);
		}
		for (let k = i + 1; k < height.length; k++) {
			right = Math.max(right, height[k]);
		}
		const min = Math.min(left, right);
		if (min > height[i]) {
			ans += min - height[i];
		}
	}
	return ans;
};
// @lc code=end

//3.栈
//将问题抽象为括号匹配，只有匹配上中间才会有积水
//https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
//??还是没懂
//2.动规及其优化

//1.暴力
//按列暴力求解
var trap = function(height) {
	let ans = 0;
	//最左最右不会有水 故可以不遍历
	for (let i = 1; i < height.length - 1; i++) {
		let right = 0,
			left = 0;
		//find the left boud
		for (let j = i - 1; j >= 0; j--) {
			left = Math.max(left, height[j]);
		}
		//find the right boud
		for (let j = i + 1; j < height.length; j++) {
			right = Math.max(right, height[j]);
		}
		const min = Math.min(left, right);
		if (min > height[i]) {
			ans += min - height[i];
		}
	}
	return ans;
};
