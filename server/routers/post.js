const console = require("console");
const express = require("express");
const req = require("express/lib/request");
const { set } = require("mongoose");
const Post = require("../Models/post");
const router = express.Router();

//get all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit a posts
router.post("/", async (req, res) => {
  //console.log(req.body);
  const post = new Post({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

  //specifig post

  router.get('/:postId', async (req, res) => {
    try {
      const posts = await Post.findById(req.params.postId);
      res.json(posts);
    } catch (err) {
      res.json({ message: err });
    }
  });


// delete post
router.delete("/:postId", async (req, res) => {
  try {
    const RemovePost = await Post.remove({ _id: req.params.postId });
    res.json({ RemovePost });
  } catch (err) {
    res.json({ message: err });
  }
});

//update post

router.patch("/:postId", async (req, res) => {
  try {
    const UpdatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { name: req.body.name, password: req.body.password } }
    );

    res.json(UpdatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
