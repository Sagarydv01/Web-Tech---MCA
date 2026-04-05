function checkScope() {
    if (true) {
        var a = 'var';
        let b = 'let';
        const c = 'const';
    }
    console.log(a); // var is function scoped, so it is accessible here
    console.log(b); // let is block scoped, so it will throw an error
    console.log(c); // const is block scoped, so it will throw an error
}
checkScope();