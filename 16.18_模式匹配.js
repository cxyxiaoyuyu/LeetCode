// 你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
// 例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），
// 该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。

// 示例 1： 

// 输入： pattern = "abba", value = "dogcatcatdog"
// 输出： true
// 示例 2：

// 输入： pattern = "abba", value = "dogcatcatfish"
// 输出： false
// 示例 3：

// 输入： pattern = "aaaa", value = "dogcatcatdog"
// 输出： false
// 示例 4：

// 输入： pattern = "abba", value = "dogdogdogdog"
// 输出： true
// 解释： "a"="dogdog",b=""，反之也符合规则

// 一 正则 分组反向引用
function patternMatching(pattern,value){
    if(pattern === ''){
        return value === ''
    }
    let reg = ''
    let a = ''
    let b = ''
    let flag = 1
    for(let char of pattern){
        if(char === 'a'){
            if(a){
                reg += a
            }else{
                reg += '(\\w*)'
                a = `\\${flag}`
                flag ++ 
            }
        }else{
             if(b){
                reg += b
            }else{
                reg += '(\\w*)'
                b = `\\${flag}`
                flag ++ 
            }
        }
    }
    let re = new RegExp('^'+reg+'$')
    let match = re.exec(value)
    return !!match && match[1] !== match[2]   // 第一个分组 !== 第二个分组
}

// 将正则进行到底
var patternMatching = function(pattern, value) {
    if(pattern === '') return value === ''
    let reg = pattern.replace('a','(?<a>\\w*)').replace('b','(?<b>\\w*)')
    reg = reg.replace(/(?<!\<)a/g,'\\k<a>').replace(/(?<!\<)b/g,'\\k<b>')
    let match = new RegExp('^'+reg+'$').exec(value)
    return !!match && match[1] !== match[2]
}

// 枚举