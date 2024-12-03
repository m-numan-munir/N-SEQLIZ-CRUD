import { Sequelize } from "sequelize";
import { cSequelize } from "../db/db.connection.js";

export const Post = await cSequelize
  .define("Post", {
    title: Sequelize.STRING,
  })
  .sync();

// await Post.sync();
