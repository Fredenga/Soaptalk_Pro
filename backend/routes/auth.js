const User = require("../models/User.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const generateAccessToken = require("../tokens/GenerateAccessToken");
const generateRefreshToken = require("../tokens/GenerateRefreshToken");
const jwt = require("jsonwebtoken");
let refreshTokens = [];

router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    password: hashedPassword,
    username: req.body.username,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(404).json("No user with this email address has been found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(403).json("Passwords do not match");

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);

    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken, refreshToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.body.token;

  !refreshToken && res.status(401).json("You are not authenticated");
  !refreshTokens.includes(refreshToken) &&
    res.status(403).json("Refresh Token is not valid");
  jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
    err && res.status(400).json(err);
    refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);
    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});
module.exports = router;
