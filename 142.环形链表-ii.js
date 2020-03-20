/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {};
// @lc code=end

//3/5
var detectCycle = function(head) {
	if (!head || head.next === null) {
		return null;
	}
	let slow = head;
	let fast = head;
	while (true) {
		if (!fast || fast.next === null) return null;
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) {
			break;
		}
	}
	fast = head;
	while (fast !== slow) {
		fast = fast.next;
		slow = slow.next;
	}

	return slow;
};
var detectCycle = function(head) {
	if (!head || head.next === null) {
		return null;
	}
	const m = new Set();
	while (head) {
		if (m.has(head)) {
			return head;
		} else {
			m.add(head);
			head = head.next;
		}
	}
	return null;
};

//2.快慢指针 双指针 当指针相遇时直接返回该节点<-wrong 相遇第一次可能在环上任何地方相遇，不一定是环的开始
//数学证明：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
//第一次相遇后，将fast指向head slow仍从上一次位置开始，再次相遇则为入环点
var detectCycle = function(head) {
	let slow = head;
	let fast = head;
	while (true) {
		if (!fast || fast.next === null) return null;
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) break;
	}
	fast = head;
	while (fast !== slow) {
		fast = fast.next;
		slow = slow.next;
	}
	return fast;
};

//1. 遍历节点 存储到map&set 记录节点位置，当遍历到重复节点时返回该节点序号位置
var detectCycle = function(head) {
	if (head && head.next !== null) {
		const s = new Map();
		let i = 0;
		while (head) {
			if (s.has(head)) {
				return head;
			} else {
				s.set(head, i++);
				head = head.next;
			}
		}
	}
	return null;
};
//set 这里貌似又比 map快...
var detectCycle = function(head) {
	if (head && head.next !== null) {
		const s = new Set();
		let i = 0;
		while (head) {
			if (s.has(head)) {
				return head;
			} else {
				s.add(head, i++);
				head = head.next;
			}
		}
	}
	return null;
};
