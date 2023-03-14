const express = require("express");
const router = express.Router();
const Emprunt = require("../models/emprunt");

//Getting All
router.get("/", async (req, res) => {
  try {
    const empruntrouter = await Emprunt.find();
    res.json(empruntrouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

// endpoint pour récupérer l'historique de prêt d'un utilisateur HISTORIIIIQUUUUEEEEEE
router.get("/userrouter/empruntrouter/:id", async (req, res) => {
  try {
    const emprunt = await Emprunt.find({ IdUser: req.params.id });
    res.json(emprunt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const emp = await Emprunt.findById(req.params.id);

    res.status(200).json(emp);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Emprunt = Emprunt;
});

//Creating one
router.post("/", async (req, res) => {
  const empruntrouter = new Emprunt({
    IdUser: req.body.IdUser,
    IdLivre: req.body.IdLivre,
    date_emprunt: req.body.date_emprunt,
    date_retour_prevu: req.body.date_retour_prevu,
    date_retour_effective: req.body.date_retour_effective,
  });
  try {
    const newemprunt = await empruntrouter.save();
    res.status(201).json(newemprunt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const empruntid = req.params.id;
    const updatedata = req.body;
    const updatedEmprunt = await Emprunt.findByIdAndUpdate(
      empruntid,
      updatedata
    );

    res.json(updatedEmprunt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.Emprunt = Emprunt;
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const emp = await Emprunt.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted emprunt" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.Emprunt = Emprunt;
});

module.exports = router;
