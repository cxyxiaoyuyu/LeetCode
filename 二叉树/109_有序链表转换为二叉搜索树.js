// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定的有序链表： [-10, -3, 0, 5, 9],

// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// 这题与108题类似 
// 思路1 将链表转为数组 再总是去中间节点作为根节点
const sortedListToBST = (head) => {   
    const arr = [];
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
  
    const buildBST = (start, end) => {
      if(start > end) return null
      const mid = (start + end) >>> 1;
      const root = new TreeNode(arr[mid]);
      root.left = buildBST(start, mid - 1);
      root.right = buildBST(mid + 1, end);
      return root;
    };
  
    return buildBST(0, arr.length - 1);
};


// 优化代码
const sortedListToBST = (head) => {
    if(head === null){
        return null
    }
    const arr = [];
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
    const buildBST = (start, end) => {
      if( start === end ) {
          const root = new TreeNode(arr[start])
          return root
      }
      if( start + 1 === end){
          const root = new TreeNode(arr[end])
          root.left = new TreeNode(arr[start])
          return root
      }
      const mid = (start + end) >>> 1;
      const root = new TreeNode(arr[mid]);
      root.left = buildBST(start, mid - 1);
      root.right = buildBST(mid + 1, end);
      return root;
    }
    return buildBST(0, arr.length - 1);
};


// 2 快慢指针 
// 寻找链表的中间点，有个小技巧：快、慢指针指向头结点，快指针一次走两步，慢指针一次走一步，
// 当快指针走到尾节点时，慢指针正好走到链表的中间。然后断开成两个链表，分而治之。
// 为了断开，我们需要一个指针记录慢指针的前一个节点，因为单向链表的节点没有前驱指针。
const sortedListToBST = (head) => {
    if (head == null) return null;
    let slow = head;
    let fast = head;
    let preSlow      // 保存slow的前一个节点
  
    while (fast && fast.next) {
      preSlow = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    const root = new TreeNode(slow.val);
    if (preSlow !== undefined) {    // 中点slow不是head，需要构建左子树
      preSlow.next = null           // 切断preSlow和中点slow
      root.left = sortedListToBST(head); 
    }
    root.right = sortedListToBST(slow.next)
    return root;
};
  
// 3 中序遍历策略带来的优化  感觉头发掉完了
const sortedListToBST = (head) => {
    if (head == null) return null;
    let len = 0;
    let h = head;  // h初始指向头结点
    while (head) { // 求链表的节点个数
      len++;
      head = head.next;
    }
  
    const buildBST = (start, end) => {
      if (start > end) return null;     // 递归的出口，返回null节点
      const mid = (start + end) >>> 1;  // 求mid，不是为了构建它，是为了分治
      const left = buildBST(start, mid - 1);
      const root = new TreeNode(h.val); // 按 h.val 构建节点
    
      h = h.next;          // h指针步进              
      root.left = left;    // root构建出来了，接上左子树        
  
      root.right = buildBST(mid + 1, end); // 构建当前root的右子树
      return root;
    };
  
    return buildBST(0, len - 1);
}