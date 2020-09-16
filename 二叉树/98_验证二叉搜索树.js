// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
// 根节点的值为 5 ，但是其右子节点值为 4 。

// 1 递归判断 设定上下界
var isValidBST = function(root) {
  const isValid = (node,lower,upper) => {
      if(node === null) return true
      if(node.val >= upper || node.val <= lower) return false
      return isValid(node.left,lower,node.val) 
          && isValid(node.right,node.val,upper)
  }
  return isValid(root,-Infinity,Infinity)
}

// 2 中序遍历 二叉搜索树的中序遍历一定是升序的
// dfs 中序遍历
var isValidBST = function(root) {
  let prev = -Infinity
  const dfs = (root) => {
    if(root === null) return true
    if(!dfs(root.left)) return false
    if(root.val <= prev){
        return false
    }else{
        prev = root.val
    }
    return dfs(root.right)
  }
  return dfs(root)
}


