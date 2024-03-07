//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
} // O(n^2)
//space complexity O(1)

function firstRecurringCharacter2(input) {
    let map = {};
    for  (let i = 0; i < input.length; i++) {
        if(map[input[i]]) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined;
} // O(n)
// space complexity O(n)


arange = firstRecurringCharacter2( [2,5,5,2,3,5,1,2,4])
console.log(arange)

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


// ****** need to work on this code, it doesnt work correctly