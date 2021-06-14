const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

add(4, 5, (sum) => {
  console.log(sum);
});
