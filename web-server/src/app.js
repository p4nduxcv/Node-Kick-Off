const express = require("express");

const app = express();

const PORT = 3000;

app.get("", (req, res) => {
  res.send("hello pako");
});

app.get("/help", (req, res) => {
  res.send("help hello pako");
});

app.listen(PORT, () => {
  console.log(`Port ` + PORT + ` is UP`);
});
