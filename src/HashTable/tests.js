const { HashTable } = require(".");

const testHashTable = () => {
  console.log(
    "=======================\n HashTable (HT)\n======================="
  );
  // create the HashTable instance
  const ht = new HashTable();
  // print HT
  ht.printHashTable();

  // set some items
  console.log("\nOperation set - {name: Sayantan}, {age: 30}");
  ht.set("name", "Sayantan");
  ht.set("age", 30);
  // print HT
  ht.printHashTable();

  // set some other items that can cause conflict
  console.log("\nOperation set - {name: Suchismita}, {age: 27}");
  ht.set("name", "Suchismita");
  ht.set("age", 27);
  // print HT
  ht.printHashTable();

  // get some items
  console.log("\nOperation get - name,age");
  console.log(ht.get("name"));
  console.log(ht.get("age"));

  // print all the keys present in the HashTable
  console.log("\nOperation keys");
  console.log(ht.keys());

  // set another item in the hash table that will definitely not cause a conflict
  console.log("\nOperation set - {relationship: My everything <3}");
  ht.set("relationship", "My everything <3");
  // print HT
  ht.printHashTable();
};

switch (process?.argv?.[2]) {
  case "ht": {
    testHashTable();
    break;
  }
  default: {
    break;
  }
}
