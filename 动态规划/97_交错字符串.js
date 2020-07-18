// 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。

// 示例 1:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出: true
// 示例 2:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出: false

// 1 动态规划
var isInterleave = function(s1, s2, s3) {
    let n1 = s1.length
    let n2 = s2.length
    let n3 = s3.length
    if(n1+n2 !== n3){
        return false
    }

    let f = new Array(n2+1)
    for(let i=0;i<n2+1;i++){
        f[i] = []
    }
    f[0][0] = true

    for(let i=0;i<n2+1;i++){
        for(let j=0;j<n1+1;j++){
            let p = i+j-1
            if(i>0){
                f[i][j] |= f[i-1][j] && s2[i-1] === s3[p]
            }
            if(j>0){
                f[i][j] |= f[i][j-1] && s1[j-1] === s3[p]
            }
        }
    }
    return f[n2][n1]
}