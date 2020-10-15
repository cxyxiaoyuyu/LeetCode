// 定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// 1 bfs 
var connect = function(root) {
  if(root === null) return root

  let queue = [root]
  while(queue.length){
      const n = queue.length
      for(let i=0;i<n;i++){
          const node = queue.shift()
          if(i !== n-1){          // i === n-1 时 是当前层级最后一个节点
              node.next = queue[0]
          }
         
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
  }
  return root
};