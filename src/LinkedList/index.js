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
// push some items
ll1.push(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
ll1.push(5);
ll1.push(6);
// print list
ll1.printList();
// pop 3 items
ll1.pop();
ll1.pop();
ll1.pop();
// push a new item
ll1.push(9);
// unshift 2 tems
ll1.unshift(10);
ll1.unshift(17);
// shift 1 time
ll1.shift();
// print list
ll1.printList();
