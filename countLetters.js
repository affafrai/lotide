const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence){
  //count letters of sentence
  let numOfLetters = {};
  for(let letter of sentence) {
   if(letter !== " ") {
    if (numOfLetters[letter]) {
      numOfLetters[letter] += 1;
    } else {
      numOfLetters[letter] = 1;
    }
  }
}
return numOfLetters
}


console.log(countLetters("affaf rai"));
let counter = countLetters("affaf rai");
assertEqual(counter["a"],3);
