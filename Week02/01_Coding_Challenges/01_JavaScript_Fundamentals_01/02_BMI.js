const calculateBMI = (person) => {
    return person.mass / person.height ** 2;
}

const markBMI = 28.3;
const johnBMI = 23.9;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}.`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}.`);
}
