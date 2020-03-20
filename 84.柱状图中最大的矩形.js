/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {};
// @lc code=end

//3/5
//使用单调递增栈的原因：
//如果当前x的后面元素都比x大，则可以计算从x到后面元素以x为高的矩形面积
//觉得稍微理解一点了。。。
var largestRectangleArea = function(heights) {
	let stack = [ -1 ]; //增加一个边界元素方便处理
	let maxArea = 0;
	for (let i = 0; i < heights.length; ++i) {
		while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > heights[i]) {
			const area = heights[stack.pop()] * (i - 1 - stack[stack.length - 1]);
			maxArea = Math.max(area, maxArea);
		}
		stack.push(i);
	}

	//still left area
	while (stack[stack.length - 1] !== -1) {
		const t = stack.pop();
		const area = heights[t] * (heights.length - 1 - stack[stack.length - 1]);
		maxArea = Math.max(area, maxArea);
	}
	return maxArea;
};
//2.使用栈
//这个栈是有序栈/单调栈，依次遍历记录左边
//如何实现单调栈 从小到大：
//1. 当入栈元素大于栈顶元素，入栈
//2.当入栈元素小于栈顶元素，弹出栈顶并计算maxarea
//3.入栈元素继续与新栈顶元素比较，并按照1.2进行操作
//这个写法太巧妙了，不强求自己想,背住吧。。。
var largestRectangleArea = function(heights) {
	let stack = [ -1 ];
	let maxArea = 0;
	for (let i = 0; i < heights.length; ++i) {
		//loop to cmp
		while (peek(stack) !== -1 && heights[peek(stack)] >= heights[i]) {
			maxArea = Math.max(maxArea, heights[stack.pop()] * (i - peek(stack) - 1));
		}
		stack.push(i); //loop until finallu heights[peek(stack)] < heights
	}
	//第一次循环完后stack没被清空说明一直到heights最后一个元素都比前面大，
	//所以这是计算x长度可以直接用heights.length-前一个元素的x坐标-offset
	while (peek(stack) !== -1) {
		maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - peek(stack) - 1));
	}
	return maxArea;
};

function peek(arr) {
	return arr[arr.length - 1];
}

//1.暴力
//枚举所有可能的柱子对，记录最大area
//i->i柱子为右柱子
//对每一个右柱子遍历其左柱子
var largestRectangleArea = function(heights) {
	let maxArea = 0;
	for (let i = 0; i < heights.length; i++) {
		let minHeight = Infinity;
		for (let j = i; j < heights.length; j++) {
			minHeight = Math.min(minHeight, heights[j]);
			maxArea = Math.max(maxArea, (j - i + 1) * minHeight);
		}
	}
	return maxArea;
};
