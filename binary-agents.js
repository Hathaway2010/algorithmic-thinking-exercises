function binaryAgent(str) {
  let letters = str.split(" ");
  let asciiCodes = [];
  for (let i = 0; i < letters.length; i++) {
    let num = 0;
    for (let j = 0; j < letters[i].length; j++) {
      num += Number(letters[i][j]) * 2 ** (letters[i].length - 1- j);
    }
    asciiCodes.push(num);
  }
  let newLetters = asciiCodes.map(code => String.fromCharCode(code));
  return newLetters.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
