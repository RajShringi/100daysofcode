//My code
function translatePigLatin(str) {
    if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' ||str[0] == 'u') {
      return str+'way';
    } else {
      let newArr = str.split('');
      let consarr = [];
      for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] == 'a' || newArr[i] == 'e' || newArr[i] == 'i' || newArr[i] == 'o' || newArr[i] == 'u') {
          break;
        } else {
          consarr.push(newArr.shift())
          i = -1;
        }
      }
  
      return newArr.join('') + consarr.join('') + 'ay';
    }
  }
  
  translatePigLatin("schwartz");

  // solution I like
  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");