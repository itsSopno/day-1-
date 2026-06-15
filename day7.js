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