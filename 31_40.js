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
        sum += parseInt(element);
    })
    return sum;
}
console.log(calcSum(commaNumbers));
console.log()

// 34. Create a function that returns an array with words inside a text.
console.log('34)');
let textArray = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem odio, odio.";
let wordsArray = (text) => {
    text = text.replace(/[.,]/g, '');
    return new Set(text.split(' '));
}
console.log(wordsArray(textArray));
console.log()

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
console.log('35)');
