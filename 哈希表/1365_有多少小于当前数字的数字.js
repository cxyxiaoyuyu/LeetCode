// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
// 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
// 以数组形式返回答案。

// 示例 1：
// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释： 
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。 
// 对于 nums[3]=2 存在一个比它小的数字：（1）。 
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。

// 提示：
// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// 1 计数排序
var smallerNumbersThanCurrent = function(nums) {
  const cnt = new Array(101).fill(0)
  for(let num of nums){
    cnt[num] ++
  }

  for(let i=1;i<=100;i++){
    cnt[i] += cnt[i-1]        // 小于等于i的值
  }

  const res = [] 
  for(let num of nums){
    res.push(num ? cnt[num-1]: 0)
  }
  return res
}

// 2 排序
var smallerNumbersThanCurrent = function(nums) {
  const n = nums.length
  const data = Array.from(Array(n),()=>Array(2).fill(0))
  for(let i=0;i<n;i++){
    data[i][0] = nums[i]
    data[i][1] = i
  }

  data.sort((a,b)=> a[0] - b[0])

  console.log(data)

  const res = []
  let prev 
  for(let i=0;i<n;i++){
    if(i === 0 || data[i][0] !== data[i-1][0]){   // 第一个
      res[data[i][1]] = i
      prev = i
    }else{
      res[data[i][1]] = prev
    }
  }

  return res
}