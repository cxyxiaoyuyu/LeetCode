// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:
// 输入: 4
// 输出: 2

// 示例 2:
// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842... 由于返回类型是整数，小数部分将被舍去。

// 1 暴力枚举
var mySqrt = function(x) {
    for(let i=0;i<=x;i++){
        if(i**2 === x){
            return i
        } 
        if(i**2 > x){
            return i-1
        }
    }
    return x
}

// 2 二分查找  有点小坑 值得深思 哈哈哈
// 取右中位数可能会好理解点
var mySqrt = function(x){
    let l = 0, r = x
    while(l<=r){
        let mid = l + ((r-l) >> 1)
        if(mid**2 === x){
            return mid
        }else if(mid**2 > x){
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    return l - 1 
}
