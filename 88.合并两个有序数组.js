/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	//two pointer
	//i j to traverse
	//index   to point the place to save
	//reverse to place bigger one at the nums1's end
	let index = nums1.length - 1;
	let i = m - 1,
		j = n - 1;
	while (i >= 0 && j >= 0) {
		nums1[index--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
	}
	while (i >= 0) {
		nums1[index--] = nums1[i--];
	}
	while (j >= 0) {
		nums1[index--] = nums2[j--];
	}
	//no return
};
// @lc code=end

//3/5
var merge = function(nums1, m, nums2, n) {
	//two pointer
	//i j to traverse
	//index   to point the place to save
	//reverse to place bigger one at the nums1's end
	let index = nums1.length - 1;
	let i = m - 1,
		j = n - 1;
	while (i >= 0 && j >= 0) {
		nums1[index--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
	}
	while (i >= 0) {
		nums1[index--] = nums1[i--];
	}
	while (j >= 0) {
		nums1[index--] = nums2[j--];
	}
	//no return
};

//3.使用双指针且从后往前，先排列大的元素，比2使用空间更少
var merge = function(nums1, m, nums2, n) {
	let i = m - 1,
		j = n - 1;
	let k = nums1.length - 1;
	while (i >= 0 && j >= 0) {
		nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
	}
	while (i >= 0) {
		nums1[k--] = nums1[i--];
	}
	while (j >= 0) {
		nums1[k--] = nums2[j--];
	}
};
//2.使用双指针，先将NUMS1放在arr,然后指针一个指向arr一个指向nums2，按照需求向nums1里存
var merge = function(nums1, m, nums2, n) {
	const arr = nums1.slice(0, m);
	let i = 0,
		j = 0;
	let k = 0;
	while (i < m && j < n) {
		nums1[k++] = arr[i] < nums2[j] ? arr[i++] : nums2[j++];
	}
	while (i < m) {
		nums1[k++] = arr[i++];
	}
	while (j < n) {
		nums1[k++] = nums2[j++];
	}
};
//1.将两个数组合并成新数组排序后再挨个赋值回nums1
var merge = function(nums1, m, nums2, n) {
	const arr = nums1.slice(0, m).concat(nums2);
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		nums1[i] = arr[i];
	}
};
