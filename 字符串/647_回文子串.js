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

// 1 中心拓展 自己写的
var countSubstrings = function(s) {
    let n = s.length
    let i = 0
    let res = 0
    while(i<n){
        res ++
        let j = i + 1
        while(j<n && s[i] === s[j]){   // i 为回文中心起始位置 j为回文中心右起始位置
            res ++
            j ++
        }
        let l = i-1 , r = j
        while(l>=0 && r<n && s[l] === s[r]){   // 依次像左右两边扩展
            res ++ 
            l --
            r ++ 
        }
        i++
    }
    return res
}

// 2 动态规划  这个遍历顺序有点意思啊
const countSubstrings = (s) => {
    let count = 0;
    const len = s.length;
  
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
      dp[i] = new Array(len).fill(false);
    }
  
    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (i == j) { // 单个字符
          dp[i][j] = true;
          count++;
        } else if (j - i == 1 && s[i] == s[j]) { // 两个相同的字符 
          dp[i][j] = true;
          count++;
        } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) { // 多于两个字符
          dp[i][j] = true;
          count++;
        }
      }
    }
    return count;
  };
  
// 代码优化
const countSubstrings = (s) => {
    let count = 0;
    const len = s.length;
  
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
      dp[i] = new Array(len).fill(false);
    }
  
    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (i == j) { 
          dp[i][j] = true;
        } else if (s[i] == s[j]) {
          dp[i][j] = j - i == 1 || dp[i + 1][j - 1];
        }
        if (dp[i][j]) count++;
      }
    }
    return count;
};