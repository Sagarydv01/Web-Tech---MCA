let age = prompt("Enter your age: ");
if (age >= 18) {
    console.log("You can VOTE");
} else {
    let yearsLeft = 18 - age;
    console.log(`You can't vote!\nJust wait for ${yearsLeft} year`);
}