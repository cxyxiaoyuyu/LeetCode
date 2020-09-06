// 给定一个二叉树，返回其节点值自底向上的层次遍历。 
// 即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// 1 bfs 利用二叉树的bfs遍历 
var levelOrderBottom = function(root) {
  if(root === null) return []
  let queue = [root]
  let res = []
  while(queue.length){
      let n = queue.length
      let path = []            // 存储当前层级
      for(let i=0;i<n;i++){
          let node = queue.shift()
          path.push(node.val)
          if(node.left){
              queue.push(node.left)
          }
          if(node.right){
              queue.push(node.right)
          }
      }
      res.unshift(path)
  }
  return res
};