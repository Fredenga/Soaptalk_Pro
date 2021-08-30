const User = require("../models/User.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const verify = require("../tokens/VerifyToken");

//TODO UPDATE ACCOUNT
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id) {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("You can only update your account");
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO DELETE ACCOUNT
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account successfully deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("You can only delete your account");
  }
  //!THIS API WORKS SUCCESSFULLY
});
router.get("/", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/friend/:id", verify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
//TODO FRIENDS ACCOUNT
router.get("/friends", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const friends = await Promise.all(
      user.following.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, img } = friend;
      friendList.push({ _id, username, img });
    });
    res.status(200).json(friendList);
  } catch (err) {
    res.status(500).send(err);
  }
});

//TODO FOLLOW ACCOUNT
router.put("/:id/follow", verify, async (req, res) => {
  if (req.params.id !== req.user.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.id);
      if (!user.followers.includes(req.user.id)) {
        await user.updateOne({ $push: { followers: req.user.id } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(401).json("You already followed this user");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).json("You cannot follow yourself");
  }
  //!THIS API WORKS SUCCESSFULLY
});

//TODO UNFOLLOW ACCOUNT
router.put("/:id/unfollow", verify, async (req, res) => {
  if (req.params.id !== req.user.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.id);
      if (user.followers.includes(req.user.id)) {
        await user.updateOne({ $pull: { followers: req.user.id } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(401).json("You don't follow this user");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).json("You cannot unfollow yourself");
  }
  //!THIS API WORKS SUCCESSFULLY
});
module.exports = router;
