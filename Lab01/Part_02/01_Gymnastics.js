var data_1 = {
    dolphins_scores: [44, 23, 71],
    koalas_scores: [65, 54, 49]
}

var data_2 = {
    dolphins_scores: [85, 54, 41],
    koalas_scores: [23, 34, 27]
}

var calcAverage = function(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
