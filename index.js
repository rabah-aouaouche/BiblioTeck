require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Livre = require("./models/livre");
const Emprunt = require("./models/emprunt");
const Categorie = require("./models/categorie");

app.use(express.json());
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

// fonctions - routes - controllers
const CategorieRouter = require("./routes/categorierouter");
app.use("/categorierouter", CategorieRouter);

const LivreRouter = require("./routes/livrerouter");
app.use("/livrerouter", LivreRouter);

const UserRouter = require("./routes/userrouter");
app.use("/userrouter", UserRouter);

const EmpruntRouter = require("./routes/empruntrouter");
app.use("/empruntrouter", EmpruntRouter);

// run();
// async function run() {
//   try {
//     const user = await User.create({
//       username: "wickedgames",
//       password: "password",
//       email: "wickedgames@gmail.com",
//       nom: "games",
//       prenom: "wicked",
//       numeroTel: "0657510070",
//       adresse: "alger centre",
//       role: "user",
//     });

//     console.log(user);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const livre = await Livre.create({
//       titre: "hunger games",
//       auteur: "william lol",
//       note: "8/10",
//       nombre_emprunt: "2",
//       nombre_copie: "10",
//     });

//     console.log(livre);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const emprunt = await Emprunt.create({
//       IdUser: "63fcb9d1075f9a8549b859f4",
//       IdLivre: "63fcc2d291a72d9f742aa08b",
//       date_emprunt: "2023-02-27",
//       date_retour_prevu: "2023-03-05",
//       date_retour_effective: "2023-03-05",
//     });

//     console.log(emprunt);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const categorie = await Categorie.create({
//       nom: "roman",
//     });

//     console.log(categorie);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
