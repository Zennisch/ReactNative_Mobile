// 8. Convert from Fahrenheit to Celcius
const fahrenheit = 98.6;
const fToC = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fToC(fahrenheit));
