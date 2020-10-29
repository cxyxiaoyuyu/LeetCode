const generateArr = require('./random')

const arr = generateArr(10)
// [8,9,2]  [1,8,9,2]
const insertSort = (arr) => {
  let n = arr.length
  for(let i=1;i<arr.length;i++){
    let tmp = arr[i]
    // let j
    // for(j=i;j>=0;j--){
    //   if(arr[j-1] > tmp){
    //     arr[j] = arr[j-1]
    //   }else{
    //     arr[j] = tmp
    //     break
    //   }
    // }
    let j = i
    while(arr[j-1] > tmp && j>=0){
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = tmp
  }
  return arr
}

const sort_arr = insertSort(arr)
console.log(sort_arr)