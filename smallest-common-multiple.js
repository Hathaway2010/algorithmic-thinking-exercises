function smallestCommons(arr) {
  arr.sort((x, y) => x - y);
  let rangeArr = [...Array(arr[1] + 1).keys()];
  rangeArr.splice(0, arr[0]);
  let allFactors = {};
  //returns array of prime numbers <= a given number
  function findPrimes(maxNum) {
    let pRangeArr = [...Array(maxNum + 1).keys()];
    pRangeArr.splice(0, 2);
    let primes = [];
    for (let i = 0; i < pRangeArr.length; i++) {
      let testRange = [...Array(Math.floor(Math.sqrt(pRangeArr[i])) + 1).keys()];
      testRange.splice(0, 2);
      if (testRange.every(j => {
        return (pRangeArr[i] === j) || (pRangeArr[i] % j != 0) })) {
        primes.push(pRangeArr[i]);
      }
    }
    return primes;
  }
  //finds prime factors of a given number
  function findPrimeFactors(num) {
      let factors = []
      if (num == 1) {
        return [];
      }
      let testPrimes = findPrimes(num);
      for (let k = 0; k <= testPrimes.length; k++) {
        if (num % testPrimes[k] === 0) {
          factors.push(testPrimes[k], ...findPrimeFactors(num / testPrimes[k]));
          return factors;
        };
      };
    };
  let factorObj = {}
  rangeArr.map(num => factorObj[num] = findPrimeFactors(num))
  console.log(factorObj);
      for(let num in factorObj) {
        for (let l = 0; l < factorObj[num].length; l++) {
          console.log(rangeArr.length)
          for (let m = Number(num) + 1; m < rangeArr.length + rangeArr[0]; m++) {
            let idxFirst = factorObj[String(m)].indexOf(factorObj[num][l]);
            if (idxFirst > -1) {
              factorObj[String(m)].splice(idxFirst, 1)
          }
        }
      }
    }
    console.log(factorObj);
    let finalFactors = [];
    for (let num in factorObj) {
      finalFactors.push(...factorObj[num]);
    }
    return finalFactors.reduce((x, y) => x * y)
  }







console.log(smallestCommons([23, 18]));
