// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

// 说明：

// 所有数字都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 示例 2:

// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]

// dfs
var combinationSum3 = function(k, n) {
  let res = []

  const dfs = (path,start,sum)=>{
      if(path.length === k){
          if(sum === n){
              res.push(path.slice())
          }
          return
      }

      for(let i=start;i<9;i++){
          path.push(i+1)
          dfs(path,i+1,sum+i+1)
          path.pop()
      }
  }

  dfs([],0,0)
  return res
};