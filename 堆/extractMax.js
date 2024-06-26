heap = [64, 60, 48, 45, 59, 35, 17, 23, 10, 26, 31];
extractMax = (heap, start, end) => {
  const max = heap[start];
  heap[start] = heap[end - 1];
  heap[end - 1] = max; //
  siftDown(heap, start, end - 1); // start
  return max;
};
max = extractMax(heap, 0, heap.length);
heap.pop(); //
console.log(max, heap);
// 64, [60, 59, 48, 45, 31, 35, 17, 23, 10, 26]
