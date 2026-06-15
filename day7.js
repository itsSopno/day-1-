// Day 7 - Dom and event 
// Problem Number 31  
//  Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.
// Solutions : 
function debounce(fn, delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args)
        })
    }
}
function search(query) {
  console.log("Searching for:", query);
}
const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.
// Solutions : 
// function debounce(fn, delay){
//     let timeout;
//     return function(...args){
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             fn(...args)
//         })
//     }
// }
// 

// Problem Number 32 
// Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().
// Solutions : 
function throttle(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Example usage:
function onScroll(event) {
    console.log("Scroll event handler fired at:", Date.now());
}

const throttledScroll = throttle(onScroll, 200);

// Simulating scroll events every 50ms for 1 second
console.log("Starting throttle simulation...");
let interval = setInterval(() => {
    throttledScroll();
}, 50);

setTimeout(() => {
    clearInterval(interval);
    console.log("Simulation finished.");
}, 1000);
