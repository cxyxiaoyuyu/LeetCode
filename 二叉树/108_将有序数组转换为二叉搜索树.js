// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:
// 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
**/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 中序遍历，总是选择中间位置左边的数字作为根节点  mid = (left + right) / 2
const sortedArrayToBST = nums => {
    const buildBST = (nums,start,end)=>{
        if(start > end) return null
        let mid = (start + end ) >> 1
        const root = new TreeNode(nums[mid])
        root.left = buildBST(nums,start, mid - 1)
        root.right = buildBST(nums,mid + 1,end)
        return root
    }
    return buildBST(nums,0,nums.length - 1)
}

// 中序遍历，总是选择中间位置右边的数字作为根节点  mid = (left + right + 1) / 2
const sortedArrayToBST = nums => {
    const buildBST = (nums,start,end)=>{
        if(start > end) return null
        let mid = (start + end + 1) >> 1
        const root = new TreeNode(nums[mid])
        root.left = buildBST(nums,start, mid - 1)
        root.right = buildBST(nums,mid + 1,end)
        return root
    }
    return buildBST(nums,0,nums.length - 1)
}