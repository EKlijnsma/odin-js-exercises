const convertToCelsius = function(F) {
  return Math.floor(((F - 32) * 5 / 9) * 10) / 10
};

const convertToFahrenheit = function(C) {
  return Math.floor(((9 / 5 * C) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
