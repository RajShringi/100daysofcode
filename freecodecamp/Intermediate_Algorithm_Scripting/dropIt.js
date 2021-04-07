//My solution
function dropElements(arr, func) {
    let n = arr.shift();
    while(!func(n)) {
      n = arr.shift();
      if(arr.length == 0) {
        return []
      }
    }
    arr.unshift(n);
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

// freecodecamp solution
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });