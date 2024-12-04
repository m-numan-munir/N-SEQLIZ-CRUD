import dotenv from "dotenv";
import pkg from "pg";
// import { generateModels } from "../models/root.models.js";
import { cSequelize } from "../config/config.js";
dotenv.config();

export const connectDb = async () => {
  try {
    await cSequelize.authenticate();
    console.log("Connection has been established successfully.");
    // THIS IS ANOTHER WAY TO CREATED TABLES
    // await generateModels(cSequelize);

    // If you don't call sync() here then you have to call sync in each model file.
    //sync() maps the modles in db when the model file with sequelize instance is called in the main file somehow. For example the User model won't be created untill the route to create the user with a User model in it, is called in the main.js/index.js/app,js.server.js

    await cSequelize.sync();

    //Below methods are not recommended for production,to handle any updated or entity/schema/model updates,use Migrations.
    //force drops and recreate the table.
    // await cSequelize.sync({ force: true });
    //alter updates the current table state
    // await cSequelize.sync({ alter: true });
    console.log("DB Synced successfully");
  } catch (error) {
    console.error("Unable to connect to the database:");
  }
};

// process.env.DB_PORT,
// process.env.DB_DIALECT,
