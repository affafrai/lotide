
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
// They have the same number of keys
  let objKeys1 = Object.keys(object1)
  let objKeys2 = Object.keys(object2)
// console.log(objKeys1);
// console.log(objKeys2);
  if(objKeys1.length === objKeys2.length) {
  // The value for each key in one object is the same as the value for that same key in the other object
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true);
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc),false);
// console.log(eqObjects(ab, ba));
// Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc),true);
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2),false);
