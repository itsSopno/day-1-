// Day 1 

// Problem number 16 
// Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.
// Solution : 
function countProperties(obj){
    return Object.keys(obj).length;
}
console.log(countProperties({a:1, b:2, c:3}))

// Problem number 17 
// Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().
// Soltution : 
function mergeObjects(obj1,obj2){
    return {...obj1,...obj2}
}

console.log(mergeObjects({a:1,b:2}, {c:3,d:4}))

// Problem Number 18 
// FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.
// Solutions :
function fizzBuzz(n){
    for(i=1;i<=n;i++){
        if(i%3===0&&i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(15)

// Problem Number 19 
// Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

//  Soltutions :
function invertObject(obj){
    let result = {}
for(let key in obj){
    let value = obj[key]
    result[value] = key
}
return result 
}
console.log(invertObject({a:1,b:10,c:100}))

// Problem Number 20
//  Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.
// Soltutions : 
function findDuplicate(arr){
    const count = {};
    const duplicates = [];
    for(let number of arr){
        count[number.name] = (count[number.name]||0) + 1 ; 

    }
    for(let name in count ){
        if(count[name] > 1 ){
            duplicates.push(name);
        }
    }
    return duplicates
}
const data = [
    {
        name : "Ali"
    },{
        name:"Sara"
    },{
        name:"Sheikh Hasina"
    },{
        name:"Sara"
    }
]
console.log(findDuplicate(data))