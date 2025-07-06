/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description LinkedList
 */

const { SinglyLinkedList } = require("./SinglyLinkedList");

// Tests
// create the SinglyLinkedList instance
const ll1 = new SinglyLinkedList();
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

// reverse the linked list
console.log("\nOperation reverse");
ll1.reverse();
// print list
ll1.printList();
