const fs = require("fs");

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

const saveNotes = function (notes) {
  dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const noteJSON = notesBuffer.toString();
    return JSON.parse(noteJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
