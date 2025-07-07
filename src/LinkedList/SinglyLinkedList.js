/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description SinglyLinkedList
 */

class Node {
  constructor(value) {
    /**
     * A SinglyLinkedList node contains the value and the next pointer
     */
    this.value = value;
    this.next = null;
  }
}

// SinglyLinkedList class
export class SinglyLinkedList {
  constructor() {
    /**
     * A SinglyLinkedList constructor may or may not create a new node by default.
     * In this implementation a new node is not getting created giving flexibility
     * to create an empty linked list
     */
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @description push a new node to the end of a SinglyLinkedList
   * @param {*} value
   * @returns {this} linked list instance
   */
  push(value) {
    // create new node
    const newNode = new Node(value);
    if (!this.head) {
      // check if the linked list is empty, point head and tail to newly created node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // else point the next pointer of the tail to the new node
      this.tail.next = newNode;
      // move the tail to this new node to update the pointer
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  /**
   * @description pop a node (if possible) from the end of a SinglyLinkedList
   * @returns the popped node
   */
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = temp; // to track the second last node
      while (temp.next !== null) {
        // traverse till temp points to the last node and the prev pointer points to the second last node
        prev = temp;
        temp = temp.next;
      }
      // point the tail to the second last node
      this.tail = prev;
      this.tail.next = null; // detach the last node
    }
    --this.length;
    // return the popped node
    return temp;
  }

  /**
   * @description insert a node at the beginning of the SinglyLinkedList
   * @param {*} value
   * @returns {this} linked list instance
   */
  unshift(value) {
    // create a new node
    const newNode = new Node(value);
    // if the linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // point the new node's next pointer to the head
      newNode.next = this.head;
      // update the head pointer
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  /**
   * @description remove an item from the beginning of the SinglyLinkedList
   * @returns the removed node
   */
  shift() {
    // if the list is empty
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  /**
   * @description get an item from the SinglyLinkedList based on index (0 based)
   * @param {number} index
   * @returns {Node | undefined} the Node based on index. undefined for invalid index
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; ++i) {
      temp = temp.next;
    }
    return temp;
  }

  /**
   * @description set the value of a node based on the provided index (0 based)
   * @param {number} index
   * @param {*} value
   * @returns {boolean} true if set operation was sucecssful, false otherwise
   */
  set(index, value) {
    // find the node based on index
    const node = this.get(index);
    if (!node) return false; // all boundary checks is automatically handled by the get method
    node.value = value;
    return true;
  }

  /**
   * @description inserts a node at any poistion of the list
   * @param {number} index
   * @param {*} value
   * @returns {boolean} true if the insert operation was successful, false otherwise
   */
  insert(index, value) {
    if (index === 0) {
      const ref = this.unshift(value); // this condition is already implemented in this method
      return !!ref;
    }
    if (index === this.length) {
      const ref = this.push(value); // this condition is already implemented in this method
      return !!ref;
    }
    if (index < 0 || index > this.length) return false;
    const prev = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = prev.next;
    prev.next = newNode;
    ++this.length;
    return true;
  }

  /**
   * @description remove an item from the list at the given index if possible
   * @param {number} index
   * @returns {Node} removed node
   */
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const prev = this.get(index - 1);
    const curr = prev.next;
    prev.next = curr.next;
    curr.next = null; // this detaches the current node from the list otherwise the next node would have pointers from both current node and the previous node
    --this.length;
    return curr;
  }

  /**
   * @description reverses a linked list
   * @returns {*} the linked list instance
   */
  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;
    // swap the head and tail pointers
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    // initial prev and next pointers to facilitate the reverse operation
    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; ++i) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  /**
   * @description print all the nodes of the linked list
   */
  printList() {
    if (!this.head) console.log("The SinglyLinkedList is empty!");
    let temp = this.head;
    let finalString = "";
    while (temp != null) {
      finalString += temp.value + " -> ";
      temp = temp.next;
    }
    finalString += "null";
    console.log(finalString);
  }
}
