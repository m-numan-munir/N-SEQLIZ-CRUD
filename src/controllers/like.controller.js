import { Like } from "../models/like.model.js";

export const createLike = async (req, res) => {
  let like = await Like.create(req.body);
  res.status(201).json(like);
};
