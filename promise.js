let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`You've got it.`);
  }, 1000);
  setTimeout(() => {
    reject(`Try harder.`);
  }, 2000);
});
promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
