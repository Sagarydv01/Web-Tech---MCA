// find max num among three nums
let num1, num2, num3;
num1 = prompt("Enter num1: ");
num2 = prompt("Enter num2: ");
num3 = prompt("Enter num3: ");

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3)
}