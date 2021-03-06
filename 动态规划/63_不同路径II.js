// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 网格中的障碍物和空位置分别用 1 和 0 来表示。

// 说明：m 和 n 的值均不超过 100。

// 示例 1:
// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右

// 动态规划  自己写的
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if(obstacleGrid[0][0] === 1) return 0
    let dp = Array.from(Array(m+1),()=>Array(n+1).fill(0))
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(i===1 && j===1){
                dp[1][1] = 1
                continue
            }
            if(obstacleGrid[i-1][j-1] === 1){
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i][j-1] + dp[i-1][j]
            }
        }
    }
    return dp[m][n]
}

// 复习 2020-07-23
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if(obstacleGrid[0][0] === 1) return 0

    let dp = Array.from(Array(m),()=>Array(n).fill(0))
    dp[0][0] = 1
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0
            }else{
                if(i===0 && j>0){  // 第一行
                    dp[i][j] = dp[i][j-1]
                }else if(i>0 && j===0){  // 第一列
                    dp[i][j] = dp[i-1][j]
                }else if(i>0 && j>0){
                    dp[i][j] = dp[i][j-1] + dp[i-1][j]
                }
            }
        }
    }
    return dp[m-1][n-1]
};


// 动态规划 大神写的 转成一维数组
var uniquePathsWithObstacles = function(obstacleGrid) {
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var result = Array(m).fill(0);
    result[0] = 1;
    for(var i = 0;i < n;i++){
        for(var j = 0;j < m;j++){
            if(obstacleGrid[i][j] == 1){
                result[j] = 0;
            }else if(j > 0){
                result[j] += result[j-1];
            }
        }
    }
    return result[m-1];
};