/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。
 * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 
    LRUCache cache = new LRUCache( 2 );

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // 返回  1
    cache.put(3, 3);    // 该操作会使得密钥 2 作废
    cache.get(2);       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得密钥 1 作废
    cache.get(1);       // 返回 -1 (未找到)
    cache.get(3);       // 返回  3
    cache.get(4);       // 返回  4

 */
// 根据题意 想到顺序存储

// 一 数组 耗时太长
var LRUCache = function (capacity) {
  this.array = [];
  this.capacity = capacity;
};
LRUCache.prototype.get = function (key) {
  var index = this.array.findIndex((value) => value.key === key);
  if (index > -1) {
    var value = this.array[index].value;
    this.array.push(this.array[index]);
    this.array.splice(index, 1);
    return value;
  } else {
    return -1;
  }
};
LRUCache.prototype.put = function (key, value) {
  var index = this.array.findIndex((value) => value.key === key);
  if (index > -1) {
    this.array.splice(index, 1);
  } else {
    if (this.array.length === this.capacity) {
      this.array.shift();
    }
  }
  this.array.push({ key, value });
};

// 二 Map
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};
LRUCache.prototype.get = function (key) {
  let value = this.map.get(key);
  if (value !== undefined) {
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};

// 三 哈希表 & 双向链表  时间复杂度O(1)
function ListNode(key = 0, value = 0) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LRUCache(capacity) {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.size = 0;
  this.capacity = capacity;
  this.cache = {};
}

LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};
LRUCache.prototype.removeTail = function () {
  var node = this.tail.prev;
  this.removeNode(node);
  return node;
};
LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    var node = this.cache[key];
    this.moveToHead(node);
    return node.value;
  } else {
    return -1;
  }
};
LRUCache.prototype.put = function (key, value) {
  if (key in this.cache) {
    var node = this.cache[key];
    node.value = value;
    this.moveToHead(node);
  } else {
    var node = new ListNode(key, value);
    this.cache[key] = node;
    this.addToHead(node);
    this.size++;
  }
  if (this.size > this.capacity) {
    var node = this.removeTail();
    delete this.cache[node.key];
    this.size--;
  }
};
