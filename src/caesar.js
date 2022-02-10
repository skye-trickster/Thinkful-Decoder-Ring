// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const base = 'a'.charCodeAt()
  const letter_count = 26

  function caesarLetter(char, shift)
  {
    
    let charCode = char.charCodeAt() - base //find position in the alphabet

    if (charCode >= letter_count || charCode <= -letter_count)
      return char //for special characters and numbers

    charCode = (charCode + shift) % letter_count

    if (charCode < 0)
      charCode = (letter_count + charCode) % letter_count //shift up for backwards looping

    return String.fromCharCode(charCode + base)
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    //for invalid shifts
    if (!shift || shift == 0 || shift <= -letter_count || shift >= letter_count)
      return false

    //lower case the entire input
    input = input.toLowerCase()

    
    if (!encode) shift = -shift //shift the other way for decoding

    let str = ""

    for (i in input)
    {
      str = `${str}${caesarLetter(input[i], shift)}` 
    }
    
    return str
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
