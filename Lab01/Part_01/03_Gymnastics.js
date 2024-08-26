const data = {
    dolphin_scores: [96, 108, 89],
    koala_scores: [88, 91, 110],
}

const data_bonus_1 = {
    dolphin_scores: [97, 112, 101],
    koala_scores: [109, 95, 123],
}

const data_bonus_2 = {
    dolphin_scores: [97, 112, 101],
    koala_scores: [109, 95, 106],
}

const average_score = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length; 
}

const calculate_winner = (import_data) => {
    let dolphin_average = average_score(import_data.dolphin_scores);
    let koala_average = average_score(import_data.koala_scores);
    if(dolphin_average > koala_average){
        console.log("Dolphin wins\n");
    } else if(koala_average > dolphin_average){
        console.log("Koala wins\n");
    } else {
        console.log("Draw\n");
    }
}

console.log("Data:");
calculate_winner(data);

console.log("Data Bonus 1:");
calculate_winner(data_bonus_1);

console.log("Data Bonus 2:");
calculate_winner(data_bonus_2);