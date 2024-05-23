const validator = require("validator");

// Returns true if the number is a valid float, otherwise false
console.log(validator.isFloat("12.99"));

// Returns true if the string is a valid uppercase, otherwise false
console.log(validator.isUppercase("hello spring"));
