const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Resolve the promise after 5 seconds
    resolve('Promise fulfilled!');
    // Reject the promise after 5 seconds
    // reject('Promise rejected!');
  }, 5000);
});