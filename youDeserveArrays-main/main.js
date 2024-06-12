/******************
 * YOUR CODE HERE *
 ******************/

 function getFirstItemFrom(array) {
  if (array.length === 0) {
    return "The array is empty.";
  } return array[0];
 }

 function getLastItemFrom(array) {
  if (array.length === 0) {
    return "The array is empty.";
  }
  return array[array.length - 1];
 }

 function getIndex3(array) {
  if (array.length < 4) {
    return array[array.length - 1];
  }
  return array[3];
}

function isLongList(array) {
  return array.length >= 10;
}

function firstItemIsNumber(array) {
  if (array.length === 0) {
    return "The array is empty.";
  }
  return typeof array[0] === "number";
}

function secondCharOfThirdString(array) {
  if (array.length < 3) {
    return "The array has less than three items.";
  } if (typeof array[2] !== "string") {
    return "The third item is not a string.";
  } if (array[2].length < 2) {
    return "The third item has less than two characters.";
  }
  return array[2][1];
}
 

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
