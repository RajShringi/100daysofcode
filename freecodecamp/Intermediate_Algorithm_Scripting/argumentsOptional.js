function addTogether() {
    if(typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      return arguments[0] + arguments[1]
    } else if(arguments.length == 1 && typeof arguments[0] != 'number') {
      return undefined;
    } else if (arguments.length == 1 && typeof arguments[0] == 'number'){
      let x = arguments[0];
      return function(y){
        if(typeof y == 'number'){
          return x + y;
        } else {
          return undefined;
        }
      }
    } else{
      return undefined;
    }
  }
  
  addTogether(5)(7)