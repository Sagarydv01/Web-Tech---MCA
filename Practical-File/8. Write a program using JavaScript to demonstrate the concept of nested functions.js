// 8. Write a program using JavaScript to demonstrate the concept of nested functions.
function funA(a)
{
    console.log("Outer Function Value:", a);

    function funB(b)
    {
        console.log("Inner Function Value:", b);

        function funC(c)
        {
            console.log("Nested Function Value:", c);
            console.log("Sum:", a + b + c);
        }

        funC(30);
    }

    funB(20);
}

funA(10);

// Program 2: Bank account using nested functions (closure)

function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    function deposit(amount) {
        balance += amount;
        console.log("Deposited:", amount);
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient funds");
        }
    }

    function checkBalance() {
        console.log("Current Balance:", balance);
    }

    // Expose only selected operations
    return {
        deposit,
        withdraw,
        checkBalance
    };
}

// Usage
const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(300);
account.checkBalance();

// Program 3
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3