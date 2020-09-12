// 给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。

// 示例:

// nums = [1, 2, 3]
// target = 4

// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// 请注意，顺序不同的序列被视作不同的组合。

// 因此输出为 7。

// 1 dfs 列出所有选择 但是会超时
var combinationSum4 = function(nums, target) {
  let res = 0
  const dfs = (path,sum)=>{
      if(sum >= target){
          if(sum === target){
              res ++
          }
          return 
      }
      for(let i=0;i<nums.length;i++){
          path.push(nums[i])
          dfs(path,sum+nums[i])
          path.pop()
      }
  }
  dfs([],0)
  return res
};

// 2 动态规划 
var combinationSum4 = function(nums, target) {
  let dp = new Array(target+1).fill(0)
  dp[0] = 1

  for(let i=0;i<=target;i++){
      for(let num of nums){
          if(i>=num){
              dp[i] += dp[i-num]
          }
      }
  }
  console.log(dp)
  return dp[target]
};

// [2,3,5] 8
// dp[8] = (2)dp[8-2] + (3)dp[8-3] + (5)dp[8-5]  => 2 + 3 + 1 = 6
// dp[7] = (2)dp[7-2] + (3)dp[7-3] + (5)dp[7-5]  => 3 + 1 + 1 = 5
// dp[6] = (2)dp[4] + (3)dp[3] + (5)dp[1]        => 1 + 1 + 0 = 2
// dp[5] = (2)dp[5-2] + (3)dp[2] + (5)dp[0]      => 1 + 1 + 1 => 3
// dp[4] = (2)dp[2] + (3)dp[1] + (5)xxx  => 1
// dp[3] = (2)dp[1] + (3)dp[0] + (5)xxx  => 1
// dp[2] = (2)dp[0]   => 1
// dp[1] = 0
// dp[0] = 1