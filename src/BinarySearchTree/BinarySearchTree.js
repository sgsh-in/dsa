/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description BinarySearchTree (BST)
 */

class Node {
  constructor(value) {
    /**
     * A BinarySearchTree node contains the value, the right pointer and the left pointer
     */
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

export class BinarySearchTree {
  constructor() {
    /**
     * A BinarySearchTree constructor may or may not create a new node by default.
     * In this implementation a new node is not getting created giving flexibility
     * to create an empty tree
     */
    this.root = null; // the root of the tree
  }

  /**
   * @description add a new node at the applicable position of a BST
   * @param {*} value
   * @returns {this} the BST instance
   */
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let temp = this.root;
      while (true) {
        /**
         * if a node with same value is already present in the BST, we cannot insert it
         * However, if we are do asked to have duplicate nodes anyway,
         * we can add a new field in the Node object called count, which can store the number of
         * nodes with the same value.
         */
        if (value === temp.value) return undefined;
        if (value < temp.value) {
          // left sub-tree from the currently pointed node (temp)
          if (!temp.left) {
            // if the left sub-tree is not present, we will insert the new node here
            temp.left = newNode;
            return this;
          } else {
            // else, we need to update the currently pointed node to drill down into this sub-tree
            temp = temp.left;
          }
        } else {
          // right sub-tree from the currently pointed node (temp)
          if (!temp.right) {
            // if the right sub-tree is not present, we will insert the new node here
            temp.right = newNode;
            return this;
          } else {
            // else, we need to update the currently pointed node to drill down into this sub-tree
            temp = temp.right;
          }
        }
      }
    }
  }

  /**
   * @description check if a node is present in the BST
   * @param {*} value value to search in the BST
   * @returns {boolean} true if the node exists, false otherwise
   */
  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        // the node, if present, will be definitely in the left sub-tree from the currently pointed (temp)
        temp = temp.left;
      } else if (value > temp.value) {
        // the node, if present, will be definitely in the right sub-tree from the currently pointed (temp)
        temp = temp.right;
      } else {
        // this is the node that is being searched
        return true;
      }
    }
    return false; // if we exit the while loop without returning anything, it means that the value doesn't match with any node in the tree
  }

  /**
   * @description print all the nodes of the tree
   */
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (!node) {
      if (prefix === "") console.log("The Tree is Empty!");
      return;
    }

    if (node.right) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}
