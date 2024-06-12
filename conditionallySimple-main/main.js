/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(str) {
  if (str.length > 20) {
    return "That's a long string!"
  }
}

function isItMedium(str) {
  if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!"
  }
}

function isItShort(str) {
  if (str.length < 10) {
    return "That's a small string!"
  } else {
    return "That's not a small string!"
  }
}

function howLongIsMyString(str) {
  let length = str.length
  if (length > 20) {
    return "That's a long string!"
  } else if (length >= 10 && length <= 20) {
    return "That's a regular sized string!"
  } else {
    return "That's a small string!"
  }
}

function personsHeight(name) {
  var heights = {
    "Shaq": 85,
    "Zooey": 65
  } 
  if (name in heights) {
    return heights[name]
  } else {
    return "I don't know everyone's height!"
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}