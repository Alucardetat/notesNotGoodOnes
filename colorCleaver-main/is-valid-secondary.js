/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color) {
  if (color === "orange") {
    return true
  } if (color === "purple") {
    return true
  } if (color === "green") {
    return true
  } if (color === "red") {
    return false
  } if (color === "black") {
    return false
  } if (color === "white") {
    return false
  }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
