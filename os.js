//Operating System (os) is an inbuilt module in node.js which provides information
// about the computers operating system.
// It does not require npm installation.
// It is used by just requiring the module

var os = require("os");

//
console.log("version: " + os.version());

//
console.log("Home Directory: " + os.homedir());

//
console.log("release: " + os.release());

//
console.log("Total Memory: " + os.totalmem());

//
console.log("Type: " + os.type());
