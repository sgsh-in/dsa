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

// LinkedList class
class LinkedList {
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
    let prev = temp; // to track the second last node
    while (temp.next !== null) {
      // traverse till temp points to the last node and the prev pointer points to the second last node
      prev = temp;
      temp = temp.next;
    }
    // point the tail to the second last node
    this.tail = prev;
    this.tail.next = null; // detach the last node
    --this.length;
    if (this.length === 0) {
      /**
       * if linked list only has 1 node, after the
       * reduction of length, we will see that the head and tail
       * still points to the removed node
       */
      this.head = null;
      this.tail = null;
    }
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
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      /**
       * if linked list only has 1 node, after the
       * reduction of length, we will see that the tail
       * still points to the removed node
       */
      this.tail = null;
    }
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
   * @description print all the nodes of the linked list
   */
  printList() {
    if (!this.head) console.log("The LinkedList is empty!");
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

// Tests
// create the linked list
const ll1 = new LinkedList();
// print list
ll1.printList();

// push some items
console.log("\nOperation push - 1,2,3,4,5,6");
ll1.push(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
ll1.push(5);
ll1.push(6);
// print list
ll1.printList();

// pop 3 items
console.log("\nOperation pop 3 times");
ll1.pop();
ll1.pop();
ll1.pop();
// print list
ll1.printList();

// push a new item
console.log("\nOperation push - 9");
ll1.push(9);
// print list
ll1.printList();

// unshift 2 tems
console.log("\nOperation unshift 2 times - 10,17");
ll1.unshift(10);
ll1.unshift(17);
// print list
ll1.printList();

// shift 1 time
console.log("\nOperation shift 1 time");
ll1.shift();
// print list
ll1.printList();

// find elements at position -1, 0, 2, 4 and 11
console.log("\nOperation get - (index) -  -1,0,2,4,11");
console.log(ll1.get(-1));
console.log(ll1.get(0));
console.log(ll1.get(2));
console.log(ll1.get(4));
console.log(ll1.get(11));

// set the value of the node at index 2 = 123
console.log("\nOperation set at index 2 value 123");
ll1.set(2, 123);
// print list
ll1.printList();

// insert an item at index 3
console.log("\nOperation insert at index 3, value 456");
ll1.insert(3, 456);
// print list
ll1.printList();

// remove the node at index = 1
console.log("\nOperation remove - (index) - 1");
ll1.remove(1);
// print list
ll1.printList();
