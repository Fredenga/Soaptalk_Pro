const router = require("express").Router();
const Message = require("../models/Message.model");
const verify = require("../tokens/VerifyToken");

router.post("/", verify, async (req, res) => {
  const message = new Message({
    sender: req.user.id,
    ...req.body,
  });
  try {
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const allMessages = await Message.find({ chatId: req.params.id });
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
