import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { postRouter } from "./post.routes.js";
export const rootRouter = Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/posts", postRouter);
