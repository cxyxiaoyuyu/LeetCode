// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。

// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2：

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// 1 dfs
var combinationSum = function(candidates, target) {
  let res = []
  let n = candidates.length
  const dfs = (path,index) => {
     if(sum(path) === target){     // 当sum===target 符合条件
         res.push(path.slice())
         return
     }else if(sum(path) > target){  // 当sum > target 时 不能再继续了，要回溯
         return
     }

     for(let i=index;i<n;i++){
        path.push(candidates[i])
        dfs(path,i)
        path.pop() 
     }
  }

  dfs([],0)

  return res
};

function sum(arr){
    return arr.reduce((pre,cur)=>{
        return pre+cur   
    },0)
}

// 优化代码  sum作为参数传进去
var combinationSum = function(candidates, target) {
  let res = []
  let n = candidates.length
  const dfs = (path,index,sum) => {
     if(sum === target){
         res.push(path.slice())
         return
     }else if(sum > target){
         return
     }

     for(let i=index;i<n;i++){
        path.push(candidates[i])
        sum += candidates[i]
        dfs(path,i,sum)
        path.pop() 
        sum -= candidates[i]
     }
  }

  dfs([],0,0)

  return res
}