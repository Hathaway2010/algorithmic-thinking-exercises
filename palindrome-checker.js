function palindrome(str) {
  let processArr = str.split(/[\W_-]+/)
  let processStr = processArr.join("").toUpperCase();
  for (let i = 0; i < processStr.length + 1 / 2; i++) {
    if (processStr[i] != processStr[processStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}



console.log(palindrome("almostomla"));
