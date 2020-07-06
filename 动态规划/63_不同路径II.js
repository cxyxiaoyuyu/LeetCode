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
    let dp = new Array(m+1)
    for(let i=0;i<m+1;i++){
        if(i===0){
            dp[i] = new Array(n+1).fill(0)
        }else{
            dp[i] = [0]
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i===0 && j===0){
                dp[1][1] = 1
                continue
            }
            if(obstacleGrid[i][j] === 1){
                dp[i+1][j+1] = 0
            }else{
                dp[i+1][j+1] = dp[i+1][j] + dp[i][j+1]
            }
        }
    }
    return dp[m][n]
}

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