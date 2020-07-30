// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

// 示例 1:
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。

// 示例 2:
// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

// 动态规划 左右两边都可以拆  其实左右只要拆分一个就好了

// 当 i≥2 时，假设对正整数 ii 拆分出的第一个正整数是 jj（1 <= j <i），则有以下两种方案：
// 将 i拆分成 j和 i-j 的和，且 i-j 不再拆分成多个正整数，此时的乘积是 j×(i−j)
// 将 i拆分成 j和 i-j 的和，且 i-j 继续拆分成多个正整数，此时的乘积是 j×dp[i−j]

// 因为i-j 肯定是大于j 的 所以考虑拆分i-j

var integerBreak = function(n) {
    let dp = new Array(n+1).fill(0)
    for(let i=2;i<=n;i++){
        for(let j=1;j<=(i/2);j++){
            // let maxA = Math.max(dp[j],j)
            let maxIJ = Math.max(dp[i-j],i-j)
            dp[i] = Math.max(dp[i],j*maxIJ)
        }
    }
    return dp[n]
}