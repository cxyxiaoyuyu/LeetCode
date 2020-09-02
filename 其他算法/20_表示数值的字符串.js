// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
// 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

// Number 
// Number对于不能转为数值的变量返回 NaN  
// 特殊情况  Number('') 空字符串会返回0  所以特殊判断
var isNumber = function (s) {
  s = s.trim()
  if (s == '') return false
  return !isNaN(Number(s))
}


// isNaN(Number(xxx)) 等价于 isNaN(xxx)
var isNumber = function (s) {
  s = s.trim()
  if (s == '') return false
  return !isNaN(s)
}

// 2 模拟 穷举
var isNumber = function (s) {
  let isNum = false, isDot = false, isSymbol = false, isE = false
  let s1 = s.trim()
  for (let v = 0; v < s1.length; v++) {
    // 不等于空格的判断非常有必要 !!!
    // 这是字符串与数值比较 字符串会转为数值 空字符串会被转换为0  
    // 所以 ' ' >=0 && ' ' <=9  ==> true  也符合条件
    if (0 <= s1[v] && s1[v] <= 9 && s1[v] != ' ') {   
      isNum = true
    } else if (s1[v] == 'e' || s1[v] == 'E') {
      if (!isNum || isE) {
        return false
      }
      isE = true
      isNum = false
    } else if (s1[v] == '.') {
      if (isDot || isE) {
        return false
      }
      isDot = true
    } else if (s1[v] == '-' || s1[v] == '+') {
      if (v != 0 && s1[v - 1] != 'e' && s1[v - 1] != 'E') {
        return false
      }
    } else {
      return false
    }
  }
  return isNum
}