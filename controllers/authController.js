const User = require("../models/user");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    username: "",
    password: "",
    email: "",
    nom: "",
    prenom: "",
    numeroTel: "",
    adresse: "",
    role: "",
  };

  // incorrect email
  if (err.message === " incorrect email") {
    errors.email = "that email is not registred";
  }

  // incorrect password
  if (err.message === " incorrect password") {
    errors.email = "that password is inccorrect";
  }

  //duplicate errors code
  if (err.code === 11000) {
    errors.email = "that email is already in use";
    return errors;
  }

  // validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const creatToken = (data) => {
  return jwt.sign(data, "rabahaou secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { username, password, email, nom, prenom, numeroTel, adresse, role } =
    req.body;

  try {
    const user = await User.create({
      username,
      password,
      email,
      nom,
      prenom,
      numeroTel,
      adresse,
      role,
    });
    const token = creatToken({ _id: user._id, role: user.role });
    res.status(201).json(token);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = creatToken({ _id: user._id, role: user.role });
    res.status(200).json({ token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
