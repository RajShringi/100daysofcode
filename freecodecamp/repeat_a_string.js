//My-method
function repeatStringNumTimes(str, num) {
    let newstr = '';
    if(num < 0) {
      return '';
    } else {
      for(let i = 0; i < num; i++) {
        newstr += str;
      }
    }
    return newstr;
  }
  
  repeatStringNumTimes("abc", 3);

  //using recursion
  function repeatStringNumTimes(str, num) {
      if(num < 1) {
          return "";
      } else {
         return str + repeatStringNumTimes(str, num-1);
      }
  }