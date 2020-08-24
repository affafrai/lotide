

const assertEqual = require('./assertEqual');

const tail = function(array1) {
  let newArray = [];
  for (let i = 1; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  return newArray;
};



// Test Case 1: Check the returned array elements

// Test Case 2: ...
// ...
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

module.exports = tail;