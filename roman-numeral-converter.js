function convertToRoman(num) {
  let romanString = "";
  let romanDict = {"1-3" : "M", "5-2" : "D", "1-2" : "C" , "5-1" : "L", "1-1" : "X" , "5-0" : "V" , "1-0": "I"};
  let numStr = String(num);
  let numLen = numStr.length
  let newLen = numLen;
  let restOfRoman = "";
  if (numLen > 3) {
      let thousands = Number(numStr.slice(0, numStr.length - 4));
      for (let a = 0; a < thousands; a++) {
          romanString += M
      };
  numStr = numStr.slice(numStr.length-4)
  newLen = numStr.length;
  }
  for (let i = newLen - 1; i >= 0; i--) {
    let digit = Number(numStr[i]);
    let prev = romanDict["1-" + String(newLen - i)];
    let five = romanDict["5-" + String(newLen - i - 1)];
    let one = romanDict["1-" + String(newLen - i - 1)]
    if (digit == 9) {
      restOfRoman = one + prev + restOfRoman;
    } else if (digit > 5) {
          let singlesAdded = ""
          for (let i = 0; i < digit - 5; i++) {
            singlesAdded += one
          }
          restOfRoman = five + singlesAdded + restOfRoman;
    } else if (digit == 5) {
        restOfRoman = five + restOfRoman;
    } else if (digit == 4) {
        restOfRoman = one + five + restOfRoman;
    } else {
        let singlesAdded = ""
        for (let i = 0; i < digit; i++) {
          singlesAdded += one
          }
        restOfRoman = singlesAdded + restOfRoman;
      }
    }
    return romanString + restOfRoman;
  }
console.log(convertToRoman(19248))
