// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 你可以认为 s 和 t 中仅包含英文小写字母。
// 字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1:
// s = "abc", t = "ahbgdc"
// 返回 true.

// 示例 2:
// s = "axc", t = "ahbgdc"
// 返回 false.

// 1 正则
var isSubsequence = function(s, t) {
    let reg = new RegExp(s.split('').join('.*'))
    // let reg = new RegExp(Array.from(s).join('.*'))
    let res = t.match(reg)
    return !!res
}

// 2 动态规划  自己写的 嘿嘿
var isSubsequence = function(s, t) {
    if(s.length === 0) return true
    let sn = s.length
    let tn = t.length
    let dp = Array.from(Array(sn+1),()=>Array(tn+1).fill(false))
    dp[0][0] = true
    dp[0].fill(true)
    for(let i=1;i<sn+1;i++){
        for(let j=i;j<tn+1;j++){
            if(dp[i][j-1] || (dp[i-1][j-1] && s[i-1]===t[j-1])){
                dp[i][j] = true
            }
        }
    }
    return dp[sn][tn]
}