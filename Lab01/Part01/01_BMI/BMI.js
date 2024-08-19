var mark = {
    mass: 78,
    height: 1.69,
};

var john = {
    mass: 95,
    height: 1.88,
};

var calculateBMI = (person) => {
    return person.mass / person.height ** 2;
}

var markBMI = calculateBMI(mark);
var johnBMI = calculateBMI(john);

var markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log("Is Mark's BMI higher than John's?: " + markHigherBMI);