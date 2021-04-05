//My first solution
function myReplace(str, before, after) {
    let regex = /^[A-Z]/
    if(regex.test(before) == regex.test(after)) {
      return str.replace(before, after)
    } else if(regex.test(before)) {
      let splitarr = after.split('')
      let first = splitarr.shift();
      after  = first.toUpperCase() + splitarr.join('');
      return str.replace(before, after);
    } else {
      let splitarr = after.split('');
      let first = splitarr.shift();
      after = first.toLowerCase() + splitarr.join('');
      return str.replace(before, after);
    }
    
  }
  
  myReplace("He is Sleeping on the couch", "sleeping", "Sitting");


  //my second solution
  function myReplace(str, before, after) {
    let b = before;
    let a = after;
    let regex = /^[A-Z]/
    if(regex.test(b)) {
        console.log('y')
        let afterRegex = /^[a-z]/
        let afterMatch = after.match(afterRegex)
        after = afterMatch.join('').toUpperCase() + after.replace(afterRegex, '')
        console.log(after)
    }
  
    if(regex.test(a)) {
        console.log('y')
        let afterRegex = /^[A-Z]/
        let afterMatch = after.match(afterRegex)
        after = afterMatch.join('').toLowerCase() + after.replace(afterRegex, '')
        console.log(after)
    }
  
    return str.replace(before, after);
    
  }
  myReplace("This has a spellngi error", "spellngi", "spelling");


  //Optimize solution

  function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  