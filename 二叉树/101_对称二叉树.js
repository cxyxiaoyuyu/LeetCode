// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 1 递归判断 左子树和右子树是否相等
var isSymmetric = function(root) {
  if(root === null) return true
  const equalTree = (left,right)=>{
      if(left === null && right === null){
          return true
      }else if(left === null || right === null){
          return false
      }else{
          if(left.val === right.val){
              return equalTree(left.left,right.right) && equalTree(left.right,right.left)
          }else{
              return false
          }
      }
  } 
  return equalTree(root.left,root.right)
};