require("../src/db/mongoose");
const Task = require("../src/models/task");

const deletetaskCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deletetaskCount("60e9ba7c48a60c1804a42b4c")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
