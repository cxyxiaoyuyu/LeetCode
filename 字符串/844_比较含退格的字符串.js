// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 示例 1：
// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。

// 示例 2：
// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。

// 1 按照题意解析
var backspaceCompare = function(S, T) {
  const parse = (str)=>{
      const stack = []
      for(let s of str){
          if(s === '#'){
              stack.pop()
          }else{
              stack.push(s)
          }
      }
      return stack.join('')
  }
  return parse(S) === parse(T)
};