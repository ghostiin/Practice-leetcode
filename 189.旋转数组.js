/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {};
// @lc code=end

//3/5
var rotate = function(nums, k) {
	nums.reverse();
	k %= nums.length; //for k> len
	reversePart(nums, 0, k - 1);
	reversePart(nums, k, nums.length - 1);
};

function reversePart(arr, start, end) {
	while (start < end) {
		const t = arr[start];
		arr[start++] = arr[end];
		arr[end--] = t;
	}
}
var rotate = function(nums, k) {
	for (let i = 0; i < k; i++) {
		//暴力移动k次
		let pre = nums[nums.length - 1]; //提前保存最后要移动的元素
		for (let j = 0; j < nums.length; j++) {
			//一次向后移动的替换方法
			const t = nums[j];
			nums[j] = pre;
			pre = t;
		}
	}
};

//4.环状替换。。。搞不懂

//题目分析：
//移动n步就是将最后n个元素内部顺序不变的移动到数组头部
//1.使用数组方法，拆分再组合，但是不满足空间复杂度O(1)的条件，额外的空间会被使用
var rotate = function(nums, k) {
	const start = nums.length - k;
	let arr = nums.splice(start, k); //返回被删除元素组成的数组
	arr = arr.concat(nums);
	for (let i = 0; i < arr.length - 1; i++) {
		nums[i] = arr[i];
	}
};
//2.暴力每次旋转最开始元素直至旋转k次，空间复杂度时0(1)
var rotate = function(nums, k) {
	for (let i = 0; i < k; i++) {
		let pre = nums[nums.length - 1];
		for (let j = 0; j < nums.length; j++) {
			let temp = nums[j];
			nums[j] = pre;
			pre = temp;
		}
	}
};
//时间复杂度O(n^2)非常慢
//3.反转
//题目意思就是会有 k%n个元素被移植开头并且两部分内部次序不变
//使用三次反转，第一次反转整个数组，接下来分别反转两部分
//时间O(n) 空间O(1)
// 34/34 cases passed (112 ms)
// Your runtime beats 36.36 % of javascript submissions
// Your memory usage beats 92.12 % of javascript submissions (35.1 MB)
var rotate = function(nums, k) {
	k %= nums.length;
	nums.reverse();
	let start = 0;
	let end = k - 1;
	reversePart(start, end, nums);
	start = k;
	end = nums.length - 1;
	reversePart(start, end, nums);
};

function reversePart(start, end, arr) {
	while (start < end) {
		const tmp = arr[start];
		arr[start] = arr[end];
		arr[end] = tmp;

		start++;
		end--;
	}
}
