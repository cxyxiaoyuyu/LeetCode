// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据保证，新值和原始二叉搜索树中的任意节点值都不同。
// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。

// 例如, 

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和 插入的值: 5

// 你可以返回这个二叉搜索树:

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 5
// 或者这个树也是有效的:

//          5
//        /   \
//       2     7
//      / \   
//     1   3
//          \
//           4

// 二叉搜索树的性质  
// 对于树上的每个节点来说，该节点的左子树里所有的节点都小于当前节点，该节点的右子树里所有的节点都大于当前节点。

// 1 递归
var insertIntoBST = function(root, val) {

  if(root === null) return new TreeNode(val)

  const dfs = (root,val) => {
      if(val > root.val){
          if(root.right === null){
              root.right = new TreeNode(val)
          }else{
              insertIntoBST(root.right,val)
          }
      }

      if(val < root.val){
          if(root.left === null){
              root.left = new TreeNode(val)
          }else{
              insertIntoBST(root.left,val)
          }
      }
  }

  dfs(root,val)
  return root
};

// 2 优化后的递归   时间复杂度一样 只是代码少了
var insertIntoBST = function(root, val) {
  if(root === null) return new TreeNode(val)

  if(val > root.val){
      root.right = insertIntoBST(root.right,val)
  }else{
      root.left = insertIntoBST(root.left,val)
  }

  return root
};

// 3 迭代
var insertIntoBST = function(root,val) {
  const node = new TreeNode(val)
  if(root === null) return node

  let cur = root
  while(true){
    if(cur.val > val){
      if(cur.left === null){
        cur.left = node
        break
      }
      cur = cur.left
    }else{
      if(cur.right === null){
        cur.right = node
        break
      }
      cur = cur.right
    }
  }
  return root
}