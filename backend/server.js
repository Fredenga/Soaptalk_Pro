const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const cloudinary = require("cloudinary");
dotenv.config();

const MONGODB = process.env.MONGODB;

mongoose.connect(
  MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Soaptalk database connected");
  }
);

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.post("/api/upload", upload.single("image"), async (req, res) => {
  const response = await cloudinary.uploader.upload(req.file.path);

  res.status(200).json(response);
});

app.use(express.json());
const chatsRoute = require("./routes/chats");
const authRoute = require("./routes/auth");
const messagesRoute = require("./routes/messages");
const postsRoute = require("./routes/post");
const usersRoute = require("./routes/user");

app.use("/api/chats", chatsRoute);
app.use("/api/auth", authRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
