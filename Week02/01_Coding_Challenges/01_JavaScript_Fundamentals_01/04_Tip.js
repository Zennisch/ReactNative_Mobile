const bill_value_1 = 275;
const bill_value_2 = 40;
const bill_value_3 = 430;

const tip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const final_bill = (bill) => {
    return bill + tip(bill);
}

console.log(`The bill was ${bill_value_1}, the tip was ${tip(bill_value_1)}, and the total value ${final_bill(bill_value_1)}`);

console.log(`The bill was ${bill_value_2}, the tip was ${tip(bill_value_2)}, and the total value ${final_bill(bill_value_2)}`);

console.log(`The bill was ${bill_value_3}, the tip was ${tip(bill_value_3)}, and the total value ${final_bill(bill_value_3)}`);