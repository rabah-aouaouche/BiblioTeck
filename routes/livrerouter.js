const express = require("express");
const router = express.Router();
const Livre = require("../models/livre");

//Getting All
router.get("/", async (req, res) => {
  try {
    const livrerouter = await Livre.find();
    res.json(livrerouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const liv = await Livre.findById(req.params.id);

    res.status(200).json(liv);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Livre = Livre;
});

//Creating one
router.post("/", async (req, res) => {
  const livrerouter = new Livre({
    titre: req.body.titre,
    auteur: req.body.auteur,
    note: req.body.note,
    nombre_emprunt: req.body.nombre_emprunt,
    nombre_copie: req.body.nombre_copie,
  });
  try {
    const newlivre = await livrerouter.save();
    res.status(201).json(newlivre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const livreid = req.params.id;
    const updatedata = req.body;
    const updatedLivre = await Livre.findByIdAndUpdate(livreid, updatedata);

    res.json(updatedLivre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.Livre = Livre;
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const liv = await Livre.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted livre" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.Livre = Livre;
});

router.get("/", async (req, res) => {
  try {
    let filters = {};
    if (req.query.categorie) {
      filters.categorie = req.query.categorie;
    }
    if (req.query.auteur) {
      filters.autheur = req.query.autheur;
    }
    if (req.query.note) {
      filters.note = req.query.note;
    }
    if (req.query.nombre_emprunt) {
      filters.nombre_emprunt = req.query.nombre_emprunt;
    }
    const livr = await Livre.find(filters);
    res.status(200).json(livr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
