// My solution
function smallestCommons(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let flag = false;
    let num, i = 2;
    while(flag == false) {
      num = max * i;
      for(let j = min; j < max; j++) {
        if(num % j == 0) {
          flag = true;
        } else {
          flag = false;
          i++;
          break;
        }
      }
    }
    return num;
  }
  
  
  smallestCommons([1,5]);