import mergeSort from "./mergesort.js";

function node(data, leftNode, rightNode) {
  return { data, leftNode, rightNode };
}
function tree() {
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

  return {buildTree}
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
export { tree, prettyPrint };
