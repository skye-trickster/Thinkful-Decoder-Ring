// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const base = 'a'.charCodeAt()
  const letter_count = 26

  function checkValidAlphabet(alphabet)
  {
    if (!alphabet) return false
    if (alphabet.length != letter_count) return false
    
    const theory = {}
    for (let char in alphabet)
    {
      if (theory[alphabet[char]])
        return false
      theory[alphabet[char]] = true
    }

    return true
  }

  function encodeCharacer(char, alphabet)
  {
    if (char === " ") return char
    const index = char.charCodeAt() - base
    return alphabet[index]
  }

  function decodeCharacter(char, alphaArray)
  {
    if (char === " ") return char
    const index = alphaArray.findIndex((val) => char === val)
    return String.fromCharCode(base + index)
  }

  function calibrateAlphabet(alphabet)
  {
    return [...alphabet]
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!checkValidAlphabet(alphabet))
      return false
    str = ""
    if (encode)
    {
      input = input.toLowerCase()
      for(let index in input)
        str = `${str}${encodeCharacer(input[index], alphabet)}`
    }
    else
    {
      let alphaArray = calibrateAlphabet(alphabet)
      for (let index in input)
        str = `${str}${decodeCharacter(input[index], alphaArray)}`

    }
    return str
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
