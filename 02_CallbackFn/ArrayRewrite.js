const numbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

const myFilter = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

Array.prototype.filter = function(callback) {
    return myFilter(this, callback);
}

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(`List of odd numbers: ${oddNumbers.join(', ')}`);
