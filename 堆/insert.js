heap = [64, 59, 48, 45, 31, 35, 17, 23, 10, 26];
insert = (heap, item) => {
  heap.push(item); //
  siftUp(heap, heap.length - 1); //
};
siftUp = (heap, i) => {
  if (i === 0) {
    return;
  }
  const parent = parseInt((i - 1) / 2);
  if (heap[i] > heap[parent]) {
    console.log(` ${heap[i]} ${heap[parent]}`);
    //
    [heap[i], heap[parent]] = [heap[parent], heap[i]];
    siftUp(heap, parent);
  }
};
insert(heap, 60);
console.log(heap);
