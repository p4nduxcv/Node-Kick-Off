const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");
const { argv } = require("yargs");

//command create
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string  ",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
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
      type: "String",
    },
  },
  handler() {
    notes.removeNotes(argv.title, argv.body);
  },
});

//command read
yargs.command({
  command: "read",
  describe: "Read a new Note",
  handler() {
    console.log(chalk.bgGreen("Reading a new note"));
  },
});

//command list
yargs.command({
  command: "list",
  describe: "List a new Note",
  handler() {
    notes.listNotes();
  },
});

// add,remove, read, list
// console.log(yargs.argv);

yargs.parse();
