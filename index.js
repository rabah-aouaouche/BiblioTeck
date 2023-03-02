require("dotenv").config();
const express = require("express");
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

// fonctions - routes - controllers
const CategorieRouter = require("./routes/categorierouter");
app.use("/categorierouter", CategorieRouter);

const LivreRouter = require("./routes/livrerouter");
app.use("/livrerouter", LivreRouter);

const UserRouter = require("./routes/userrouter");
app.use("/userrouter", UserRouter);

const EmpruntRouter = require("./routes/empruntrouter");
app.use("/empruntrouter", EmpruntRouter);

// routes
app.use(authRoutes);
