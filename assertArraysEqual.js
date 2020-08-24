
const eqArrays = require('./eqArrays')
const assertArraysEqual = function(actual,expected){
  const inspect = require('util').inspect;
  // console.log(`${actual}`);
  //assertEqual(eqArrays(actual, expected), compare);
  let eqArraysValue = eqArrays(actual, expected);
  //console.log(eqArraysValue);
  if (eqArraysValue === true) {
    console.log(`✅✅✅ assertion passed : ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {console.log(`🛑🛑🛑 assertion failed : ${inspect(actual)} !== ${inspect(expected)}`);}

  //  assertEqual(arr1, arr2);

  //}
}


// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", undefined], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS
module.exports = assertArraysEqual;