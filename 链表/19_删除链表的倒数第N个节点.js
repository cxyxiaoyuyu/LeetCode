// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 1 通常解法 两次遍历
var removeNthFromEnd = function(head, n) {
  // 1 求链表总长度
  let length = 0
  let p = head
  while(p){
      length++
      p = p.next
  }
  // 2 要删除的是第几个元素 从 1 开始
  const num = length - n + 1

  // 3 创建新链表
  const newLink = new ListNode(0,head)

  p = newLink
  let i = 0
  while(i<=num){
      if(i === num - 1){
          p.next = p.next.next
          break
      }else{
          i++
          p = p.next
      }
  }
  return newLink.next
};
