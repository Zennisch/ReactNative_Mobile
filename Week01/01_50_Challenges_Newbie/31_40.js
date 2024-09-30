// 31. Create a function that will return the number of words in a text
console.log('31)');
let textWords = "Hello everybody, how are you?";
let calcWords = (text) => {
    return text.split(' ').length;
}
console.log(calcWords(textWords));
console.log()

// 32. Create a function that will capitalize the first letter of each word in a text
console.log('32)');
let textUp = "hello everybody, how are you?";
let capitalizeWords = (text) => {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeWords(textUp));
console.log()

// 33. Calculate the sum of numbers received in a comma-delimited string
console.log('33)');
let commaNumbers = "72, 5, 3, 8, 9";
let calcSum = (numbers) => {
    let sum = 0;
    let array = numbers.split(',');
    array.forEach(element => {
        sum += element.toString().trim() * 1;
    })
    return sum;
}
console.log(calcSum(commaNumbers));
console.log()

// 34. Create a function that returns an array with words inside a text.
console.log('34)');
let textArray = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem odio, odio.";
let wordsArray = (text) => {
    // Replace any characters not word
    text = text.replace(/[^a-zA-Z ]/g, '');
    return new Set(text.split(' '));
}
console.log(wordsArray(textArray));
console.log()

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
console.log('35)');
console.log()

// 36. Create a function that converts a string to an array of characters
console.log('36)');
let textString = "Hello";
let stringArray = (text) => {
    return text.split('');
}
console.log(stringArray(textString));
console.log()

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
console.log('37)');
let textASCII = "Hello";
let stringASCII = (text) => {
    let array = [];
    for (let i = 0; i < text.length; i++) {
        array.push(text.charCodeAt(i));
    }
    return array;
}
console.log(stringASCII(textASCII));
console.log()

// 38. Create a function that will convert an array containing ASCII codes in a string
console.log('38)');
let arrayASCII = [72, 101, 108, 108, 111];
let arrayString = (array) => {
    let text = '';
    array.forEach(element => {
        text += String.fromCharCode(element);
    })
    return text;
}
console.log(arrayString(arrayASCII));
console.log()
// 39. Implement the Caesar cypher

// 40. Implement the bubble sort algorithm for an array of numbers
console.log('40)');
let arrayNumbers = [5, 3, 8, 2, 1, 4];
let bubbleSort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(arrayNumbers));
