const tail = function(array1) {
  let newArray = [];
  for (let i = 1; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  return newArray;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
// ...
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
