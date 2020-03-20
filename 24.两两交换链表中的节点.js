/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {};

// @lc code=end

//3/5
var swapPairs = function(head) {
	//four pointer
	//prev,first,secod,next
	const dummy = new ListNode(-1);
	dummy.next = head;
	let prev = dummy;

	while (head && head.next) {
		//set and renew
		const first = head;
		const second = head.next;

		//swap
		first.next = second.next;
		second.next = first;
		prev.next = second;

		//renew pre && head into next 2-group
		prev = first;
		head = first.next;
	}

	//return LN
	return dummy.next;
};
var threeSum = function(nums) {
	const res = [];
	nums.sort((a, b) => a - b);
	for (let k = 0; nums[k] <= 0; k++) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] === nums[k - 1]) continue;
		//set && renew
		let i = k + 1;
		let j = nums.length - 1;
		while (i < j) {
			const s = nums[i] + nums[j] + nums[k];
			//s>0
			if (s > 0) {
				j--;
				while (nums[j] === nums[j + 1] && i < j) {
					j--;
				}
			}
			//s<0
			if (s < 0) {
				i++;
				while (nums[i] === nums[i - 1] && i < j) {
					i++;
				}
			}
			//s=0
			if (s === 0) {
				res.push([ nums[k], nums[i], nums[j] ]);
				j--;
				while (nums[j] === nums[j + 1] && i < j) {
					j--;
				}
				i++;
				while (nums[i] === nums[i - 1] && i < j) {
					i++;
				}
			}
		}
	}
	return res;
};
//2/5
//1.按正确顺序每两步重新链接链表即可
//需要多记录 first node 的prevnode来连接至交换后的头节点 secondnode
//当节点是头节点时，伪造一个node来作为firstnode的prevnode
//再在迭代时更新这个node就可以了
//重新连接第n个node的顺序
//firstnode= secondnode.next
//secondnode.next=firstnode
//prevnode.next=secondnode
//可以理解为 prev first second next 四指针
//https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/si-zhi-zhen-by-muyunyun/
// prev  first  second  next
//         1  ->  2  ->  3  ->  4 -> null
//               .
//               .
// 进行如下指针变换:
// prev -> second -> first -> next
//           2    ->   1   ->  3  ->  4 -> null
//               .
//               .
// 移动指针:
//                    prev   first  second  next
//           2    ->   1   ->  3  ->  4 -> null
//               .
//               .
// 重复上述操作

var swapPairs = function(head) {
	const dummynode = new ListNode(-1); //伪造假node作为head的prevnode
	dummynode.next = head;

	let prevNode = dummynode;
	while (head && head.next !== null) {
		const firstNode = head;
		const secondNode = head.next;

		firstNode.next = secondNode.next;
		secondNode.next = firstNode;
		prevNode.next = secondNode;

		prevNode = firstNode;
		head = firstNode.next;
	}

	return dummynode.next; // 返回第一次交换后的头节点也就是最开始的secondnode
};

//2.递归
//分解问题： 只剩下第一个第二个节点没有反转+ 后面已经反转好的节点
// 此时操作： 第一个节点连接后面已经反转好的节点，第二个节点连接第一个节点
//写递归需要注意：
//1.终止条件 2.调用自身 3.返回值

var swapPairs = function(head) {
	// 1. 终止条件：当前没有节点或者只有一个节点，肯定就不需要交换了
	if (!head || head.next === null) {
		return head;
	}
	// 2. 调用单元
	// 需要交换的两个节点是 head 和 head.next
	const firstNode = head;
	const secondNode = head.next;
	// firstNode 连接后面交换完成的子链表
	firstNode.next = swapPairs(secondNode.next);
	// secondNode 连接 firstNode
	secondNode.next = firstNode;
	// 3. 返回值：返回交换完成的子链表
	// secondNode 变成了头结点
	return secondNode;
};
