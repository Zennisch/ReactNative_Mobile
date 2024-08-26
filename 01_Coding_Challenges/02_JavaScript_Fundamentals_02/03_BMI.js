const calcBMI = (object) => {
    let weight = object.weight;
    let height = object.height;
    return weight / height ** 2;
}

const mark_miller = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69
}

const john_smith = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95
}

const mark_bmi = calcBMI(mark_miller).toFixed(2);
const john_bmi = calcBMI(john_smith).toFixed(2);

const markHigherBMI = mark_bmi > john_bmi;

if(markHigherBMI) {
    console.log(`${mark_miller.fullName}'s BMI (${mark_bmi}) is higher than ${john_smith.fullName}'s BMI (${john_bmi})`);
} else {
    console.log(`${john_smith.fullName}'s BMI (${john_bmi}) is higher than ${mark_miller.fullName}'s BMI (${mark_bmi})`);
}
