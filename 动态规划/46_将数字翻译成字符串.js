// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

// 动态规划 类似于198打家劫舍

var translateNum = function(num) {
    var num_str = num.toString()
    var n = num_str.length
    var d = [1]
    d[-1] = 1
    for(let i=1;i<n;i++){
        let dig = +num_str.substr(i-1,2)
        if(dig >= 10 && dig <=25){
            d[i] = d[i-1] + d[i-2]
        }else{
            d[i] = d[i-1]
        }
    }
    return d[n-1]
};
