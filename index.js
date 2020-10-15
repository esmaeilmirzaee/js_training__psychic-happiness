const http = require('http');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    'public/',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extension of filePath
  let extName = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      filePath = path.join(
        __dirname,
        'public/',
        req.url === '/' ? 'index.html' : req.url
      );
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      filePath = path.join(
        __dirname,
        'public/html/',
        req.url === '/' ? 'index.html' : req.url
      );
      contentType = 'text/css';
      break;
  }

  // Load file
  fs.readFile(filePath, (err, content) => {
    console.log(filePath);
    if (err) {
      if (err.code === 'ENONET') {
        // Page not found
        fs.readFile(
          path.join(__dirname, '/public/html/', '404.html'),
          (err, content) => {
            res.writeHead(200, { ContentType: 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Some server's errors
        res.writeHead(500);
        res.end(`Server's error ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { ContentType: 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is on at port ${port}.`));
