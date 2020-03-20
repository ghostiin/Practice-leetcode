/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

//更多思路
//2.使用一个栈+一个min变量
//注意min变量的正确更新
var MinStack = function() {
	this.stack = [];
	this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
	this.min = Math.min(this.min, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	const x = this.stack.pop();
	if (x === this.min) {
		this.min = Math.min(...this.stack);
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.min;
};

//https://leetcode-cn.com/problems/min-stack/solution/jstong-guo-shu-zu-shi-xian-by-jikunguo/

//1. 使用两个栈，一个维护出入顺序，一个维护最小栈
//空间换时间
//有两种版本 min 与stack 同步或不同步
var MinStack = function() {
	this.stack = [];
	this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
	if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
		this.min.push(x);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	const t = this.stack.pop();
	if (t === this.min[this.min.length - 1]) {
		this.min.pop();
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.min[this.min.length - 1];
};
