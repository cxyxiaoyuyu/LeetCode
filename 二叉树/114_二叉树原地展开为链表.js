// 2020-08-02   中等

// 给定一个二叉树，原地将它展开为一个单链表。

// 例如，给定二叉树

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// 将其展开为：

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

// 1 递归 
// 对于每一个节点都是左边的节点变为空 右边的节点变为原本左边的节点 左边最右边的节点指向原本右边的节点
var flatten = function(root) {
    if(root === null) return null
    if(root.left === null && root.right === null) return root
    let left = root.left
    let right = root.right
    root.left = null
    if(left){
        root.right = flatten(left)
        let p = root.right
        while(p.right !== null){
            p = p.right
        }
        p.right = flatten(right)
    }else{
        root.right = flatten(right)
    }    
    return root
};
