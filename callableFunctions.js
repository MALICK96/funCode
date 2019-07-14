/*
    Write a function that takes a binary function,
    and make it callable with two invocations.
*/
// additon function
var add = function(x, y) {
  return x + y;
};
// multiplication function
var mult = function(x, y) {
  return x * y;
};
var applyf = function(binary) {
  return function(x) {
    // first arg
    return function(y) {
      // second arg
      return binary(x, y); // find result and return it
    };
  };
};

var addf = applyf(add); // passing add function as argument
addf(40)(10); // call the nested function with args

applyf(mult)(5)(100); // call to all the functions with argument
