//destructuring

const { type } = require("os");

const products = {
  name: "pakaya",
  price: 45,
};

// const { name: productName, price } = products;
// console.log(productName);
// console.log(price);

const transaction = (type, { name, price }) => {
  console.log(type, name, price);
};

transaction("fucker", products);
