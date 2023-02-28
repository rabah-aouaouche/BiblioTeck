const express = require("express");
const router = express.Router();
const Categorie = require("../models/categorie");

//Getting All
router.get("/", async (req, res) => {
  try {
    const categorierouter = await Categorie.find();
    res.json(categorierouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const cat = await Categorie.findById(req.params.id);

    res.status(200).json(cat);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Categorie = Categorie;
});

//Creating one
router.post("/", async (req, res) => {
  const categorierouter = new Categorie({
    nom: req.body.nom,
  });
  try {
    const newcategorie = await categorierouter.save();
    res.status(201).json(newcategorie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const categorieid = req.params.id;
    const updatedata = req.body;
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      categorieid,
      updatedata
    );

    res.json(updatedCategorie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.Categorie = Categorie;
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const cat = await Categorie.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted category" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.Categorie = Categorie;
});

module.exports = router;
