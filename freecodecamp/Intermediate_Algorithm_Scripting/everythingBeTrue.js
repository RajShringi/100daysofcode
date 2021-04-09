function truthCheck(collection, pre) {
    let flag = false;
  
    for(let i = 0; i < collection.length; i++) {
      if(collection[i].hasOwnProperty(pre)) {
        if(collection[i][pre]){
          flag = true;
        } else {
          flag = false;
          break;
        }
      } else{
        flag = false;
        break;
      }
    }
    if(flag == true){
      return true;
    } else {
      return false;
    }
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

// freecodecamp solution
function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  
  // test here
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );


// freecodecamp solution 2
function truthCheck(collection, pre) {
    return collection.every(function(element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  
  // test here
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );