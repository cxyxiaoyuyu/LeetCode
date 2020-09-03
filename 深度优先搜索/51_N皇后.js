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
var solveNQueens = function (n) {
  let res = []
  const dfs = (array, row, col) => {
    if (row >= n) {
      arr = array.map(row => {
        return row.join('')
      })
      res.push(arr)
      return
    }
    if (col >= n) {
      return
    }
    // 判断  上方 左斜 右斜 是否有皇后了
    if (hasQueue(array, row, col)) {
      dfs(array, row, col + 1)
    } else {
      array[row][col] = 'Q'
      dfs(array, row + 1, 0)
      array[row][col] = '.'
      dfs(array, row, col + 1)
    }
  }
  let array = Array.from(Array(n), () => Array(n).fill('.'))
  dfs(array, 0, 0)
  return res
}

function hasQueue(array, row, col) {
  let n = array.length
  if (row === 0) return false

  // 判断正上方
  for (let i = row - 1; i >= 0; i--) {
    if (array[i][col] === 'Q') {
      return true
    }
  }

  // 判断左斜上方 
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (array[i][j] === 'Q') {
      return true
    }
  }

  // 判断右斜上方
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (array[i][j] === 'Q') {
      return true
    }
  }
  return false
}


// 优化代码 列的话可以用循环做
var solveNQueens = function (n) {
  let res = []
  let array = Array.from(Array(n), () => Array(n).fill('.'))

  const hasQueue = (row, col) => {
    let n = array.length
    if (row === 0) return false

    // 判断正上方
    for (let i = row - 1; i >= 0; i--) {
      if (array[i][col] === 'Q') {
        return true
      }
    }

    // 判断左斜上方 
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (array[i][j] === 'Q') {
        return true
      }
    }

    // 判断右斜上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (array[i][j] === 'Q') {
        return true
      }
    }
    return false
  }

  const dfs = (array, row) => {
    if (row >= n) {
      arr = array.map(row => {
        return row.join('')
      })
      res.push(arr)
      return
    }
    for (let col = 0; col < n; col++) {
      // 如果满足条件 上 左斜上 右斜上都没有皇后
      if (!hasQueue(row, col)) {
        array[row][col] = 'Q'
        dfs(array, row + 1)
        array[row][col] = '.'
      }
    }
  }

  dfs(array, 0)
  return res
}

// 再一次优化 因为每次都要调用hasQueue这个函数去判断  
// 可以用三个Set 分别记录已有N皇后的列 正对角线集  反对角线集
// 右下斜对角线上的坐标 行 列下标之差是相同的
// 左下斜对角线上的坐标 行 列下标之和是相同的
const solveNQueens = (n) => {
  const board = Array.from(Array(n),()=>Array(n).fill('.'))

  const cols = new Set()  // 列集，记录出现过皇后的列
  const diag1 = new Set() // 正对角线集  左下
  const diag2 = new Set() // 反对角线集  右下

  const res = []

  const helper = (row) => {
    if(row >= n){
      res.push( board.map( row => { return row.join('') }))
      return
    }

    for(let col=0;col<n;col++){
      if(!cols.has(col) && !diag1.has(row+col) && !diag2.has(row-col)){
        board[row][col] = 'Q'

        cols.add(col)
        diag1.add(row+col)
        diag2.add(row-col)

        helper(row+1)
        board[row][col] = '.'
        cols.delete(col)
        diag1.delete(row+col)
        diag2.delete(row-col)
      }
    }
  }

  helper(0)
  return res
}