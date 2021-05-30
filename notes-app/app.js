const add = require("./utils.js");
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

//const fs = require("fs");

//fs.writeFileSync("notes.txt", "pakaya node walin haduwe");
// fs.appendFileSync("notes.txt", "data to append");
// console.log('The "data to append" was appended to file!');
console.log(`sum`, add(5, 2));
console.log(`notes`, getNotes());
console.log(validator.isEmail("pandulka95@gmail.com"));
console.log(chalk.bgMagenta("Success gg"));
