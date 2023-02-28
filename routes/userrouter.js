const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Getting All
router.get("/", async (req, res) => {
  try {
    const userrouter = await User.find();
    res.json(userrouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);

    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Yser = User;
});

//Creating one
router.post("/", async (req, res) => {
  const userrouter = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    nom: req.body.nom,
    prenom: req.body.prenom,
    numeroTel: req.body.numeroTel,
    adresse: req.body.adresse,
    role: req.body.role,
  });
  try {
    const newuser = await userrouter.save();
    res.status(201).json(newuser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const updatedata = req.body;
    const updatedUser = await User.findByIdAndUpdate(userid, updatedata);

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.User = User;
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.User = User;
});

module.exports = router;
