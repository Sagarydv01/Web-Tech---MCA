const factorial = (n) => {
    let fact = 1;

    for(i = 1; i <=n; i++) 
        fact *= i;
    
    return fact;
}

console.log(factorial(8));
