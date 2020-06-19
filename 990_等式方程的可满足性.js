// 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
// 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 

// 示例 1：

// 输入：["a==b","b!=a"]
// 输出：false
// 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。


// 并查集
var equationsPossible = function(equations) {
    let roots = new Array(26).fill(-1)
    let n = equations.length
    for(let i=0;i<n;i++){
        if(equations[i][1] === '=' && equations[i][0] !== equations[i][3]){
            let left = equations[i][0].charCodeAt() - 97
            let right = equations[i][3].charCodeAt() - 97
            let leftRoot = findRoot(roots,left)
            let rightRoot = findRoot(roots,right)
            if(leftRoot === rightRoot) continue
            if(leftRoot < rightRoot){
               roots[left] = leftRoot
               roots[rightRoot] = leftRoot
            }else{
               roots[right] = rightRoot
               roots[leftRoot] = rightRoot
            }
        }
    } 
    for(let i=0;i<n;i++){
         if(equations[i][1] === '!'){
            let left = equations[i][0].charCodeAt() - 97
            let right = equations[i][3].charCodeAt() - 97
            let leftRoot = findRoot(roots,left)
            let rightRoot = findRoot(roots,right)
            if(leftRoot === rightRoot){
                return false
            }
        }

    }
    return true
}
function findRoot(roots,val){
    let root = roots[val]
    if(root === -1) { return val }
    while(roots[root] !== root){
        root = roots[root]
    }
    return root
}

// 优化并查集 
