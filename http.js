// node [http]
// http is a core global object in node.js.
// It is also a built-in module which allows transfer of data over the Hyper Text Transfer protocol (HTTP).
// it is used in the creation of server (listens for request and send responses)
// and client (send request to server).

// require('node:http') is a must to use HTTP server and client.

// Sample code
const http = require("http");
const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("A Beautiful Sunny Day for taking a Walk around the Pond.");
});

console.log("It is a sunny Day");
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
