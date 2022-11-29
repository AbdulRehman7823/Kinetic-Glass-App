const nodemailer = require("nodemailer");


const smtp = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASS,
  },

};
const transport = nodemailer.createTransport(smtp);
/* istanbul ignore next */
  transport
    .verify()
    .then(() => logger.info("Connected to email server"))
    .catch(() =>
      console.log(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );


/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text, html) => {
  const msg = { from: process.env.SMTP_FROM, to, subject, text, html };
  await transport.sendMail(msg);
  return msg;
};

/** 
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://localhost:3000//resetpassword?token=${token}`;
  const html = `<p>Dear user,<br/>To reset your password, click on this link::<a href=${resetPasswordUrl} >Reset Password<a/><br/>
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, html);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = "Email Verification";
  const verificationEmailUrl = `http://localhost:3000/verifyemail?token=${token}`;
  const html = `<p>Dear user,<br/>To verify your email, click on the button:<a href=${verificationEmailUrl} >verify email<a/><br/>
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, html);
};

const sendEmailOnCreateUser = async (to) => {
  const subject = "New User Email Verification";
  const verificationEmailUrl = `link/verify-email`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendEmailOnCreateUser,
};
