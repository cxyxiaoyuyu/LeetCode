// 示例 1:
// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.

// 示例 2:
// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// => 原地交换 不需要返回值

// 1 转换为线性数组存储
var reorderList = function(head) {
  if(head === null) return 
  const list = []
  let p = head
  while(p){
    list.append(p)
    p = p.next
  }

  let i = 0, j = list.length - 1
  while(i<j){
    list[i].next = list[j]
    i++
    if(i === j) break
    list[j].next = list[i]
    j--
  }

  list[i].next = null
}