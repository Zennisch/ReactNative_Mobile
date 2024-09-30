// 21. Rotate an array to the right 1 position
console.log("21)");
let rotateRight = (arr) => {
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5]));
console.log();

// 22. Reverse an array
console.log("22)");
let reverseArray = (arr) => {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log();

// 23. Reverse a string
console.log("23)");
let reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log();

// 24. Create a function that will merge two arrays and return the result as a new array
console.log("24)");
let mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log();

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
console.log("25)");
let mergeExclusive = (arr1, arr2) => {
    return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)));
}
console.log(mergeExclusive([1, 2, 3], [3, 4, 5]));
console.log();

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
console.log("26)");
let mergeFirstExclusive = (arr1, arr2) => {
    return arr1.filter(element => !arr2.includes(element));
}
console.log(mergeFirstExclusive([1, 2, 3], [3, 4, 5]));
console.log();

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
console.log("27)");
let distinctElements = (arr) => {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}
console.log(distinctElements([1, 2, 3, 3, 4, 5, 5]));
console.log();

// 28. Calculate the sum of first 100 prime numbers and return them in an array
console.log("28)");
let isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let sumFirst100Primes = () => {
    let primes = [];
    let sum = 0;
    for (let i = 2; primes.length < 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
            sum += i;
        }
    }
    return sum;
}
console.log(sumFirst100Primes());
console.log();

// 29. Print the distance between the first 100 prime numbers
console.log("29)");
let distanceFirst100Primes = () => {
    let primes = [];
    let distances = [];
    for (let i = 2; primes.length < 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
}
console.log(distanceFirst100Primes());
console.log();

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
console.log("30)");
let addStrings = (a, b) => {
    let result = "";
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
console.log(addStrings("123456789012", "987654321012"));
console.log();
