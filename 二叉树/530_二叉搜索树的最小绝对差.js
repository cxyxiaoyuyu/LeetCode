// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

//  

// 示例：
// 输入：

//    1
//     \
//      3
//     /
//    2

// 输出：1
// 解释：最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

// dfs 中序遍历
var getMinimumDifference = function(root){
  let prev = undefined
  let ans = Infinity    // 初始化为最大值

  const inorder = (root) => {
    if(root === null) return 

    inorder(root.left)

    if(prev !== undefined){
      ans = Math.min(ans,root.val - prev)
    }
    prev = root.val

    inorder(root.right)
  }

  inorder(root)

  return ans
}
