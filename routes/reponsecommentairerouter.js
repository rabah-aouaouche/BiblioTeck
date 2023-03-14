const express = require("express");
const router = express.Router();
const Reponsecommentaire = require("../models/reponsecommentaire");
const Livre = require("../models/livre");

//Creating one
router.post("/", async (req, res) => {
  const reponsecommentairerouter = new Reponsecommentaire({
    commentaireId: req.body.commentaireId,
    auteurId: req.body.auteurId,
    contenu: req.body.contenu,
    dateCreation: req.body.dateCreation,
  });
  try {
    const newrepcommentaire = await reponsecommentairerouter.save();
    res.status(201).json(newrepcommentaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const repcom = await Reponsecommentaire.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted comment" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.Commentaire = Commentaire;
});

module.exports = router;
