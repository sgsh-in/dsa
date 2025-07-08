/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description DoublyLinkedList
 */

class Node {
  constructor(value) {
    /**
     * A DoublyLinkedList node contains the value, the next pointer and the prev pointer
     */
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList class
export class DoublyLinkedList {
  constructor() {
    /**
     * A DoublyLinkedList constructor may or may not create a new node by default.
     * In this implementation a new node is not getting created giving flexibility
     * to create an empty linked list
     */
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @description push a new node to the end of a DoublyLinkedList
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
      // point the prev pointer of the new node to the current tail node
      newNode.prev = this.tail;
      // move the tail to this new node to update the pointer
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  /**
   * @description pop a node (if possible) from the end of a DoublyLinkedList
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
      this.tail.next = null; // detach the tail from the last node
      temp.prev = null; // detach the last node properly from the list
    }
    --this.length;
    // return the popped node
    return temp;
  }

  /**
   * @description insert a node at the beginning of the DoublyLinkedList
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
      // point the current head pointer node's prev to the new node
      this.head.prev = newNode;
      // update the head pointer
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  /**
   * @description remove an item from the beginning of the DoublyLinkedList
   * @returns the removed node
   */
  shift() {
    // if the list is empty
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null; // detach the current head's prev from the node to be removed
      temp.next = null; // detach the 1st node of the list properly
    }
    this.length--;
    return temp;
  }

  /**
   * @description get an item from the DoublyLinkedList based on index (0 based)
   * @param {number} index
   * @returns {Node | undefined} the Node based on index. undefined for invalid index
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    // slight optimisation to check if the index lies in the 1st half or the second half of the list
    if (index < this.length / 2) {
      for (let i = 0; i < index; ++i) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; --i) {
        temp = temp.prev;
      }
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
    const next = prev.next; // this is O(1)
    const newNode = new Node(value);
    newNode.next = next;
    newNode.prev = prev;
    prev.next = newNode;
    next.prev = newNode;
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
    const curr = prev.next; // this is O(1)
    prev.next = curr.next;
    curr.next.prev = prev;
    curr.next = null; // this detaches the current node from the list otherwise the next node would have pointers from both current node and the previous node
    curr.prev = null; // this detaches the current node from the list otherwise the prev node would have pointers from both current node and the next node
    --this.length;
    return curr;
  }

  /**
   * @description print all the nodes of the linked list
   */
  printList() {
    if (!this.head) console.log("The DoublyLinkedList is empty!");
    let temp = this.head;
    let finalString = "";
    if (temp !== null) finalString += "null <= ";
    while (temp != null) {
      finalString += temp.value + " <=> ";
      temp = temp.next;
    }
    finalString += "null";
    console.log(finalString);
  }
}
