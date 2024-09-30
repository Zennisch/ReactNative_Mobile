const mark = {
    mass: 78,
    height: 1.69,
};

const john = {
    mass: 95,
    height: 1.88,
};

const calculateBMI = (person) => {
    return person.mass / person.height ** 2;
}

const markBMI = calculateBMI(mark);
const johnBMI = calculateBMI(john);

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log("Is Mark's BMI higher than John's?: " + markHigherBMI);