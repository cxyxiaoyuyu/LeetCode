// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

// 示例:

// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

// dfs 用set去重
var permuteUnique = function(nums) {
    let res = []
    let used = {}
    let len = nums.length
    let set = new Set()
    
    const dfs = path => {
        if(path.length === len){
            let str = path.join(',')
            if(!set.has(str)){
                res.push(path.slice())
                set.add(str)
                return
            }
            
        }
        for(let i=0;i<len;i++){
            if(used[i]){
                continue 
            }

            path.push(nums[i])
            used[i] = true
            dfs(path)
            path.pop()
            used[i] = false
        }
    }

    dfs([])
    return res
};