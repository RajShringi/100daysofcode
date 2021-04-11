// My solution
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for(let i = 0; i < arr.length; i++) {
      let a = arr[i]['avgAlt'] + earthRadius;
      let T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a,3)/GM));
      arr[i]['orbitalPeriod'] = T;
      delete arr[i]['avgAlt'];
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);