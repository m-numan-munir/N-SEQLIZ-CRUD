import { DataTypes, Sequelize } from "sequelize";
import { cSequelize } from "../config/config.js";
export const Post = cSequelize.define("post", {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
});

// ONE WAY TO SYNC
// export const Post = await cSequelize
//   .define("Post", {
//     title: Sequelize.STRING,
//   })
//   .sync();

// SECOND WAY TO SYNC
//Can also be done like this
// await Post.sync();

// THIRD AND THE BEST WAY IS TO CALL sync() DIRECTLY IN DB CONNECTION FILE
