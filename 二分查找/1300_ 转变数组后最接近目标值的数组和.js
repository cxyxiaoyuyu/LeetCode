// 给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。
// 如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。
// 请注意，答案不一定是 arr 中的数字。

// 示例 1：
// 输入：arr = [4,9,3], target = 10
// 输出：3
// 解释：当选择 value 为 3 时，数组会变成 [3, 3, 3]，和为 9 ，这是最接近 target 的方案。

// 二分查找
var findBestValue = function(arr, target) {
    var n = arr.length
    var right = Math.min(target,Math.max(...arr))
    var left = Math.min(...arr,~~(target/n))
    let res 
    let dif = 10 ** 9 
    while(left <= right){
        mid = (left + right) >> 1
        sum = arr.reduce((pre,next)=>{
            return pre + Math.min(next,mid) 
        },0)
        if(sum <= target){
            left = mid + 1
            if(target - sum <= dif){
                res = mid 
                dif = target - sum
            }
        }else{
            right = mid - 1
            if(sum - target < dif){
                res = mid 
                dif = sum - target
            }
        }
    }
    return res
}