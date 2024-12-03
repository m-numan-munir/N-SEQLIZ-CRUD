import { Router } from "express";
import { createPosts } from "../controllers/post.controller.js";
export const postRouter = Router();
postRouter.route("/").post(createPosts);
