var express = require("express");
var router = express.Router();
var User = require("../../model/user");
const CryptoJS = require("crypto-js");
const { sendResetPasswordEmail } = require("../../config/email.service");
const googleAuth = require("../../middleware/googleAuth")

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(422).send({ message: "This user already exists" });
    } else {
      user = new User(req.body);
      (user.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString()),
        await user.save();
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send({ message: "Invalid information" + err });
  }
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    if (originalPassword != inputPassword) {
      res.status(422).send({ message: "Password is incorrect" });
    } else {
      const signedUser = {
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      };
      const accessToken = jwt.sign(signedUser, process.env.SECRET_TOKEN);
      res.status(200).json({ accessToken: accessToken });
    }
  } else {
    res.status(500).send({ message: "This user is not registered." });
  }
});
router.post("/forgot-password", async (req, res) => {
  let user = await User.findOne(req.body.email);
  if (user) {
    let resetPasswordToken = jwt.sign(user.email, process.env.SECRET_TOKEN);
    await sendResetPasswordEmail(user.email, resetPasswordToken);
    res.status(200).send("Email Sent");
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    let email = await jwt.verify(req.body.token, process.env.SECRET_TOKEN);
    let user = await User.findOne({ email: email });
    (user.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()),
      await user.save();
      res.status(200).send(user);
  } catch (err) {
    res.status(422).send({ message:err.message });
  }
});

router.post("/verify-email", (req, res) => {

});
router.get("/google-auth", googleAuth);
router.get("/google/callback", googleAuth, (req, res) => {
    let user = {
        email: req.user.email, 
        username:req.user.displayName

    }
    console.log(user)
});

module.exports = router;