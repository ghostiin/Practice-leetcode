/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {};
// @lc code=end

//更多js解法。。。https://leetcode-cn.com/problems/valid-anagram/solution/74-you-xiao-de-zi-mu-yi-wei-ci-by-joeyzhouyicheng/

//1.使用hash map 统计两个单词的频次，频次相同则可
//可以直接用数组作为表
//可以只使用一个表，用s统计次数，用t减去次数，次数=0则相同
var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	const count = new Array(26).fill(0, 0, 27);
	for (let ch of s) {
		count[ch.charCodeAt() - 97]++;
	}
	for (let ch of t) {
		count[ch.charCodeAt() - 97]--;
		console.log(count);
		if (count[ch.charCodeAt() - 97] < 0) return false;
	}
	// for (let e in count) {
	// 	if (count[e]) return false;
	// }
	return true;
};
//2.暴力 将字符串sort后在比较
var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	const a = s.split('').sort();
	const b = t.split('').sort();
	if (a.toString() === b.toString()) {
		return true;
	} else {
		return false;
	}
};
