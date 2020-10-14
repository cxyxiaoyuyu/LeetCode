// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层次遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigzagLevelOrder = function(root) {
  if(root === null) return []
  const res = []
  let queue = [root]
  let arrow = true         // 方向 true代表从左往右
  while(queue.length){
      const n = queue.length
      const cur = []       // 当前层级
      const next = []      // 下一层级
      for(let i=0;i<n;i++){
          if(arrow){
              node = queue.shift()
              node.left && next.push(node.left)
              node.right && next.push(node.right)
              cur.push(node.val)
          }else{
              node = queue.pop()
              node.right && next.unshift(node.right)
              node.left && next.unshift(node.left)
              cur.push(node.val)
          }
      }
      res.push(cur)
      queue = next 
      arrow = !arrow           // 方向取反
  }
  return res
};
