/**
 * 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

  示例 1:

  输入: [1,3,4,2,2]
  输出: 2
  示例 2:

  输入: [3,1,3,4,2]
  输出: 3

  说明：
    不能更改原数组（假设数组是只读的）。
    只能使用额外的 O(1) 的空间。
    时间复杂度小于 O(n2) 。
    数组中只有一个重复的数字，但它可能不止重复出现一次。
 */

 // 方法一  哈希表判重
 var findDuplicate = function(nums) {
  var map = new Map
  var n = nums.length
  if(n === 0) return -1
  for(let num of nums){
      if(map.has(num)){
          return num
      }else{
          map.set(num)
      }
  }
}

 // 方法二  二分查找 (抽屉原理)
 var findDuplicate = function(nums) {
    let n = nums.length
    let left = 1, right = n - 1
    let res
    while(left <= right){
        mid = (left + right) >> 1
        let cnt = 0
        for(let i=0;i<n;i++){
            if(nums[i]<=mid){ cnt ++ }
        }
        if(cnt <= mid){
            left = mid + 1
        }else{
            right = mid - 1
            res = mid
        }
    }
    return res
};

 // 方法三  快慢指针
 var findDuplicate = function(nums) {
    let s = 0 ,q = 0
    do{
        s = nums[nums[s]]
        q = nums[q]
    }while(s !== q)
    s = 0
    while( s !== q){
        s = nums[s]
        q = nums[q]
    }
    return s
  };

 // 方法四  二进制