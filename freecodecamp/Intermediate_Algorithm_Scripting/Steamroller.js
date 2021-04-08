// My solution
function steamrollArray(arr) {
    let newArr= [];
  
    let check = function(a) {
      for(let i = 0; i < a.length; i++) {
        if(!Array.isArray(a[i])) {
          newArr.push(a[i]);
        } else {
          check(a[i]);
        }
      }
    }
  
    for(let i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        newArr.push(arr[i])
      } else{
        check(arr[i]);
      }
    }
  
    return newArr;
  }
  
  steamrollArray([1, [], [3, [[4]]]]);