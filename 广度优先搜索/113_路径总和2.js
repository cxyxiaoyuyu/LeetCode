// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// 深度优先搜索  右边遍历完也要 pop回溯
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if(root === null) return []
  const res = []
  const dfs = (root,s,path) => {
      if(root === null) return 

      if(s === sum && root.left === null && root.right === null){
          res.push(path.slice())
          return
      }
     
      if(root.left){
          path.push(root.left.val)
          dfs(root.left,s+root.left.val,path)
          path.pop()
      }
      if(root.right){
          path.push(root.right.val)
          dfs(root.right,s+root.right.val,path)
          path.pop()
      }
  }
  dfs(root,root.val,[root.val])
  return res
};
