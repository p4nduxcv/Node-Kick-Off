const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");
const { argv } = require("yargs");

//command create
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: "true",
    },
    body: {
      describe: "Note Body",
      demandOption: "true",
      type: "String",
    },
  },
  handler: function (argv) {
    console.log(`title`, chalk.bgBlue(argv.title));
    console.log(`body`, chalk.bgBlue(argv.body));
  },
});

//command remove
yargs.command({
  command: "remove",
  describe: "Remove a new Note",
  //Arguments Passing with Yargs
  builder: {
    title: {
      describe: "Note Title",
      demandOption: "true",
    },
  },
  handler: function () {
    console.log(chalk.bgRed("Removing a new note"), argv);
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
