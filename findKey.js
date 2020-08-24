// Implement the function findKey which takes in an object and a callback. 
// It should scan the object and return the first key for which 
// the callback returns a truthy value. If no key is found,
//  then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};


const findKey = function(obj,callback) {
  let keysArr = Object.keys(obj);
  // console.log(keysArr)
  // console.log(Object.keys(obj))

  for(let objKeys of keysArr) {
    // console.log(callback(obj[objKeys]))
    // console.log( keysArr[objKeys])

    if(callback(obj[objKeys])=== true) {
      // return keysArr;
      return (objKeys);
      // console.log( keysArr[objKeys]);
    } 
  }
 }


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )// => "noma"))

