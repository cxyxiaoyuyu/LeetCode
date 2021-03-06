// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。
// 假设两个玩家都以最佳状态参与游戏。

// 示例 1：
// 输入：2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。

// 示例 2：
// 输入：3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。

// 1 数学归纳法
// 假设N为偶数时必胜 为奇数时必失败
// 证明

// N=1 和 N = 2时结论成立。
// N = k 时 
// 1 k为奇数 奇数的因子x必为奇数 所以 k-x 为偶数 如果结论成立 偶数必胜 所以k为奇数时必败 结论成立
// 2 k为偶数 偶数的因子x可能为奇数也可能为偶 当选择奇数因子x时  k-x = 奇数  所以偶数必胜  结论成立

function divisorGame(N) {
    return N % 2 == 0;
}
 
// 2 正常递推
// 遍历找到N的因子x  如果 N-x 是必败(false)的 那么N是必胜(true)的  反之N 必败
function divisorGame(N){
    let res = [true,false,true]
    for(let i=3;i<=N;i++){
        for(let j=1;j<i;j++){
            if( i%j===0 && !res[i-j]){
                res[i] = true
            }
        }
    }
    return !!res[N] 
}


