const generateArr = (n,min=0,max=20) => {
  const arr = []
  for(let i=0;i<n;i++){
    arr.push(Math.floor(Math.random()*(max-min+1)+min))
  }
  return arr
}

module.exports = generateArr