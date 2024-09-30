const numbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

const myAt = (array, index) => {
    return array[index];
}

const myEvery = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}

const myFilter = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

const myForEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const myMap = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

Array.prototype.at = function(index) {
    return myAt(this, index);
}

Array.prototype.every = function(callback) {
    return myEvery(this, callback);
}

Array.prototype.filter = function(callback) {
    return myFilter(this, callback);
}

Array.prototype.forEach = function(callback) {
    myForEach(this, callback);
}

Array.prototype.map = function(callback) {
    return myMap(this, callback);
}

console.log('\nMy At');
const index = 3;
const element = numbers.at(index);
console.log(`Element at index ${index}: ${element}`);

console.log('\nMy Every');
const callback_every = (number) => number % 2 === 0;
const isEven = numbers.every(callback_every);
console.log(`Are all numbers even? ${isEven}`);

console.log('\nMy Filter');
const callback_filter = (number) => number > 20;
const oddNumbers = numbers.filter(callback_filter);
console.log(`List of odd numbers: ${oddNumbers.join(', ')}`);

console.log('\nMy ForEach');
const callback_forEach = (number) => process.stdout.write(`${number} `);
console.log('List of numbers:');
numbers.forEach(callback_forEach);
console.log();

console.log('\nMy Map');
const callback_map = (number) => number * 2;
const doubleNumbers = numbers.map(callback_map);
console.log(`List of double numbers: ${doubleNumbers.join(', ')}`);
