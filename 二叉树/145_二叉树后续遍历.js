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
var postorderTraversal = function(root) {
  let res = []
  let stack = []

  if(root) stack.push(root)
  while(stack.length){
    let node = stack.pop()

    if(node){
      stack.push(node)
      stack.push(null)
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    }else{
      res.push(stack.pop().val)
    }
  }

  return res
}
