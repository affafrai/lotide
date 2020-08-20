const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj,comparedVal) {
  // console.log(obj , comparedVal) ;
  let keys = Object.keys(obj);
  // console.log(key);
  for(let objKeys of keys) {
    if(comparedVal === obj[objKeys]) {
      return objKeys;
    } 
  }

 }



 const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre , "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
