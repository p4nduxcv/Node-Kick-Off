const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "pakaya",
  });
});

// app.get("/help", (req, res) => {
//   res.send("help hello pako");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello Pako 2<h2>");
// });

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
