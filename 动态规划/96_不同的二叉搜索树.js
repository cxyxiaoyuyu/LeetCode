// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

// 示例:
// 输入: 3
// 输出: 5
// 解释:
// 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

// 动态规划
function numTrees(n) {
    let G = new Array(n+1).fill(0)
    G[0] = 1
    G[1] = 1
    for(let i=2;i<n+1;i++){
        for(let j=1;j<i+1;j++){
            G[i] += G[j-1] * G[i-j]
        }
    }
    return G[n]
}

// 卡塔兰数
function catalan(n){
    var array = new Array(n).fill(0)
    array[0] = 1
    var i = 1
    while(i<n){
        var k = 0, j = i-1
        while(k<i){
            console.log(k,j)
            array[i] += array[k]*array[j]
            k++
            j--
        }
        i++
    }
    return array[n]
}

