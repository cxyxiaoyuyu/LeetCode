// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 1 dfs 
var minDepth = function(root) {
    if(root === null) return 0
    let leftHeight = minDepth(root.left)
    let rightHeight = minDepth(root.right)
    // if(leftHeight === 0) return rightHeight + 1
    // if(rightHeight === 0) return leftHeight + 1
    if(root.left === null || root.right === null) return Math.max(leftHeight,rightHeight) + 1
    return Math.min(leftHeight,rightHeight) + 1 
}

// 2 bfs
var minDepth = function(root) {
    if(root === null) return 0

    let queue = [root]
    let height = 0
    while(queue.length){       
        let n = queue.length
        for(let i=0;i<n;i++){
            let node = queue.shift()
            if(node.left===null && node.right===null){   // 遇到叶子节点就返回 
              return height + 1
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        height++
    }
    return height
}