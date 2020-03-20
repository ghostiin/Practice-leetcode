/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {};
// @lc code=end

//使用一个map对象
//将字符串sort后的值作为key
//遍历：1.key不存在则新建然后add 2.存在直接add
//不考虑答案输出顺序
var groupAnagrams = function(strs) {
	if (strs.length === 0) return [];
	const m = {};
	for (e of strs) {
		const t = [ ...e ].sort();
		if (t in m) {
			m[t].push(e);
		} else {
			m[t] = [ e ];
		}
	}
	return Object.values(m);
};
