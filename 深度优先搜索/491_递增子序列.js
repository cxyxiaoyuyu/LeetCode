// 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。

// 示例:

// 输入: [4, 6, 7, 7]
// 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

// 1 dfs 递归回溯 迭代 
const findSubsequences = (nums) => {
    let res = []
    let set = new Set()  // 为了去重
    let len = nums.length

    const dfs = (start,path) =>{
        if(path.length >=2){
            const str = path.join(',')
            if(!set.has(str)){
                res.push(path.slice())  // 推入一份拷贝，path还要继续用
                set.add(str)
            }
        }
        for(let i=start;i<len;i++){
            let prev = path[path.length - 1]
            let cur = nums[i]
            if(path.length === 0 || prev <= cur){
                path.push(cur)
                dfs(i+1,path)
                let value = path.pop()  
                while(nums[i+1] === value){    // 避免压入重复的元素
                    i++
                }
            }
        }
    }

    dfs(0,[])
    return res
}

// 2 不用set去重  目前看不懂的算法
const findSubsequences = (nums) => {
    const res = [];
    const len = nums.length;
  
    const dfs = (start, path) => {
      if (start == len) {        // 指针已经越界
        if (path.length >= 2) {
          res.push(path.slice());
          return;
        }
      }
      path.push(nums[start]); // 选择
      for (let i = start + 1; i <= len; i++) {
        const prev = nums[start];
        const cur = nums[i];
        if (i < len && cur == prev) { // i还没越界，且当前选择和前一个选择相同
          dfs(i, path);              
          break;                      
        } else if (i == len || prev < cur) { // i已经越界，放它进递归，在递归中return
          dfs(i, path);                      // 或prev < cur，满足条件，往下递归
        }
      }
      path.pop(); // 撤销选择
    };
    for (let i = 0; i < len; i++) {
      dfs(i, []);
    }
    return res;
  }

// 想请问一下楼主，如果对于[4,2,7,8,7]这种情况，第一个[4,7]之后选择的是[4,8]，然后再[4,7]，第二个[4,7]是怎么去重的