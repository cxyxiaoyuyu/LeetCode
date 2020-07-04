// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

// 示例 1:
// 输入:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出: 3
// 解释: 长度最长的公共子数组是 [3, 2, 1]

// 1. 动态规划
// 状态转移方程 dp[i][j] = dp[i-1][j-1] + 1
const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }                            
    let res = 0;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (A[i - 1] == B[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        res = Math.max(dp[i][j], res);
      }
    }
    return res;
}

// 2. 滑动窗口
function findLength(A,B){
    let n = A.length
    let m = B.length
    let ret = 0
    for(let i=0;i<n;i++){
        length = Math.min(m,n-i)
        ret = Math.max(ret,maxLength(A,B,i,0,length))
    }
    for(let i=0;i<m;i++){
        length = Math.min(m-i,n)
        ret = Math.max(ret,maxLength(A,B,0,i,length))
    }
    return ret
}
function maxLength(A,B,addA,addB,length){
    let ret = 0, k = 0
    for(let i=0;i<length;i++){
        if(A[addA+i] === B[addB+i]){
            k ++
            ret = Math.max(ret,k)
        }else{
            k = 0
        }
    }
    return ret
}
