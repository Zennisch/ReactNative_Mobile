// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
const arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const positiveNumbers = (arr) => {
    let positiveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i]);
        }
    }
    return positiveArr;
}
console.log(positiveNumbers(arr));
