const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const calcTips = (bills) => {
    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        let tip = calcTip(bill);
        tips.push(tip);
        totals.push(tip + bill);
    }
}

calcTips(bills);
console.log(`Bills: ${bills.join(', ')}`);
console.log(`Tips: ${tips.join(', ')}`);
console.log(`Totals: ${totals.join(', ')}`);
console.log();

const calcAverage = (arr) => {
    let totals = arr.reduce((acc, val) => acc + val, 0);
    return totals / arr.length;
}

console.log(`Average total: ${calcAverage(totals)}`);
