// 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

// 示例 1:

// 输入: J = "aA", S = "aAAbbbb"
// 输出: 3
// 示例 2:

// 输入: J = "z", S = "ZZ"
// 输出: 0

// 1 利用哈希表
var numJewelsInStones = function(J, S) {
    let map = {}
    let res = 0
    for(let i=0;i<S.length;i++){
        map[S[i]] = map[S[i]] || 0
        map[S[i]] ++
    }
    for(let i=0;i<J.length;i++){
        res += map[J[i]] || 0
        console.log(res)
    }
    return res
};

// 2 利用数组reduce
var numJewelsInStones = function(J, S) {
  return S.split('').reduce((prev, val) => {
      return prev + J.includes(val);
  }, 0);
};