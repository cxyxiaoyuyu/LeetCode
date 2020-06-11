// 和可被K整除的子数组
// 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

// 示例：

// 输入：A = [4,5,0,-2,-3,1], K = 5
// 输出：7
// 解释：
// 有 7 个子数组满足其元素之和可被 K = 5 整除：
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


// 前缀和
function subarraysDivByK(A,K){
    var record = {0: 1}
    var ans = 0, sum = 0
    for(let item of A){
        sum += item
        var mod = sum % K
        // 取模与python不同 负数取模要改变一下
        if(mod < 0) mod = K + mod
        var same = record[mod] || 0
        ans += same
        record[mod] = same + 1
    }
    return ans
}
var ans = subarraysDivByK([-1,2,9],2)
console.log(ans)