// 给定一个二叉树，返回它的 前序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//   1
//    \
//     2
//    /
//   3 

// 输出: [1,2,3]

// 1 dfs 递归算法
var preorderTraversal = function(root) {
  const res = []

  const dfs = (root) => {
      if(root === null) return 
      
      res.push(root.val)
      root.left && dfs(root.left)
      root.right && dfs(root.right)
  }

  dfs(root)
  return res
};

// 2 迭代算法
var preorderTraversal = function(root) {
  if(root === null) return []
  const stack = []
  const res = []
  let cur = root
  while(stack.length || cur){
     if(cur){
         res.push(cur.val)
         stack.push(cur)
         cur = cur.left
     }else{
         cur = stack.pop()
         cur = cur.right
     }
  }
  return res
};