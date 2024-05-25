const add = function(a, b) {
  return a + b;  
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(array) {
  return array.reduce((sum, item) => sum * item, 1); 
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let res = 1;
  while (a > 1)
    {
      res *= a;
      a--;
    }
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
