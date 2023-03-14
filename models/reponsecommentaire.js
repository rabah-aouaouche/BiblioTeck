const mongoose = require("mongoose");

const reponsecommentaireSchema = new mongoose.Schema({
  commentaireId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "commentaire",
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

module.exports = mongoose.model("Reponsecommentaire", reponsecommentaireSchema);
