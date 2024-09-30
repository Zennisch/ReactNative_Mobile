// 1. Print numbers from 1 to 10
console.log("1)");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();

// 2. Print the odd numbers less than 100
console.log("2)");
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log();

// 3. Print the multiplication table with 7
console.log("3)");
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
console.log();

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log("4)");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log();
}
console.log();

// 5. Calculate the sum of numbers from 1 to 10
console.log("5)");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
console.log();

// 6. Calculate 10!
console.log("6)");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log(factorial);
console.log();

// 7. Calculate the sum of even numbers greater than 10 and less than 30
console.log("7)");
sum = 0;
for (let i = 11; i < 30; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);
console.log();

// 8. Create a function that will convert from Celsius to Fahrenheit
console.log("8)");
let celsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(30));
console.log();

// 9. Create a function that will convert from Fahrenheit to Celsius
console.log("9)");
let fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(86));
console.log();

// 10. Calculate the sum of numbers in an array of numbers
console.log("10)");
let sumArray = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
