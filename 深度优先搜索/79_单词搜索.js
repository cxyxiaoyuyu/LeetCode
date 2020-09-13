// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用
// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false

// dfs 深度优先搜索我写出来了 主要是判断这个位置是否使用过 遇到了问题
// 通过新建一个数组来记录  已经dfs寻找下一个 说明这个位置找完了 标记为true 
// 当下一个一直找不到时 那这个位置就放弃了 标记为false 妙啊
var exist = function(board, word) {
  let arrow = [[-1,0],[1,0],[0,-1],[0,1]]
  let n = board.length
  let m = board[0].length
  let len = word.length
  let used = {}

  let visited = Array.from(Array(n),()=>Array(m).fill(false))

  const dfs = (x,y,index) => {
      visited[x][y] = true

      if(index >= len) return true
      for(let i=0;i<4;i++){
          let new_x = x + arrow[i][0]
          let new_y = y + arrow[i][1]
          if(new_x>=0 && new_x<n && new_y<m && new_y>=0 
             && !visited[new_x][new_y]){
              if(board[new_x][new_y] === word[index]){
                  if(dfs(new_x,new_y,index+1)) return true
              }
          }
      }

      visited[x][y] = false
      return false
  }

  for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
          used = {}      // 将used置空
          if(board[i][j] === word[0]){
              if(dfs(i,j,1)) return true
          }
      }
  }
  return false
};