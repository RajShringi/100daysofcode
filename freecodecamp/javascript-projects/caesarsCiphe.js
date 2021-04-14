// My solution
function rot13(str) {
    let regex = /[A-M]/
    let str1 = [];
    for(let i in str) {
      if(str[i] != ' ' && str[i].match(regex) != null){
        let s = String.fromCharCode(str[i].charCodeAt() + 13)
        str1.push(s)
      } else if (str[i] != ' ' && str[i].match(regex) == null && str[i] != str[i].match(/\W/)) {
        let s = String.fromCharCode(str[i].charCodeAt()-13)
        str1.push(s)
      } else {
        str1.push(str[i])
      }
    }
    return str1.join('')
  }
  
  rot13("SERR YBIR?");