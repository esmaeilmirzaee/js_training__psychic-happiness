const fetch = require('node-fetch');
let i = 0;

const randomUsers = (n) => {
  const fetchUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  fetchUsers
    .then((data) => {
      data
        .json()
        .then((users) => {
          // console.log(user);
          users.results.forEach((user) => {
            const u = JSON.stringify(user);
            console.log(u);
          });
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
