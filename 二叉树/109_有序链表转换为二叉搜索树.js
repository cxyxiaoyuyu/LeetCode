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