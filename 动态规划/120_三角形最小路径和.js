// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

// 例如，给定三角形：

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）

function minimumTotal(triangle){
    let n = triangle.length
    let f = new Array(n)
    for(let i=0;i<n;i++){
        f[i] = []
    }
    f[0][0] = triangle[0][0]
    
    for(let i=1;i<n;i++){
        f[i][0] = f[i-1][0] + triangle[i][0]
        for(let j=1;j<i;j++){
            f[i][j] = Math.min(f[i-1][j-1],f[i-1][j]) + triangle[i][j]
        }
        f[i][i] = f[i-1][i-1] + triangle[i][i]
    }
    return Math.min(...f[n-1])
}

// 优化代码
const minimumTotal = (triangle) => {
    const dp = new Array(triangle[triangle.length - 1].length);
    // base case 是最后一行
    for (let i = 0; i < dp.length; i++) {
      dp[i] = triangle[triangle.length - 1][i];
    }
    // 从倒数第二列开始迭代
    for (let i = dp.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
      }
    }
    return dp[0];
}
