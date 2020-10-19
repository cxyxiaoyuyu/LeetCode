// 有一个容量为 N 的背包，要用这个背包装下物品的价值最大，这些物品有两个属性：体积 w 和价值 v。

// 定义一个二维数组 dp 存储最大价值，其中 dp[i][j] 表示前 i 件物品体积不超过 j 的情况下能达到的最大价值。
// 设第 i 件物品体积为 w，价值为 v，根据第 i 件物品是否添加到背包中，可以分两种情况讨论：

// 第 i 件物品没添加到背包，总体积不超过 j 的前 i 件物品的最大价值就是总体积不超过 j 的前 i-1 件物品的最大价值，dp[i][j] = dp[i-1][j]。
// 第 i 件物品添加到背包中，dp[i][j] = dp[i-1][j-w] + v。

// 因此，0-1 背包的状态转移方程为：dp[i][j] = max(dp[i-1][j],dp[i-1][j-w[i]] + v[i])

// W 为背包总体积
// N 为物品数量
// weights 数组存储 N 个物品的重量
// values 数组存储 N 个物品的价值
const knapsact = (W,N,weights,values) => {
  const dp = Array.from(Array(N+1),()=>Array(W+1).fill(0))
  for(let i=1;i<=N;i++){
    const w = weights[i], v = values[i]
    for(let j=1;j<=W;j++){
      dp[i][j] = dp[i-1][j]

      if(j >= w){
        dp[i][j] = Math.max(dp[i][j],dp[i-1][j-w] + v)
      }
    }
  }
  return dp[N][W]
}
let N = 3
let W = 5
let weights = [1,2,5]
let values = [1,6,18]
console.log(knapsact(W,N,weights,values))   // 18

// 优化成二维数据
// 观察状态转移方程可以知道，前 i 件物品的状态仅与前 i-1 件物品的状态有关，因此可以将 dp 定义为一维数组，
// 其中 dp[j] 既可以表示 dp[i-1][j] 也可以表示 dp[i][j] => dp[j] = max(dp[j],dp[j-w[i]] + v[i])
const knapsact2 = (W,N,weights,values) => {
  const dp = new Array(W+1).fill(0)
  for(let i=1;i<=N;i++){
    const w = weights[i], v = values[i]
    for(let j=w;j>=1;j--){
      if(j >= w){
        dp[j] = Math.max(dp[j],dp[j-w]+v)
      }
    }
  }
  return dp[W]
}
console.log(knapsact2(W,N,weights,values))   // 18
