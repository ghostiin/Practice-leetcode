/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {};
// @lc code=end

//3/5
var mergeTwoLists = function(l1, l2) {
	const dummy = new ListNode(-1);
	let pre = dummy;

	while (l1 && l2) {
		//l1<l2
		if (l1.val < l2.val) {
			//link
			pre.next = l1;
			//renew
			pre = pre.next;
			l1 = l1.next;
		} else {
			pre.next = l2;
			pre = pre.next;
			l2 = l2.next;
		}
	}
	//if l1 or l2 still left
	pre.next = l1 === null ? l2 : l1;

	return dummy.next;
};

//2/5
//3.迭代写法
//基本和1.一样，但是使用prehead写法使全部更简洁了，推荐
var mergeTwoLists = function(l1, l2) {
	const prehead = new ListNode(-1); //用于存储新链表头节点
	let pre = prehead; //用于生成新链表遍历用的节点
	while (l1 && l2) {
		if (l1.val < l2.val) {
			pre.next = l1;
			l1 = l1.next;
		} else {
			pre.next = l2;
			l2 = l2.next;
		}
		pre = pre.next;
	}

	pre.next = l1 === null ? l2 : l1;

	return prehead.next;
};

//2.递归写法，简化第一种
//但是时间很慢
var mergeTwoLists = function(l1, l2) {
	//判断输入
	if (!l1) {
		return l2;
	}
	if (!l2) {
		return l1;
	}
	if (l1.val < l2.val) {
		//调用自身
		l1.next = mergeTwoLists(l1.next, l2);
		//递归结束
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

//1.使用两个指针按情况前进，按顺序将节点加入新链表中
//写的很繁琐
var mergeTwoLists = function(l1, l2) {
	if (!l1) {
		return l2;
	} else if (!l2) {
		return l1;
	}
	//new l
	let newL = 0,
		res;
	if (l1.val < l2.val) {
		newL = new ListNode(l1.val);
		res = newL;
		l1 = l1.next;
	} else {
		newL = new ListNode(l2.val);
		res = newL;
		l2 = l2.next;
	}
	//add node
	while (l1 && l2) {
		if (l1.val < l2.val) {
			newL.next = new ListNode(l1.val);
			l1 = l1.next;
			newL = newL.next;
		} else {
			newL.next = new ListNode(l2.val);
			l2 = l2.next;
			newL = newL.next;
		}
	}
	//if l1 left
	if (l1) {
		newL.next = l1;
	}
	//if l2 left
	if (l2) {
		newL.next = l2;
	}
	return res;
};
