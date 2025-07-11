const { BinarySearchTree } = require(".");

const testBST = () => {
  console.log(
    "=======================\nBinary Search Tree (BST)\n======================="
  );
  // create the BinarySearchTree instance
  const bst = new BinarySearchTree();
  // print BST
  bst.printTree();

  // insert some items
  console.log("\nOperation insert - 47,96,57,102,21,18,24");
  bst.insert(47);
  bst.insert(96);
  bst.insert(57);
  bst.insert(102);
  bst.insert(21);
  bst.insert(18);
  bst.insert(24);
  // print BST
  bst.printTree();

  // operation contains 3 times
  console.log("\nOperation contains - 96,102,22,-100");
  console.log(bst.contains(96));
  console.log(bst.contains(102));
  console.log(bst.contains(22));
  console.log(bst.contains(-100));

  // operation insert - duplicate value
  console.log("\nOperation insert - duplicate value - 18");
  console.log(bst.insert(18));
};

switch (process?.argv?.[2]) {
  case "bst": {
    testBST();
    break;
  }
  default: {
    break;
  }
}
