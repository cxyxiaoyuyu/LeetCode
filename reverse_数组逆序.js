// 递归逆序数组
function reverse(arr){
    let n = arr.length
    if(arr.length <= 1){
        return arr
    }else{
        return [arr[n-1]].concat(reverse(arr.slice(0,n-1)))
    }
}

// 循环逆序数组
// function reverse(arr){
//     let res = []
//     for(let i=arr.length-1;i>-1;i--){
//         res.push(arr[i])
//     }
//     return res
// }

console.log(reverse([1,2,3,4]))