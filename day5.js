// Functions & Scope
// Problem number 21  
// Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// // Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).
// Solutions
function factorial(n){
    if(n===0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5))

// Problem number 22 
// Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.
// Solutions :
 function fibonacci(n){
    if(n===0){
        return 0
    }else if(n===1){
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
 }
console.log(fibonacci(6))

// Problem Number 23 
// : Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.
// Solutions : 
function Counter(n){
let counter = 0 ;
return {
    increment : function(){
        counter++
    },
    decrement: function(){
        counter--
    },
    getCount : function(){
        console.log(counter)
    }
}
}
const counter = Counter()
counter.increment()
counter.increment()
counter.getCount()
counter.decrement()

// Problem Number 24 
// Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.
// Solutions:
function curry(fn){
    return function(a){
        return function(b){
            return fn(a,b)
        }
    }
}
const add = curry((a,b)=>{
    return a+b
})
console.log(add(2)(3))

// Problem Number 25 
//  Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.
// Solutions :
function memoize(fn){
    const cache = {}
    return function(...args){
        const key = args.join()
        if(cache[key]){
            return cache[key]
        }else{
            return cache[key] = fn(...args)
        }
    }
}
const fibo = memoize(fibonacci)
console.log(fibo(5))