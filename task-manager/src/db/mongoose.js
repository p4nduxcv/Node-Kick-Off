const mongoose = require("mongoose");
const validator = require("validator");

const db = "mongodb://127.0.0.1:27017/task-manager-api";

//mongo db connection
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("mongo connected");
    } else {
      console.log("Something Went Wrong");
    }
  }
);
