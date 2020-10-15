const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { ContentType: 'text/html' });
    res.end('<h1>Home</h1>');
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is on at port ${port}.`));
