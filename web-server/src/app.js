const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = 3000;

// Define Path for Express Config
const publicDirPath = path.join(__dirname, "../public");
const templateDirpath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//Setup handle bar Engin and view location
app.set("view engine", "hbs");
app.set("views", templateDirpath);
hbs.registerPartials(partialPath);

//set up directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "pakaya",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Pandula",
  });
});

// TO get JSON
app.get("/weather", (req, res) => {
  res.send([
    {
      forecast: "Esketit",
      Location: "SL",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Port ` + PORT + ` is UP`);
});
