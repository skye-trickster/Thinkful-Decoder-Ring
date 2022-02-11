// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const base = 'a'.charCodeAt()
  const letter_count = 26
  const pivot = 'j'
  const pivot_to = 'i'

  const squareTable = 
  [
    [ 'a', 'b', 'c', 'd', 'e' ],
    [ 'f', 'g', 'h', 'i', 'k' ],
    [ 'l', 'm', 'n', 'o', 'p' ],
    [ 'q', 'r', 's', 't', 'u' ],
    [ 'v', 'w', 'x', 'y', 'z' ]
  ]

  const isLetter = function(char)
  {
    const letterIndex = char.charCodeAt() - base
    return letterIndex >= 0 && letterIndex < letter_count
  }

  const toNumber = function(char)
  {
    const findColumn = function(row)
    {
      return squareTable[row].findIndex((val) => val == char)
    }

    const findRow = function(row)
    {
      const column = findColumn(row)
      if(column != -1)
      {
        return `${column + 1}${row + 1}`
      }
      return undefined
    }

    if (!isLetter(char)) return char

    if (char == pivot) char = pivot_to

    for (let row = 0; row < squareTable.length; ++row)
    {
      const res = findRow(row)
      if(res)
        return res
    }
  }

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase()
    str = ""

    for (let index in input)
    {
      if (encode)
        str = `${str}${toNumber(input[index])}`
    }

    return str
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
