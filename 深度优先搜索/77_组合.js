// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 1 dfs 
combine = (n,k)=>{
  let res = []
  const dfs = (path,index) => {
     if(path.length === k){
         res.push(path.slice())  
         return    
     }
      
     for(let i=index;i<n;i++){
         path.push(i)
         dfs(path,i+1)
         path.pop() 
     }
  }
  dfs([],0)
  return res
}

// 2 递归
// 数学方法  Cnk = Cn-1k-1 + Cn-1k
const combine = (n, k) => {
  const res = [];
  const helper = (n, k, path) => {
    if (n < k || k == 0) { // k不能大于n，或，找齐了k个，就结束递归
      if (k == 0) {
        res.push(path.slice());
      }
      return;
    }
    helper(n - 1, k - 1, path.concat(n)); // 选n，C(n-1, k-1)
    helper(n - 1, k, path); // 不选n，C(n-1,k)
  };

  helper(n, k, []);
  return res;
};

// 3 动态规划
combine = (n,k)=>{
  let dp = Array.from(Array(n+1),()=>Array(k+1).fill(null))
  dp[1][1] = [[1]]
  for(let i=2;i<n+1;i++){
      for(let j=1;j<k+1;j++){
          let left = dp[i-1][j-1]     // 包含i的
          let right = dp[i-1][j]      // 不包含i的
          
          if(left === null){
              if(j === 1){
                  left = [[i]]
              }
          }else{
              left = left.map(arr=> { 
                  let temp = arr.slice()
                  temp.push(i)
                  return temp
              })
          }
          if(left === null && right === null){
              dp[i][j] = null
          }else{
              dp[i][j] = right ? left.slice().concat(right): left.slice()
          }
      }
  }
  return dp[n][k]
}