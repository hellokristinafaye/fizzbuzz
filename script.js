let answer = parseInt(prompt("Please enter the number to which you want FizzBuzz to count to:"));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}