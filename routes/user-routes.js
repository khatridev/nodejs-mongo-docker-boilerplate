const express = require("express");
const userModel = require("../models/user");

const app = express();

// route to get all users
app.get("/users", async (req, res) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// route to create one user
app.post("/user", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// route to update user by id
app.patch("/user/:id", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Updated user");
  } catch (err) {
    res.status(500).send(err);
  }
});

// route to delete user by id
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).send("No users");
    res.status(200).send("User deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
