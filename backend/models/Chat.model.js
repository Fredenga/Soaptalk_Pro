const mongoose = require("mongoose");
const ChatSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Chat", ChatSchema);
