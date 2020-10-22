/**
 * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
 * @param meetings: 二维数组, 例 [[10, 20], [20, 30]], 
 * @return int: 需要的会议室的个数, 例 1
 * 另一个测试用例: [[10,20], [19,30]] => 2
 */
minRequiredMeetingsRooms = meetings => {
  let timeLine = []
  meetings.forEach(time => {
    timeLine.push(time[0]);
    timeLine.push(-time[1])
  })
  let min = 0;
  let cur = 0;
  timeLine.sort((a, b) => Math.abs(a) - Math.abs(b)).forEach((t) => {
    if (t >= 0) {
      cur++
      min = Math.max(cur, min)
    } else {
      cur--
    }
  })
  return min
}