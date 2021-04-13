// My solution
function convertToRoman(num) {
    let romanNumbers = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    }
  
    function findLargestRomanNumeral(obj, n) {
      let largestNumeral;
      for(let key in obj) {
        if(key < n) {
          largestNumeral = key;
        } else {
          break;
        }
      }
      return largestNumeral;
    }
  
    let romanNumeral = [];
    let i = num
    function findromanNumeral(i){
      if(romanNumbers.hasOwnProperty(i)){
        romanNumeral.push(romanNumbers[i])
        return;
      } else {
        let j = findLargestRomanNumeral(romanNumbers, i)
        romanNumeral.push(romanNumbers[j])
        findromanNumeral(i-j);
        return
      }
    }
    findromanNumeral(i)
    return romanNumeral.join('')
  }
  
  convertToRoman(778);