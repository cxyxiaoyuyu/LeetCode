// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.

// 1 创建一个新链表 将原链表分成两部分  前面两个节点 和后面所有几点 一次迭代
var swapPairs = function(head) {
  let link = new ListNode()
  let p = link
  let tail = head

  while(tail){
      if(tail.next === null){
          p.next = tail
          break
      }

      prev = tail
      tail = tail.next.next

      p.next = prev.next
      p.next.next = prev
      p = p.next.next
      p.next = null    // 避免形成环形链表  其实就是在最后一步
  }
  
  return link.next
};

// 2 直接在原链表交换