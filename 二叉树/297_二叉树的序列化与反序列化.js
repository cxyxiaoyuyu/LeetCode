// 二叉树的序列化与反序列化

function TreeNode(val){
  this.val = val
  this.left = this.right = null
}

// 1. DFS 先序遍历

// 将先序遍历后的字符串 转为二叉树结构
var deserialize = (data) => {
  const list = data.split(',')       // 转成list数组
  return buildTree(list)             // 构建树，dfs的入口
}

var buildTree = (list) => {
  let nodeVal = list.shift()
  if(nodeVal === 'X') return null
  
  let node = new TreeNode(nodeVal)
  node.left = buildTree(list)
  node.right = buildTree(list)
  return node
}

// 将二叉树先序遍历 返回字符串  递归
var serialize = (root) => {
  if (root == null) return 'X,' // 遇到null节点
  const leftSerialized = serialize(root.left)   //左子树的序列化字符串
  const rightSerialized = serialize(root.right) //右子树的序列化字符串
  return root.val + ',' + leftSerialized + rightSerialized // 根|左|右
}

// 不利用递归先序遍历 自己维护一个栈



// 2 BFS  
// 序列化
var serialize = (root) => {
  let queue = [root]
  let res = []

  while(queue.length){
    let node = queue.shift()
    if(node){
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }else{
      res.push('X')
    }
  }
  return res.join(',')
}

// 反序列化
var deserialize = (data) => {
  if(data === 'X') return null
  let list = data.split(',')
  let root = new TreeNode(list[0])

  let queue = [root]
  let cursor = 1
  while(cursor < list.length){
    node = queue.shift()
    leftVal = list[cursor]
    rightVal = list[cursor+1]
    cursor += 2
    if(leftVal !== 'X'){
      let leftNode = new TreeNode(leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }
    if(rightVal !== 'X'){
      let rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
  }
  return root
}

// 给定二叉搜索树的中序遍历，是否可以唯一地确定二叉搜索树？
// 答案是否定的。如果没有要求二叉搜索树的高度平衡，则任何一个数字都可以作为二叉搜索树的根节点，因此可能的二叉搜索树有多个。

// 如果增加一个限制条件，即要求二叉搜索树的高度平衡，是否可以唯一地确定二叉搜索树？答案仍然是否定的。