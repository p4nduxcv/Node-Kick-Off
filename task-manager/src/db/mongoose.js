const mongoose = require("mongoose");
const validator = require("validator");

const db = "mongodb://127.0.0.1:27017/task-manager-api";

//mongo db connection
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("mongo connected");
    } else {
      console.log("Something Went Wrong");
    }
  }
);

// set up models
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email ඔනේ පකෝ");
      }
    },
  },
  age: {
    type: Number,
  },
});

// create data
const me = new User({
  name: "Andrew",
  email: "x",
  age: 27,
});

// save data in mongo
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((e) => {
    console.log(`error`, e);
  });

// set up task model
// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// create data
// const mytask = new Task({
//   description: "pako",
//   completed: true,
// });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((e) => {
    console.log(e);
  });
