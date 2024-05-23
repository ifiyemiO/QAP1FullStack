// node [http]
// http is a core global object in node.js that manages and runs a server.
// It is also a built-in module which allows transfer of data over the Hyper Text Transfer protocol (HTTP).
// it is used in the creation of server (listens for request and send responses)
// and client (send request to server).

// require('node:http') is a must to use HTTP server and client.

// Sample code to create a server
// reference for library http
const http = require("http");
const hostname = "127.0.0.1";
const port = 5500;

// create server using request by client and response by server
const server = http.createServer((request, response) => {
  console.log(request);
  response.statusCode = 200;

  // type of data to be sent
  response.setHeader("Content-Type", "text/plain");
  response.end("A Beautiful Sunny Day for taking a Walk around the Pond.");
});

// terminal side
console.log("It is a sunny Day");

// server side
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// new test branch
