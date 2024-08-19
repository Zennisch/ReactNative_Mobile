var data = {
    dolphin_scores: [96, 108, 89],
    koala_scores: [88, 91, 110],
}

var data_bonus_1 = {
    dolphin_scores: [97, 112, 101],
    koala_scores: [109, 95, 123],
}

var data_bonus_2 = {
    dolphin_scores: [97, 112, 101],
    koala_scores: [109, 95, 106],
}

var avarage_score = (scores) => {
    var sum = 0;
    for (var i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length; 
}

var calculate_winner = (import_data) => {
    dolphin_avarage = avarage_score(import_data.dolphin_scores);
    koala_avarage = avarage_score(import_data.koala_scores);
    if(dolphin_avarage > koala_avarage){
        console.log("Dolphin wins");
    } else if(koala_avarage > dolphin_avarage){
        console.log("Koala wins");
    } else {
        console.log("Draw");
    }
}

console.log("Data:");
calculate_winner(data);

console.log("Data Bonus 1:");
calculate_winner(data_bonus_1);

console.log("Data Bonus 2:");
calculate_winner(data_bonus_2);