// my solution
function sumPrimes(num) {
    let prime = []
    for(let j = 2; j <= num; j++) {
      let flag = true;
      for(let i = 2; i <= j/2; i++) {
        if(j%i == 0) {
          flag = false;
          break;
        }
      }
      if (flag == true) {
        prime.push(j)
      }
    }
    let sum = prime.reduce((a,c) => a+c);
    return sum;
  }
  
  sumPrimes(10);

// freecodecamp solution 
function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }

// freecodecamp 

function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }