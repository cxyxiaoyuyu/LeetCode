// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]

// 1 递归 dfs
var postorderTraversal = function(root) {
  const res = []

  const dfs = (root) => {
      if(root === null) return root

      dfs(root.left)
      dfs(root.right)

      res.push(root.val)
  }
 
  dfs(root)
  return res
};

// 2 迭代遍历
