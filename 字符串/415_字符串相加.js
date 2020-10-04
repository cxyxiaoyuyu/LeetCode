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

// 官方题解 代码精简 可以
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    let ans = ''
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? +num1.charAt(i) : 0;
        const y = j >= 0 ? +num2.charAt(j) : 0;
        const result = x + y + add;
        ans = result%10 + ans
        add = Math.floor(result / 10);
        i --
        j --
    }
    return ans
};

// 复习 再写一遍
var addStrings = function(num1, num2) {
    let i = num1.length - 1,j = num2.length - 1, add = 0
    let ans = ''
    while(i>=0 || j>=0 || add){
        let sum = (i>=0 ? +num1[i]: 0) + (j>=0? +num2[j]:0 ) + add
        add = Math.floor(sum / 10)
        ans = sum % 10 + ans
        i--
        j--
    }
    return ans
};