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

// 2 优化空间 O(1) 利用上一层链表遍历下一层
var connect = function(root){
    if(root === null) return root
    let leftMost = root

    while(leftMost.left){   // 到叶子节点结束
        let head = leftMost 

        while(head){       // 指导下一层的next指向
            head.left.next = head.right
            head.next && (head.right.next = head.next.left)

            head = head.next
        }

        leftMost = leftMost.left
    }
    return root
}

// 3 常数空间 一层循环 两个指针
var connect = function(root){
    if(root === null) return root

    let leftMost = root
    let head = leftMost

    while(head){    
        if(leftMost.left === null) break  // 每次只判断最左边节点是否有下一层

        // 指导下一层的next指向
        head.left.next = head.right   

        if(head.next){
            head.right.next = head.next.left
            head = head.next
        }else{
            leftMost = leftMost.left
            head = leftMost
        }
    }
    return root
}
