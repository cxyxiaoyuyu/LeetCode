
// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。


// 普通暴力法   平均用时800ms
function dailyTemperatures(T){
    let n = T.length
    var ans = new Array(n).fill(0)
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(T[j] > T[i]){
                ans[i] = j - i
                break
            }
        }
    }
    return ans
}

  
// 暴力法  逆序  存储温度下标   时间复杂度O(mn)  平均用时200ms
// 第二次循环的时候长度可以控制 
function dailyTemperatures(T){
    let dict = {}
    let n = T.length
    let ans = new Array(n).fill(0)
    
    for(let i=n-1;i>-1;i--){
        let tem = T[i]
        var index = 10**9
        for(let t=tem+1;t<=100;t++){
            index = Math.min(index,dict[t] || index)
        }
        if(index < 10**9){
            ans[i] = index - i
        }
        dict[tem] = i
    }
    return ans
}

// 单调栈