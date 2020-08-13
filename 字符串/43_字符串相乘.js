// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

// 模拟竖式乘法  自己写的
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'     // 如果乘数里有0的话 作个判断 否则加法那里会出错
    let n1 = num1.length
    let n2 = num2.length
    let res = ''
    let count = 0
    for(let i=n1-1;i>=0;i--){
        let ans = '', add = 0
        for(let j=n2-1;j>=0;j--){
            let value = +num1[i] * +num2[j] + add
            add = parseInt(value / 10)
            ans = value % 10 + ans
        }
        if(add) ans = add + ans
        ans += '0'.repeat(count)
        res = Add(res,ans)
        count ++ 
    }
    return res
 };
 
 const Add = (a,b) => {
     let i = a.length - 1, j = b.length - 1, add = 0
     let sum = ''
     while(i>=0 || j>=0 || add!=0){
         left = a[i] === undefined ? 0 : +a[i]
         right = b[j] === undefined ? 0: +b[j]
         value = left + right + add
         add = parseInt(value / 10)
         sum = value % 10 + sum
         i--
         j--
     }
     if(add) sum = add + sum
     return sum
 }

 // 也可以用BigInt() 偷个懒 
 const Add2 = (a,b) => {
     return String(BigInt(a) + BigInt(b))
 }


 // 大神的解法  还没研究明白
 const multiply = (num1, num2) => {
    const len1 = num1.length;
    const len2 = num2.length;
    const pos = new Array(len1 + len2).fill(0);
  
    for (let i = len1 - 1; i >= 0; i--) {
      const n1 = +num1[i];
      for (let j = len2 - 1; j >= 0; j--) {
        const n2 = +num2[j];
        const multi = n1 * n2;
        const sum = pos[i + j + 1] + multi;
  
        pos[i + j + 1] = sum % 10;
        pos[i + j] += sum / 10 | 0;
      }
    }
    let res = pos.join('');
    while (res.length && res[0] == '0') {
      res = res.substring(1);
    }
    return res.length ? res : '0';
};
