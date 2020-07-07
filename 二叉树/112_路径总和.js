// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

// 示例: 
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。


// 递归
var hasPathSum = function(root, sum) {
    // 根节点为空
    if (root === null) return false;
    
    // 叶节点 同时 sum 参数等于叶节点值
    if (root.left === null && root.right === null) return root.val === sum;
  
    // 总和减去当前值，并递归
    sum = sum - root.val
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
  
// 广度优先搜索