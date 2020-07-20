// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

// 1. 二分查找




// 2. 对撞指针
const twoSum = function(numbers, target){
    let low = 0
    let high = numbers.length

    while(low < high){
        let sum = numbers[low] + numbers[high]
        if(sum === target){
            return [low + 1,high + 1]
        }else if( sum < target){
            low ++
        }else{
            high --
        }
    }
}

// 3. 哈希表
var twoSum = function(numbers, target) {
    let n = numbers.length
    let map = {}
    for(let i=0;i<n;i++){
        if(map[numbers[i]] !== undefined){     // 注意这里下标有可能为0
            return [map[numbers[i]]+1,i+1]
        }else{
            map[target-numbers[i]] = i 
        }
    }
}


