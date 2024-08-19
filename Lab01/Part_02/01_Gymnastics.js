var data_1 = {
    dolphins_scores: [44, 23, 71],
    koalas_scores: [65, 54, 49]
}

var data_2 = {
    dolphins_scores: [85, 54, 41],
    koalas_scores: [23, 34, 27]
}

var calcAverage = (scores) => {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

var checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("It's a draw");
    }
}

console.log("Data 1:");
avgDolphins = calcAverage(data_1.dolphins_scores);
avgKoalas = calcAverage(data_1.koalas_scores);
checkWinner(avgDolphins, avgKoalas);

console.log("Data 2:");
avgDolphins = calcAverage(data_2.dolphins_scores);
avgKoalas = calcAverage(data_2.koalas_scores);
checkWinner(avgDolphins, avgKoalas);
