const Commentaire = require("../models/commentaire");
const Reponsecommentaire = require("../models/reponsecommentaire");

const deleteCommentaireMiddleware = async (req, res, next) => {
  const commentaireId = req.params.id; // Récupérer l'ID du commentaire à supprimer

  try {
    await Commentaire.findByIdAndDelete(commentaireId); // Supprimer le commentaire avec l'ID correspondant

    // Si le commentaire a été supprimé, supprimer toutes les réponses associées
    await Reponsecommentaire.deleteMany({ commentaireId });

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur lors de la suppression du commentaire");
  }
};

module.exports = deleteCommentaireMiddleware;
