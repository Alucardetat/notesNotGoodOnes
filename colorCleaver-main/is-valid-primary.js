/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(color) {
  if (color === 'red') {
   return true
  } if (color === "yellow") {
   return true
  } if (color === "blue") {
   return true
  } else {
   return false
  }}


// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
