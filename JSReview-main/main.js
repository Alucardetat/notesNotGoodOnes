const returnEmptyString = function () {
    return "";
};

const returnZeroNumber = function () {
    return 0;
};

const returnEmptyArray = function () {
    return [];
};

const returnEmptyObject = function () {
    return {};
};

const returnString = function () {
    return "abc123";
};

const addition = function () {
    return 5 + 5;
};

const subtraction = function () {
    return 5 - 5;
};

const multiplication = function () {
    return 4 * 5;
};

const division = function () {
    return 25 / 5;
};

const returnArray = function (array) {
    array = [1, 2, 3];
    return array;
};

const returnFirstIndex = function (first) {
    return first[0];
};

const returnSecondIndex = function (second) {
    return second[1];
};

const returnArrayLength = function (arrayLength) {
    return arrayLength.length;
};

const arraySum = function (sumOfArray) {
    let sum = 0;
    for (let i = 0; i < sumOfArray.length; i++) {
        sum += sumOfArray[i];
    } return sum;
};

const arraySubtraction = function (subtract) {
    let sum = 0;
    for (let i = 0; i < subtract.length; i++) {
        sum -= subtract[i];
    } return sum;
};

const multiplicationArray = function (multiply) {
    let sum = 1;
    for (let i = 0; i < multiply.length; i++) {
        sum *= multiply[i];
    } return sum;
};

const divisionArray = function (division) {
    let quotient = 1;
    for (let i = 0; i < division.length; i++) {
        quotient /= division[i];
    } let result = quotient.toFixed(3);
    return parseFloat(result);
};

const oddArray = function (odd) {
    return odd.filter((item) => item % 2 === 1);
};

const evenArray = function (even) {
    return even.filter(item => item % 2 === 0);
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
