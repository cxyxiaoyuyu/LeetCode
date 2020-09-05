// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 说明：
// 给定 n 的范围是 [1, 9]。
// 给定 k 的范围是[1,  n!]。
// 示例 1:

// 输入: n = 3, k = 3
// 输出: "213"
// 示例 2:

// 输入: n = 4, k = 9
// 输出: "2314"

// 1 dfs  4052ms 也是废了
var getPermutation = function(n, k) {
  let count = 0
  let used = new Set()
  let res = ''
  const dfs = (num,str)=>{
      if(num === n ){
          if(count ++  === k - 1)
          return res = str
      }
      for(let i=1;i<n+1;i++){
          if(!used.has(i)){
              used.add(i)
              dfs(num+1,str+i)
              used.delete(i)
              if(res){
                  return
              }
          }                
      }
  }
  dfs(0,'')
  return res
}
