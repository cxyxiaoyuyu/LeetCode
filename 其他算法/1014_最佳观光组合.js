// 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。

// 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。

// 返回一对观光景点能取得的最高分。

// 示例：

// 输入：[8,1,5,2,6]
// 输出：11
// 解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11


// 枚举  
var maxScoreSightseeingPair = function(A) {
    let n = A.length
    let leftMax = A[0]
    let res = 0
    for(let j=1;j<n;j++){
        res = Math.max(res,leftMax + A[j] - j )
        leftMax = Math.max(leftMax,A[j]+j)
    }
    return res
};