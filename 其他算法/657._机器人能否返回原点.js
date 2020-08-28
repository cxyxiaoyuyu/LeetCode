// 1 模拟
var judgeCircle = function(moves) {
    let x = 0
    let y = 0
    let map = {R: [1,0],L: [-1,0],U: [0,1],D:[0,-1]}
    for(let arrow of moves){
        x += map[arrow][0]
        y += map[arrow][1]
    }
    return x===0 && y===0
};