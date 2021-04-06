// My solution
function convertHTML(str) {
    let regex = /[&<>"\'']/g;
    let matchs = str.match(regex);
    if(matchs == null) {
      return str;
    }
    let check = function(match) {
    if(match == '<') {
        str = str.replace(match, '&lt;')
      } else if(match == '>') {
        str = str.replace(match, '&gt;')
      } else if(match == '&') {
        str = str.replace(match, '&amp;')
      } else if (match == '\'') {
        str = str.replace(match, '&apos;')
      } else if(match == '\"') {
        str = str.replace(match, '&quot;')
      }
    }
    for(let i = 0; i < matchs.length; i++) {
      check(matchs[i]);
    }
    return str;
  }
  
  convertHTML("Dolce & Gabbana");


  // freecodecamp - 1
  function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");


  // freecodecamp - 2
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");