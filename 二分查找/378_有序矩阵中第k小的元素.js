// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

// 示例：

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// 返回 13。

// 1. 暴力解法 二维转一维
var kthSmallest = function(matrix, k) {
    let arr = matrix.flat()
    arr.sort((a,b)=>a-b)
    return arr[k-1]
}

// 2. 二分查找
function kthSmallest(matrix,k){
    let n = matrix.length

    function check(mid){
        let i = n - 1
        let j = 0
        let num = 0
        while(i >= 0 && j < n){
            if(matrix[i][j] <= mid){
                num += i + 1
                j += 1
            }else{
                i -= 1
            }
        }
        return num >= k
    }
    
    let left = matrix[0][0]
    let right = matrix[n-1][n-1]
    while(left < right){
        mid = (left + right) >> 1
        if(check(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left
}
