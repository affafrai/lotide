/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function(testArr1,testArr2) {
  let testValue = "";
  if (testArr1.length === testArr2.length) {
    for (let i = 0; i < testArr1.length; i++) {
      if (testArr1[i] === testArr2[i]) {
        testValue = true;
      } else return false;

    }
    return testValue;
  }
};

//const assertArrayEqual = function(arr1,arr2,compare) {
// assertEqual(eqArrays(arr1, arr2), compare);
//};
*/
const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      newArray.push(source[i]);
    }
  }
  console.log(newArray);
};

without([1, 2, 3], [1]);

without(["1", "2", "3"], [1, 2, "3"]);