// 我们从二叉树的根节点 root 开始进行深度优先搜索。
// 在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。
// 如果节点只有一个子节点，那么保证该子节点为左子节点。
// 给出遍历输出 S，还原树并返回其根节点 root。

// 示例 1：

// 输入："1-2--3--4-5--6--7"
// 输出：[1,2,5,3,4,6,7]

// 数据结构: 栈  核心思想: 当栈的长度与节点深度相同时 栈顶元素为节点的父亲 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    let n = S.length
    let stack = []
    for(let i=0;i<n;){
        let value = 0
        let level = 0
        while(i<n && S[i]==='-'){   // 计算深度
            level ++
            i ++
        }
        while(i<n && S[i]!=='-'){   // 计算值
            value = value*10 + +S[i]
            i++
        }
        let node = new TreeNode(value)
        // 如果栈为空 则该节点是根节点
        if(!stack.length){
            stack.push(node)
            continue
        }
        // 根据栈的length 找父亲
        while(stack.length !== level){
            stack.pop()
        }
        if(stack[stack.length - 1].left){
            stack[stack.length-1].right = node
        }else{
            stack[stack.length-1].left = node
        }
        stack.push(node)
    }
    return stack[0]
};