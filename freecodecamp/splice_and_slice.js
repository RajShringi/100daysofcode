// My method
function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice(0, arr2.length);
    let slicearray = arr1.slice();
    for(let i = 0; i < slicearray.length; i++)
    {
      result.splice(n+i, 0, slicearray[i])
    }
    return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  //Solution after watching hint
  function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice(0, arr2.length);
    for(let i = 0; i < arr1.length; i++){
      result.splice(n+i, 0, arr1[i])
    }
    return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);