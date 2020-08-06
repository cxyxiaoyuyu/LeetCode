// 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

// 示例 1:

// 输入: ["abcd","dcba","lls","s","sssll"]
// 输出: [[0,1],[1,0],[3,2],[2,4]] 
// 解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
// 示例 2:

// 输入: ["bat","tab","cat"]
// 输出: [[0,1],[1,0]] 
// 解释: 可拼接成的回文串为 ["battab","tabbat"]

// 暴力法 自己写的
var palindromePairs = function(words) {
    let n = words.length
    let res = []
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i!==j && (words[i]=== '' || words[j]=== '' || words[i][0] === words[j][words[j].length-1]) ){
                if(isHuiWen(words[i] + words[j])){
                    res.push([i,j])
                }
            }
        }
    }
    return res
};

function isHuiWen(str){
    let l = 0, r = str.length-1
    while(l<r){
        if(str[l] !== str[r]){
            return false
        }
        l++
        r--
    }
    return true
}
