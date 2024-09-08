// 13.
const array = [15, 24, 94, 77, 35, 55, 1, 0, 41, 75];
const maxInArray = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxInArray(array));