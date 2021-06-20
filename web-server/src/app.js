const express = require("express");

const app = express();

const PORT = 3000;

app.get("", (req, res) => {
  res.send("hello pako");
});

app.get("/help", (req, res) => {
  res.send("help hello pako");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello Pako 2<h2>");
});

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
