const fs = require("fs");

//fs.writeFileSync("notes.txt", "pakaya node walin haduwe");
fs.appendFileSync("notes.txt", "data to append");
console.log('The "data to append" was appended to file!');
