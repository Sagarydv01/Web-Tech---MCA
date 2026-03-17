// 7. Write a program using JavaScript to demonstrate the concept of built-in array methods
let arr = [10, 20, 30, 40];

console.log("Original Array: ", arr);

// push() - add element at end
arr.push(50);
console.log("After push(50): ", arr);

// pop() - remove last element
arr.pop();
console.log("After pop(): ", arr);

// unshift() - add element at beginning
arr.unshift(5);
console.log("After unshift(5): ", arr);

// shift() - remove first element
arr.shift();
console.log("After shift(): ", arr);

// slice() - returns a portion (does not change original)
let sliced = arr.slice(1, 3);
console.log("Slice(1,3): ", sliced);

// splice() - add/remove elements (changes original)
arr.splice(1, 1, 25);
console.log("After splice(1,1,25): ", arr);

// map() - create new array
let mapped = arr.map(x => x * 2);
console.log("After map(x*2): ", mapped);

// filter() - filter elements
let filtered = arr.filter(x => x > 20);
console.log("After filter(x>20): ", filtered);