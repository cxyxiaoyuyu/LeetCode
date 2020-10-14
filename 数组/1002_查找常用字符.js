// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
// 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]

// 1 等量替换
var commonChars = function(A){
  let ans = []
  for(let s of A[0]){
    if(A.every(str => str.includes(s))){
      A = A.map(str => str.replace(s,''))
      ans.push(s)
    }
  }
  return ans
}

// 2 封装求数量的方法  根据python得到
var commonChars = function(A) {
  const keys = new Set(A[0]) // 以第一个作为基准
  let ans = ''

  for(let key of keys){
      let minCount = Infinity
      for(let str of A){
          minCount = Math.min(minCount,count(str,key))
      }
      ans += key.repeat(minCount)
  }
  return ans.split('')
};

function count(str,key){
  let count = 0
  for(let s of str){
      if(s === key){
          count ++
      }
  }
  return count
}

// python 代码
// def commonChars(self, A: List[str]) -> List[str]:
//   if not A:
//       return A
  
//   # 以第一个作为基准
//   keys = set(A[0])
//   res = []

//   for key in keys:
//       m = min(a.count(key) for a in A)
//       res.extend([key]*m)

//   return res