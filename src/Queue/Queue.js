/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description Queue
 */

class Node {
  constructor(value) {
    /**
     * A Queue node contains the value and the next pointer similar to
     * a SinglyLinkedList because we are using it to implement the queue
     */
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    /**
     * A Queue constructor may or may not create a new node by default.
     * In this implementation a new node is not getting created giving flexibility
     * to create an empty queue
     */
    this.first = null; // the pointer where the deque happens
    this.last = null; // the pointer where the enque happens
    this.length = 1;
  }

  /**
   * @description add a new node at the last position of a Queue
   * @param {*} value
   * @returns {this} the queue instance
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.last) {
      // check if the queue is empty, if so, point the last pointer and the first pointer to the new node
      this.last = newNode;
      this.first = newNode;
    } else {
      // else point the last node's next to the new node
      this.last.next = newNode;
      // update the last node to point to the newly added node
      this.last = newNode;
    }
    // increase the length of the stack
    ++this.length;
    // return the instance of the stack
    return this;
  }

  /**
   * @description dequeue a node (if possible) from the first position of the queue
   * @returns the popped node
   */
  dequeue() {
    // if the queue is empty, return undefined
    if (!this.first) return undefined;
    // assign a temporary pointer to the first node
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // shift the first node by 1 position
      this.first = this.first.next;
      // detach the previous first node
      temp.next = null;
    }
    // reduce the length of the queue
    --this.length;
    // return the popped node
    return temp;
  }

  /**
   * @description print all the nodes of the queue
   */
  printQueue() {
    if (!this.first) console.log("The Queue is Empty!");
    let temp = this.first;
    let finalString = "";
    while (temp) {
      finalString += (finalString ? " => " : "\nfirst => ") + temp.value;
      temp = temp.next;
    }
    finalString += this.first ? " => null" : "";
    console.log(finalString);
  }
}
