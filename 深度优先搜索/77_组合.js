// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 1 dfs 
combine = (n,k)=>{
  let res = []
  const dfs = (path,index) => {
     if(path.length === k){
         res.push(path.slice())  
         return    
     }
      
     for(let i=index;i<n;i++){
         path.push(i)
         dfs(path,i+1)
         path.pop() 
     }
  }
  dfs([],0)
  return res
}

// 2 递归
// 数学方法  Cnk = Cn-1k-1 + Cn-1k
const combine = (n, k) => {
  const res = [];
  const helper = (n, k, path) => {
    if (n < k || k == 0) { // k不能大于n，或，找齐了k个，就结束递归
      if (k == 0) {
        res.push(path.slice());
      }
      return;
    }
    helper(n - 1, k - 1, path.concat(n)); // 选n，C(n-1, k-1)
    helper(n - 1, k, path); // 不选n，C(n-1,k)
  };

  helper(n, k, []);
  return res;
};