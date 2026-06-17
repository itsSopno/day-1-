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

// Problem Number 33  
// Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

// Solutions  
function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for(const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Problem Number 34 
//  Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

// Solutions : 
class EventEmiter{
    constructor(){
        this.events = {}
    }
    on(event, listener){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(listener)
    }
    emit(event, ...args){
        if(this.events[event]){
            this.events[event].forEach(listener => {
                listener(...args)
            })
        }
    }
    off(event, listener){
        if(this.events[event]){
            this.events[event] = this.events[event].filter(l => l !== listener)
        }
    }
}
const emitter = new EventEmiter();
const greet = (name) => console.log('Hello ' + name);
emitter.on('greet', greet);
emitter.emit('greet', 'Sara');
emitter.off('greet', greet);
emitter.emit('greet', 'Sara'); 