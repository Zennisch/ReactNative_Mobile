var tip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

var final_bill = (bill) => {
    return bill + tip(bill);
}

bill_test = 100;
console.log(`The bill was ${bill_test}, the tip was ${tip(bill_test)}, and the total value ${final_bill(bill_test)}`);