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

var calcTips = (bills) => {
    for (var i = 0; i < bills.length; i++) {
        console.log(`The bill was ${bills[i]}, the tip was ${tip(bills[i])}, and the total value ${final_bill(bills[i])}`);
    }
}

bill_datas = [125, 555, 44];
calcTips(bill_datas);
