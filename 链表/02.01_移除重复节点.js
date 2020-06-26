// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
// 示例1:
//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]

// 示例2:
//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]

// 提示：
// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。

// map 缓冲存储
const removeDuplicateNodes = (head) => {
    if (head == null) return head;
    const map = {};
    map[head.val] = true;
    let node = head.next;
    let prev = head;
    while (node) {
      if (map[node.val]) {
        prev.next = node.next;
      } else {
        map[node.val] = true;
        prev = prev.next;
      }
      node = node.next;
    }
    return head;
  }


// 双指针  暴力法 双层循环
const removeDuplicateNodes = (head) => {
    let p = head;
    while (p) {
      let q = p;
      while (q.next) {
        if (q.next.val == p.val) {
          q.next = q.next.next;
        } else {
          q = q.next;
        }
      }
      p = p.next;
    }
    return head;
}