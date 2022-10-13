import Tree from "./Tree.js"

let tree = new Tree()
tree.addItem(5);
tree.addItem(3);
tree.addItem(6);
tree.addItem(2);
tree.addItem(100);
console.log(tree.toString())

/*
5
 #
 6
  #
  15
   #
   25
*/ 