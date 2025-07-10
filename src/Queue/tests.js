const { Queue } = require(".");

const testQueue = () => {
  console.log("=======================\nQueue\n=======================");
  // create the Queue instance
  const queue = new Queue();
  // print queue
  queue.printQueue();

  // enqueue some items
  console.log("\nOperation enqueue - 1,2,3,4,5,6");
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  // print queue
  queue.printQueue();

  // dequeue 3 items
  console.log("\nOperation dequeue 3 times");
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  // print queue
  queue.printQueue();
  // dequeue 1 time
  console.log("\nOperation dequeue 1 time");
  queue.dequeue();
  // print queue
  queue.printQueue();
  // dequeue 1 time
  console.log("\nOperation dequeue 1 time");
  queue.dequeue();
  // print queue
  queue.printQueue();
  // dequeue 1 time
  console.log("\nOperation dequeue 1 time");
  queue.dequeue();
  // print queue
  queue.printQueue();
};

switch (process?.argv?.[2]) {
  case "queue": {
    testQueue();
    break;
  }
  default: {
    break;
  }
}
