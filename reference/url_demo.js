const url = require('url');

const aURL = new URL('https://randomuser.me:8080/api/?results=100');
console.log(aURL.host);
console.log(aURL.hostname);
console.log(aURL.href);
console.log(aURL.toString());
console.log(aURL.pathname);
console.log(aURL.search);
