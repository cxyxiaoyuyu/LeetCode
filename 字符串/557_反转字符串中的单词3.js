// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例：

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

// 1 利用正则分割字符串 依次反转
var reverseWords = function(s) {
    let res = []
    let words = s.split(/\s+/)
    for(let word of words){
        res.push(word.split('').reverse().join(''))
    }
    return res.join(' ')
};