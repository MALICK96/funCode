/*
    This function calculates all the digits of PI
    
*/
var sumOfPIDigits = function(pi) {
  var res = 0;
  pi = pi.toString();
  var len = pi.length;
  for (var i = 0; i < len; i++) {
    if (pi[i] !== ".") {
      res += +pi[i];
    } else {
      continue;
    }
  }
  return res;
};
sumOfPIDigits(Math.PI);
