// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。

// 说明：

// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 所求解集为:
// [
//   [1,2,2],
//   [5]
// ]

// 1 dfs 
// 用used 哈希表判断前一个是否在使用 
// 如果在使用的话 不会重复
// 如果第i-1个没在使用 说明第i-1个已经遍历结束 跳过第i个
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let sum = 0
  let n = candidates.length
  let res = []
  let used = {}
  
  candidates.sort((a,b)=>a-b)  // 升序排序

  const dfs = (path,start) => {
      if(sum >= target){
          if(sum === target){
              res.push(path.slice())
          }
          return 
      }

      for(let i=start;i<n;i++){
          if( i>0 && candidates[i] === candidates[i-1] && !used[i-1]){
              continue
          }
          path.push(candidates[i])
          sum += candidates[i]
          used[i] = true
          dfs(path,i+1)
          path.pop()
          used[i] = false
          sum -= candidates[i]
      }
  }
  dfs([],0)
  return res
}


// 2 优化代码
// 1) 默认就是升序排序
// 2) sum的优化
// 3) 剪枝条件的优化 如果第i个与第i-1的值相同的话 并且第i-1个是 大于等于 start 的 说明第i-1 个已经遍历过 所以跳过第i个
var combinationSum2 = function(candidates, target) {
  let res = []
  candidates.sort()
  let n = candidates.length

  const dfs = (path,start,sum)=>{
      if(sum >= target){
          if(sum === target){
              res.push(path.slice())
          }
          return
      }

      for(let i=start;i<n;i++){
          // 这里的剪枝条件也可以换为 i !== start  再画图思考一遍吧 挺绕的
          if(candidates[i] === candidates[i-1] && i-1 >= start){   // 说明第i-1个已经遍历过

              continue 
          }
          path.push(candidates[i])
          dfs(path,i+1,sum+candidates[i])
          path.pop()
      }
  }

  dfs([],0,0)
  return res
};
