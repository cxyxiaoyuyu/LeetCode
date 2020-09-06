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

// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？

// 2 用迭代的方法  利用判断回文串的方式判断是不是对称
var isSymmetric = function(root) {
  let queue = [root]
  while(queue.length){
      let path = []
      let n = queue.length
      for(let i=0;i<n;i++){
          node = queue.shift()
          if(node === null){
              path.push(null)
          }else{
              path.push(node.val)
              if(node.left){
                  queue.push(node.left)
              }else{
                  queue.push(null)
              }
              if(node.right){
                  queue.push(node.right)
              }else{
                  queue.push(null)
              }
          }
         
      }
      if(!isValid(path)){
          return false
      }
  }
  return true
};

function isValid(s){
  let l = 0,r = s.length - 1
  while(l < r){
      if(s[l] !== s[r]){
          return false
      }
      l++
      r--
  }
  return true
}
