// do work here
function findNthPrime (n) {
  var primeNumber = 2;
  var x = primeNumber +1;
  if (n === 1) {
    return primeNumber;
  } else {
    var nthPrime = 2;
    while(nthPrime <= n) {
      var stopLoop = null;
      for (var j = 2; stopLoop !== true; j++) {
        if( x % j === 0 ) {
          stopLoop = true;
        } else if ( (x % j !== 0) && (j === x - 1) ) {
          primeNumber = x;
          nthPrime = nthPrime + 1;
          stopLoop = true;
        }
      } x = x + 1;
    } return primeNumber;
  }
}

console.log(findNthPrime(10001));
