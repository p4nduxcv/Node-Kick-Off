//destructuring

const products = {
  name: "pakaya",
  price: 45,
};

const { name: productName, price } = products;
console.log(productName);
console.log(price);
