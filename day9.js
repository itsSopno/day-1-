// Problem 41 
//  Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.

// Solutions = 
function twoSum(arr, target){
    const numMap = new Map()
    for(let i = 0; i < arr.length; i++){
        const complement = target - arr[i]
        if(numMap.has(complement)){
            return [numMap.get(complement), i]
        }
        numMap.set(arr[i], i)
    }
    return []
}

// Test 
const nums = [2, 7, 11, 15]
const target = 9
console.log("Problem 41 Result:", twoSum(nums, target))