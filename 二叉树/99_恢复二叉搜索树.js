// 二叉搜索树中的两个节点被错误地交换。
// 请在不改变其结构的情况下，恢复这棵树。

// 示例 1:
// 输入: [1,3,null,null,2]

//    1
//   /
//  3
//   \
//    2

// 输出: [3,1,null,null,2]

//    3
//   /
//  1
//   \
//    2

// 什么是二叉搜索树？
// 二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树） 
// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 
// 它的左、右子树也分别为二叉排序树

// 所以对二叉搜索树进行中序遍历的话 得到的一定是一个递增数列
// 如果交换了里两个节点的位置 那必然有一个或两个地方 不满足 arr[i+1] > arr[i] 

// 所以我们需要先找到这两个数 然后再交换这两个数

// 1 显示中序遍历
var recoverTree = (root) => {
    let nums = []
    inorder(root,nums)    // 对该树进行中序遍历
    let [x,y] = findSwapNums(nums)
    recover(root,2,x,y)
}
var inorder = (root,nums)=>{
    if(root === null){
        return 
    }
    inorder(root.left,nums)
    nums.push(root.val)
    inorder(root.right,nums)
}
var findSwapNums = (nums) => {
    let x,y
    for(let i=0;i<nums.length;i++){
        if(nums[i+1] < nums[i]){
            if(x !== undefined){
                y = nums[i+1]
                break
            }else{
                x = nums[i]
                y = nums[i+1]
            }
        }
    }
    return [x,y]
}

const recover = (r, count, x, y) => {
    if (r !== null) {
        if (r.val === x || r.val === y) {
            r.val = r.val === x ? y : x;
            if (--count === 0) {
                return;
            }
        }
        recover(r.left, count, x, y);
        recover(r.right, count, x, y);
    }
}

// 如果recover 函数这样写 是不是好理解点
const recover2 = (r, count, x, y) => {
    if (r !== null) {
        if(r.val === x){
            r.val = y
            if(--count === 0) return
        }else if(r.val === y){
            r.val = x
            if(--count === 0) return
        }
        recover(r.left, count, x, y);
        recover(r.right, count, x, y);
    }
}

// 可以将遍历的节点值推入一个数组，遍历数组找出错误对。
// 但其实没必要每个存下来，只用比较前后访问的节点值，上一个访问的节点用一个变量记录，当前访问的是递归遍历的root节点。
const recoverTree = (root) => {
    let prevNode = new TreeNode(-Infinity);
    let firstError;
    let secondError;
    var inOrder = function (root) { // 中序遍历：left|root|right，root和prevNode就是两个指针
      if (root == null) return;
      inOrder(root.left);
      if (prevNode.val >= root.val && firstError == null) { // 当前是第一对错误
        firstError = prevNode;                              // 记录第一个错误点
      }
      if (prevNode.val >= root.val && firstError != null) { // 第一个错误点已确定
        secondError = root;                                 // 记录第二个错误点
      }
      prevNode = root;                                      // 更新 prevNode
      inOrder(root.right);
    };
    inOrder(root);
    const temp = firstError.val;
    firstError.val = secondError.val;
    secondError.val = temp; 
}


// 2 隐式中序遍历  用迭代的方法中序遍历二叉树  
var inorder = (root,nums)=>{    // 只是修改中序遍历函数
    let stack = []
    let cur = root
    while(cur || stack.length){
        if(cur){
            stack.push(cur)
            cur = cur.left
        }else{
            cur = stack.pop()
            nums.push(cur.val)
            cur = cur.right
        }
    }
}

// 3 mirros 中序遍历  空间复杂度 O(1)


