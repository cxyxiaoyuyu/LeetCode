// 给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，
// 随后玩家 2 继续从剩余数组任意一端拿取分数，然后玩家 1 拿，…… 。每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。

// 给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化。

// 示例 1：
// 输入：[1, 5, 2]
// 输出：False
// 解释：一开始，玩家1可以从1和2中进行选择。
// 如果他选择 2（或者 1 ），那么玩家 2 可以从 1（或者 2 ）和 5 中进行选择。如果玩家 2 选择了 5 ，那么玩家 1 则只剩下 1（或者 2 ）可选。
// 所以，玩家 1 的最终分数为 1 + 2 = 3，而玩家 2 为 5 。
// 因此，玩家 1 永远不会成为赢家，返回 False 。

// 1 递归
function PredictTheWinner(nums){
  let n = nums.length
  const helper = (i,j) => {
      if(i===j){ return nums[i] }
      if(i+1 === j) return Math.abs(nums[i] - nums[j])

      let pickI = nums[i] - helper(i+1,j)
      let pickJ = nums[j] - helper(i,j-1)
      return Math.max(pickI,pickJ)
  }
  return helper(0,n-1) >=0
}
