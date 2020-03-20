/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {};
// @lc code=end

//3/5
var reverseKGroup = function(head, k) {
	let arr = [],
		res = [],
		index = 0,
		last = 0;
	//change into arr
	while (head) {
		arr.unshift(head);
		head = head.next;
		if (++index === k) {
			res = res.concat(arr);
			arr = [];
			index = 0;
			last = head;
		}
	}
	//back to ll
	res.forEach((e, i) => {
		e.next = res[i + 1];
	});
	//link the last part if exits
	res[res.length - 1].next = last;
	//return LN
	return res[0];
};
var reverseKGroup = function(head, k) {
	//four pointer + reverseList
	const dummy = new ListNode(-1);
	dummy.next = head;
	let pre = dummy;
	let end = dummy;
	//into k-group
	while (head) {
		//find the k-group's end
		let len = k;
		while (len-- && end !== null) {
			end = end.next;
		}
		if (end === null) break;
		//cut k-group's out for reverse
		const start = head;
		const next = end.next;
		end.next = null;
		//reverse
		pre.next = reverseList(start);
		//renew and relink
		pre = end = start; //now start is the end
		start.next = next; //
		head = next;
	}
	//return LN
	return dummy.next;
};

function reverseList(head) {
	if (!head || head.next === null) return head;
	const temp = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return temp;
}

//将每部分节点翻转后存入另一个数组，最后从这个数组中取出重新链接成新链表
//使用unshift 实现反转存放的目的
//concat 将各翻转部分连接起来
var reverseKGroup = function(head, k) {
	if (k < 2) return head;
	let arr = [],
		res = [],
		index = 0,
		last = 0;
	while (head) {
		arr.unshift(head);
		head = head.next;
		if (++index === k) {
			res = res.concat(arr);
			arr = [];
			index = 0;
			last = head; //记录最后一部分的开始
		}
	}
	res.forEach((e, i, a) => {
		e.next = a[++i];
	});
	res[res.length - 1].next = last; //最后一部分不需要改动，直接从记录位置链接上去即可
	return res[0];
};

//1.反转链表+两两交换两题的融合 递归+四指针 pre start end next
//需要一个dummynode->prev
//翻转列表函数
//endnode
var reverseKGroup = function(head, k) {
	//确定每次翻转的区间
	//传送至reverseList函数中
	//当end===null时说明最后一部分不足k个，则不需要反转
	const dummy = new ListNode(-1);
	dummy.next = head;

	let pre = dummy;
	let end = dummy;

	while (true) {
		for (let i = 0; i < k && end !== null; i++) {
			end = end.next;
		}
		if (end === null) break;
		const start = pre.next;
		const next = end.next;
		end.next = null;
		pre.next = reverseList(start);
		start.next = next; // 重新连接已翻转部分和未反转部分
		pre = start; //翻转一次后的pre为上一次的start start此时已在翻转过的最后
		end = pre;
	}

	return dummy.next;
};

function reverseList(head) {
	if (!head || head.next === null) return head;
	const temp = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return temp;
}
