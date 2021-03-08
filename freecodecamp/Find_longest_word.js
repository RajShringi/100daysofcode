//My-method
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//How to use reduce function

function findLongestWordLength(str) {
    return str.split(' ').reduce((longest, word) => {
      return Math.max(longest, word.length);
    }, 0);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");