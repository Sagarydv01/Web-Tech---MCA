let obj1 = {
    name: "Sagar",
    age: 22
};

let obj2 = {
    course: "BCA",
    city: "Delhi"
};

// Method 1: Using Object.assign()
let merged1 = Object.assign({}, obj1, obj2);
console.log("Merged using Object.assign(): ", merged1);

// Method 2: Using Spread Operator
let merged2 = { ...obj1, ...obj2 };
console.log("Merged using Spread Operator: ", merged2);