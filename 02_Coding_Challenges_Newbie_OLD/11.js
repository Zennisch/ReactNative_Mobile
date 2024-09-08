// 11. Calculate the avarage number of an array of numbers
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
const avg = sum / arr.length;
console.log(avg);