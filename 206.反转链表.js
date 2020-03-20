/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {};
// @lc code=end

//3/5
var reverseList = function(head) {
	let curr = head;
	let prev = null;

	while (curr) {
		const e = curr.next;
		curr.next = prev;
		prev = curr;
		curr = e;
	}
	return prev;
};

var reverseList = function(head) {
	if (!head || head.next === null) return head;
	const t = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return t;
};

//2/5

//2.递归
//反转可以表示为 head.next.next=head
//太巧妙了 可以通过画出从最底层开始向上执行的情况就能想明白了
var reverseList = function(head) {
	//当元素不存在/为最后一个/唯一个元素时，直接返回该元素
	if (!head || head.next === null) {
		return head;
	}
	//否则取 reverseList(head.next) 会一直嵌套递归到返回最后一个元素
	const temp = reverseList(head.next);
	//反转 head.next.next = head
	head.next.next = head;
	//打断原链接 head.next=null
	head.next = null;
	//返回head.next
	return temp;
};

//1.遍历原链表，并且复制元素加入新链表，新链表为向prev链接
//使用curr和prev两个变量来保存，也是双指针

// Your runtime beats 6.6 % of javascript submissions
// Your memory usage beats 8.8 % of javascript submissions (36 MB)

var reverseList = function(head) {
	//当只有头节点时，翻转就等于原节点
	if (!head || head.next === null) return head;
	//遍历原链表
	let prev = null;
	let curr = head;
	while (curr) {
		//新建一个listnode存储curr
		const e = new ListNode(curr.val);
		//将e链接到原链表curr的前一个元素prev
		e.next = prev;
		//更新prev和curr
		prev = e;
		curr = curr.next;
	}
	return prev; //最后一次while使得curr=null，prev=curr
};
