// 给定一个二叉树

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。

// 输入：root = [1,2,3,4,5,null,7]
// 输出：[1,#,2,3,#,4,5,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。

// 1 BFS 层级遍历
var connect = function(root) {
  if(root === null ) return root
  const queue = [root]

  while(queue.length) {
      let length = queue.length
      for(let i=0;i<length;i++){
          const node = queue.shift()
          if(i === length - 1){
              node.next = null
          }else{
              node.next = queue[0]
          }

          if(node.left){
              queue.push(node.left)
          }  
          if(node.right){
              queue.push(node.right)
          }
      }
  }
  return root
}
