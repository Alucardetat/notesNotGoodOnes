/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(num){
  if (num % 3 === 0 && num % 5 !== 0){
    return "Fizz"
  } if (num % 3 !== 0 && num % 5 === 0){
    return "Buzz"
  } if (num % 3 === 0 && num % 5 === 0){
    return "FizzBuzz"
  } if (num % 3 !== 0 && num % 5 !== 0){
    return num
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
