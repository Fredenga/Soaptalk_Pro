const router = require("express").Router();
const Chat = require("../models/Chat.model");
const verify = require("../tokens/VerifyToken");

router.post("/", verify, async (req, res) => {
  const chat = new Chat({
    senderId: req.user.id,
    receiverId: req.body.receiverId,
  });
  try {
    const savedChat = await chat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", verify, async (req, res) => {
  try {
    const chats = await Chat.find({ senderId: req.user.id });
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
