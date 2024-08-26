const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

const printForecast = (temperatures) => {
    temperatures.forEach(((value, index) => {
        console.log(`Temperature on day ${index + 1} is ${value}°C`);
    }));
    console.log('\n');
}

printForecast(data_1);

printForecast(data_2);
