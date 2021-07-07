const addPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 3 - 3;
    if (sum == 0) {
      reject("Things went wrong!");
    } else {
      resolve(sum);
    }
  }, 2000);
});

addPromises
  .then((result) => {
    console.log("OK", result);
  })
  .catch((e) => {
    console.log("Error", e);
  });
