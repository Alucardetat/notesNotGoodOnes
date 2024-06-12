// test.js

const assert = require('assert');
const { add, subtract, multiply, divide, square, squareRoot, concatenate } = require('./main'); // replace 'yourFileName' with the actual file name containing the functions

function captureConsoleLog(callback) {
  let consoleOutput = '';
  const originalConsoleLog = console.log;
  console.log = (message) => {
    consoleOutput += message + '\n';
  };

  callback();

  console.log = originalConsoleLog;
  return consoleOutput;
}

describe('add function', function () {
  it('should add two numbers and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      add(5, 3);
    });
    assert.strictEqual(consoleOutput.trim(), '8');
  });
});

describe('subtract function', function () {
  it('should subtract two numbers and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      subtract(8, 3);
    });
    assert.strictEqual(consoleOutput.trim(), '5');
  });
});

describe('multiply function', function () {
  it('should multiply two numbers and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      multiply(5, 6);
    });
    assert.strictEqual(consoleOutput.trim(), '30');
  });
});

describe('divide function', function () {
  it('should divide two numbers and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      divide(10, 2);
    });
    assert.strictEqual(consoleOutput.trim(), '5');
  });
});

describe('square function', function () {
  it('should calculate the square of a number and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      square(4);
    });
    assert.strictEqual(consoleOutput.trim(), '16');
  });
});

describe('squareRoot function', function () {
  it('should calculate the square root of a number and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      squareRoot(9);
    });
    assert.strictEqual(consoleOutput.trim(), '3');
  });
});

describe('concatenate function', function () {
  it('should concatenate two strings and log the result', function () {
    const consoleOutput = captureConsoleLog(() => {
      concatenate("Hello", "World");
    });
    assert.strictEqual(consoleOutput.trim(), 'HelloWorld');
  });
});
