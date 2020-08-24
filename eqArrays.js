const assertEqual = require('./assertEqual');

const eqArrays = function(testArr1,testArr2) {
  if (testArr1.length === testArr2.length){
    for(let i = 0; i < testArr1.length; i++){
      if (testArr1[i] !== testArr2[i]){
       return false;
      } 
    } 
    return true;
  }
}
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]) )// => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]) )// => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS
module.exports = eqArrays;