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