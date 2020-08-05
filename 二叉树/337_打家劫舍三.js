// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

// 示例 1:

// 输入: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \ 
//      3   1

// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
// 示例 2:

// 输入: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1

// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.

// 1 递归  自己写的 
// 一个节点能偷到的最大值 要么就是两个儿子节点能偷到的最大值相加 要么就是自己的节点值加上所有孙子节点能偷到的最大值
var rob = function(root) {
    if(root === null) return 0
    if(root.left === null && root.right === null) return root.val

    if(!root.left){
        return Math.max(
            rob(root.right), 
            root.val + rob(root.right.left) + rob(root.right.right)
        )
    }else if(!root.right){
        return Math.max(
            rob(root.left),
            root.val + rob(root.left.left) + rob(root.left.right)
        )
    }else{
        return Math.max(
            rob(root.left) + rob(root.right), 
            root.val + rob(root.left.left) + rob(root.left.right) +  rob(root.right.left) + rob(root.right.right)
        )
    }
};

// 优化以后  只是优化代码行数
var rob = function(root) {
    if(root === null) return 0
    // if(root.left === null && root.right === null) return root.val
    let childMax = 0, grandMax = root.val

    if(root.left){
        childMax = rob(root.left)
        grandMax += rob(root.left.left) + rob(root.left.right)
    }
    if(root.right){
        childMax += rob(root.right)
        grandMax += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(childMax, grandMax)
};

// 记忆化递归



// 2 官方题解 动态规划
var rob = function(root){
    const dfs = (node)=>{
        if(node === null){
            return [0,0]
        }
        let l = dfs(node.left)
        let r = dfs(node.right)
        let selected = node.val + l[1] + r[1]
        let notSelected = Math.max(l[0],l[1]) + Math.max(r[0],r[1])
        return [selected,notSelected]
    }
    let rootStatus = dfs(root)
    return Math.max(rootStatus[0],rootStatus[1])
}