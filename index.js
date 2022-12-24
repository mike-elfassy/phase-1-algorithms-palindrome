function isPalindrome(word) {
  // Write your algorithm here

  let isPalindrome = true
  let comparisons = Math.floor(word.length / 2)

  // Tests:
  // console.log(word)
  // console.log('Iterations:', comparisons)
  // console.log("")

  if (comparisons < 1) {return true}

  for (let i = 0; i < comparisons; i++) {
    isPalindrome = word.slice(i, i + 1) === word.slice(-(i + 1), word.length - i)
    
    // Tests:
    // console.log('Comparison: #', i)
    // console.log(`${i}, ${i+1} => ${-(i + 1)}, ${word.length - i}`)
    // console.log(word.slice(i,i + 1), word.slice(-(i + 1), word.length - i))
    // console.log(isPalindrome)

    return isPalindrome
  }
}


/* 
  Add your pseudocode here

  racecar = length of 7
  0,1 -> -1,7
  1,2 -> -2,6
  2,3 -> -3,5
*/

/*
  Add written explanation of your solution here
  
  Take a string and find the length
  divide length by 2 and round down to identify the number of comparisons
  compare first letter to last letter, second letter to penultimate letter, etc.
  output true or false if all comparisons are true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abccba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("xyzxyz"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
