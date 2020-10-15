const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.write(req.url);
  res.end();
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is on at port ${port}.`));
