// var data1 = [
//   {name:'春天', id:'123', detail:'春天在哪里鸭'},
//   {name:'春天', id:'234', detail:'春天在哪里'},
//   {name:'冬天', id:'523', detail:'春天在那绿色的黄焖鸡'},
// ]

// var data2 = [
//   {
//     name: '春天',
//     list: [
//       { name: '春天', id: '123', detail: '春天在哪里鸭'},
//       { name: '春天', id: '234', detail: '春天在哪里'}
//     ]
//   },
//   {
//     name: '冬天',
//     list: [
//       { name: '冬天', id: '523', detail: '白雪皑皑'}
//     ]
//   }
// ]

// var data3 = {
//   '春天': [
//     { name: '春天', id: '123', detail: '春天在哪里鸭'},
//     { name: '春天', id: '234', detail: '春天在哪里'}
//   ],
//   '冬天': [
//     { name: '冬天', id: '523', detail: '白雪皑皑'}
//   ]
// }

// 1. data1 => data2
function format(data){
  let n = data.length
  let map = new Map()
  let index = 0
  let res = []
  for(let i=0;i<n;i++){
    if(map.has(data[i].name)){
      res[map.get(data[i].name)].list.push(data[i])    
    }else{
      map.set(data[i].name,index)
      res.push({name: data[i].name, list: [data[i]]})
    }
  }
  return res 
}

// 2. data1 => data3
function format1(data){
  let n = data.length
  let res = {}
  for(let i=0;i<n;i++){
    if(data[i].name in res){
      res[data[i].name].push(data[i])
    }else{
      res[data[i].name] = [data[i]]
    }
  }
  return res
}

function format2(data){
  let res = {}
  data.forEach(value => {
    res[value.name] = res[value.name] || []
    res[value.name].push(value)
  })
  return res 
}

// 3. data2 => data3
function format3(data){
  let res = []
  for(let key in data){
    res.push({name: key, list: data[key]})
  }
  return res
}

