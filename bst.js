function node(data, leftNode = null, rightNode = null) {
  return { data, leftNode, rightNode };
}

function BST(array, start = 0, end = array.length - 1) {
  if (start > end) return null;
  const middle = Math.floor((start + end) / 2);
  const root = node(array[middle]);

  root.leftNode = BST(array, start, middle - 1);
  root.rightNode = BST(array, middle + 1, end);

  return root;
}

function buildTree(array) {
  const uniqueArr = [...new Set(array)];
  const sortedArr = mergeSort(uniqueArr);
  const root = BST(sortedArr);
  return root;
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightNode !== null) {
    prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftNode !== null) {
    prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
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

export { buildTree, prettyPrint };
