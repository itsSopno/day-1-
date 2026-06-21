// Error Handling & Advanced Patterns
// Problem Number 36 
// Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParse(str) {
    try {
        return JSON.parse(str)
    } catch (error) {
        return null
    }
}
console.log(safeJsonParse('{"a":1}'))
console.log(safeJsonParse('bad json'))

// Problem Number 37 
//  Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

async function retry(fn, times) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn()
        } catch (error) {
            if (i === times - 1) throw error
            console.log(`Retrying... (${i + 1})`)
        }
    }
}

// Test Case for Problem 37
const unstableFetch = async () => {
    if (Math.random() > 0.7) return "Success!";
    throw new Error("Failed!");
};

retry(unstableFetch, 5)
    .then(res => console.log("Problem 37 Result:", res))
    .catch(err => console.log("Problem 37 Final Failure:", err.message));


// Problem Number 38  
// Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let resolvedCount = 0
        if (promises.length === 0) resolve([]);
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(result => {
                results[index] = result
                resolvedCount++
                if (resolvedCount === promises.length) {
                    resolve(results)
                }
            }).catch(error => {
                reject(error)
            })
        })
    })
}

// Test Case for Problem 38
const p1 = Promise.resolve(10);
const p2 = new Promise(resolve => setTimeout(() => resolve(20), 100));
const p3 = 30;

myPromiseAll([p1, p2, p3])
    .then(results => console.log("Problem 38 Result:", results))
    .catch(err => console.log("Problem 38 Error:", err));


// Problem Number 39  
//  Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

// Solutions : 
function flattenObject(obj, parentKey = '', result = {}){
    for(const key in obj){
        const newKey = parentKey ? `${parentKey}.${key}` : key
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flattenObject(obj[key], newKey, result)
        }else{
            result[newKey] = obj[key]
        }
    }
    return result
}

// Test Case for Problem 39
const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log("Problem 39 Result:", flattenObject(nestedObj));