/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {};
// @lc code=end

//3/5
var isValid = function(s) {
	const stack = [];
	const map = {
		'{': '}',
		'[': ']',
		'(': ')'
	};
	for (let ch of s) {
		if (ch in map) {
			stack.push(map[ch]);
		} else {
			if (ch !== stack.pop()) return false;
		}
	}
	return stack.length === 0 ? true : false;
};

//3.使用栈
//遇见左括号 push 对应右括号
//遇见右括号 pop 进行比较 相等通过
var isValid = function(s) {
	const arr = [];
	for (let ch of s) {
		if (ch === '(') {
			arr.push(')');
		} else if (ch === '[') {
			arr.push(']');
		} else if (ch === '{') {
			arr.push('}');
		} else {
			if (arr.length === 0 || arr.pop() !== ch) return false;
		}
	}
	return arr.length === 0 ? true : false;
};

//1.使用栈
//再js中栈可以通过数组 pop push 来简单代替
//左右配对的关系一般写成map对象
//优化：提前判断s是否有偶数个字符
var isValid = function(s) {
	if (s.length % 2) return false;
	const m = {
		'(': ')',
		'[': ']',
		'{': '}'
	};
	const arr = [];
	for (let ch of s) {
		if (ch in m) {
			//in检查 props
			arr.push(ch);
		} else {
			if (ch !== m[arr.pop()]) return false;
		}
	}
	return arr.length === 0 ? true : false;
};

var isValid = function(s) {
	const m = {
		'(': ')',
		'[': ']',
		'{': '}'
	};
	const arr = [];
	for (let ch of s) {
		if (ch in m) {
			//in检查 props
			arr.push(ch);
		} else {
			if (ch !== m[arr.pop()]) return false;
		}
	}
	if (arr.length === 0) {
		return true;
	} else {
		return false;
	}
};
//2.暴力
//找到匹配括号并消除直至所有字符串被消除至0
var isValid = function(s) {
	while (s.length) {
		let temp = s;
		s = s.replace('()', '');
		s = s.replace('[]', '');
		s = s.replace('{}', '');
		if (s === temp) return false;
	}
	return true;
};
