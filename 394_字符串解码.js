// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例 1：
// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"

// 示例 2：
// 输入：s = "3[a2[c]]"
// 输出："accaccacc"

// 栈  保存当前数字以前的字符串结果 
var decodeString = function(s) {
    let res = ''
    let n = s.length
    let stack = []
    let num = 0
    let str = ''
    for(i=0;i<n;i++){
        if(s[i] >= 0 && s[i] <= 9){
            num = num*10 + +s[i]
        }else if(s[i] === '['){
            stack.push([num,res])
            num = 0
            res = ''
        }else if(s[i] === ']'){
            let [num,before] = stack.pop()
            res = before + res.repeat(num) 
        }else{
            res += s[i]
        }
    }
    return res
};