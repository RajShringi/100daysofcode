function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let cashInDrawer = 0;
  for(let i = 0; i < cid.length; i++) {
    cashInDrawer += cid[i][1];
  }

  cashInDrawer = cashInDrawer * 100/ 100;

  let currencyValue = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  }
  let bill;
  for(let i = cid.length-1; i >= 0; i--){
      if(change/currencyValue[cid[i][0]] >= 1){
        bill = i;
        break;
      } 
    }
  let eachcurrency = {}
  for(let i = cid.length - 1; i >= 0; i --) {
      eachcurrency[cid[i][0]] = Math.round(cid[i][1]/currencyValue[cid[i][0]])
    }

  function returnChangedue(c, arr){
    let bill;
    let eachcurrency = {}
    let returnarray = [];
    for(let i = arr.length - 1; i >= 0; i --) {
      eachcurrency[cid[i][0]] = Math.round(cid[i][1]/currencyValue[cid[i][0]])
    }
    for(let i = arr.length-1; i > 0; i--){
      if(c/currencyValue[cid[i][0]] >= 1){
        bill = i;
        break;
      } 
    }
    
    for(let i = bill; i >= 0; i--) {
      let a = parseInt(c/currencyValue[cid[i][0]])
      if(a > eachcurrency[cid[i][0]]){
        c = c - currencyValue[cid[i][0]] * eachcurrency[cid[i][0]]
        c = c.toFixed(2)
        returnarray.push([cid[i][0], currencyValue[cid[i][0]] * eachcurrency[cid[i][0]]])
      } else{
        if(c == a * currencyValue[cid[i][0]]){
          c = parseFloat(c)
          returnarray.push([cid[i][0], c])
          break;
        } else {
          let p = a * currencyValue[cid[i][0]]
          c = (c - a * currencyValue[cid[i][0]]).toFixed(2)
          if(p != 0){
            returnarray.push([cid[i][0], p])
          }
        }
      }
    }
    return returnarray;
  }
  console.log(returnChangedue(change, cid))
  let arr = returnChangedue(change, cid);
  let sum = 0; 
  for(let i = 0; i < arr.length; i++){
    sum += arr[i][1]
  }
  sum = sum.toFixed(2)
  console.log(sum)
  if(cashInDrawer == change) {
    return {status: 'CLOSED', change: cid};
  } else if (cashInDrawer < change || sum != change){
    return{status: 'INSUFFICIENT_FUNDS', change: []};
  } else{
    return{status: 'OPEN', change: returnChangedue(change, cid)}
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);