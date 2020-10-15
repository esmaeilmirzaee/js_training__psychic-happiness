const http = require('http');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, '/public/html', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { ContentType: 'text/html' });
        res.end(content);
      }
    );
  }

  // Show About page
  if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public/html', 'about.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { ContentType: 'text/html' });
        res.end(content);
      }
    );
  }

  if (req.url === '/api/user') {
    const fetchUser = fetch('https://randomuser.me/api/?results=1');
    res.writeHead(200, { ContentType: 'application/json' });
    fetchUser
      .then((data) => {
        data.json().then((user) => {
          res.end(JSON.stringify(user.results));
        });
      })
      .catch((err) => console.log(err));
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is on at port ${port}.`));
