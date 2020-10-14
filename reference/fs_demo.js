const { throws } = require('assert');
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  // if (err) throw err;
  console.log('Folder created...');
});

fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  '{Hello There}',
  (err) => {
    if (err) throw err;
    console.log('File has been created.');
  }
);

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function (
  err,
  data
) {
  if (err) throw err;
  console.log(data);
});
