// 130 被围绕的区域 中等 2020-08-11

// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 示例:

// X X X X
// X O O X
// X X O X
// X O X X

// 运行你的函数后，矩阵变为：

// X X X X
// X X X X
// X X X X
// X O X X
// 解释:

// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 
// 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。
// 如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

// 1 广度优先搜索 看了题解后自己写的
var solve = function(board) {
    if(board.length === 0) return []
    let n = board.length, m = board[0].length
    const dfs = (x,y)=>{
        if((x>=0 && x<n) && (y>=0 && y<m) &&(board[x][y] === 'O')){
            board[x][y] = 'A'
            dfs(x+1,y)
            dfs(x-1,y)
            dfs(x,y+1)
            dfs(x,y-1)
        }else{
            return
        }
    }
    // 遍历左右边缘
    for(let i=0;i<n;i++){
        dfs(i,0)
        dfs(i,m-1)
    }
    // 遍历上下边缘
    for(let j=0;j<m;j++){
        dfs(0,j)
        dfs(n-1,j)
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X'
            }
            if(board[i][j] === 'A'){
                board[i][j] = 'O'
            }
        }
    }
    return board
}

// 2 广度优先搜索
var solve = function(board) {
    if(board.length === 0) return []
    
    let n = board.length, m = board[0].length
    let queue = []

    for(let i=0;i<n;i++){
        if(board[i][0] === 'O') queue.push([i,0])
        if(board[i][m-1] === 'O') queue.push([i,m-1])
    }
    for(let j=0;j<m;j++){
        if(board[0][j] === 'O') queue.push([0,j])
        if(board[n-1][j] === 'O') queue.push([n-1,j])
    }
    while(queue.length){
        let [mx,my] = queue.shift()
        board[mx][my] = 'A'         // 出队列后标记
        let four = [[mx+1,my],[mx-1,my],[mx,my+1],[mx,my-1]]
        four.forEach(([x,y]) => {
            if((x>=0 && x<n) && (y>=0 && y<m) &&(board[x][y] === 'O')){
                queue.push([x,y])
            }
        })
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X'
            }
            if(board[i][j] === 'A'){
                board[i][j] = 'O'
            }
        }
    }

    return board
};