const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  },
  email: {
    type: String,
    required: [true, "please enter a email address"],
    unique: true,
    validate: [isEmail, "please enter a valid email address"],
  },
  nom: {
    type: String,
    required: [true, "please enter a firstname"],
  },
  prenom: {
    type: String,
    required: [true, "please enter a lastname"],
  },
  numeroTel: {
    type: Number,
    required: [true, "please enter a number"],
  },
  adresse: {
    type: String,
    required: [true, "please enter a address"],
  },
  role: {
    type: String,
    Enum: ["user", "admin"],
    default: "user",
  },
});

// fire a function before doc saved to database

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model("User", userSchema);
