/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {};

// @lc code=end

//3/5
//优化的双端队列，保持单调递减
class Slidewindow {
	constructor() {
		this.deque = [];
	}

	push = (e) => {
		while (this.deque.length !== 0 && e > this.deque[this.deque.length - 1]) {
			this.deque.pop();
		}
		this.deque.push(e);
	};
	pop = (e) => {
		if (this.deque.length !== 0 && e === this.max()) this.deque.shift();
	};
	max = () => {
		return this.deque[0];
	};
}

var maxSlidingWindow = function(nums, k) {
	//deque
	const sw = new Slidewindow();
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			sw.push(nums[i]);
		} else {
			sw.push(nums[i]);
			res.push(sw.max());
			sw.pop(nums[i - k + 1]);
		}
	}

	return res;
};
//额 使用普通的双端队列就可以了。。。只是效率不好
var maxSlidingWindow = function(nums, k) {
	//deque
	const sw = new Slidewindow();
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			sw.push(nums[i]);
		} else {
			sw.push(nums[i]);
			res.push(sw.max());
			sw.pop();
		}
	}

	return res;
};

class Slidewindow {
	constructor() {
		this.deque = [];
	}

	push = (e) => {
		this.deque.push(e);
	};
	pop = () => {
		this.deque.shift();
	};
	max = () => {
		return this.deque[0];
	};
}

//暴力
var maxSlidingWindow = function(nums, k) {
	const res = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		const t = Math.max(...nums.slice(i, i + k));
		t !== -Infinity ? res.push(t) : 1; //1 for do nothing
	}
	return res;
};

//2.双端队列
//https://leetcode-cn.com/problems/sliding-window-maximum/solution/239-hua-dong-chuang-kou-zui-da-zhi-by-alexer-660/
//注意队列操作是前后两头的
var maxSlidingWindow = function(nums, k) {
	let res = [];
	let n = nums.length;
	class SlideWindow {
		constructor() {
			this.data = [];
		}

		pop = (e) => {
			//队列先进先出，只有是头部最大元素的才可以pop
			//这是从队列前面进行的
			if (this.data.length !== 0 && e === this.max()) {
				this.data.shift();
			}
		};
		//push时保持队列单调，比当前元素小的前面的元素都删除
		push = (e) => {
			while (this.data.length > 0 && e > this.data[this.data.length - 1]) {
				this.data.pop(); //新加入元素压扁比他小的元素直至遇见比他大的
				//这是再队列back进行的
			}
			this.data.push(e);
		};

		max = () => {
			return this.data[0];
		};
	}

	const sw = new SlideWindow();

	for (let i = 0; i < n; i++) {
		if (i < k - 1) {
			sw.push(nums[i]);
		} else {
			sw.push(nums[i]);
			res.push(sw.max());
			sw.pop(nums[i - k + 1]);
		}
	}
	return res;
};

//1.暴力
//枚举每个窗口，求其中max
var maxSlidingWindow = function(nums, k) {
	if (nums.length === 0) return [];
	const res = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		res.push(Math.max(...nums.slice(i, i + k)));
	}
	return res;
};
