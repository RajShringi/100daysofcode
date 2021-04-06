// my solution
function sumFibs(num) {
    let fib = []
    let a = 1, b = 1;
    fib.push(a);
    fib.push(b);
    let sum = 0;
    while(a+b <= num) {
      sum = a + b;
      b = a;
      a = sum;
      fib.push(sum);
    }
    let filter = fib.filter(x => x%2 != 0)
    return num = filter.reduce((a,c)=> a+c, 0);
    
  }
  
  sumFibs(75025);


// freecodecamp solution 
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);