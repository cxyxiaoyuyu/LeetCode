// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:
// 给定二叉树 [1,2,2,3,3,null,null,4,4]
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// dfs 只有左右子树都是平衡二叉树 并且两个子树的高度差绝对值不超过1
var isBalanced = function(root) {
    if(root === null) return true
    const height = (node) => {
        if(node === null) return 0
        return Math.max(height(node.left),height(node.right)) + 1 
    }

    return Math.abs(height(root.left) - height(root.right)) <= 1 
           && isBalanced(root.left) && isBalanced(root.right)

}


