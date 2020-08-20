
const eqArrays = function(testArr1,testArr2) {


  if (testArr1.length === testArr2.length){
    for(let i = 0; i < testArr1.length; i++){
      if (testArr1[i] !== testArr2[i]){
       return false;
      } 
    } 
    return true;
  }
};

const eqObjects = function(object1, object2) {
    let objKeys1 = Object.keys(object1)
    let objKeys2 = Object.keys(object2)
    if(objKeys1.length === objKeys2.length) {
      for(let key of objKeys2 ) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if(eqArrays(object1[key], object2[key])) {
            continue;
          } else return false;
        } else { if(object1[key] === object2[key]) {
               continue;
            } else return false;
        }   
      }
      return true;
    } else return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual,expected){
  const inspect = require('util').inspect;
  // console.log(`${actual}`);
  let eqObjectValue = eqObjects(actual, expected);
  if (eqObjectValue === true) {
    console.log(`✅✅✅ assertion passed : ${inspect(actual)} ===  ${inspect(expected)}`);
  } else console.log(`🛑🛑🛑 assertion failed : ${inspect(actual)} !== ${inspect(expected)}`);
  
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
// assertObjectsEqual(eqObjects(ab, ba),true);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false
// assertObjectsEqual(eqObjects(ab, abc),false);
// console.log(eqObjects(ab, ba));
// Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
// assertObjectsEqual(eqObjects(cd, dc),true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
// assertObjectsEqual(eqObjects(cd, cd2),false);
