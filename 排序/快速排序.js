// 找基准(pivot) 小于等于基准的放在左边 大于基准的放在右边 分别对左右两边递归进行排序


// 1 以第一个元素作为pivot  非原地排序
function quick_sort(arr){
    if(arr.length < 2){
        return arr
    }else{
        let pivot = arr[0]    
        let left = [], right = []   
        for(let i=1;i<arr.length;i++){
            if(arr[i] <= pivot){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return [...quick_sort(left),pivot,...quick_sort(right)]
    }
}

// 原地排序
function quick_sort_in_place(arr,start=0,end=arr.length){

}
