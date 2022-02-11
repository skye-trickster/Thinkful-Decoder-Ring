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
    [ 'f', 'g', 'h', pivot_to, 'k' ],
    [ 'l', 'm', 'n', 'o', 'p' ],
    [ 'q', 'r', 's', 't', 'u' ],
    [ 'v', 'w', 'x', 'y', 'z' ]
  ]

  function isLetter (char)
  {
    const letterIndex = char.charCodeAt() - base
    return letterIndex >= 0 && letterIndex < letter_count
  }

  function toNumber (char)
  {
    const findColumn = function(row)
    {
      return squareTable[row].findIndex((val) => val == char)
    }

    const findCell = function(row)
    {
      const column = findColumn(row)
      if(column != -1)
      {
        return `${column + 1}${row + 1}`
      }
      return undefined
    }

    if (!isLetter(char)) return char

    if (char == pivot) char = pivot_to //change j to i

    for (let row = 0; row < squareTable.length; ++row)
    {
      const res = findCell(row)
      if(res)
        return res
    }
  }

  function isValidCipher(input)
  {
    input = input.replace(" ", "") //remove all spaces for check
    return input.length % 2 == 0 //check if there's an odd number of inputs
  }

  function toLetter(column, row)
  {
    const result = squareTable[row - 1][column - 1]
    if (result === pivot_to)
      return `(${pivot}/${pivot_to})`
    return result
  }

  function polybius(input, encode = true) {
    // your solution code here

    str = ""

    if (encode)
    {
      input = input.toLowerCase()
      for (let index in input)
      {
        str = `${str}${toNumber(input[index])}`
      }
    }
    else
    {
      if (!isValidCipher(input)) return false

      col = undefined

      for (let index in input)
      {
        if (input[index] === " ") 
        {
          str = `${str} `
        }
        else if (!col) 
        {
          col = parseInt(input[index]) //gets the column index
        }
        else
        {
          const res = toLetter(col, parseInt(input[index]))
          str = `${str}${res}`
          col = undefined
        }
      }
    }

    return str
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
