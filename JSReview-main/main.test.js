// Fixed tests.
const assert = require('assert');
const {
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
evenArray,

} = require('./main')

describe("returnEmptyString", function () {
  it("should return an empty string", function () {
    assert.strictEqual(returnEmptyString(), "");
  });
});

describe("returnZeroNumber", function () {
  it("should return a number zero", function () {
    assert.strictEqual(returnZeroNumber(), 0);
  });
});

describe("returnEmptyArray", function () {
  it("should return an empty array", function () {
    assert(Array.isArray(returnEmptyArray()));
    assert.strictEqual(returnEmptyArray().length, 0);
  });
});

describe("returnEmptyObject", function () {
  it("should return an empty object", function () {
    assert.deepStrictEqual(returnEmptyObject(), {});
  });
});

describe("returnString", function () {
  it("should return a string", function () {
    assert.strictEqual(returnString("abc123"), "abc123");
  });
});

describe("addition", function () {
  it("should return sum of two parameters", function () {
    assert.strictEqual(addition(5, 5), 10);
  });
});

describe("subtraction", function () {
  it("should return subtraction of two parameters", function () {
    assert.strictEqual(subtraction(5, 5), 0);
  });
});

describe("multiplication", function () {
  it("return multiplication of two parameters", function () {
    assert.strictEqual(multiplication(4, 5), 20);
  });
});

describe("division", function () {
  it("return division of two parameters", function () {
    assert.strictEqual(division(25, 5), 5);
  });
});

describe("returnArray", function () {
  it("should return the array", function () {
    assert.deepStrictEqual(returnArray([1, 2, 3]), [1, 2, 3]);
  });
});

describe("returnFirstIndex", function () {
  it("should return first index of the array", function () {
    assert.strictEqual(returnFirstIndex([1, 2, 3]), 1);
  });
});

describe("returnSecondIndex", function () {
  it("should return the second index of the array", function () {
    assert.strictEqual(returnSecondIndex([1, 2, 3]), 2);
  });
});

describe("returnArrayLength", function () {
  it("should return the length of the array", function () {
    assert.strictEqual(returnArrayLength([1, 2, 3]), 3);
  });
});

describe("arraySum", function () {
  it("should return the accumulative sum of the array", function () {
    assert.strictEqual(arraySum([1, 2, 3]), 6);
  });
});

describe("arraySubtraction", function () {
  it("should return the chained subtraction of the array", function () {
    assert.strictEqual(arraySubtraction([1, 2, 3]), -6);
  });
});

describe("multiplicationArray", function () {
  it("should return the chained multiplication of the array values", function () {
    assert.strictEqual(multiplicationArray([1, 2, 3]), 6);
  });
});

describe("divisionArray NOTE: Round the decimal place to third", function () {
  it("should return 1 / 2 / 3", function () {
    assert.strictEqual(divisionArray([1, 2, 3]), 0.167);
  });
});

describe("oddArray", function () {
  it("should return an array with only the odd numbers from the array", function () {
    assert.deepStrictEqual(oddArray([1, 2, 3, 4, 5]), [1, 3, 5]);
  });
});

describe("evenArray ", function () {
  it("should return an array with only the even numbers from the array", function () {
    assert.deepStrictEqual(evenArray([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
  });
});
