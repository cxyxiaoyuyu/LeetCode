// 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
// 像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
// 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。
// 假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
// 注意：本题相对原题稍作改动，只需返回未识别的字符数

// 示例：

// 输入：
// dictionary = ["looked","just","like","her","brother"]
// sentence = "jesslookedjustliketimherbrother"
// 输出： 7
// 解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。

// 递归 
const respace = (dictionary, sentence)=>{
    let lens = []
    // 过滤掉不在sentence中的单词  并且求每个单词的长度
    dictionary.filter(value => sentence.indexOf(value) > -1)
    .forEach( value => {
        lens.push(value.length)
    })
    lens = Array.from(new Set(lens))   // 去重
    let N = sentence.length
    let i = 0

    function sol(i){
        if(i>=N) return 0
        let tails = [1+ sol(i+1)]

        for(let l of length){
            if((i+l) <= N && sentence.slice(i,i+l) in dictionary){
                tails .push(sol(i+l))
            }
        }
        return Math.min(tails)
    }

    return sol(0)
}
