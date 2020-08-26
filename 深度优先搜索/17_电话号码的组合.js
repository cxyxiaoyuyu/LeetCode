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

