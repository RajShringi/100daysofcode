// my solution
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let arr = firstAndLast.split(' ');
    let first = arr[0];
    let last = arr[1]
    this.getFullName = function() {
      return first+ ' ' + last;
    };
    this.setFullName = function(newName){
      first = newName.split(' ')[0];
      last = newName.split(' ')[1];
    }
  
    this.getFirstName = function() {
      return first;
    }
  
    this.setFirstName = function(newfirst) {
      first = newfirst;
    }
  
    this.getLastName = function() {
      return last;
    }
  
    this.setLastName = function(newlast) {
      last = newlast;
    }
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log()
  
  