// my solution
function palindrome(str) {
    let newstr = str.toLowerCase().split(/[\W_]/g).join('')
    let strarr = newstr.split('')
    let length = newstr.length;
  
    let mid = Math.floor(length / 2);
    let frontstack = [];
    let backstack = [];
    if(length % 2 == 0) {
      for(let i = 0; i < mid; i++) {
        frontstack.push(strarr[i])
      }
      for(let i = length-1; i >= mid; i--) {
        backstack.push(strarr[i])
      }
    } else {
      for(let i = 0; i < mid; i++) {
        frontstack.push(strarr[i])
      }
      for(let i = length-1; i > mid; i--) {
        backstack.push(strarr[i])
      }
    }
  
    let j = backstack.length - 1;
    let flag = true;
    while(frontstack.length != 0 && backstack.length != 0) {
      if(frontstack[j] != backstack[j]){
        flag = false;
        break;
      } else{
        frontstack.pop();
        backstack.pop();
      }
      j --;
    }
    if(flag == true) {
      return true;
    } else {
      return false;
    }
  }
  
  
  
  palindrome("A man, a plan, a canal. Panama");


// freecodecamp solution
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
      if (str[i] !== str[len - i]) {
        return false;
      }
    }
    return true;
  }


// freecodecamp solution 2
function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }