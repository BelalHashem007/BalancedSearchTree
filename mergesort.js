function mergeSort(array) {
    if (array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    const leftArr = mergeSort(array.slice(0, middle));
    const rightArr = mergeSort(array.slice(middle));
    return merge(leftArr, rightArr);
  }
  function merge(leftArr, rightArr) {
    let i = 0,
      j = 0,
      k = 0;
    let mergedArray = [];
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] > rightArr[j]) {
        mergedArray[k++] = rightArr[j++];
      } else if (leftArr[i] < rightArr[j]) {
        mergedArray[k++] = leftArr[i++];
      }
    }
    if (i < leftArr.length) {
      for (; i < leftArr.length; i++) {
        mergedArray[k++] = leftArr[i];
      }
    }
    if (j < rightArr.length) {
      for (; j < rightArr.length; j++) {
        mergedArray[k++] = rightArr[j];
      }
    }
    return mergedArray;
  }
  export default mergeSort;