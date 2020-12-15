function checkCashRegister(price, cash, cid) {
  var toReturn = {status: "", change: []};
  let changeAmt = cash - price;
  let cidAmt = 0;
  for (let i = 0; i < cid.length; i ++) {
      cidAmt += cid[i][1];
  }
  function insuffic() {
    toReturn.status = "INSUFFICIENT_FUNDS";
    toReturn.change = [];
    return toReturn;
  }
  if (changeAmt == cidAmt) {
    toReturn.status = "CLOSED";
    toReturn.change = cid;
    return toReturn;
  } else if (changeAmt > cidAmt) {
    insuffic();
  } else {
      toReturn.status = "OPEN";
      if (changeAmt >= 100 ) {
        let hundreds = Math.floor(changeAmt / 100) * 100
        if (cid[8][1] >= hundreds) {
          toReturn.change.push([cid[8][0], hundreds]);
          changeAmt -= hundreds;
        } else {
          toReturn.change.push(cid[8]);
          changeAmt -= cid[8][1];
        }
      }
      if (changeAmt >= 20) {
        let twenties = Math.floor(changeAmt / 20) * 20;
        if (cid[7][1] >= twenties) {
          toReturn.change.push([cid[7][0], twenties]);
          changeAmt -= twenties;
        } else {
          toReturn.change.push(cid[7]);
          changeAmt -= cid[7][1];
        }
      }
      if (changeAmt >= 10) {
        let tens = Math.floor(changeAmt / 10) * 10;
        if (cid[6][1] >= tens) {
          toReturn.change.push([cid[6][0], tens]);
          changeAmt -= tens;
      } else {
          toReturn.change.push(cid[6]);
          changeAmt -= cid[6][1];
        }
      }
      if (changeAmt >= 5) {
        let fives = Math.floor(changeAmt / 5) * 5;
        if (cid[5][1] >= fives) {
          toReturn.change.push([cid[5][0], fives]);
          changeAmt -= fives;
        } else {
          toReturn.change.push(cid[5]);
          changeAmt -= cid[5][1];
        }
      }
      if (changeAmt >= 1) {
        let ones = Math.floor(changeAmt);
        if (cid[4][1] >= ones) {
          toReturn.change.push([cid[4][0], ones]);
          changeAmt -= ones;
        } else {
          toReturn.change.push(cid[4]);
          changeAmt -= cid[4][1];
        }
      }
      if (changeAmt >= 0.25) {
        let quarters = Math.floor(changeAmt / 0.25) * 0.25;
        if (cid[3][1] >= quarters) {
          toReturn.change.push([cid[3][0], quarters]);
          changeAmt -= quarters;
        } else {
          toReturn.change.push(cid[3]);
          changeAmt -= cid[3][1];
        }
      }
      if (changeAmt >= 0.10) {
        let dimes = Math.floor(changeAmt/0.10) * 0.10;
        if (cid[2][1] >= dimes) {
          toReturn.change.push([cid[2][0], dimes]);
          changeAmt -= dimes;
        } else {
          toReturn.change.push(cid[2]);
          changeAmt -= cid[2][1];
        }
      }
      if (changeAmt >= 0.05) {
        let nickels = Math.floor(changeAmt/0.05) * 0.05;
        if (cid[1][1] >= nickels) {
          toReturn.change.push([cid[1][0], nickels]);
          changeAmt -= nickels;
        } else {
          toReturn.change.push(cid[1]);
          changeAmt -= cid[1][1];
        }
      }
      if (changeAmt >= 0.01) {
        let pennies = Number(changeAmt.toFixed(2));
        if (cid[0][1] >= changeAmt) {
        toReturn.change.push([cid[0][0], pennies]);
        } else {
          insuffic();
        }
      }
  }
  return toReturn;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
