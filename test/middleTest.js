const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2,4] for [1,3,2,4,3,8]", () => {
    assert.deepEqual(middle([1,3,2,4,3,8]), [2,4]);
  });
  it("returns [2] for [1,3,2,4,3]", () => {
    assert.deepEqual(middle([1,3,2,4,3]), [2]); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });

  
});
