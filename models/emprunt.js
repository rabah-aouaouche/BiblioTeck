const mongoose = require("mongoose");

const empruntSchema = new mongoose.Schema({
  IdUser: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
  IdLivre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "livre",
    required: true,
  },
  date_emprunt: {
    type: Date,
    required: true,
  },
  date_retour_prevu: {
    type: Date,
    required: true,
  },
  date_retour_effective: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Emprunt", empruntSchema);
