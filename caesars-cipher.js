function rot13(str) {
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    if ('A' <= str[i] && str[i] <= 'Z') {
      let newChar = (str.charCodeAt(i) - 65 + 13) % 26 + 65;
      decoded += String.fromCharCode(newChar);
    } else {
      decoded += str[i];
    }
  }

  return decoded;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
