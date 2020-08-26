// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// let map = {1:'',2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}

// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// dfs 自己写的
var letterCombinations = function(digits) {
    if(digits === '') return [] 
    let map = {1:'',2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
    let res = []
    let len = digits.length
    const dfs = (start,path)=>{
        if(path.length === len){
            let str = path.join('')
            res.push(str)
            return 
        }

        for(let i=start;i<len;i++){
            for(let j=0;j<map[digits[i]].length;j++){
                path.push(map[digits[i]][j])
                dfs(i+1,path)
                path.pop()
            }
        }
    }

    dfs(0,[])
    return res
}

// dfs 另一个版本 大神的代码
var letterCombinations = function(digits) {
    if(digits === '') return [] 
    let map = {1:'',2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
    let res = []
    let len = digits.length
    const generate = (curStr, i) => { // curStr是当前字符串，i是扫描的指针
    if (i == digits.length) { // 指针越界
      res.push(curStr);       // 将解推入res
      return;
    }
    const letters = map[digits[i]]; // 当前数字对应有哪些字母
    for (const l of letters) {      // 遍历这些字母，向下递归
      generate(curStr + l, i + 1);  // 生成一个新的字符串，i指针右移，递归
    }
  };
  generate('', 0); // 递归的入口，初始字符串为''，指针为0
  return res;
}