// 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。

// 示例:

// 输入: [4, 6, 7, 7]
// 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

// 1 dfs 递归回溯 迭代 
const findSubsequences = (nums) => {
    let res = []
    let set = new Set()  // 为了去重
    let len = nums.length

    const dfs = (start,path) =>{
        if(path.length >=2){
            const str = path.join(',')
            if(!set.has(str)){
                res.push(path.slice())  // 推入一份拷贝，path还要继续用
                set.add(str)
            }
        }
        for(let i=start;i<len;i++){
            let prev = path[path.length - 1]
            let cur = nums[i]
            if(path.length === 0 || prev <= cur){
                path.push(cur)
                dfs(i+1,path)
                let value = path.pop()  
                while(nums[i+1] === value){    // 避免压入重复的元素
                    i++
                }
            }
        }
    }

    dfs(0,[])
    return res
}





