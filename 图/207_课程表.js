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
const canFinish = (numCourses, prerequisites) => {
    const inDegree = new Array(numCourses).fill(0); // 入度数组
    const map = {};                                 // 邻接表
    for (let i = 0; i < prerequisites.length; i++) {
      inDegree[prerequisites[i][0]]++;              // 求课的初始入度值
      if (map[prerequisites[i][1]]) {               // 当前课已经存在于邻接表
        map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
      } else {                                      // 当前课不存在于邻接表
        map[prerequisites[i][1]] = [prerequisites[i][0]];
      }
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) { // 所有入度为0的课入列
      if (inDegree[i] == 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
      const selected = queue.shift();           // 当前选的课，出列
      count++;                                  // 选课数+1
      const toEnQueue = map[selected];          // 获取这门课对应的后续课
      if (toEnQueue && toEnQueue.length) {      // 确实有后续课
        for (let i = 0; i < toEnQueue.length; i++) {
          inDegree[toEnQueue[i]]--;             // 依赖它的后续课的入度-1
          if (inDegree[toEnQueue[i]] == 0) {    // 如果因此减为0，入列
            queue.push(toEnQueue[i]);
          }
        }
      }
    }
    return count == numCourses; // 选了的课等于总课数，true，否则false
  };