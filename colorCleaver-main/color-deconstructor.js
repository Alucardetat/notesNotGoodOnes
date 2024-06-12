/******************
 * YOUR CODE HERE *
 ******************/

function colorDeconstructor(color) {
  if (color === "purple") {
    return "red and blue" 
  } if (color === "orange") {
    return "red and yellow"
  } if (color === "green") {
    return "blue and yellow" 
  } else {
    return "error"
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
