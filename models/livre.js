const mongoose = require("mongoose");

const livreSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  nombre_emprunt: {
    type: Number,
    required: true,
  },
  nombre_copie: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Livre", livreSchema);
