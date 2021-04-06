// my solution
function uniteUnique(arr) {
    let newarr = [];
    for(let i = 0; i < arguments.length; i++) {
      for(let j = 0; j < arguments[i].length; j++) {
        if(newarr.indexOf(arguments[i][j]) === -1) {
          newarr.push(arguments[i][j])
        }
      }
    }
  
    return newarr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// freecodecamp - 1
function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);