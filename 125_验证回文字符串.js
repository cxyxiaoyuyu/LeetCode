// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 示例 2:

// 输入: "race a car"
// 输出: false

// 1. 双指针
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    let reg = /[0-9a-zA-Z]/
    while(left < right){
        while(left < right && !reg.test(s[left])){
            left ++
        }

        while(left < right && !reg.test(s[right])){
            right --
        }
        // console.log(left,s[left],right,s[right])
        if(s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
            return false
        }
        left ++ 
        right --
    }
    return true
};

// 2. 先过滤掉其他字符  循环一半长度
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g,'').replace(/[A-Z]/g,(value)=> value.toLocaleLowerCase())
    let n = s.length
    let half = s.length >> 1
    for(let i=0;i<half;i++){
        if(s[i] !== s[n-1-i]){
            return false
        }
    }
    return true
}

