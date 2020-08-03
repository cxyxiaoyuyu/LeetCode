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
function quick_sort_in_place(arr){
    var quick_sort = (arr,start,end)=>{
        if(end - start <=1) return 
        let pivotIndex = handlePivot(arr,start,end)
        quick_sort(arr,start,pivotIndex)
        quick_sort(arr,pivotIndex+1,end)
    }
    quick_sort(arr,0,arr.length)
}

// 原地将小的放左边 大的放右边  找到基准值的下标
function handlePivot(arr,start,end){
    if(end - start <= 1) return end - start - 1
    let k = start + 1
    while(end - k > 0){    
        if(arr[k] > arr[start]){
            swap(arr,k,end-1)   // 当最后一次arr[k] > arr[start]时 会自己跟自己交换
            end --
        }else{
            k++
        }        
    }
    swap(arr,start,k-1)
    return k - 1
}
