// user defined function

const sum = (a, b) => {
    return a + b;
}

// console.log(sum(3, 4));

function add(a, b) {
    return a + b;
}

// console.log(add(22, 43));


/*
*
* *
* * *
* * * *
* * * * *
*/

const pattern = () => {
    for(let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            console.log("* ");
        }
        console.log("\n");
    }
}

pattern();


// createElement 
let a = document.createElement('h1');
a.innerHTML = 'Hello World!';
console.log(a);
console.log(a.value);

