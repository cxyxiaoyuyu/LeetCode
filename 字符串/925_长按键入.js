// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

// 示例 1：
// 输入：name = "alex", typed = "aaleex"
// 输出：true
// 解释：'alex' 中的 'a' 和 'e' 被长按。

// 示例 2：
// 输入：name = "saeed", typed = "ssaaedd"
// 输出：false
// 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。

// 1 双指针模拟
var isLongPressedName = function(name,typed){
  let i = 0, j = 0
  while(i<name.length){
    if(name[i] === typed[j]){
      i++
      j++
    }else if(j>0 && typed[j] === typed[j-1]){
      j++  // 说明该次是长按
    }else{
      return false
    }
  }
  // i走完 j还没走完
  while(j<typed.length){
    if(typed[j] !== name[i-1]){  // name的最后一个字符是 name[i-1] 不是name[i] 因为此时i===name.length
      return false
    }else{
      j++
    }
  }
  return true
}

// 优化代码 以j< typed.length 做为终止条件
var isLongPressedName = function(name, typed) {
  let i = 0,j = 0
  while(j < typed.length){
      if(name[i] === typed[j]){
          i++
          j++
      }else if(j>0 && typed[j] === typed[j-1]){
          j++
      }else{
          return false
      }
  }
  return i === name.length
};