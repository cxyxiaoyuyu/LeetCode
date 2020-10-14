// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 说明：
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。

// 哈希表计数
const intersect = function(nums1,nums2){
    const map = {}
    const res = []
    for(let num of nums1){
        map[num] = map[num] || 0
        map[num]++
    }
    for(let num of nums2){
        if(map[num] > 0){
            res.push(num)
            map[num]--
        }
    }
    return res
}



// 排序
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    let n1 = nums1.length, n2 = nums2.length
    let p1 = 0, p2 = 0
    let res = []
    while(p1 < n1 && p2 < n2){
        if(nums1[p1] < nums2[p2]){
            p1 ++ 
        }else if(nums1[p1] > nums2[p2]){
            p2 ++
        }else{
            res.push(nums1[p1])
            p1 ++
            p2 ++
        }
    }
    return res
 }