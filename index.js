require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./models/user");
const Livre = require("./models/livre");
const Emprunt = require("./models/emprunt");
const Categorie = require("./models/categorie");
const authRoutes = require("./routes/authRoutes");
const { requireAuth } = require("./middleware/authMiddleware");

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => {
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// NODEMAILEEER
function sendEmail() {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rabehaou@gmail.com",
        pass: "fpkjmzwjyzmvdxxh",
      },
    });

    const mail_configs = {
      from: "rabehaou@gmail.com",
      to: "rabehaou@gmail.com",
      subject: "Nouveau livre ajouté à la bibliothèque",
      text: " Chers lecteurs Nous sommes heureux de vous informer qu'un nouveau livre a été ajouté à notre bibliothèque. Le livre s'intitule _Games of thrones_ . Nous sommes convaincus que vous allez adorer ce livre et nous vous invitons à venir l'emprunter dès que possible. Nous tenons également à vous rappeler que vous pouvez consulter notre catalogue en ligne pour voir tous les livres que nous avons en stock. Nous mettons régulièrement à jour notre catalogue avec de nouveaux livres passionnants, alors n'hésitez pas à le consulter régulièrement.",
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: ` An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// fonctions - routes - controllers
const CategorieRouter = require("./routes/categorierouter");
app.use("/categorierouter", CategorieRouter);

const LivreRouter = require("./routes/livrerouter");
app.use("/livrerouter", LivreRouter);

const UserRouter = require("./routes/userrouter");
app.use("/userrouter", UserRouter);

const EmpruntRouter = require("./routes/empruntrouter");
app.use("/empruntrouter", EmpruntRouter);

const CommentaireRouter = require("./routes/commentairerouter");
app.use("/commentairerouter", CommentaireRouter);

const ReponsecommentaireRouter = require("./routes/reponsecommentairerouter");
app.use("/reponsecommentairerouter", ReponsecommentaireRouter);

const RenouvellementRouter = require("./routes/renouvellementrouter");
app.use("/renouvellementrouter", RenouvellementRouter);

const stats = require("./routes/statsrouter");
app.use("/statsrouter", stats); // Route pour les statistiques de la bibliothèque
// routes
app.use(authRoutes);
