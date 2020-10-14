// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 1 set 去重
var intersection = function(nums1, nums2) {
  const keys1 = new Set(nums1)
  const keys2 = new Set(nums2)
  const res = []

  for(key of keys1){
      if(keys2.has(key)){
          res.push(key)
      }
  }
  
  return res
}