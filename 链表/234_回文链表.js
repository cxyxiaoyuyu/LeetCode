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