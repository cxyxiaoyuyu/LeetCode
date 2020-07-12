const node = (value,left,right)=>{
  return {
    value,
    left,
    right
  }
}

// 构造一棵二叉树
const binaryTree = 
  node("A",
    node("B",node("D")),
    node("C",
      node("E",undefined,node("G")),
      node("F",node("H"),node("J"))
    )
  )

// 利用递归先序遍历
let resultFirst = []
const traverseRootFirst = (bTree) => {
  if(!bTree) { return}
  resultFirst.push(bTree.value)
  traverseRootFirst(bTree.left)
  traverseRootFirst(bTree.right)
}

traverseRootFirst(binaryTree)
console.log('先序遍历')
console.log(resultFirst)


// 利用递归中序遍历
let resultMiddle = []
const traverseRootMiddle = (bTree) => {
  if(!bTree) { return }
  traverseRootMiddle(bTree.left)
  resultMiddle.push(bTree.value)
  traverseRootMiddle(bTree.right)
}

traverseRootMiddle(binaryTree)
console.log('中序遍历')
console.log(resultMiddle)

// 利用递归后续遍历
let resultLast = []
const traverseRootLast = (bTree) => {
  if(!bTree) { return }
  traverseRootLast(bTree.left)
  traverseRootLast(bTree.right)
  resultLast.push(bTree.value)
}

traverseRootLast(binaryTree)
console.log('后序遍历')
console.log(resultLast)


// 不利用递归先序遍历
let resultFirst2 = []
const traverseRootFirst2 = (bTree) => {
  const stack = []
  let current = bTree
  while(stack.length || current){
    if(current){
      resultFirst2.push(current.value)
      stack.push(current)
      current = current.left
    }else{
      current = stack.pop()
      current = current.right
    }
  }
}

traverseRootFirst2(binaryTree)
console.log('\n 不利用递归先序遍历')
console.log(resultFirst2)

// 不利用递归中序遍历 自己维护一个栈
let resultMiddle2 = []
const traverSeRootMiddle2 = (bTree) => {
  const stack = []
  let current = bTree
  while(stack.length || current){
    if(current){
      stack.push(current)
      current = current.left
    }else{
      current = stack.pop()
      resultMiddle2.push(current.value)
      current = current.right
    }
  }
}

traverSeRootMiddle2(binaryTree)
console.log('\n 不利用递归中序遍历')
console.log(resultMiddle2)


// BFS 遍历二叉树
var serialize = (root) => {
  let queue = [root]
  let res = []

  while(queue.length){
    let node = queue.shift()
    if(node){
      res.push(node.value)
      queue.push(node.left)
      queue.push(node.right)
    }else{
      res.push('null')
    }
  }
  return res
}

console.log(serialize(binaryTree))


// 中根序遍历顺序存储的二叉树