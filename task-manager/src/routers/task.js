const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  try {
    const task = await new Task(req.body);
    res.send(task);
  } catch (error) {
    res.status(400).send(e);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      res.status(404).send();
    }

    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);

    if (!task) {
      res.status(404).send();
      console.log("No task for ID" + _id);
    }

    res.status(200).send(task);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

module.exports = router;
