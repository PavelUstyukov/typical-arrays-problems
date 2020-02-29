exports.min = function min(array) {
    if (!array || !array.length) return 0;
    return Math.min.apply(Math, array);
}

exports.max = function max(array) {
    if (!array || !array.length) return 0;
    return Math.max.apply(Math, array);
}

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;

    let sum = 0;
    for (let i = 0; i < array.length; i++) sum += parseInt(array[i], 10);

    return sum / array.length;
}
