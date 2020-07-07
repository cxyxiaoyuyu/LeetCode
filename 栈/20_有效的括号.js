// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 栈
var isValid = function(s) {
    let stack = []
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i])
        }else if(s[i] === ')'){
            if(stack.pop() !== '(' ){
                return false
            }
        }else if(s[i] === ']'){
            if(stack.pop() !== '[' ){
                return false
            }
        }else{
            if(stack.pop() !== '{' ){
                return false
            }
        }
    }
    return stack.length === 0 
}

// 利用对象优化代码
var isValid = function(s) { 
    let map= { '}': '{', ')': '(' , ']': '[' }
    let stack = []
    for(char of s){
        if(!(char in map)){
            stack.push(char)
        }else{
            if(stack.pop() !== map[char]){
                return false
            }
        }
    }
    return stack.length === 0
}