const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const eqArrays = function(testArr1,testArr2) {
//console.log(testArr1);
//console.log(testArr2);
let testValue = "";
  if (testArr1.length === testArr2.length){
    for(let i = 0; i < testArr1.length; i++){
      if (testArr1[i] === testArr2[i]){
        testValue = true;
      } else return false;

    } 
    return testValue;
  }
}

const assertArraysEqual = function(arr1,arr2){
  console.log(`${arr1}`);
  //assertEqual(eqArrays(arr1, arr2), compare);
  let eqArraysValue = eqArrays(arr1, arr2);
  //console.log(eqArraysValue);
  if (eqArraysValue === true) {
    console.log(`✅✅✅ assertion passed : ${arr1} ===  ${arr2}`);
  } else {console.log(`🛑🛑🛑 assertion failed : ${arr1} !== ${arr2}`);}

  //  assertEqual(arr1, arr2);

  //}
}


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", undefined], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS
