// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
// 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

// Number 
// Number对于不能转为数值的变量返回 NaN  
// 特殊情况  Number('') 空字符串会返回0  所以特殊判断
var isNumber = function(s) {
  s = s.trim()
  if (s == '') return false
  return !isNaN(Number(s))
}


// isNaN(Number(xxx)) 等价于 isNaN(xxx)
var isNumber = function(s) {
  s = s.trim()
  if (s == '') return false
  return !isNaN(s)
}

