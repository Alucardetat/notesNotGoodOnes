// Clear console with CTRL + L

// Variables: are boxes with labels, what is inside the box is the value and the label is the name of the box.
// [let] is best practice.

let name = 'Chris'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // undefined also [ let firstName; ]
let selectedColor = null; // null used to explicitly clear the value of a variable i.e. for user input, example user chooses favorite color
// let person = {
//     name: 'Chris',
//     age: 30
// };

// Dot notation
// person.name = 'Tate';

// Bracket notation
// person['name'] = 'Chris'

// console.log(person.name)

// It is more common to use single quote than double quote when defining strings.

/* console.log(name); */

// Names: Cannot be a reserved keyword (i.e. let, var, if, else, etc.)
// Names: Should be meaningful and descriptive.
// Names: Cannot start with a number.
// Names: Cannot contain a space or a hyphen
// Names: Are CaSe SeNsEtIvE

// Variables can be declared on one line and seperated by a comma like [ let firstName = 'Chris', lastName = 'McConnell'; ]
// However best practice is on a new line as follows
// let firstName = 'Chris';
// let lastName = 'McConnell';


/* let interestRate = 0.3;
interestRate = 1;
console.log(interestRate) */

// The value of a const can't change, the value of let can.
// If a variable needs to be reassigned or changed use [ let ]
// If a variable doesn't need to change use [ const ]

// Two types of variables? Primitives/Value types & Reference types.

// In the category of Primitive/Value types we have
// String
// Number
// Boolean
// undefined
// null

// JavaScript is a dynamic language.
// Static language is (statically-typed) string name = 'John'; variable type is set and cannot be changed in the future.
// Dynamic language is (dynamically-typed) let name = 'John'; variable type can be changed at runtime.

// [ typeof name ] would display what type of variable [ name ] is i.e. 'string'

// numbers aren't floating point?


// In the category of Reference types we have
// Object
// Array
// Function

// What is an object? A person is an object.
// Name, age and weight are the proerties of the object.


 
// ([ var ] let) ([ object ] name) = ([ property] 'Chris')

// Arrays store lists

// [ let selectedColor = []; ]

// [] = Array Literal

// ["red", "blue"] Arrays have indexes, so red would be index [ 0 ] and blue would be index [ 1 ]

// console.log(selectedColor[0]) would return the first index, and so on.

// Arrays are dynamic and can change. And store different types i.e. numbers and colors.

// Arrays are objects and objects have .properties.



// Functions don't need semicolons at the end of their curly brackets.

// To concatinate or not to concatinate? Is this a question?
// Concatination is [ 'this string, ' + 'that string' ] = output of [ this string, that string]


// Difference between a parameter and an argument.

// Performing a task
// function greet(parameter) {
//    console.log('Hello ' + parameter);
// }
// 

// A function can have multiple parameters.

// Calculating a value
// function square(number) {
//   return number * number;
// }

// let number = square(2);
// console.log(number);

// Can also be don'e by.

// console.log(squre(2));

// greet('Argument1');
// greet('Argument2');

// A function is a set of statements that either performs a task or calculates and returns a value.
