/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description Stack
 */

class Node {
  constructor(value) {
    /**
     * A Stack node contains the value and the next pointer similar to
     * a SinglyLinkedList because we are using it to implement the stack
     */
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    /**
     * A Stack constructor may or may not create a new node by default.
     * In this implementation a new node is not getting created giving flexibility
     * to create an empty stack
     */
    this.top = null; // the pointer where the insertion and deletion happens in the stack (LIFO)
    this.length = 1;
  }

  /**
   * @description push a new node at the top of the Stack
   * @param {*} value
   * @returns {this} the stack instance
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      // check if the stack is empty, if so, point the top pointer to the new node
      this.top = newNode;
    } else {
      // else point the new node to the current top node
      newNode.next = this.top;
      // update the top node to point to the newly added node
      this.top = newNode;
    }
    // increase the length of the stack
    ++this.length;
    // return the instance of the stack
    return this;
  }

  /**
   * @description pop a node (if possible) from the top of a Stack
   * @returns the popped node
   */
  pop() {
    // if the stack is empty, return undefined
    if (!this.top) return undefined;
    // assign a temporary pointer to the top node
    const temp = this.top;
    // shift the top node by 1 position
    this.top = this.top.next;
    // detach the previous top node
    temp.next = null;
    // reduce the length of the stack
    --this.length;
    // return the popped node
    return temp;
  }

  /**
   * @description print all the nodes of the stack
   */
  printStack() {
    if (!this.top) console.log("The Stack is Empty!");
    let temp = this.top;
    let finalString = "";
    while (temp) {
      finalString += (finalString ? "\n↓" : "\ntop\n⇓") + "\n" + temp.value;
      temp = temp.next;
    }
    finalString += this.top ? "\n↓\nnull" : "";
    console.log(finalString);
  }
}
