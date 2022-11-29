const passport = require('passport');

const verifyCallback = (req, resolve, reject) => async (err, user, info) => {
  if (err || info || !user) {
    console.log(
      'THE ERROR OCCUR ERR:::::::::: ' + err + '  THE INFO IS::::::::::::: ' + info + '  THE USER IS::::::::' + user
    );
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;
 

  resolve();
};

const auth =
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject))(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };

module.exports = auth;
