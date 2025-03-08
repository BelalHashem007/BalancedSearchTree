import {tree} from "./bst.js";
const newTree = tree();
const newTree2 = tree();
const newTree3 = tree();
newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree2.buildTree([50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45, 55, 65, 75, 85]);


newTree2.insert(90)
newTree2.prettyPrint();
console.log(newTree2.getHeight(newTree2.find(50)))