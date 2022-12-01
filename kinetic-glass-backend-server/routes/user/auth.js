var express = require("express");
var router = express.Router();
var User = require("../../model/user");
const CryptoJS = require("crypto-js");
const passport = require("passport");

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    console.log(req)
    res.status(200).json({
      error:false,
      message:"Successfully Loged In",
      user:req.user
    });
  } else {
    res.status(422).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(422).json({ error: true, message: "Login Failure" });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));
router.get("/logout", (req, res) => {
  req.logout();
  req.redirect(process.env.CLIENT_URL);
});


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



module.exports = router;
