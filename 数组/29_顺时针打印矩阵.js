// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

// 类似于蛇形数组
var spiralOrder = function(matrix) {
    var arrow = [[0,1],[1,0],[0,-1],[-1,0]]
    var n = matrix.length 
    var n1 = matrix[0].length
    var i = 0,j = 0
    var res = []
    var flag = 0
    while(res.length < n*n1){
        res.push(matrix[i][j])
        matrix[i][j] = null
        var nextI = i + arrow[flag%4][0]
        var nextJ = j + arrow[flag%4][1]
        if(nextI > n-1 || nextJ > n1-1 || nextI < 0 || nextJ < 0 || matrix[nextI][nextJ] === null){
            flag ++ 
        }
        i += arrow[flag%4][0]
        j += arrow[flag%4][1]
    }
    return res
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))