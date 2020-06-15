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