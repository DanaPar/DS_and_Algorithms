class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
// _ private property
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        //check if exist
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data;

    } // O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket.length) {
            for(let i = 0; i < currentBucket.length; i++)
            {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    } // O(1) if there is no collisions

    keys() {
        const keysArray = [];
        for(let i =0; i < this.data.length; i++)
        {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    } //O(n) takes even longer time than arrays, because loops through all hash table
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
keys = myHashTable.keys();
console.log(keys);
