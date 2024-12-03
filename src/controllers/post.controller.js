import { Post } from "../models/post.model.js";

export const createPosts = async (req, res, next) => {
  console.log("Creating Post : ", req.body);
  let post = await Post.create(req.body);
  return res.status(201).json({ status: "Success", data: post });
};
