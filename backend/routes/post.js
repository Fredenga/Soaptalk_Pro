const router = require("express").Router();
const Post = require("../models/Post.model");
const verify = require("../tokens/VerifyToken");

//TODO CREATE NEW POST
router.post("/", verify, async (req, res) => {
  const post = new Post({
    userId: req.user.id,
    ...req.body,
  });
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO UPDATE POST
router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { userId: req.user.id, _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    !updatedPost &&
      res.status(403).json("Sorry, you can only update your post");
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO DELETE POST
router.delete("/:id", verify, async (req, res) => {
  try {
    await Post.findOneAndDelete({ userId: req.user.id, _id: req.params.id });
    res.status(200).json("Post deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO GET POST BY ID
router.get("/find/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json("Sorry, post not found");
    res.status(200).json(post);
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    !posts && res.status(404).json("Sorry, posts not found");
    res.status(200).json(posts.reverse());
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO GET MY POSTS
router.get("/author", verify, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id });
    !posts && res.status(404).json("Sorry, posts not found");
    res.status(200).json(posts.reverse());
  } catch (err) {
    res.status(500).send(err);
  }
  //!THIS API WORKS SUCCESSFULLY
});
module.exports = router;
