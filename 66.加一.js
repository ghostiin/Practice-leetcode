/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    
};
// @lc code=end

//3/5
var plusOne = function (digits) {
    for(let i= digits.length-1;i>=0;i--){
        digits[i]+=1;
        digits[i]%=10;
        if(digits[i]!==0){
            return digits;
        }
    }
    digits = [1,...digits];
    return digits;
};
var plusOne = function (digits) {
    //convert into string and bigint 
    const t = BigInt(digits.join(""))+1n;
    //return digits[]
    return (t+"").split('');
};




//问题理解：
//难处理的是进位问题，如果最高位进位数组每一位都要移动
//两种情况：1.9 +1  2.除9以外的数字+1

//2.先组成string 转换为num计算后分解成数组
//对于比较大的数要用bigint
var plusOne = function (digits) {
    const num=BigInt(digits.join(''))+1n;
    digits=(""+num).split("");
    return digits;
};

//1.分类讨论枚举
//进位标志是执行加法后 %10!=0(因为只+1最多只能是10)
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        digits[i] %= 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits = [1, ...digits];
    return digits;
};
