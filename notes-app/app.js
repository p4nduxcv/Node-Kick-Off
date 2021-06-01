const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");

//command create
yargs.command({
  command: "add",
  describe: "Add a new Note",
  handler: function () {
    console.log(chalk.bgBlue("adding a new note"));
  },
});

//command remove
yargs.command({
  command: "remove",
  describe: "Remove a new Note",
  handler: function () {
    console.log(chalk.bgRed("Removing a new note"));
  },
});

//command read
yargs.command({
  command: "read",
  describe: "Read a new Note",
  handler: function () {
    console.log(chalk.bgGreen("Reading a new note"));
  },
});

//command list
yargs.command({
  command: "list",
  describe: "List a new Note",
  handler: function () {
    console.log(chalk.bgGray("Listing a new note"));
  },
});

// add,remove, read, list
console.log(yargs.argv);
