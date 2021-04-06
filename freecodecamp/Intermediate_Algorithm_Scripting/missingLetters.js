// My solution
function fearNotLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let strsum = 0;
    let alphasum = 0;
    for(let j = 0; j < str.length; j++) {
      strsum += alpha.indexOf(str[j])
    }
    
    for(let j = alpha.indexOf(str[0]); j <= alpha.indexOf(str[str.length-1]); j++) {
      alphasum += alpha.indexOf(alpha[j])
    }
    let index = alphasum - strsum;
  
    if(index == 0) {
      return undefined;
    } else {
      return alpha[index];
    }
  }
  
  fearNotLetter("stvwx");

  // My secound solution
  function fearNotLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let strsum = 0;
    let alphasum = 0;
    let firstLetter = str.match(/^[a-z]/);
    let secondLetter = str.match(/[a-z]$/);
    for(let j = 0; j < str.length; j++) {
      strsum += alpha.indexOf(str[j])
    }
    
    for(let j = alpha.indexOf(firstLetter); j <= alpha.indexOf(secondLetter); j++) {
      alphasum += alpha.indexOf(alpha[j])
    }
    let index = alphasum - strsum;
  
    if(index == 0) {
      return undefined;
    } else {
      return alpha[index];
    }
  }
  
  fearNotLetter("stvwx");

  // simple solution
  function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);
    
    for(var i = start; i < start + len; i++){
      if(!str.includes(alphabet[i])){
        return alphabet[i];
      }
    }
    return undefined;
  }


// freecodecamp solution 
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      // str.charCodeAt() return unicode ex 'ABC'.charCodeAt(0) => 65 i is the position in string.
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        // fromCharCode return string  String.fromCharCode('97') => 'a'
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }