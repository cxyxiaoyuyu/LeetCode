// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

// 示例 1：
// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"

// 示例 2：
// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

// 1 遍历 自己写的
var countSubstrings = function(s) {
    let n = s.length
    let i = 0
    let res = 0
    while(i<n){
        res ++
        let j = i + 1
        while(j<n && s[i] === s[j]){
            res ++
            j ++
        }
        let l = i-1 , r = j
        while(l>=0 && r<n && s[l] === s[r]){
            res ++ 
            l --
            r ++ 
        }
        i++
    }
    return res
}