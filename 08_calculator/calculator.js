const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(num => {
    sum += num
  });
  return sum;
};

const multiply = function (numArray) {
  return numArray.reduce((result, currentValue) => result * currentValue);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
  if (num === 0) {
    return 1
  }
    return num * factorial(num-1);
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
