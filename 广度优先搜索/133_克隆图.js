// 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
// 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// 1 DFS 
var cloneGraph = function(node) {
    let memo = new Map()            // 防止进入死循环 所以记录已遍历的结果
    const dfs = (node) => {
        if(!node) return null
        if(memo.get(node)){
            return (memo.get(node))
        } 
        let clone_node = new Node(node.val)
        
        memo.set(node,clone_node)

        node.neighbors.forEach(neighbor => {
            clone_node.neighbors.push(dfs(neighbor));
        })

        return clone_node
    } 
    return dfs(node)
};

// 2 BFS 
var cloneGraph = function(node) {
    let map = new Map()
    let queue = []
    
    if(!node) return null

    queue.push(node)
    map.set(node,new Node(node.val))

    while(queue.length){
        cur = queue.shift()
        for(let nei of cur.neighbors){
            if(!map.get(nei)){
                map.set(nei,new Node(nei.val))
                queue.push(nei)
            }
            map.get(cur).neighbors.push(map.get(nei))
        }
    }

    return map.get(node)
};
