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

// Problem Number 42 
//  Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.
// Solutions : 
function isAnagram(str1, str2){
    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')
    return sortedStr1 === sortedStr2
}

// Test 
const str1 = 'listen'
const str2 = 'silent'
console.log("Problem 42 Result:", isAnagram(str1, str2))