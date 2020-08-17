// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// dfs 回溯深度优先搜索
var permute = function(nums){
    let n = nums.length
    let used = {}
    let res = []
    const dfs = (path)=>{
        if(path.length === n){
            res.push(path.slice())
            return 
        }
        for(let num of nums){
            if(used[num]) continue
            path.push(num)
            used[num] = true
            dfs(path)
            path.pop()
            used[num] = false
        }
    }
    dfs([])
    return res
}
