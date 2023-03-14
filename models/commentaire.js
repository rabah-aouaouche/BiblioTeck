// Modèle Commentaire

const mongoose = require("mongoose");

const commentaireSchema = new mongoose.Schema({
  livreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "livre",
    required: true,
  },
  auteurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  contenu: {
    type: String,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Commentaire", commentaireSchema);
