My-method
//function reverseString(str) {
//    let arr = [];
//    for(let i = 0; i < str.length; i++) {
//      arr[i] = str[i];
//    }
//    
//    let revarr = [];
//    let arr_length = arr.length;
//    for(let i = 0; i < arr_length ; i++) {
//      revarr[i] = arr.pop();
//    }
//    console.log(revarr);
//    str = revarr.join('');
//    console.log(str)
//    return str;
//  }
//  
//  reverseString("hello");


Method-2
//function reverseString(str) {
//    let newStr = '';
//    for(let i = str.length - 1; i >= 0; i--) {
//      newStr = newStr.concat(str[i]);
//    }
//    str = newStr;
//    return str;
//  }
//  
//  reverseString("hello");

Method-3
//function reverseString(str) {
//    return str.split('').reverse().join('');
//  }
//  
//  reverseString("hello");