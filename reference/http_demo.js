const http = require('http');

// Create an object
http
  .createServer((req, res) => {
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log("Server's running..."));
