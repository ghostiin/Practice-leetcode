/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {};
// @lc code=end

//3/5
var removeDuplicates = function(nums) {
	//del while traverse
	let pre = NaN,
		index = 0;
	while (index < nums.length) {
		if (pre !== nums[index]) {
			pre = nums[index];
			index++;
		} else {
			nums.splice(index, 1);
		}
	}
	return nums.length;
};

var removeDuplicates = function(nums) {
	//two pointer
	//bring different num to front
	let i = 0,
		j = i;
	while (nums[j] !== undefined) {
		if (nums[i] === nums[j]) {
			j++;
		} else {
			i++;
			const t = nums[i];
			nums[i] = nums[j];
			nums[j] = t;
			j++;
		}
	}
	return i + 1;
};

//2.快慢指针||双指针
//前提 ：排序好的数组
//看图好理解 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shuang-zhi-zhen-shan-chu-zhong-fu-xiang-dai-you-hu/
//慢指针指向正确元素应该放置的位置
//快指针遍历
//当快慢指针相同 快指针继续遍历
//当快慢指针不相同，即快指针遍历到不同元素，将其复制到慢指针位置，然后慢指针快指针都走一步
//当快指针指向null说明已经遍历完，处理完所有元素，慢指针所在位置即为正确元素个数
var removeDuplicates = function(nums) {
	let slow = 0;
	let fast = 1;
	while (nums[fast] !== undefined) {
		//不能写成nums[fast]因为nums[fast]=0时会false
		if (nums[slow] !== nums[fast]) {
			nums[++slow] = nums[fast++];
		} else {
			fast += 1;
		}
	}
	return slow + 1; //数组lastindex+1=length
};

//1.一边遍历一边删除重复项
//splice
//一边删除时数组length会变，要注意index,当删除时len-1，index不变，遍历不删除时index才++
var removeDuplicates = function(nums) {
	let n = NaN,
		index = 0;
	while (index < nums.length) {
		if (n !== nums[index]) {
			n = nums[index];
			index++;
		} else {
			nums.splice(index, 1);
		}
	}
	return nums.length;
};
// Your runtime beats 44.34 % of javascript submissions
// Your memory usage beats 30.65 % of javascript submissions (37.4 MB)
