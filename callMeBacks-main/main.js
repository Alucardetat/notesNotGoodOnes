// Should return whatever value is passed into it
const identity = function (value) {
  return value;
};

// Should be able to pull out the first element of an array
// Should accept an index argument
// Should return an empty array if zero is passed in as the index
// Should return all the array's elements if the index argument is larger than the length of the array
const first = function (array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
};

// Should pull the last element from an array
// Should accept an index argument
// Should return an empty array if zero is passed in as the index
// Should return all the array's elements if the index argument is larger than the length of the array
const last = function (array, n) {
  if (n === undefined) return array[array.length - 1];
  if (n === 0) return [];
  return array.slice(-n);
};

// Should iterate over arrays, providing access to the element, index, and array itself
// Should only iterate over the array elements, not properties of the array
// Should iterate over objects, providing access to the element, key, and object itself
const each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};

// Should find 40 in the list
// Should be able to compute indexOf even when the native function is undefined
// Returns -1 when the target cannot be found in the list
// Returns the first indec that the target can be found at when there are multiple matches
const indexOf = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
};

// Should apply a function to every value in an array
// Should produce a brand new array instead of modifying the input array
const map = function (collection, iterator) {
  const results = [];
  each(collection, function (value, key, collection) {
    results.push(iterator(value, key, collection));
  });
  return results;
};

// Should return an array with elements that pass the truth test
// Should return an empty array when no elements pass the truth test
// Should return an empty array when the input array is empty
const filter = (collection, callback)=>{
  const results = [];
  each(collection, (value, key, collection)=>{
    if(callback(value, key, collection)) results.push(value);
  });
  return results;
};

// Should return an array with elements that do not pass the truth test
// Should return an empty array when all elements pass the truth test
// Should return the same array when the input array is empty
const reject = (collection, callback)=>{
  return filter(collection, (value, key, collection)=>{
    return !callback(value, key, collection);
  });
};

// Should return a duplicate-free version of the array
// Should return the same array when all elements are unique
// Should return an empty array when the input array is empty
const uniq = (collection) =>{
  const results = [];
  each(collection, (value, key, collection)=>{
    if(indexOf(results, value) === -1) results.push(value);
  });
  return results;
};

// Should reduce an array to a single value
// Should reduce an object to a single value
// Should return the initial accumulator value when the input array is empty
// Should handle an empty object and return the initial accumulator value
const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal;
  let initializing = accumulator === undefined;
  each(collection, (value, key, collection)=>{
    if(initializing){
      accumulator = value;
      initializing = false;
    } else {
      accumulator = callback(accumulator, value, key, collection);
    }
  });
  return accumulator;
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};