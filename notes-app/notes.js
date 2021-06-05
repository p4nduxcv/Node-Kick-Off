const chalk = require("chalk");
const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");

const getNotes = function () {
  return `Wellcome to grandpa kitchen`;
};

const addNotes = function (title, body) {
  const existNotes = loadNotes();
  const duplicatedNotes = existNotes.filter((notes) => {
    return notes.title === title;
  });

  if (duplicatedNotes.length === 0) {
    existNotes.push({
      title: title,
      body: body,
    });

    saveNotes(existNotes);
    console.log("New Note Added");
  } else {
    console.log("Tile Already Taken");
  }

  console.log(existNotes);
};

const removeNotes = function (title, body) {
  const loadExistingNotes = loadNotes();
  console.log(loadExistingNotes);

  const filterNote = loadExistingNotes.filter((inputTitle) => {
    return inputTitle.title !== title;
  });

  if (loadExistingNotes.length > filterNote.length) {
    console.log(chalk.bgGreen("Deleted"));
    saveNotes(filterNote);
  } else {
    console.log(chalk.bgRed("Title Does not matched"));
  }
};

const saveNotes = function (notes) {
  dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const noteJSON = notesBuffer.toString();
    const laodNotesH = JSON.parse(noteJSON);
    // console.log(noteJSON);
    return laodNotesH;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
};
