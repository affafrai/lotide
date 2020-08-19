const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function(testArr1,testArr2) {

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

  const flatten = function(arrayToFlatten){
    let newArr = [];
    for(let i = 0; i < arrayToFlatten.length; i++) {
      if( Array.isArray(arrayToFlatten[i])) {
        for(let j = 0; j < arrayToFlatten[i].length; j++) {
          newArr.push(arrayToFlatten[i][j]);
        }
      } else newArr.push(arrayToFlatten[i]);
    }
    return newArr;
  }

  assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5,6]), true); // => should PASS

  assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, ["uuu"]]), [ 1, 2, 3, 4, 5,"uuu"]), true); // => should PASS
