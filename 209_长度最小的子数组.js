// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。
// 如果不存在符合条件的连续子数组，返回 0。

// 示例：
// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的连续子数组。

// 1 暴力法
var minSubArrayLen = function(s, nums) {
    let n = nums.length
    let res = 10**9
    for(let i=0;i<n;i++){
        let sum = 0
        for(let j=i;j<n;j++){
            sum += nums[j]
            if(sum >= s){
                res = Math.min(res,j-i+1)
            }
        }
    }
    return res === 10**9 ? 0 : res
}
