// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// dfs
var subsets = function(nums) {
  const res = []
  const n = nums.length

  const dfs = (path,start) => {
      res.push(path.slice())
      for(let i=start;i<n;i++){
          path.push(nums[i])
          dfs(path,i+1)
          path.pop()
      }
  }

  dfs([],0)
  return res
};
