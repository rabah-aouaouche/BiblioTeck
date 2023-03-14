const express = require("express");
const router = express.Router();
const Commentaire = require("../models/commentaire");
const Livre = require("../models/livre");
const deleteCommentaireMiddleware = require("../middleware/commentaireMiddleware");

//Getting All
router.get("/", async (req, res) => {
  try {
    const commentairerouter = await Commentaire.find();
    res.json(commentairerouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const com = await Commentaire.findById(req.params.id);

    res.status(200).json(com);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Commentaire = Commentaire;
});

//Creating one
router.post("/", async (req, res) => {
  const commentairerouter = new Commentaire({
    livreId: req.body.livreId,
    auteurId: req.body.auteurId,
    contenu: req.body.contenu,
    dateCreation: req.body.dateCreation,
  });
  try {
    const newcommentaire = await commentairerouter.save();
    res.status(201).json(newcommentaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const commentaireid = req.params.id;
    const updatedata = req.body;
    const updatedCommentaire = await Commentaire.findByIdAndUpdate(
      commentaireid,
      updatedata
    );

    res.json(updatedCommentaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.Commentaire = Commentaire;
});

//Deleting one
router.delete("/:id", deleteCommentaireMiddleware, async (req, res) => {
  try {
    const com = await Commentaire.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted comment" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.Commentaire = Commentaire;
});

router.get("/:id/commentaires", async (req, res) => {
  try {
    const livreId = req.params.id;
    // Récupérer les commentaires associés au livre
    const commentaires = await Commentaire.find({ livre: livreId })
      .populate("auteur")
      .populate("reponses.auteur");

    res.send(commentaires);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Erreur lors de la récupération des commentaires." });
  }
});

module.exports = router;
