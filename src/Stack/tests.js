const { Stack } = require(".");

const testStack = () => {
  console.log("=======================\nStack\n=======================");
  // create the Stack instance
  const stack = new Stack();
  // print stack
  stack.printStack();

  // push some items
  console.log("\nOperation push - 1,2,3,4,5,6");
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  // print stack
  stack.printStack();

  // pop 3 items
  console.log("\nOperation pop 3 times");
  stack.pop();
  stack.pop();
  stack.pop();
  // print stack
  stack.printStack();
  // pop 1 time
  console.log("\nOperation pop 1 time");
  stack.pop();
  // print stack
  stack.printStack();
  // pop 1 time
  console.log("\nOperation pop 1 time");
  stack.pop();
  // print stack
  stack.printStack();
  // pop 1 time
  console.log("\nOperation pop 1 time");
  stack.pop();
  // print stack
  stack.printStack();
};

switch (process?.argv?.[2]) {
  case "stack": {
    testStack();
    break;
  }
  default: {
    break;
  }
}
