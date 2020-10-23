// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true

// 1 转为数组 双指针
var isPalindrome = function(head) {
  if(head === null) return head

  // 转为数组
  const arr = []
  let p = head
  while(p){
      arr.push(p.val)
      p = p.next
  }

  let i = 0,j = arr.length - 1
  while(i<j){
      if(arr[i] !== arr[j]){
          return false
      }
      i++
      j--
  }
  return true
};

// 2 空间复杂度优化到O(1) 快慢指针找中点
const isPalindrome = (head) => {
  if(head === null || head.next === null) return true

  // 1 快慢指针找中点
  let fast = head
  let slow = head
  let prev
  while(fast && fast.next){
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  // 2 分成两个链表
  prev.next = null

  // 3 翻转后半段链表
  let head2 = null
  while(slow){
    const tmp = slow.next
    slow.next = head2
    head2 = slow
    slow = tmp
  }

  // 4 比较两个链表
  while(head && head2){
    if(head.val !== head2.val){
      return false
    }
    head = head.next
    head2 = head2.next
  }
  return true
}

