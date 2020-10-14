const fetch = require('node-fetch');

const randomUsers = (n) => {
  const fetchUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  fetchUsers
    .then((data) => {
      data
        .json()
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

randomUsers(10);
