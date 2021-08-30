const jwt = require("jsonwebtoken");
const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "5d",
  });
};
module.exports = generateAccessToken;
