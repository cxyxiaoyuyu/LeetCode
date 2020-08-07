// 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
// 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？

// 示例 1:
// 输入: 2, [[1,0]] 
// 输出: true
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。

// 示例 2:
// 输入: 2, [[1,0],[0,1]]
// 输出: false
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。

// 1. BFS 广度优先搜索 入度为0的先学习放入队列
canFinish = (numCourses, prerequisites) => {
    // 每个课程对应的入度个数
    let inDgree = new Array(numCourses).fill(0)  
    // 每个课程的出度课程 后续课程
    let map = {}                     
    let count = 0
    for(let i=0;i<prerequisites.length;i++){
        inDgree[prerequisites[i][1]]++
        map[prerequisites[i][0]] = map[prerequisites[i][0]] || []
        map[prerequisites[i][0]].push(prerequisites[i][1])
    }
    
    let queue = []
    for(let i=0;i<inDgree.length;i++){
        // 将入度为0的课程放入队列 优先学习
        if(inDgree[i] === 0) {     
            queue.push(i)
        }
    }
    
    while(queue.length){
        let course = queue.shift()
        count ++ 
        if(map[course]){    // 如果存在后续课程 那么每个后续课程的入度减一
            for(let i=0;i<map[course].length;i++){
                inDgree[map[course][i]]--
                // 如果入度减一后等于0表示可以入队列 开始学习
                if(inDgree[map[course][i]] === 0){    
                    queue.push(map[course][i])
                }
            }
        }
    }
    return count === numCourses
}