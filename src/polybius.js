// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const base = 'a'.charCodeAt()
  const letter_count = 26

  const squareTable = 
  [
    [ 'a', 'b', 'c', 'd', 'e' ]
    [ 'f', 'g', 'h', 'i', 'k' ]
    [ 'l', 'm', 'n', 'o', 'p' ]
    [ 'q', 'r', 's', 't', 'u' ]
    [ 'v', 'w', 'x', 'y', 'z' ]
  ]

  const toLetter = (num) => {
    const row = Math.floor(num / 10) - 1 , col = num % 10 - 1
    if (row > 4 || col > 4)
      throw
    return squareTable[row][col]
  }

  const letterToNumber = (char) => {
    return char.charCodeAt() - base
  }


  function polybius(input, encode = true) {
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
