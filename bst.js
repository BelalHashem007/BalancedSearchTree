import mergeSort from "./mergesort.js";

function tree() {
  let root = null;

  function node(data, leftNode = null, rightNode = null) {
    return { data, leftNode, rightNode };
  }

  function BST(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    const middle = Math.floor((start + end) / 2);
    const rootNode = node(array[middle]);

    rootNode.leftNode = BST(array, start, middle - 1);
    rootNode.rightNode = BST(array, middle + 1, end);

    return rootNode;
  }

  function buildTree(array) {
    const uniqueArr = [...new Set(array)];
    const sortedArr = mergeSort(uniqueArr);
    root = BST(sortedArr);
    return root;
  }

  function insert(value, tmp =root) {
    if (root == null) return buildTree([value]);
    if (tmp == null) return node(value);
    if (tmp.data ==value) return tmp;
    if (tmp.data >value) tmp.leftNode = insert(value,tmp.leftNode);
    else if (tmp.data < value) tmp.rightNode = insert(value,tmp.rightNode);

    return tmp;
    /*if (root == null) return (root = nodeToBeInserted); // iterativeMethod!
    let tmp = root;
    while (true) {
      if (value > tmp.data) {
        if (tmp.rightNode == null) {
          tmp.rightNode = nodeToBeInserted;
          return;
        }
        tmp = tmp.rightNode;
      } else if (value < tmp.data) {
        if (tmp.leftNode == null) {
          tmp.leftNode = nodeToBeInserted;
          return;
        }
        tmp = tmp.leftNode;
      } else if ((value = tmp.data)) {
        return console.log("Data already exists.");
      }
    }*/
  }

  function getSuccessor(node) {
    node = node.rightNode;
    while (node.leftNode !== null && node !== null){
      node = node.leftNode;
    }
    return node;
  }
  function deleteItem(value, tmp = root) {
    if (tmp == null) return tmp;
    if (tmp.data > value) tmp.leftNode = deleteItem(value,tmp.leftNode);
    else if (tmp.data < value) tmp.rightNode = deleteItem(value,tmp.rightNode);
    else {
      if (tmp.leftNode == null) return tmp.rightNode;
      else if (tmp.rightNode ==null) return tmp.leftNode;
      else {
        let succ = getSuccessor(tmp);
        tmp.data = succ.data;
        tmp.rightNode = deleteItem(succ.data,tmp.rightNode);
      }
    }
    return tmp;


   /* let tmp = root; iterativeMethod!
    if (root.data == value && root.rightNode == null && root.leftNode == null) {
      root = null;
      return;
    }
    else if (root.data == value){
      let tmp = root;
      tmp = tmp.rightNode;
      let prev = null;
      while (tmp.leftNode != null){
        prev = tmp;
        tmp = tmp.leftNode;
      }
      if (prev == null) {
        tmp.leftNode = root.leftNode;
        root = tmp;
        return;
      } else {
        prev.leftNode = tmp.rightNode;
        tmp.rightNode = root.rightNode;
        tmp.leftNode = root.leftNode;
        root = tmp;
        return;
      }
    }
    let parent = null;
    while (tmp != null) {
      parent = tmp;
      if (tmp.data > value) {
        tmp = tmp.leftNode;
        if (tmp == null) return console.log("Node doesn`t exist!");
        if (tmp.data == value) {
          if (tmp.rightNode == null && tmp.leftNode == null) {
            parent.leftNode = null;
            return;
          } else if (tmp.rightNode == null) {
            parent.leftNode = tmp.leftNode;
            return;
          } else if (tmp.leftNode == null) {
            parent.leftNode = tmp.rightNode;
            return;
          } else {
            const nodeToBeRemoved = tmp;
            tmp = tmp.rightNode;
            let prev = null;
            while (tmp.leftNode != null) {
              prev = tmp;
              tmp = tmp.leftNode;
            }
            if (prev == null) {
              parent.leftNode = tmp;
              tmp.leftNode = nodeToBeRemoved.leftNode;
              return;
            } else {
              parent.leftNode = tmp;
              prev.leftNode = tmp.rightNode;
              tmp.rightNode = nodeToBeRemoved.rightNode;
              tmp.leftNode = nodeToBeRemoved.leftNode;
              return;
            }
          }
        }
      } else if (tmp.data < value) {
        tmp = tmp.rightNode;
        if (tmp == null) return console.log("Node doesn`t exist!");
        if (tmp.data == value) {
          if (tmp.rightNode == null && tmp.leftNode == null) {
            parent.rightNode = null;
            return;
          } else if (tmp.rightNode == null) {
            parent.rightNode = tmp.leftNode;
            return;
          } else if (tmp.leftNode == null) {
            parent.rightNode = tmp.rightNode;
            return;
          }
          else {
            const nodeToBeRemoved = tmp;
            tmp = tmp.rightNode;
            let prev = null;
            while (tmp.leftNode != null) {
              prev = tmp;
              tmp = tmp.leftNode;
            }
            if (prev == null) {
              parent.rightNode = tmp;
              tmp.leftNode = nodeToBeRemoved.leftNode;
              return;
            } else {
              parent.rightNode = tmp;
              prev.leftNode = tmp.rightNode;
              tmp.rightNode = nodeToBeRemoved.rightNode;
              tmp.leftNode = nodeToBeRemoved.leftNode;
              return;
            }
          }
        }
      }
    }*/
  }

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightNode !== null) {
      prettyPrint(
        node.rightNode,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return { buildTree, prettyPrint, insert, deleteItem };
}
export { tree };
