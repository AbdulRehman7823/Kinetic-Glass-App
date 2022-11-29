const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const  User  = require('../model/user');

const jwtOptions = {
  secretOrKey: "jwtSSSSSSSSSSSSSSS",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const googleOptions = {
  clientID: "722702274405-v6h52cg05tj89ivof8cg7bu4g377pgr7.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: 'http://localhost:5000/api/auth/google/callback',
  passReqToCallback: true,
};

const jwtVerify = async (payload, done) => {
  try {
    
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const googleCallback = (request, accessToken, refreshToken, profile, done) => {
  try {
    done(false, profile);
  } catch (err) {
    done(err, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
const googleStrategy = new GoogleStrategy(googleOptions, googleCallback);
module.exports = {
  jwtStrategy,
  googleStrategy,
};
