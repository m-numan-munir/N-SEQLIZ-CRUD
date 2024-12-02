import { Router } from "express";
import { createUsers, findAllUsers } from "../controllers/users.controller.js";
export const userRouter = Router();
userRouter.route("/").post(createUsers);
userRouter.route("/").get(findAllUsers);
