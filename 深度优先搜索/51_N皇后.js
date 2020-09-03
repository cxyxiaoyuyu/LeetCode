// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 输入：4
// 输出：[
//  [".Q..",   // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",   // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// 解释: 4 皇后问题存在两个不同的解法。

// dfs  回溯
var solveNQueens = function(n) {
  let res = []
  const dfs = (array,row,col)=>{
      if(row >= n){
          arr = array.map(row=>{
             return row.join('')
          })
         res.push(arr)
          return
      }
      if(col >= n){
          return
      }
      // 判断  上方 左斜 右斜 是否有皇后了
      if(hasQueue(array,row,col)){
          dfs(array,row,col+1)
      }else{
          array[row][col] = 'Q'
          dfs(array,row+1,0)
          array[row][col] = '.'
          dfs(array,row,col+1)
      }
  }
  let array = Array.from(Array(n),()=>Array(n).fill('.'))
  dfs(array,0,0)
  return res
}

function hasQueue(array,row,col){
  let n = array.length
  if(row === 0) return false

  // 判断正上方
  for(let i=row-1;i>=0;i--){
      if(array[i][col] === 'Q'){
          return true
      }
  }

  // 判断左斜上方 
  for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
      if(array[i][j] === 'Q'){
          return true
      }
  }

  // 判断右斜上方
  for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
      if(array[i][j] === 'Q'){
          return true
      }
  }
  return false
}
