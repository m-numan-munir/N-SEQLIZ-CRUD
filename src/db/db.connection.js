import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { generateModels } from "../models/root.models.js";
dotenv.config();

// import "../../.env";
export const cSequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: console.log(),
  }
);
export const connectDb = async () => {
  try {
    await cSequelize.authenticate();
    console.log("Connection has been established successfully.");
    await generateModels(cSequelize);
    await cSequelize.sync();
    console.log("DB Synced successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// process.env.DB_PORT,
// process.env.DB_DIALECT,
