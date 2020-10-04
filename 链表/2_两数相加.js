// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：[3,1,3,4]
//      [8,2]
// 输出：1 4 3 4 

var addTwoNumbers = function(l1, l2) {
  let add = 0
  let res = new ListNode(0)
  let p = res
  while(add || l1 || l2){
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
      let value = sum % 10  
      add = Math.floor(sum / 10)
      p.next = new ListNode(value)

      p = p.next
      if(l1){
          l1 = l1.next
      }
      if(l2){
          l2 = l2.next
      }
  }
  return res.next
};


