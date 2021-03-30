 function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sourcekeys = Object.keys(source);
  let newArr = collection.filter((x) => {
    return x.hasOwnProperty(sourcekeys[0])
  })
  let flag = false;
  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < sourcekeys.length; j++) {
      if(source[sourcekeys[j]] == newArr[i][sourcekeys[j]]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if(flag == true) {
      arr.push(newArr[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });