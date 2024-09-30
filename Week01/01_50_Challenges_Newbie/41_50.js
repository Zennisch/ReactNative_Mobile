// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinates
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
// 44. Create a function that will convert a string containing a binary number into a
// number
console.log("44)")
// let binaryToNumber = (str) => {
//     return parseInt(str, 2);
// }
let binaryToNumber = (str) => {
    let power = 0;
    let decimal = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== "0" && str[i] !== "1") {
            return "Invalid binary number!";
        }
        if (str[i] === "1") {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    return decimal;
}
console.log(binaryToNumber("1001010101"));
console.log();

// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
// 46. Find the maximum number in a jagged array of numbers or array of numbers
// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
console.log("49)")
let shuffleArray = (arr) => {
    let shuffled = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        shuffled.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return shuffled;
}
console.log(shuffleArray(["apple", "banana", "cherry", "date", "elderberry"]));
console.log();
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
console.log("50)")
let randomNumbers = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let shuffled = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        shuffled.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return shuffled;
}
console.log(randomNumbers(10));
console.log();

// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
console.log("51)")
let frequencyOfLetters = (str) => {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    let result = [];
    for (let key in freq) {
        result.push([key, freq[key]]);
    }
    return result;
}
console.log(frequencyOfLetters("hello"));
console.log();

// 52. Calculate Fibonacci(500) with high precision (all digits)
console.log("52)")
let fibonacci = (n) => {
    let a = BigInt(0);
    let b = BigInt(1);
    let temp = BigInt(0);
    for (let i = 0; i < n; i++) {
        temp = a;
        a = b;
        b += temp;
    }
    return a;
}
console.log(fibonacci(500).toString());
console.log();

// 53. Calculate 70! with high precision (all digits)
console.log("53)")
let factorial = (n) => {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}
console.log(factorial(70).toString());
