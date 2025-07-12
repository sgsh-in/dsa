/**
 * @author Sayantan Ghosh
 * @email sayantan.ghosh03@gmail.com
 * @website https://sgsh.in
 * @description HashTable (HT)
 */

export class HashTable {
  constructor(size = 7) {
    /**
     * the address space for a hastable should be a prime number
     * because that creates a better random position of the elements
     */
    this.dataMap = new Array(size); // we are implementing our hastable using an array, we can also use a LinkedList here
  }

  /**
   *
   * @param {*} key
   * @returns {string} hash - the generated has based on the key
   * @description - this method is O(1) and is one-way and deterministic
   */
  _hash(key) {
    // the definition of this function can be anything and the aim should be to produce hashes with as less collisions as possible
    let hash = "";
    for (let i = 0; i < key.length; ++i) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length; // 23 is a random prime number
    }
    return hash;
  }

  /**
   *
   * @param {*} key key of the object being inserted
   * @param {*} value value of the object being inserted
   * @returns the instance of the HashTable
   */
  set(key, value) {
    // create the hash from the key
    const index = this._hash(key);
    if (!this.dataMap[index]) {
      /**
       * We are implementing separate chaining for hash collision resolution.
       * The other very common technique is Linear Probing which is an open-addressing technique
       * Hence, if a collision in the index inside the dataMap arises, we need to
       * push the current [key, value] pair into an array present in 'index' position in dataMap
       */
      this.dataMap[index] = [];
    }
    /**
     * if an array (empty / non-empty) is already present in the dataMap at 'index' position,
     * we need to push the current [key, value] pair into that array
     */
    this.dataMap[index].push([key, value]);
    return this;
  }

  /**
   *
   * @param {*} key key to be searched in the HashTable
   * @returns the value for the given key, undefined if nothing is present
   */
  get(key) {
    // create the hash from the key
    const index = this._hash(key);
    // check if anything is present in the dataMap at the position 'index'
    if (this.dataMap[index]) {
      // loop through the array present in this position and find out if the element with the 'key' exists
      for (let i = 0; i < this.dataMap[index].length; ++i) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]; // [1] holds the value and [0] holds the key, check the set(key, value) method for more details
        }
      }
    }
    return undefined; // if the given key is not present in the HashTable, we return undefined
  }

  /**
   *
   * @returns array of all the keys present in the HashTable
   */
  keys() {
    // we will return an array of all the keys present in the HashTable
    const keySet = new Set(); // this will filter out duplicate keys which will occur due to separate chaining
    for (let i = 0; i < this.dataMap.length; ++i) {
      /**
       * we are looping each element in the dataMap to
       * check if there is any array with [key, value] pairs or not
       */
      if (this.dataMap[i]) {
        /**
         * we will only run the inner for loop for the arrays that could be present
         * in the individual index in the dataMap, if and only if something is present
         * in the said indices, otherwise, we will simply skip this interation
         */
        for (let j = 0; j < this.dataMap[i].length; ++j) {
          if (this.dataMap[i][j]) {
            keySet.add(this.dataMap[i][j][0]); // [0] since that holds the key
          }
        }
      }
    }
    return Array.from(keySet); // converting the set to an array
  }

  /**
   *
   * @description print the entire HashTable
   */
  printHashTable() {
    if (!(Array.isArray(this.dataMap) && this.dataMap.length > 0)) {
      console.log("The HashTable is empty!");
      return;
    }

    console.log("HashTable:");
    this.dataMap.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        let bucketString = bucket
          .map(([key, value]) => `[${key}: ${value}]`)
          .join(" => ");
        console.log(`  ${index}: ${bucketString} => null`);
      } else {
        console.log(`  ${index}: empty`);
      }
    });
  }
}
