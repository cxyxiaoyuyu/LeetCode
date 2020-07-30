// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。

// 示例 2:
// 输入: [9,9]
// 输出: [1,0,0]
// 解释: 输入数组表示数字 99。

// 分情况讨论  自己写的
var plusOne = function(digits) {
    let n = digits.length
    let add = 0
    if(digits[n-1] < 9){
        digits[n-1] += 1
        return digits
    }else{                 // === 9
        digits[n-1] = 0
        add = 1
        for(let i=n-2;i>=0;i--){
            if(digits[i] + add === 10){
                add = 1
                digits[i] = 0
            }else{
                digits[i] += 1
                return digits
            }
        }
    }
    return [1,...digits]
}

// 大神写的 对10 求余判断是否有进位  知道没有进位就返回
var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    return [1,...digits]
}