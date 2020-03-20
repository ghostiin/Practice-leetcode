/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {};
// @lc code=end

//3/5
var moveZeroes = function(nums) {
	for (let curr = 0, lastNonZero = 0; curr < nums.length; curr++) {
		if (nums[curr] !== 0) {
			[ nums[lastNonZero++], nums[curr] ] = [ nums[curr], nums[lastNonZero] ];
		}
	}
};

//2/5
//method -1 熟悉JS数组API
//method -2 记住这种双指针的操作方式，一维数组的坐标变换
var moveZeroes = function(nums) {
	for (let curr = 0, lastNonZero = 0; curr < nums.length; curr++) {
		if (nums[curr] !== 0) {
			//使用解构特性交换元素
			[ nums[lastNonZero++], nums[curr] ] = [ nums[curr], nums[lastNonZero] ];
		}
	}
	//return nums;
};

//2.直接在原数组中操作index移动元素（题目要求不能开新数组）
//i 记录当前遍历位置 j记录非0元素应该放的位置
//当j成功执行一次将0置换到后面时则j++作为下一个非0元素的放置位置
// 21/21 cases passed (80 ms)
// Your runtime beats 41.97 % of javascript submissions
// Your memory usage beats 55.17 % of javascript submissions (35.9 MB)
var moveZeroes = function(nums) {
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}

	return nums;
};

//1.遍历统计0的个数，并同时删除数组中的0元素，然后再数组最后添加对应数目的0元素
// 21/21 cases passed (100 ms)
// Your runtime beats 11.2 % of javascript submissions
// Your memory usage beats 51.47 % of javascript submissions (35.9 MB)
var moveZeroes = function(nums) {
	let pos = nums.indexOf(0);
	let sum = 0;
	while (pos !== -1) {
		//until delete all 0
		//delete 0 and cal 0
		nums.splice(pos, 1);
		sum++;
		//find next 0
		pos = nums.indexOf(0);
	}
	//add 0 to the last
	const zeros = new Array(sum).fill(0); //生成sum个0的数组
	nums.push(...zeros);
	//return original nums
	return nums;
};
//Q: indexOf的效率问题->换成for?
//遍历就可以找到0，没必要每次indexof这样导致一次indexof就是一次for，虽然整体仍然是O(N)
var moveZeroes = function(nums) {
	let len = nums.length;
	for (let i = 0; i < len; ) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
			len--; //需要遍历的元素-1，添加的0不需要再遍历了
		} else {
			i++; //nums[i]！=0则继续向后寻找非0元素
		}
	}
	return nums;
};
//lc玄学。。。速度有波动。。大的时候差不多
