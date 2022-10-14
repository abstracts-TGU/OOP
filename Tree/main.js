import Tree from "./Tree.js"

let tree = new Tree()
tree.addItem(80);
tree.addItem(81);
tree.addItem(70);
tree.addItem(75);
tree.addItem(72);
tree.addItem(71);
tree.addItem(74);
tree.addItem(60);
tree.addItem(50);
tree.addItem(55);


console.log(tree.toString())
console.log(tree.deleteRoot(70));
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