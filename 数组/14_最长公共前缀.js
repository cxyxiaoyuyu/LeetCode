// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// Array.prototype.every
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  let pre = strs[0]

  while(pre){
      if(strs.every(str=>str.startsWith(pre))){
          return pre
      }else{
          const n = pre.length - 1
          pre = pre.substr(0,n)
      }
  }
  return pre
};
