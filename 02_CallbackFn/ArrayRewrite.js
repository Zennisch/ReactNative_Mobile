const numbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

const myAt = (array, index) => {
    return array[index];
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

Array.prototype.at = function(index) {
    return myAt(this, index);
}
Array.prototype.filter = function(callback) {
    return myFilter(this, callback);
}

console.log('\nMy At');
const index = 3;
const element = numbers.at(index);
console.log(`Element at index ${index}: ${element}`);

console.log('\nMy Filter');
const callback = (number) => number > 20;
const oddNumbers = numbers.filter(callback);
console.log(`List of odd numbers: ${oddNumbers.join(', ')}`);
