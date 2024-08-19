var bill_value_1 = 275;
var bill_value_2 = 40;
var bill_value_3 = 430;

var tip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}