/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
    L   C   I   R
    E T O E S I I G
    E   D   H   N
 */



// 根据余数判断当前方向
var convert = function(s,numRows){
    if(numRows === 1) return s
    var i = 0
    var row = 0
    var array = new Array(numRows).fill('')
    while(i<s.length){
        array[row] += s[i]
        i++
        if(i % ( 2*numRows -2 ) < numRows && i % ( 2*numRows -2 ) >0){
            row += 1
        }else{
           row -= 1
        }
    }
    return array.join('')
}

/**
 * 以 ("0123456789", 4) 为例。
 * 一个 V 字型为一个循环, 一个循环为 n = (2 * 4 - 2) = 6 的倍数。
 * 对于索引 i，可获得 x = i % 6。
 * 当 x < 4 时，x 正好对应行号
 * 当 x >= 4 时，n - x 也正好对应行号
 */
var convert = function(s,numRows){
    if(numRows === 1) return s
    var i = 0
    var row = 0
    var array = new Array(numRows).fill('')
    while(i<s.length){
        let n = 2 * numRows - 2
        let row = i % n
        if(row >= numRows){
          row = n - row
        }
        array[row] += s[i]
        i++
    }
    return array.join('')
}
