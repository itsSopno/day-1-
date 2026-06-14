// Day 6 , es6 
// Problem Number 26 
// Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// // Hint: Use: const { firstName: name, lastName, age } = user; 
// Solutions : 
const user = {
    firstName:"Monkey D Luffy",
    lastName:"Luffy",
    age : 19
}

const {firstName:name,lastName , age } = user;
console.log(name)
console.log(lastName)
console.log(age)

// Problem Number 27 
// Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.
// Solutions : 
function mergeArrays(...arrays){
    return arrays.reduce((merged, current) => {
        return [...merged , ...current];
    } , [])
}

console.log(mergeArrays([1,2],[3,4],[5]))