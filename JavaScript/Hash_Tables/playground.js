let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('aaaaaaaaahhhhh!');
    }
}

user.age // O(1)
user.spell = 'abrakadabra' //O(1)
user.scream() // O(1)

//O(n/k) k-size of hash table O(n)