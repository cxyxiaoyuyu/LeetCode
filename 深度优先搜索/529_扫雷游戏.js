// 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。

// 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：

// 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
// 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
// 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
// 如果在此次点击中，若无更多方块可被揭露，则返回面板。
//  

// 示例 1：
// 输入: 
// [['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'M', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E']]

// Click : [3,0]

// 输出: 
// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]

// 1 dfs 
const updateBoard = (board, click) => {
    const m = board.length;
    const n = board[0].length;
    const dx = [1, 1, 1, -1, -1, -1, 0, 0];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];
    const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n; // 辅助函数
  
    const update = (x, y) => {
      if (!inBound(x, y) || board[x][y] != 'E') return; // 不在界内或不是E，直接返回
      let count = 0;
      for (let i = 0; i < 8; i++) { // 统计周围雷的个数
        const nX = x + dx[i];
        const nY = y + dy[i];
        if (inBound(nX, nY) && board[nX][nY] == 'M') {
          count++;
        }
      }
      if (count == 0) { // 如果周围没有雷，标记B，递归周围的点
        board[x][y] = 'B';
        for (let i = 0; i < 8; i++) {
          update(x + dx[i], y + dy[i]);
        }
      } else { 
        board[x][y] = count + '';
      }
    };
  
    const [cX, cY] = click;
    if (board[cX][cY] == 'M') { // 第一下就踩雷了
      board[cX][cY] = 'X';
    } else {
      update(cX, cY); // 开启dfs
    }
    return board;
  };


// 2 bfs
const updateBoard = (board,click) => {
    let [cx,cy] = click
    if (board[cx][cy] == 'M') { // 第一下就踩雷了
      board[cx][cy] = 'X';
      return board
    } 

    const m = board.length
    const n = board[0].length
    const dx = [1, 1, 1, -1, -1, -1, 0, 0]
    const dy = [1, 0, -1, 0, 1, -1, 1, -1]
    const inBound = (x,y) => x>=0 && x<m && y>=0 && y<n
    let queue = [[cx,cy]]

    while(queue.length){
        let [x,y] = queue.shift()
        let count = 0
        for(let i=0;i<8;i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(inBound(nx,ny) && board[nx][ny] === 'M'){
                count ++
            }
        }
        if(count === 0 ){
            board[x][y] = 'B'
            for(let i=0;i<8;i++){
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(inBound(nx,ny) && board[nx][ny] === 'E'){
                    board[nX][nY] = 'B'     // 最重要的一句  放入队列的时候也要标记  否则会重复放入
                    queue.push([nx,ny])
                }
            }

        }else{
            board[x][y] = count + ''
        }
    }

    return board
}











