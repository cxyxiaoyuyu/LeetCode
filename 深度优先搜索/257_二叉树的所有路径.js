// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 输入:
//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]
// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3


// 1 用数组存储路径 dfs  回溯
var binaryTreePaths = function (root) {
  if (root === null) return []
  let res = []
  const dfs = (path, root) => {
    if (root.left === null && root.right === null) {   // 叶子节点
      path.push(root.val)
      res.push(path.join('->'))
      return
    }
    path.push(root.val)

    if (root.left) {
      dfs(path, root.left)
      path.pop()
    }
    if (root.right) {
      dfs(path, root.right)
      path.pop()
    }
  }
  dfs([], root)
  return res
}

// 2 不回溯也可以用临时变量存储当前层级的路径  不过要是换成 树的话,多个子节点就不适用了
var binaryTreePaths = function (root) {
  if (root === null) return []
  let res = []
  const dfs = (path, root) => {
    if (root.left === null && root.right === null) {   // 叶子节点
      path.push(root.val)
      res.push(path.join('->'))
      return
    }
    path.push(root.val)

    let temp = path.slice()
    if (root.left) {
      dfs(path, root.left)
    }
    if (root.right) {
      dfs(temp, root.right)
    }
  }
  dfs([], root)
  return res
}

// 3 数组是引用类型 这题可以直接用字符串 就不用回溯的
var binaryTreePaths = function (root) {
  if (root === null) return []
  let res = []
  const dfs = (path, root) => {
    if (root.left === null && root.right === null) {   // 叶子节点
      res.push(path + root.val)
      return
    }
    path += root.val + '->'

    if (root.left) {
      dfs(path, root.left)
    }
    if (root.right) {
      dfs(path, root.right)
    }
  }
  dfs('', root)
  return res
}