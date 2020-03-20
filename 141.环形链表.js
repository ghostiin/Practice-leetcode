/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {};

// @lc code=end

//3/5

var hasCycle = function(head) {
	if (!head || head.next === null) return false;
	const s = new Set();
	while (head) {
		if (s.has(head)) {
			return true;
		} else {
			s.add(head);
		}
		head = head.next;
	}
	return false;
};

var hasCycle = function(head) {
	if (!head || head.next === null) return false;
	let slow = head;
	let fast = head.next;

	while (fast && fast.next) {
		if (slow === fast) {
			return true;
		}
		slow = slow.next;
		fast = fast.next.next;
	}

	//return bool
	return false;
};

//2.快慢指针
//若链表中存在环，则一次走两步者最终会追上一次走一步者
//若不存在环，则一次走两步的快者会更快到达重点 null
//但是因为只使用了快慢指针两个截点，所以空间为O(1)
var hasCycle = function(head) {
	if (!head || head.next === null) {
		return false;
	}
	let slow = head;
	let fast = head.next;
	while (fast !== slow) {
		if (!fast || fast.next === null) return false;
		slow = slow.next;
		fast = fast.next.next;
	}
	return true;
};
//下面快50%
const hasCycle = function(head) {
	let fast = (slow = head);
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) {
			return true;
		}
	}
	return false;
};

//1.使用一个hashtable or set 来存放已经遍历过的节点，
//出现重复节点时说明链表中有环
// 17/17 cases passed (124 ms)
// Your runtime beats 11.58 % of javascript submissions
// Your memory usage beats 9.89 % of javascript submissions (38.3 MB)
//使用set
var hasCycle = function(head) {
	const s = new Set();
	while (head) {
		if (s.has(head)) {
			return true;
		} else {
			s.add(head);
		}
		head = head.next;
	}
	return false;
};

//使用map,比set快很多
// 17/17 cases passed (60 ms)
// Your runtime beats 99.92 % of javascript submissions
// Your memory usage beats 12.66 % of javascript submissions (38.1 MB)
var hasCycle = function(head) {
	const s = new Map();
	while (head) {
		if (s.has(head)) {
			return true;
		} else {
			s.set(head, 1);
		}
		head = head.next;
	}
	return false;
};
