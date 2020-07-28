// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 1 递归 DFS  深度优先搜索
var maxDepth = function(root) {
    if(root === null) return 0;
    let leftHeight = maxDepth(root.left)
    let rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
}

// 2 迭代 BFS  广度优先搜索
var maxDepth = function(root){
    if(root === null) return 0;
    let queue = [root]
    let depth = 1        // 当前深度为1 
    while(queue.length){
        let n = queue.length
        for(let i=0;i<n;i++){
            let cur = queue.shift()
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
        }
        if(queue.length) depth++
    }
    return depth
}
