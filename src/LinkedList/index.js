// Creates a new node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // pushes a new node to the end of a LinkedList
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  // prints the LinkedList
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
