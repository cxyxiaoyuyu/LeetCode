// 1 组合
combine = (n,k)=>{
  let res = []
  const dfs = (path,index) => {
     if(path.length === k){
         res.push(path.slice())  
         return    
     }
      
     for(let i=index;i<n;i++){
         path.push(i)
         dfs(path,i+1)
         path.pop() 
     }
  }
  dfs([],0)
  return res
}

// 2 排列
permutation = (n,k)=>{
  let res = []
  let used = {}
  const dfs = (path)=>{
      if(path.length === k){
          res.push(path.slice())
          return 
      }
      for(let i=0;i<n;i++){
          if(!used[i]){
              path.push(i)
              used[i] = true
              dfs(path)
              path.pop()
              used[i] = false    
          }
      }
  }    
  dfs([])
  return res
}    