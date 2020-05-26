// 最小钱币问题
function min_money (total_moneys, availabel_money) {
	let count_times = [];
	function result (money, screen_money, c) {
	 // 终止条件 必须有策略，并且保证金钱已经减为0 并且策略内钱币总和等于金钱数
	 if (count_times.length !=0 && money==0 && sum(count_times)==total_moneys) {
	  throw TypeError('找到啦')
	 } else if (c == 0 && money%screen_money[c]!=0) { // 如果策略选择到最后 并且取模不为0，则清空策略
	  // 清空
	  count_times = [];
	  return
	 }
	 
	 // 最大钱币 从最大的开始取
	 for (let i = c; i>= 0; i--) {
	  if (money - screen_money[i] >= 0) { // 相减大于0必有结果定理
	   count_times.push(screen_money[i]);
	   console.log(count_times,money)
	   result(money - screen_money[i], screen_money, i);
	  }
	 }
	 // 如果策略行不通并保证策略内有值，则弹出最后一个
	 if (count_times.length != 0) {
	  count_times.pop();
	  console.log(count_times)
	 }
	//  console.log(count_times)
	} 
	
	try {
	 result(total_moneys, availabel_money, c = availabel_money.length-1);
	 console.log('打死都不可能！！！！');
	} catch(e) {
	 console.log('最少钱币数为：'+count_times.length+'，钱币策略为：'+ count_times);
	}
   }
   total_moneys = 15
   available_money = [5, 10, 20]
   min_money(total_moneys, available_money)