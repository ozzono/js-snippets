ranges=[
    [0,5740],
    [5740,6355],
    [6355,7585],
    [7585,8200],
]
let vals=[5000, 6000, 7000, 8000, 8201]

vals.forEach(val => {
    console.log(getDegree(val))
});

function rangeCheck(val, range) {
    return range[0] <= val && val < range[1];
}

function getDegree(val) {
    switch (true) {
        case rangeCheck(val, ranges[0]):
        return "grave";
        case rangeCheck(val, ranges[1]):
        return "moderada";
        case rangeCheck(val, ranges[2]):
        return "leve";
        case rangeCheck(val, ranges[3]):
        return "insuficiente";
        default:
        break;
    }
}
