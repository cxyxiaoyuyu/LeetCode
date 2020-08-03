// 2020-08-03  简单

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

// 模拟竖式加法 自己写的
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0
    let ans = ''
    while(i>=0 || j>=0){
        let value
        if(i >= 0 && j >= 0 ){
            value = +num1[i] + +num2[j] + add
            i--
            j--  
        }else if(i>=0){
            value = +num1[i] + add
            i--
        }else{
            value = +num2[j] + add
            j--
        }
        add = parseInt(value / 10)
        ans = value % 10 + ans
    }
    if(add){
        ans = add + ans
    }
    return ans
};