array = [9, 5, 1, 4, 7, 8, 3, 2, 6];
// 是一个就地排序
heapSort = (arr) => {
  // O(N*logN)
  const heap = heapify(arr);
  // O(N*logN)
  for (let i = 0; i < heap.length - 1; i++) {
    // extractMax max 将最大值放到最后一个 也就是heap.length - i的位置
    extractMax(heap, 0, heap.length - i);
  }
  //
  return heap;
};
heapSort(array);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
