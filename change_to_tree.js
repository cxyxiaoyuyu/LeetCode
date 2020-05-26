/**
 * 2020-05-20
 * 将array数组 平面结构 改成树形结构 子节点用children数组表示
 */


// 方法一  一个一个放进去 递归找爸爸 
var array = [
    { id: 9, name: "前端基础设施组", parent: 8 },
    { id: 10, name: "前端业务组", parent: 8 },
    { id: 7, name: "后端开发部门", parent: 5 },
    { id: 8, name: "前端开发部门", parent: 5 },
    { id: 1, name: "CEO", parent: null },
    { id: 2, name: "运营部", parent: 1 },
    { id: 3, name: "财务部", parent: 1 },
    { id: 4, name: "人事部", parent: 1 },
    { id: 5, name: "技术部", parent: 1 },
    { id: 6, name: "产品部", parent: 1 }
] 

getTree(array)

function getTree(arr){
  var tree = {}
  while(array.length > 0){
      var item = array.shift()
      var parentNode = getParent(item,tree)
      if(JSON.stringify(parentNode) === "{}"){
          tree = { ...item, children: []}
      }else if(parentNode){
          parentNode.children.push({...item,children: []})
      }else{
          array.push(item)
      }
  }
  return tree
}
function getParent(item,tree){
  if(item.parent === null || item.parent === tree.id){
      return tree
  }else{
      var children = tree.children || []
      for(let i=0;i<children.length;i++){
          var result = getParent(item,children[i])
          if(result){
              return result
          }
      }
      return null
  }
}


// 方法二  循环递归 一层一层找儿子

// 必须把根节点放在第一个
var array = [
    { id: 1, name: "CEO", parent: null },
    { id: 9, name: "前端基础设施组", parent: 8 },
    { id: 10, name: "前端业务组", parent: 8 },
    { id: 7, name: "后端开发部门", parent: 5 },
    { id: 8, name: "前端开发部门", parent: 5 },
    { id: 2, name: "运营部", parent: 1 },
    { id: 3, name: "财务部", parent: 1 },
    { id: 4, name: "人事部", parent: 1 },
    { id: 5, name: "技术部", parent: 1 },
    { id: 6, name: "产品部", parent: 1 }
] 

covert_tree(array)

function covert_tree(arr,index=0){
    var children = []
    for(let i=0;i<arr.length;i++){
        if(arr[index]['id'] === arr[i]['parent']){
            // 继续往下找子节点
            children.push(covert_tree(arr,i))
        }
    }
    arr[index]['children'] = children
    return arr[index]
}