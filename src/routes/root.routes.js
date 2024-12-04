import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { postRouter } from "./post.routes.js";
import { likeRouter } from "./like.routes.js";
export const rootRouter = Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/posts", postRouter);
rootRouter.use("/likes", likeRouter);
