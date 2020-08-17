// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

var addBinary = function(a, b) {
    let add = 0
    let la = a.length
    let lb = b.length
    let i = la - 1
    let j = lb - 1
    let res = ''
    while(i > -1 || j > -1){
        let num = (+a[i] || 0) + (+b[j] || 0)
        if(add){
            num += add
        }
        if(num >= 2){
            num = num - 2
            add = 1
        }else{
            add = 0
        }
        res = num + res
        i--
        j--
    }
    return add ? add+res : res
}
