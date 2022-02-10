// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const base = 'a'.charCodeAt()
  const letter_count = 26
  
  function caesarLetter(char, shift)
  {
    let charCode = char.charCodeAt() - base
    if (charCode > 25 || charCode < -25)
      return char
    //console.log(charCode)
    charCode = (charCode + shift) % letter_count
    if (charCode < 0)
      charCode = letter_count - charCode
    //console.log(String.fromCharCode(charCode + base))
    return String.fromCharCode(charCode + base)
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!encode) shift = -shift
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
