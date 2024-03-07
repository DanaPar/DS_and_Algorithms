//Create a function that reverses a string:
//'Hi My name is Dana' should be:
//'anaD si eman yM iH'

function reverse(str) {
    //check of input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return str;
    }

    const backwards = [];
    const totalItems = str.length -1; //how many items we have in string
    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join(''); //or .join()
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

reverse2('Dana');


