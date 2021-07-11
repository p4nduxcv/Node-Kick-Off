const mongoose = require("mongoose");
const validator = require("validator");

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
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password Cannot contain password");
      }
    },
  },
});

module.exports = User;
