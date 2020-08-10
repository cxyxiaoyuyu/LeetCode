// 696. 计数二进制子串  2020-08-10

// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。

// 示例 1 :
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
// 请注意，一些重复出现的子串要计算它们出现的次数。
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// 思路: 按字符分组 

// 1 看题解后自己写的
var countBinarySubstrings = function(s) {
    let n = s.length
    let counts = []
    let count = 1
    let c = s[0]
    let p = 1
    while(p<n){
        if(s[p] === c){
            count ++ 
        }else{
            counts.push(count)
            c = s[p]
            count = 1
        }
        p++
    }
    counts.push(count)

    let res = 0
    for(let i=1;i<counts.length;i++){
        res += Math.min(counts[i],counts[i-1])
    }
    return res
};

// 2 官方题解
var countBinarySubstrings = function(s) {
    const counts = [];
    let ptr = 0, n = s.length;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};

// 3 优化空间 以last记录上一个不同数字的数量
var countBinarySubstrings = function(s) {
    let ptr = 0, n = s.length;
    let ans = 0
    let last = 0
    while (ptr < n) {
        let c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        ans += Math.min(last,count)
        last = count
    }
    return ans;
};
