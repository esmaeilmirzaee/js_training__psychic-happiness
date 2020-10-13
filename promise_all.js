const promiseNames = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Esmaeil', 'Samuel']);
  }, 2000);

  setTimeout(() => {
    reject('Not wortking');
  }, 3000);
});

const promiseFamilies = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Jackson', 'Russell']);
  }, 2000);

  setTimeout(() => {
    reject('Not working');
  }, 3000);
});

Promise.all([promiseNames, promiseFamilies])
  .then((data) => {
    [names, families] = data;
    for (i = 0; i < data.length; i++) {
      name = names[i];
      family = families[i];
      console.log(name, family);
    }
  })
  .catch((err) => {
    console.log(err);
  });
