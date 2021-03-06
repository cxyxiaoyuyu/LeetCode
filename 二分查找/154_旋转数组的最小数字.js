// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0


// 1 暴力法  找到第一个比第一个数小的就是最小的数 否则第一个数就是最小的
const minArray = (numbers) => {
    let num = numbers[0]
    let n = numbers.length
    for(let i=0;i<n;i++){
        if(numbers[i] < num){
            return numbers[i]
        }
    }
    return num
}

// 2 二分查找
// 我们考虑数组中的最后一个元素 x：
// 在最小值右侧的元素，它们的值一定都小于等于 x；
// 而在最小值左侧的元素，它们的值一定都大于等于 x。
// 因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。

// 为什么用 low + (high - low) // 2 而不是 (high + low) // 2
// 答: 因为low+high在low和high特别大的时候可能会造成溢出，使用减法避免了溢出发生

const minArray = (numbers) => {
    let left = 0
    let right = numbers.length - 1     // 注意这里是长度 -1

    while(left < right){
        mid = left + ((right - left) >> 1)     // 注意运算优先级
        if(numbers[mid] > numbers[right]){
            left = mid + 1
        }else if(numbers[mid] < numbers[right]){
            right = mid
        }else{
            right --
        }
    }
    return numbers[left]
}