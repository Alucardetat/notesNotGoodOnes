function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num1) {
  return num1 ** 2 / 2;
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  return str.split('!')[0] + '!';
  }

function countWords(str) {
  return str.split(" ").length;
}

function containsDigit(str) {
  return /\d/.test(str);
}

function containsLowerCase(str) {
  return str.toUpperCase() !== str;
}

function containsUpperCase(str) {
  return str.toLowerCase() !== str;
}

function containsNonAlphanumeric(str) {
  let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz'
  for (let char of str) {
    if (!alphaNum.includes(char.toLowerCase())) {
      return true;
    }
  }
  return false;
}

function containsSpace(str) {
  if (str.includes(" ")) {
    return true;
  } else {
    return false;
  }
}

function digits(num) {
  let arr = num.toString().split("");
  let final = [];
  for (let char of arr) {
    if (containsNonAlphanumeric(char) === true) {
    } else {
      char = parseFloat(char);
      final.push(char);
    }
  }
  return final
}

function truncate(str) {
  let final = '';
  if (isLong(str) === false) {
    return str;
  } else {
    for (let char of str) {
      if (final.length <= 7) {
        final = final + char;
      }
    }
  }
  return final + "...";
}

function isValidPassword(str) {
  if (!str.match(/[A-Z]/)) {
    return false;
  } else if (!str.match(/[a-z]/)) {
    return false;
  } else if (!str.match(/[0-9]/)) {
    return false;
  } else if (!str.match(/[^a-zA-Z0-9]/)) {
    return false;
  } else if (str.match(/[" "]/)) {
    return false;
  } else {
    return true;
  }
}

function onlyPunchy(arr) {
  let punchy = [];
  for (let str of arr) {
    str = exclaim(str);
    if (isLong(str) === false) {
      punchy.push(str);
    }
  }
  return punchy;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
