// encriptions
const jwt = require("jsonwebtoken");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 8000;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const myFunc = async () => {
  const token = jwt.sign({ _id: " abcx123" }, "thisismynewcourse", {
    expiresIn: "1 seconds",
  });
  console.log(token);
  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

const encryptPassword = async () => {
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(`password `, password, ` encrypted Password `, hashedPassword);

  //check password and encrypted password
  const isMatch = await bcrypt.compare(password, hashedPassword);

  console.log(isMatch);
};

myFunc();
