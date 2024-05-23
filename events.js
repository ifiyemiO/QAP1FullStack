// Events is a core module in node.js which Emits named events thats causes functions to be called.
// It is used to handle events in node.js.
// Example of an event is click
// an EventEmitter is required to use events

// importing events module
const EventEmitter = require("events");

// creating eventEmitter object
var eventEmitter = new EventEmitter();

// creating an event listener
eventEmitter.addListener("myEvent", (msg) => {
  console.log(msg);
});

// emitting an event
eventEmitter.emit("myEvent", "My First event");
