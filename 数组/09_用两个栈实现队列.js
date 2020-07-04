// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
//分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

// 示例 1：
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 示例 2：
// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]


/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var CQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
// 如果栈2 有元素  直接pop  如果没有 就把栈1的元素一个一个取出来 push到栈2中
CQueue.prototype.deleteHead = function() {
    if(this.stack2.length){
        return this.stack2.pop()
    }else{
        while(this.stack1.length){
            let val1 = this.stack1.pop()
            this.stack2.push(val1)
        }
    }
    return this.stack2.pop() || -1
}; 
