// 8. Write a program using JavaScript to demonstrate the concept of nested functions.
function outerFunction(a)
{
    console.log("Outer Function Value:", a);

    function innerFunction(b)
    {
        console.log("Inner Function Value:", b);

        function nestedFunction(c)
        {
            console.log("Nested Function Value:", c);
            console.log("Sum:", a + b + c);
        }

        nestedFunction(30);
    }

    innerFunction(20);
}

outerFunction(10);