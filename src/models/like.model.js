import { DataTypes } from "sequelize";
import { cSequelize } from "../config/config.js";

export const Like = cSequelize.define("like", {
  count: DataTypes.INTEGER,
});
