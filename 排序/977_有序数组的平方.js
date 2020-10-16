// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

// 示例 1：

// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 示例 2：

// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

// 1 直接排序
var sortedSquares = function(A) {
  const arr = A.map(m => m*m)
  return arr.sort((a,b)=>a-b)
};

// 2 原地插入排序
var sortedSquares = function(A) {
  for(let i=0;i<A.length;i++){
      const temp = A[i]**2
      for(j=i-1;j>=0 && A[j]>temp;j--){
          A[j+1] = A[j] 
      }
      A[j+1] = temp
  }

  return A
};

