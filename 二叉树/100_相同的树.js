// 给定两个二叉树，编写一个函数来检验它们是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1:
// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true

// 1 DFS 遍历 自己写的
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }else if(p && q){
        if(p.val === q.val){
            return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
        }else{
            return false
        }
    }else{
        return false
    }
};

// 2 BFS 遍历 看了大神的代码 自己模拟的
var isSameTree = function(p, q){
    let queue = [{p,q}]
    while(queue.length){
        let node = queue.shift()
        if(node.p === null && node.q === null) continue
        if(node.p === null || node.q === null) return false
        if(node.p.val === node.q.val){
            queue.push({p: node.p.left,q: node.q.left})
            queue.push({p: node.p.right,q: node.q.right})
        }else{
            return false
        }
    }
    return true
}
