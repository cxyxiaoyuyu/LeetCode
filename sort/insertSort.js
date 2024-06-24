const generateArr = require('./random')

const arr = generateArr(10)
// [8,9,2]  [1,8,9,2]
const insertSort = (arr) => {
  let n = arr.length
  for(let i=1;i<arr.length;i++){
    let tmp = arr[i]
    let j = i - 1
    while(arr[j] > tmp && j>=0){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = tmp
  }
  return arr
}

const sort_arr = insertSort(arr)
console.log(sort_arr)