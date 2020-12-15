function steamrollArray(arr) {
  //Google course suggests recursion may be called for!
  if (arr.every(elem => (Object.prototype.toString.call(elem) != '[object Array]'))) {
    return arr;
  } else {
    let flatterArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Object.prototype.toString.call(arr[i]) == '[object Array]') {
        let x = arr[i];
        flatterArr = arr.slice(0, i).concat(...x).concat(arr.slice(i + 1));
      }
    }
    return steamrollArray(flatterArr);

  }
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
