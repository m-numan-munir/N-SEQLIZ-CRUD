import { Router } from "express";
import { createLike } from "../controllers/like.controller.js";

export const likeRouter = Router();
likeRouter.route("/").post(createLike);
