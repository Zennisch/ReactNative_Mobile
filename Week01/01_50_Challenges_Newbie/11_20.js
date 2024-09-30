// 11. Calculate the average of the numbers in an array of numbers
console.log("11)");
let calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([1, 2, 3, 4, 5]));
console.log();

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
console.log("12)");
let positiveNumbers = (arr) => {
    let positiveArr = [];
    arr.forEach(element => {
        if (element > 0) {
            positiveArr.push(element);
        }
    });
    return positiveArr;
}
console.log(positiveNumbers([-5, 10, -3, 12, -9, 5]));
console.log();

// 13. Find the maximum number in an array of numbers
console.log("13)");
let maxNumber = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber([30, 72, 15, 8, 22, 17]));
console.log();

// 14. Print the first 10 Fibonacci numbers without recursion
console.log("14)");
let fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(10));
console.log();

// 15. Create a function that will find the nth Fibonacci number using recursion
console.log("15)");
let fibonacciRecursion = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log(fibonacciRecursion(10));
console.log();

// 16. Create a function that will return a Boolean specifying if a number is prime
console.log("16)");
let isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17));
console.log();

// 17. Calculate the sum of digits of a positive integer number
console.log("17)");
let sumDigits = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(sumDigits(12345));
console.log();

// 18. Print the first 100 prime numbers
console.log("18)");
let first100Primes = () => {
    let primes = [];
    for (let i = 2; primes.length < 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(first100Primes());
console.log();

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position
console.log("20)");
let rotateLeft = (arr) => {
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5]));
console.log();
