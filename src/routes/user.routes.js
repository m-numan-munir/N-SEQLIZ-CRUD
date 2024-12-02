import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  findAllUsers,
  updateUsers,
} from "../controllers/users.controller.js";
export const userRouter = Router();
userRouter.route("/").post(createUsers);
userRouter.route("/").get(findAllUsers);
userRouter.route("/:id").put(updateUsers);
userRouter.route("/:id").delete(deleteUsers);
