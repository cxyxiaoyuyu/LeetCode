// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 示例 2:
// 输入: nums = [1,2], k = 2
// 输出: [1,2]
 

// 提示：
// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。

// 先求出每个数的出现的频率 然后按频率排序 最后取前k个
var topKFrequent = function(nums, k) {
  let map = {}
  for(let i=0;i<nums.length;i++){
      map[nums[i]] = map[nums[i]] || 0
      map[nums[i]]++
  }
  let res = Object.keys(map).sort((a,b)=>{
      return map[b] - map[a]
  })
  return res.slice(0,k)
};

// 最小堆
var topKFrequent = function(nums, k) {
  let map = {}
  for(let i=0;i<nums.length;i++){
      map[nums[i]] = map[nums[i]] || 0
      map[nums[i]]++
  }

  let arr = Object.keys(map)
  // 堆化前k个元素 即arr
  for(let i=(k-1)>>1;i>=0;i--){      // 取根节点时取整 取整 
    siftDown(i)  // 下沉这个元素
  }

  // 将剩下的元素依次与小根堆中的最小值进行比较
  for(let i=k;i<arr.length;i++){
    if(map[arr[i]] >= map[arr[0]]){
      [arr[0],arr[i]] = [arr[i],arr[0]]
      siftDown(0)
    }
  }

  function siftDown(i){
    const left = 2*i + 1, right = 2*i + 2
    let greater = left
    if(greater >= k) return  // 如果左节点超过k了
    if(right < k && map[arr[right]] < map[arr[greater]]){
      greater = right
    }
    if(map[arr[greater]] < map[arr[i]]){
      [arr[greater],arr[i]] = [arr[i],arr[greater]]
      siftDown(greater)
    }
  }
  return arr.slice(0,k)
}

// 堆排序 2 
var topKFrequent = function(nums, k) {
  let map = {}
  for(let i=0;i<nums.length;i++){
    map[nums[i]] = map[nums[i]] || 0
    map[nums[i]] ++
  } 

  let i = 0
  let heap = []
  for(let key in map){
    if(i<k){
        heap.push(key)
        siftUp(heap,i)   // 一个一个堆化
    }else if(map[key] > map[heap[0]]){
        heap[0] = key 
        siftDown(0)
    }
    i++
  }

  function siftUp(heap, i){
    if(i===0){return}
    const parent = parseInt((i-1)/2)
    if(map[heap[i]] < map[heap[parent]]){
        [heap[i],heap[parent]]=[heap[parent],heap[i]]
        siftUp(heap, parent)
    }
  }

  function siftDown(i){
    const left = 2*i + 1, right = 2*i + 2
    let greater = left
    if(greater >= k) return      // 如果左节点超过k了
    if(right < k && map[heap[right]] < map[heap[greater]]){
      greater = right
    }
    if(map[heap[greater]] < map[heap[i]]){
      [heap[greater],heap[i]] = [heap[i],heap[greater]]
      siftDown(greater)
    }
  }
  return heap
}