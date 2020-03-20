/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {};

// @lc code=end

//3/5
var climbStairs = function(n) {
	if (n <= 3) return n;
	let f1 = 1,
		f2 = 2,
		f3 = 3;
	for (let i = 3; i <= n; i++) {
		f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	return f3;
};

//2/5

//当毫无思路时：枚举基本情况，找 最近的 重复 子问题
//比如 ，跨三步的子问题就是：
//       1. 跨两步的问题 + 再跨一步 -> 走法 = 跨两步走法
//       2. 跨一步的问题 + 再跨两步 -> 走法 = 跨一步走法

//4.直接使用斐波拉契公式
// https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/
var climbStairs = function(n) {
	const sqrt_5 = Math.sqrt(5);
	const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
	return Math.round(fib_n / sqrt_5);
};

//3.用数组缓存中间值，简单动态规划
// 45/45 cases passed (60 ms)
// Your runtime beats 78.55 % of javascript submissions
// Your memory usage beats 45.27 % of javascript submissions (33.9 MB)
var climbStairs = function(n) {
	if (n <= 3) return n;
	const arr = [ 1, 1, 2, 3 ];
	for (let i = 4; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
};

//1.无缓存递归： 斐波拉契数列
//O(2^n)
//2.缓存最近三个值 f1 f2 f3来递归，每次只保存最近的值
// 45/45 cases passed (60 ms)
// Your runtime beats 78.55 % of javascript submissions
// Your memory usage beats 46.29 % of javascript submissions (33.9 MB)
var climbStairs = function(n) {
	if (n <= 3) return n;
	let f1 = 1,
		f2 = 2,
		f3 = 3;
	const range = [ ...Array(n + 1 - 3).keys() ].map((el, i) => 3 + i);
	for (m in range) {
		f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	return f3;
};

// js实现python中range的几种方法
// 1.Array.from
// Array.from(Array(end-start),(el,i)=>start+i)
// 2.Array.fill.map
// Array(end - start).fill(start).map((el, i) => start + i)
// 3.[...Array.keys()].map
// [...Array(end-start).keys()].map((el, i) => start + i)

//不过这道题没必要仿照python的range方法来写 ，普通for就可以了...
var climbStairs = function(n) {
	if (n <= 2) return n;
	let f1 = 1,
		f2 = 2,
		f3 = 3;
	for (let i = 3; i <= n; i++) {
		f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	return f3;
};
