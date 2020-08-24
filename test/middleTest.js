const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1,3,2,4,3,8]),[2,4]);
assertArraysEqual(middle([1,3,2,4,3]),[2]);
assertArraysEqual(middle([1]),[]);