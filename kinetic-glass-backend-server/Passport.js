const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user,done)=>{
    done(null,user)
})


passport.deserializeUser((user,done)=>{
    done(null,user)
})

