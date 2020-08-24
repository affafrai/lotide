
const assertArraysEqual = require("./assertArraysEqual");



const middle = function(arr1) {
  //For arrays with one or two elements, there is no middle. Return an empty array
let middleArray = [];
  if( arr1.length >= 2 ) {
  //find the middle element in odd arrays
    let checkDiv = arr1.length % 2 
    let middleIndex = Math.floor((arr1.length / 2));
    
    if (checkDiv === 1) {
//should return an array
      middleArray.push(arr1[middleIndex]);
      return middleArray ;
    }
    else {
      middleArray =[arr1[middleIndex - 1], arr1[middleIndex]];
// console.log(middleArray);
// console.log(typeof middleArray);

      return middleArray;
    }
  } else return middleArray;
}

// console.log(middle([1,3,2,4,3,8]));//---> 2 , 4
// console.log(middle([1,3,2,4,3])); //---> 2
// console.log(middle([1])); //---> 2
// assertArraysEqual(middle([1,3,2,4,3,8]),[2,4]);
// assertArraysEqual(middle([1,3,2,4,3]),[2]);
// assertArraysEqual(middle([1]),[]);
module.exports = middle;