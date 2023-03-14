const express = require("express");
const router = express.Router();
const Livre = require("../models/livre");
const Renouvellement = require("../models/renouvellement");
const { protectUser } = require("../middleware/authMiddleware");

router.post("/:id/renouvellemnt", protectUser, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const livre = await Livre.findById(id);
    if (!livre) {
      return res.status(404).send("Book not found");
    }

    const renouvellement = await Renouvellement.findOne({
      livreId: id,
      userId,
    });
    if (renouvellement) {
      return res.status(400).send("You have already renewed this book");
    }

    const newRenouvellement = new Renouvellement({ livreId: id, userId });
    await newRenouvellement.save();

    const daysToRenouvellement = 7;
    const newDueDate = new Date(
      Date.now() + daysToRenouvellement * 24 * 60 * 60 * 1000
    );

    if (newDueDate >= livre.dueDate) {
      // L'utilisateur a renouvelé le livre à temps, sans pénalité
      livre.dueDate = newDueDate;
      await livre.save();
      return res.send(
        `The due date for the book ${livre.titre} has been extended to ${newDueDate}`
      );
    } else {
      // L'utilisateur a renouvelé le livre en retard, appliquer la pénalité de suspension
      const delayInMs = Date.now() - livre.dueDate.getTime();
      const delayInDays = Math.ceil(delayInMs / (24 * 60 * 60 * 1000));
      const suspensionDays = delayInDays + 10;
      const suspensionDueDate = new Date(
        Date.now() + suspensionDays * 24 * 60 * 60 * 1000
      );
      livre.dueDate = suspensionDueDate;
      await book.save();
      return res.send(
        `You renewed the book ${livre.titre} ${delayInDays} days late. Your new due date is ${suspensionDueDate}. You are suspended for ${suspensionDays} days.`
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
