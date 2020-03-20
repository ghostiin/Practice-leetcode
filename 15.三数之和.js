/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {};
// @lc code=end

//3/5
var threeSum = function(nums) {
	const res = [];
	nums.sort((a, b) => a - b);
	for (let k = 0; nums[k] <= 0; k++) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] === nums[k - 1]) continue;
		//set && renew
		let i = k + 1;
		let j = nums.length - 1;
		while (i < j) {
			const s = nums[i] + nums[j] + nums[k];
			//s>0
			if (s > 0) {
				j--;
				while (nums[j] === nums[j + 1] && i < j) {
					j--;
				}
			}
			//s<0
			if (s < 0) {
				i++;
				while (nums[i] === nums[i - 1] && i < j) {
					i++;
				}
			}
			//s=0
			if (s === 0) {
				res.push([ nums[k], nums[i], nums[j] ]);
				j--;
				while (nums[j] === nums[j + 1] && i < j) {
					j--;
				}
				i++;
				while (nums[i] === nums[i - 1] && i < j) {
					i++;
				}
			}
		}
	}
	return res;
};

//转换问题：从两数之和到三数之和
//a+b+c=0 => a+b= -c => target =-c ->target并非唯一给出

//3.左右坐标边界向中间推进收敛,依然使用双指针套路
//因为要求返回的是原数而不是原始下标，所以排序数组
//排序数组也是这里使用双指针法的前提条件
//https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
var threeSum = function(nums) {
	let res = [];
	nums.sort((a, b) => a - b);
	for (let k = 0; k < nums.length - 2; k++) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] === nums[k - 1]) continue;
		let i = k + 1;
		let j = nums.length - 1;
		while (i < j) {
			const s = nums[i] + nums[j] + nums[k];
			if (s === 0) {
				res.push([ nums[k], nums[i], nums[j] ]);
				while (i < j && nums[i] === nums[++i]);
				while (i < j && nums[j] === nums[--j]);
			} else if (s < 0) {
				while (i < j && nums[i] === nums[++i]);
			} else if (s > 0) {
				while (i < j && nums[j] === nums[--j]);
			}
		}
	}

	return res;
};

//1.暴力求解三重循环： 在 2sum的基础上加上 target的循环
var threeSum = function(nums) {
	let res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		// 每个人
		for (let j = i + 1; j < nums.length - 1; j++) {
			// 依次拉上其他每个人
			for (let k = j + 1; k < nums.length; k++) {
				// 去问剩下的每个人
				if (nums[i] + nums[j] + nums[k] === 0) {
					// 我们是不是可以一起组队
					res.push([ nums[i], nums[j], nums[k] ]);
				}
			}
		}
	}
	return res;
};
//不过这样会有重复，不能通过
//2.hashtable 待讲
