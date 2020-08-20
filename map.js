

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
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
  //  assertEqual(arr1, arr2);
  //}
}

const map = function(array, callback){
  const results = [];
  for (let item of array){
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;

}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
