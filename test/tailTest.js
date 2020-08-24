

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
 
  it("returns  ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// //checking if the array before modifying will keep the same
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

