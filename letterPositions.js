
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

const assertArraysEqual = function(actual,expected){
  const inspect = require('util').inspect;

  console.log(`${actual}`);
  //assertEqual(eqArrays(actual, expected), compare);
  let eqArraysValue = eqArrays(actual, expected);
  //console.log(eqArraysValue);
  if (eqArraysValue === true) {
    console.log(`✅✅✅ assertion passed : ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {console.log(`🛑🛑🛑 assertion failed : ${inspect(actual)} !== ${inspect(expected)}`);}

  //  assertEqual(arr1, arr2);

  //}
}


const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++){

    if (sentence.charAt(i) !== ' ') {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
         results[sentence.charAt(i)] = []
         results[sentence.charAt(i)].push(i);
        }
      
    }
  }
  // logic to update results here
  return results;
}

// a variable to point on the object
let compare = letterPositions("lighthouse in the house");
console.log(letterPositions("lighthouse in the house"));
console.log(compare["i"]);
assertArraysEqual(compare["i"],[ 1, 11 ]);
assertArraysEqual(letterPositions("hello").e, [1]);

