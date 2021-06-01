const fs = require("fs");

// Step 1
// const book = {
//   title: "lolsl",
//   author: "disco",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON.title);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

//Step 2
//to create new json file
//fs.writeFileSync("1-json.json", bookJSON);

//step 3
const data = fs.readFileSync("1-json.json");
const dataBuffer = data.toString();
const datajsonFormated = JSON.parse(dataBuffer);
console.log(datajsonFormated);

datajsonFormated.name = "pandula";
datajsonFormated.planet = "mars";
datajsonFormated.age = "80";

const userJSON = JSON.stringify(datajsonFormated);
fs.writeFileSync("1-json.json", userJSON);
