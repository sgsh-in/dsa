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
const ll1 = new LinkedList();
ll1.push(2);
ll1.push(3);
ll1.printList();
