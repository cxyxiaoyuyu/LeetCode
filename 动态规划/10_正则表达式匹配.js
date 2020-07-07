// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 示例 1:
// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。

// 动态规划
const isMatch = (s, p) => {
    if (s == null || p == null) return false
    let len1 = s.length, len2 = p.length
    let dp = new Array(len1 + 1)
    for (let i = 0; i < dp.length; i++) 
      dp[i] = new Array(len2 + 1).fill(false) // 将项默认为false
  
    dp[0][0] = true
    for (let j = 1; j < len2 + 1; j++) {
      if (p[j - 1] == '*')
        dp[0][j] = dp[0][j - 2]
    }
    for (let i = 1; i < len1 + 1; i++) {
      for (let j = 1; j < len2 + 1; j++) {
        if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
          dp[i][j] = dp[i - 1][j - 1] 
        } else if (p[j - 1] == "*") { 
          if (s[i - 1] == p[j - 2] || p[j - 2] == ".")
            dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
          else
            dp[i][j] = dp[i][j - 2] 
        }
      }
    }
    return dp[len1][len2] // len1长度的s串 是否匹配 len2长度的p串
  }

// 直接用正则
var isMatch = function(s, p) {
  return new RegExp('^'+p+'$').test(s)
}