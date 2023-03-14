const mongoose = require("mongoose");

const renouvellementSchema = new mongoose.Schema({
  livreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "livre",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  renouvelAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Renouvellement", renouvellementSchema);
